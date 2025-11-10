"use client";

import { useState } from "react";
import {
  Box,
  TextInput,
  PasswordInput,
  Button,
  Card,
  Stack,
  Title,
  Alert,
  Text,
  Image,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { apiFetch, setAuthToken } from "../../services/api";
import { notifications } from "@mantine/notifications";
import { IconAlertCircle } from "@tabler/icons-react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";

interface LoginErrors {
  email?: string;
  password?: string;
  general?: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = (): boolean => {
    const newErrors: LoginErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Please enter a valid email address";

    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      setAuthToken(response.accessToken, response.refreshToken);

      notifications.show({
        color: "green",
        title: "Login Successful!",
        message: "Redirecting to your dashboard...",
        autoClose: 2000,
      });

      setTimeout(() => router.push("/dashboard"), 1000);
    } catch (err: unknown) {
      console.error("Login error:", err);
      const errorMessage = "Invalid email or password. Please try again.";
      
      setErrors({ general: errorMessage });
      notifications.show({
        color: "red",
        title: "Login Failed",
        message: errorMessage,
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box
        component="main"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)",
          padding: "2rem 1rem",
        }}
      >
        <Card shadow="xl" radius="lg" padding="xl" maw={420} w="100%" bg="white">
          <Stack gap="md">
            <Image src="../../../assets/MainLogo.svg" alt="CFC Logo" style={{ height: '50px', width: '150px' }} mx="auto" />
            <Title order={2} ta="center" c="green.8">
              Welcome Back!
            </Title>
            <Text ta="center" size="sm" c="dimmed" mb="sm">
              Sign in to continue to your dashboard.
            </Text>

            {errors.general && (
              <Alert icon={<IconAlertCircle size={16} />} color="red" variant="light">
                {errors.general}
              </Alert>
            )}

            <TextInput
              label="Email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => { setEmail(e.currentTarget.value); if (errors.email) setErrors(prev => ({ ...prev, email: undefined })); }}
              radius="md"
              required
              error={errors.email}
              withAsterisk
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => { setPassword(e.currentTarget.value); if (errors.password) setErrors(prev => ({ ...prev, password: undefined })); }}
              radius="md"
              required
              error={errors.password}
              withAsterisk
            />

            <Button c="green.8" radius="md" size="md" loading={loading} onClick={handleLogin} fullWidth>
              Login
            </Button>
          </Stack>
        </Card>
      </Box>
      <Footer />
    </Box>
  );
}