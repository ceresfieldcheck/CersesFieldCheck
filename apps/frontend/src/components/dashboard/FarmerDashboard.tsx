import {
  Container,
  Grid,
  Card,
  Title,
  Text,
  Group,
  Stack,
  ThemeIcon,
  Progress,
  Badge,
  Button,
  SimpleGrid,
} from "@mantine/core";
import {
  IconTractor,
  IconRobot,
  IconLeaf,
  IconSun,
  IconTrendingUp,
  IconAlertTriangle,
  IconCheck,
} from "@tabler/icons-react";

interface FarmerDashboardProps {
  user: {
    id: number;
    email: string;
    role: string;
    userId: number;
  };
}

export function FarmerDashboard({ user }: FarmerDashboardProps) {
  // Mock data - replace with real API calls
  const farmStats = {
    totalAcres: 45,
    plantedAcres: 38,
    cropHealth: 85,
    waterUsage: 72,
    expectedYield: 95,
    robotsActive: 3,
  };

  const recentActivities = [
    { id: 1, action: "Robot #3 completed field scan", time: "2 hours ago", status: "completed" },
    { id: 2, action: "Irrigation system activated", time: "4 hours ago", status: "completed" },
    { id: 3, action: "Crop health alert: Field B", time: "6 hours ago", status: "warning" },
    { id: 4, action: "Soil analysis completed", time: "1 day ago", status: "completed" },
  ];

  const weatherData = {
    temperature: 28,
    humidity: 65,
    rainfall: 15,
    forecast: "Partly cloudy",
  };

  return (
    <Container size="xl">
      <Stack gap="xl">
        {/* Welcome Section */}
        <Card shadow="sm" padding="xl" radius="lg" style={{ background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)" }}>
          <Group justify="space-between" align="flex-start">
            <Stack gap="sm">
              <Title order={2} c="green.8">
                Welcome back, Farmer #{user.userId}! 🌾
              </Title>
              <Text c="dimmed" size="lg">
                Here&apos;s what&apos;s happening on your farm today
              </Text>
            </Stack>
            <Button color="green" size="sm">
              View Full Report
            </Button>
          </Group>
        </Card>

        {/* Key Metrics */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Total Acres
                </Text>
                <Text size="2rem" fw={700} c="green.7">
                  {farmStats.totalAcres}
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
                  Crop Health
                </Text>
                <Text size="2rem" fw={700} c="green.7">
                  {farmStats.cropHealth}%
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "green.4", to: "green.6" }}>
                <IconLeaf size={30} />
              </ThemeIcon>
            </Group>
          </Card>

          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Active Robots
                </Text>
                <Text size="2rem" fw={700} c="blue.7">
                  {farmStats.robotsActive}
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "blue.4", to: "blue.6" }}>
                <IconRobot size={30} />
              </ThemeIcon>
            </Group>
          </Card>

          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Expected Yield
                </Text>
                <Text size="2rem" fw={700} c="orange.7">
                  {farmStats.expectedYield}%
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "orange.4", to: "orange.6" }}>
                <IconTrendingUp size={30} />
              </ThemeIcon>
            </Group>
          </Card>
        </SimpleGrid>

        <Grid>
          {/* Farm Overview */}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Card shadow="sm" padding="xl" radius="lg" h="100%">
              <Stack gap="lg">
                <Title order={3} c="green.8">
                  Farm Overview
                </Title>

                <Stack gap="md">
                  <div>
                    <Group justify="space-between" mb="xs">
                      <Text size="sm" fw={500}>Planting Progress</Text>
                      <Text size="sm" c="dimmed">{farmStats.plantedAcres}/{farmStats.totalAcres} acres</Text>
                    </Group>
                    <Progress
                      value={(farmStats.plantedAcres / farmStats.totalAcres) * 100}
                      color="green"
                      size="lg"
                      radius="md"
                    />
                  </div>

                  <div>
                    <Group justify="space-between" mb="xs">
                      <Text size="sm" fw={500}>Crop Health</Text>
                      <Text size="sm" c="dimmed">{farmStats.cropHealth}%</Text>
                    </Group>
                    <Progress
                      value={farmStats.cropHealth}
                      color="green"
                      size="lg"
                      radius="md"
                    />
                  </div>

                  <div>
                    <Group justify="space-between" mb="xs">
                      <Text size="sm" fw={500}>Water Usage Efficiency</Text>
                      <Text size="sm" c="dimmed">{farmStats.waterUsage}%</Text>
                    </Group>
                    <Progress
                      value={farmStats.waterUsage}
                      color="blue"
                      size="lg"
                      radius="md"
                    />
                  </div>
                </Stack>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Weather & Quick Actions */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="lg">
              {/* Weather Card */}
              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={4} c="green.8">
                    Weather Today
                  </Title>
                  <Group justify="space-between">
                    <Stack gap="xs">
                      <Text size="2rem" fw={700} c="blue.7">
                        {weatherData.temperature}°C
                      </Text>
                      <Text size="sm" c="dimmed">
                        {weatherData.forecast}
                      </Text>
                    </Stack>
                    <ThemeIcon size={50} radius="xl" variant="gradient" gradient={{ from: "blue.4", to: "blue.6" }}>
                      <IconSun size={25} />
                    </ThemeIcon>
                  </Group>
                  <Group justify="space-between">
                    <Text size="sm">Humidity: {weatherData.humidity}%</Text>
                    <Text size="sm">Rainfall: {weatherData.rainfall}mm</Text>
                  </Group>
                </Stack>
              </Card>

              {/* Quick Actions */}
              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={4} c="green.8">
                    Quick Actions
                  </Title>
                  <Stack gap="sm">
                    <Button variant="outline" color="green" fullWidth>
                      Deploy Robot
                    </Button>
                    <Button variant="outline" color="blue" fullWidth>
                      Check Soil Analysis
                    </Button>
                    <Button variant="outline" color="orange" fullWidth>
                      View Crop Reports
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Recent Activities */}
        <Card shadow="sm" padding="xl" radius="lg">
          <Stack gap="lg">
            <Title order={3} c="green.8">
              Recent Activities
            </Title>
            <Stack gap="sm">
              {recentActivities.map((activity) => (
                <Group key={activity.id} justify="space-between" p="sm" style={{ borderRadius: "8px", backgroundColor: "#f8f9fa" }}>
                  <Group gap="sm">
                    <ThemeIcon
                      size="sm"
                      radius="xl"
                      color={activity.status === "completed" ? "green" : "orange"}
                    >
                      {activity.status === "completed" ? <IconCheck size={12} /> : <IconAlertTriangle size={12} />}
                    </ThemeIcon>
                    <Text size="sm">{activity.action}</Text>
                  </Group>
                  <Badge
                    size="sm"
                    color={activity.status === "completed" ? "green" : "orange"}
                    variant="light"
                  >
                    {activity.time}
                  </Badge>
                </Group>
              ))}
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
