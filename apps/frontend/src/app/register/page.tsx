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
  Select,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { apiFetch } from "../../services/api";
import { notifications } from "@mantine/notifications";
import { IconAlertCircle } from "@tabler/icons-react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";

interface RegisterErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  role?: string;
  general?: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<RegisterErrors>({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = (): boolean => {
    const newErrors: RegisterErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Please enter a valid email address";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword) newErrors.confirmPassword = "Confirm password is required";
    else if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (!role) newErrors.role = "Role is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleRegister() {
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      setErrors({});

      await apiFetch("/auth/register", { // Assuming backend expects email, password, role
        method: "POST",
        body: JSON.stringify({ email, password, role }),
      });

      notifications.show({
        color: "green",
        title: "Registration Successful!",
        message: "You can now log in with your new account.",
        autoClose: 4000,
      });

      // Redirect directly to the login page
      router.push("/login");
    } catch (err: unknown) {
      console.error("Registration error:", err);
      let errorMessage = "An unexpected error occurred. Please try again.";
      
      // Handle specific backend errors, like "Email already registered"
      if (err instanceof Error) {
        try {
          const errorResponse = JSON.parse(err.message);
          errorMessage = errorResponse.message || err.message;
        } catch {
          errorMessage = err.message;
        }
      }
      
      setErrors({ general: errorMessage });
      notifications.show({
        color: "red",
        title: "Registration Failed",
        message: errorMessage,
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  }

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
        <Card
          shadow="xl"
          radius="lg"
          padding="xl"
          maw={420}
          w="100%"
          bg="white"
          style={{
            borderTop: "5px solid #4CAF50",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Stack gap="md">
            <Image
              src="../../../assets/MainLogo.svg"
              alt="CFC Logo"
              style={{ height: '50px', width: '150px' }}
              mx="auto"
            />
            <Title order={2} ta="center" c="green.8">
              Create an Account
            </Title>
            <Text ta="center" size="sm" c="dimmed" mb="sm">
              Join the future of farming today 🌾
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
              onChange={(e) => {
                setEmail(e.currentTarget.value);
                if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
              }}
              radius="md"
              required
              error={errors.email}
              withAsterisk
            />
            <PasswordInput
              label="Password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
                if (errors.password) setErrors(prev => ({ ...prev, password: undefined }));
              }}
              radius="md"
              required
              error={errors.password}
              withAsterisk
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.currentTarget.value);
                if (errors.confirmPassword) setErrors(prev => ({ ...prev, confirmPassword: undefined }));
              }}
              radius="md"
              required
              error={errors.confirmPassword}
              withAsterisk
            />
            <Select
              label="Role"
              placeholder="Select your role"
              data={['FARMER', 'ORGANIZATION']}
              value={role}
              onChange={setRole}
              radius="md"
              required
              error={errors.role}
              withAsterisk
            />

            <Button c="green.8" radius="md" size="md" loading={loading} onClick={handleRegister} fullWidth>
              Register
            </Button>

            <Text ta="center" size="sm" mt="sm">
              Already have an account?{" "}
              <Text
                component="span"
                color="skyBlue.6"
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/login")}
              >
                Login here
              </Text>
            </Text>
          </Stack>
        </Card>
      </Box>
      <Footer />
    </Box>
  );
}