"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  AppShell,
  Text,
  Group,
  Avatar,
  Menu,
  UnstyledButton,
  Stack,
  NavLink,
  ThemeIcon,
  Divider,
  Box,
  ActionIcon,
} from "@mantine/core";
import {
  IconTractor,
  IconLogout,
  IconUser,
  IconSettings,
  IconDashboard,
  IconChartBar,
  IconRobot,
  IconUsers,
  IconBuilding,
  IconTrendingUp,
  IconPackage,
  IconTools,
  IconShield,
  IconBell,
} from "@tabler/icons-react";
import { apiFetch } from "../../services/api";

interface User {
  id: number;
  email: string;
  role: string;
  userId: number;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: string;
}

export function DashboardLayout({ children, userRole }: DashboardLayoutProps) {
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

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.push("/");
  };

  const getRoleIcon = (role: string) => {
    switch (role.toLowerCase()) {
      case "admin":
        return <IconShield size={20} />;
      case "farmer":
        return <IconTractor size={20} />;
      case "organization":
        return <IconBuilding size={20} />;
      case "investor":
        return <IconTrendingUp size={20} />;
      case "supplier":
        return <IconPackage size={20} />;
      case "manufacturer":
        return <IconTools size={20} />;
      default:
        return <IconUser size={20} />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "admin":
        return "red";
      case "farmer":
        return "green";
      case "organization":
        return "blue";
      case "investor":
        return "orange";
      case "supplier":
        return "violet";
      case "manufacturer":
        return "teal";
      default:
        return "gray";
    }
  };

  const getNavigationItems = (role: string) => {
    const baseItems = [
      {
        icon: <IconDashboard size={20} />,
        label: "Dashboard",
        href: "/dashboard",
      },
    ];

    switch (role.toLowerCase()) {
      case "admin":
        return [
          ...baseItems,
          {
            icon: <IconUsers size={20} />,
            label: "User Management",
            href: "/dashboard/admin/users",
          },
          {
            icon: <IconChartBar size={20} />,
            label: "Analytics",
            href: "/dashboard/admin/analytics",
          },
          {
            icon: <IconSettings size={20} />,
            label: "System Settings",
            href: "/dashboard/admin/settings",
          },
        ];
      case "farmer":
        return [
          ...baseItems,
          {
            icon: <IconTractor size={20} />,
            label: "My Farm",
            href: "/dashboard/farmer/farm",
          },
          {
            icon: <IconRobot size={20} />,
            label: "Robots",
            href: "/dashboard/farmer/robots",
          },
          {
            icon: <IconChartBar size={20} />,
            label: "Crop Analytics",
            href: "/dashboard/farmer/analytics",
          },
        ];
      case "organization":
        return [
          ...baseItems,
          {
            icon: <IconUsers size={20} />,
            label: "Member Farmers",
            href: "/dashboard/organization/farmers",
          },
          {
            icon: <IconChartBar size={20} />,
            label: "Reports",
            href: "/dashboard/organization/reports",
          },
        ];
      case "investor":
        return [
          ...baseItems,
          {
            icon: <IconTrendingUp size={20} />,
            label: "Portfolio",
            href: "/dashboard/investor/portfolio",
          },
          {
            icon: <IconChartBar size={20} />,
            label: "Market Analysis",
            href: "/dashboard/investor/market",
          },
        ];
      case "supplier":
        return [
          ...baseItems,
          {
            icon: <IconPackage size={20} />,
            label: "Inventory",
            href: "/dashboard/supplier/inventory",
          },
          {
            icon: <IconUsers size={20} />,
            label: "Customers",
            href: "/dashboard/supplier/customers",
          },
        ];
      case "manufacturer":
        return [
          ...baseItems,
          {
            icon: <IconTools size={20} />,
            label: "Products",
            href: "/dashboard/manufacturer/products",
          },
          {
            icon: <IconRobot size={20} />,
            label: "Equipment",
            href: "/dashboard/manufacturer/equipment",
          },
        ];
      default:
        return baseItems;
    }
  };

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

  const navItems = getNavigationItems(userRole);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 280,
        breakpoint: "sm",
        collapsed: { mobile: true },
      }}
      padding="md"
    >
      <AppShell.Header
        style={{
          background: "linear-gradient(135deg, #4CAF50, #388E3C)",
          border: "none",
        }}
      >
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <ActionIcon
              variant="transparent"
              color="white"
              size="lg"
              onClick={() => router.push("/")}
              style={{ cursor: "pointer" }}
            >
              <IconTractor size={24} />
            </ActionIcon>
            <div>
              <Text c="white" fw={600} size="lg">
                CFC Dashboard
              </Text>
              <Text c="white" size="xs" style={{ opacity: 0.8 }}>
                Ceres Field Check
              </Text>
            </div>
          </Group>

          <Group gap="sm">
            <ActionIcon variant="transparent" color="white" size="lg">
              <IconBell size={20} />
            </ActionIcon>

            <Menu shadow="md" width={200}>
              <Menu.Target>
                <UnstyledButton>
                  <Group gap="sm">
                    <Avatar
                      color={getRoleColor(userRole)}
                      radius="xl"
                      size="md"
                    >
                      {getRoleIcon(userRole)}
                    </Avatar>
                    <div style={{ textAlign: "left" }}>
                      <Text c="white" size="sm" fw={500}>
                        {user.email}
                      </Text>
                      <Text c="white" size="xs" style={{ opacity: 0.8 }}>
                        {userRole}
                      </Text>
                    </div>
                  </Group>
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>Account</Menu.Label>
                <Menu.Item leftSection={<IconUser size={16} />}>
                  Profile
                </Menu.Item>
                <Menu.Item leftSection={<IconSettings size={16} />}>
                  Settings
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                  leftSection={<IconLogout size={16} />}
                  onClick={handleLogout}
                  color="red"
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar
        style={{
          background: "linear-gradient(180deg, #f8f9fa, #ffffff)",
          border: "none",
        }}
      >
        <Stack gap="xs" p="md">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              label={item.label}
              leftSection={
                <ThemeIcon
                  size="sm"
                  variant="subtle"
                  color={getRoleColor(userRole)}
                >
                  {item.icon}
                </ThemeIcon>
              }
              style={{
                borderRadius: "8px",
                fontWeight: 500,
              }}
            />
          ))}

          <Divider my="sm" />

          <NavLink
            href="/"
            label="Back to Home"
            leftSection={
              <ThemeIcon size="sm" variant="subtle" color="gray">
                <IconTractor size={16} />
              </ThemeIcon>
            }
            style={{
              borderRadius: "8px",
              fontWeight: 500,
            }}
          />
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
