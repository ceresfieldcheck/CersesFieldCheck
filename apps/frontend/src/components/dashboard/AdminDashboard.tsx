import {
  Container,
  Grid,
  Card,
  Title,
  Text,
  Group,
  Stack,
  ThemeIcon,
  Badge,
  Button,
  SimpleGrid,
  Table,
} from "@mantine/core";
import {
  IconUsers,
  IconTractor,
  IconBuilding,
  IconTrendingUp,
  IconShield,
  IconAlertTriangle,
  IconCheck,
  IconRobot,
} from "@tabler/icons-react";

interface DashboardProps {
  user: {
    email: string;
  };
}

export function AdminDashboard({ user }: DashboardProps) {
  // Mock data - replace with real API calls
  const systemStats = {
    totalUsers: 1250,
    activeUsers: 1180,
    totalFarms: 890,
    activeRobots: 245,
    systemHealth: 98,
    dataProcessed: 15.7, // TB
  };

  const userStats = {
    farmers: 850,
    organizations: 120,
    investors: 45,
    suppliers: 180,
    manufacturers: 55,
  };

  const recentActivities = [
    { id: 1, action: "New farmer registration", user: "john.doe@email.com", time: "5 minutes ago", status: "pending" },
    { id: 2, action: "Robot deployment completed", user: "farm_robot_001", time: "15 minutes ago", status: "completed" },
    { id: 3, action: "System backup completed", user: "system", time: "1 hour ago", status: "completed" },
    { id: 4, action: "Data sync error detected", user: "sync_service", time: "2 hours ago", status: "error" },
  ];

  const alerts = [
    { id: 1, type: "warning", message: "High CPU usage on server-03", time: "10 minutes ago" },
    { id: 2, type: "info", message: "Database maintenance scheduled for tonight", time: "1 hour ago" },
    { id: 3, type: "success", message: "All systems operational", time: "2 hours ago" },
  ];

  return (
    <Container size="xl">
      <Stack gap="xl">
        {/* Welcome Section */}
        <Card shadow="sm" padding="xl" radius="lg" style={{ background: "linear-gradient(135deg, #ffebee, #fce4ec)" }}>
          <Group justify="space-between" align="flex-start">
            <Stack gap="sm">
              <Title order={2} c="red.8">
                Admin Dashboard 🛡️
              </Title>
              <Text c="dimmed" size="lg">
                Welcome, {user.email}. System overview and management console.
              </Text>
            </Stack>
            <Button color="red" size="sm">
              System Settings
            </Button>
          </Group>
        </Card>

        {/* System Metrics */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Total Users
                </Text>
                <Text size="2rem" fw={700} c="blue.7">
                  {systemStats.totalUsers.toLocaleString()}
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "blue.4", to: "blue.6" }}>
                <IconUsers size={30} />
              </ThemeIcon>
            </Group>
          </Card>

          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Active Farms
                </Text>
                <Text size="2rem" fw={700} c="green.7">
                  {systemStats.totalFarms}
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "green.4", to: "green.6" }}>
                <IconTractor size={30} />
              </ThemeIcon>
            </Group>
          </Card>

          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Active Robots
                </Text>
                <Text size="2rem" fw={700} c="violet.7">
                  {systemStats.activeRobots}
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "violet.4", to: "violet.6" }}>
                <IconRobot size={30} />
              </ThemeIcon>
            </Group>
          </Card>

          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  System Health
                </Text>
                <Text size="2rem" fw={700} c="green.7">
                  {systemStats.systemHealth}%
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "green.4", to: "green.6" }}>
                <IconShield size={30} />
              </ThemeIcon>
            </Group>
          </Card>
        </SimpleGrid>

        <Grid>
          {/* User Distribution */}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Card shadow="sm" padding="xl" radius="lg" h="100%">
              <Stack gap="lg">
                <Title order={3} c="red.8">
                  User Distribution
                </Title>

                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>User Type</Table.Th>
                      <Table.Th>Count</Table.Th>
                      <Table.Th>Percentage</Table.Th>
                      <Table.Th>Status</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td>
                        <Group gap="sm">
                          <ThemeIcon size="sm" color="green" radius="xl">
                            <IconTractor size={16} />
                          </ThemeIcon>
                          Farmers
                        </Group>
                      </Table.Td>
                      <Table.Td>{userStats.farmers}</Table.Td>
                      <Table.Td>68%</Table.Td>
                      <Table.Td><Badge color="green" variant="light">Active</Badge></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>
                        <Group gap="sm">
                          <ThemeIcon size="sm" color="blue" radius="xl">
                            <IconBuilding size={16} />
                          </ThemeIcon>
                          Organizations
                        </Group>
                      </Table.Td>
                      <Table.Td>{userStats.organizations}</Table.Td>
                      <Table.Td>10%</Table.Td>
                      <Table.Td><Badge color="green" variant="light">Active</Badge></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>
                        <Group gap="sm">
                          <ThemeIcon size="sm" color="orange" radius="xl">
                            <IconTrendingUp size={16} />
                          </ThemeIcon>
                          Investors
                        </Group>
                      </Table.Td>
                      <Table.Td>{userStats.investors}</Table.Td>
                      <Table.Td>4%</Table.Td>
                      <Table.Td><Badge color="green" variant="light">Active</Badge></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>
                        <Group gap="sm">
                          <ThemeIcon size="sm" color="violet" radius="xl">
                            <IconShield size={16} />
                          </ThemeIcon>
                          Suppliers
                        </Group>
                      </Table.Td>
                      <Table.Td>{userStats.suppliers}</Table.Td>
                      <Table.Td>14%</Table.Td>
                      <Table.Td><Badge color="green" variant="light">Active</Badge></Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>
                        <Group gap="sm">
                          <ThemeIcon size="sm" color="teal" radius="xl">
                            <IconRobot size={16} />
                          </ThemeIcon>
                          Manufacturers
                        </Group>
                      </Table.Td>
                      <Table.Td>{userStats.manufacturers}</Table.Td>
                      <Table.Td>4%</Table.Td>
                      <Table.Td><Badge color="green" variant="light">Active</Badge></Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
              </Stack>
            </Card>
          </Grid.Col>

          {/* System Alerts */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" padding="lg" radius="lg">
              <Stack gap="md">
                <Title order={4} c="red.8">
                  System Alerts
                </Title>
                <Stack gap="sm">
                  {alerts.map((alert) => (
                    <Group key={alert.id} justify="space-between" p="sm" style={{ borderRadius: "8px", backgroundColor: "#f8f9fa" }}>
                      <Group gap="sm">
                        <ThemeIcon
                          size="sm"
                          radius="xl"
                          color={alert.type === "warning" ? "orange" : alert.type === "error" ? "red" : "green"}
                        >
                          {alert.type === "warning" ? <IconAlertTriangle size={12} /> : <IconCheck size={12} />}
                        </ThemeIcon>
                        <Text size="sm">{alert.message}</Text>
                      </Group>
                      <Text size="xs" c="dimmed">{alert.time}</Text>
                    </Group>
                  ))}
                </Stack>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Recent System Activities */}
        <Card shadow="sm" padding="xl" radius="lg">
          <Stack gap="lg">
            <Title order={3} c="red.8">
              Recent System Activities
            </Title>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Action</Table.Th>
                  <Table.Th>User/Service</Table.Th>
                  <Table.Th>Time</Table.Th>
                  <Table.Th>Status</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {recentActivities.map((activity) => (
                  <Table.Tr key={activity.id}>
                    <Table.Td>{activity.action}</Table.Td>
                    <Table.Td>{activity.user}</Table.Td>
                    <Table.Td>{activity.time}</Table.Td>
                    <Table.Td>
                      <Badge
                        color={activity.status === "completed" ? "green" : activity.status === "error" ? "red" : "orange"}
                        variant="light"
                      >
                        {activity.status}
                      </Badge>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
