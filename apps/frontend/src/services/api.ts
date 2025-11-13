/**
 * Saves authentication tokens to localStorage.
 * @param accessToken The JWT access token.
 * @param refreshToken The JWT refresh token.
 */
export function setAuthToken(accessToken: string, refreshToken?: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem("accessToken", accessToken);
    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    }
  }
}

export async function apiFetch(path: string, options: RequestInit = {}) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const accessToken = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  const refreshToken = typeof window !== "undefined" ? localStorage.getItem("refreshToken") : null;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };

  let response = await fetch(`${apiUrl}${path}`, { ...options, headers });

  // 🔁 Handle token expiration (401)
  if (response.status === 401 && refreshToken) {
    const refreshResponse = await fetch(`${apiUrl}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (refreshResponse.ok) {
      const data = await refreshResponse.json();
      localStorage.setItem("accessToken", data.accessToken);

      // retry original request
      const retryHeaders = {
        ...headers,
        Authorization: `Bearer ${data.accessToken}`,
      };
      response = await fetch(`${apiUrl}${path}`, { ...options, headers: retryHeaders });
    } else {
      console.warn("Session expired — please log in again.");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.href = "/login";
    }
  }

  if (!response.ok) {
    let errorMessage = `API error: ${response.status}`;
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      // If response is not JSON, use the status text
      errorMessage = response.statusText || errorMessage;
    }
    throw new Error(errorMessage);
  }
  return response.json();
}
