"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { FarmerDashboard } from "../../components/dashboard/FarmerDashboard";
import { AdminDashboard } from "../../components/dashboard/AdminDashboard";
import { OrganizationDashboard } from "../../components/dashboard/OrganizationDashboard";
import { InvestorDashboard } from "../../components/dashboard/InvestorDashboard";
import { SupplierDashboard } from "../../components/dashboard/SupplierDashboard";
import { ManufacturerDashboard } from "../../components/dashboard/ManufacturerDashboard";
import { Box, Text } from "@mantine/core";
import { apiFetch } from "../../services/api";

interface User {
  id: number;
  email: string;
  role: string;
  userId: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await apiFetch("/users/profile");
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) {
    return (
      <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Text>Loading...</Text>
      </Box>
    );
  }

  if (!user) {
    return null;
  }

  const renderDashboard = () => {
    switch (user.role.toLowerCase()) {
      case "admin":
        return <AdminDashboard user={user} />;
      case "farmer":
        return <FarmerDashboard user={user} />;
      case "organization":
        return <OrganizationDashboard user={user} />;
      case "investor":
        return <InvestorDashboard user={user} />;
      case "supplier":
        return <SupplierDashboard user={user} />;
      case "manufacturer":
        return <ManufacturerDashboard user={user} />;
      default:
        return (
          <Box p="xl">
            <Text size="lg">Welcome to CFC Dashboard</Text>
            <Text c="dimmed">Your role: {user.role}</Text>
          </Box>
        );
    }
  };

  return (
    <DashboardLayout userRole={user.role}>
      {renderDashboard()}
    </DashboardLayout>
  );
}