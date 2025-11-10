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
  Table,
} from "@mantine/core";
import {
  IconTools,
  IconRobot,
  IconPackage,
  IconTrendingUp,
  IconSettings,
  IconCheck,
  IconAlertTriangle,
} from "@tabler/icons-react";

interface ManufacturerDashboardProps {
  user: {
    id: number;
    email: string;
    role: string;
    userId: number;
  };
}

export function ManufacturerDashboard({ user }: ManufacturerDashboardProps) {
  // Mock data - replace with real API calls
  const manufacturerStats = {
    totalProducts: 25,
    activeProduction: 8,
    totalOrders: 45,
    revenue: 150000,
    productionEfficiency: 87,
    qualityRating: 94,
  };

  const productionOrders = [
    { id: 1, product: "Agricultural Robot - AR-200", quantity: 5, status: "In Production", progress: 75, delivery: "2 weeks" },
    { id: 2, product: "Smart Irrigation System", quantity: 10, status: "Testing", progress: 90, delivery: "1 week" },
    { id: 3, product: "Soil Analysis Kit", quantity: 20, status: "Completed", progress: 100, delivery: "Ready" },
    { id: 4, product: "Crop Monitoring Drone", quantity: 3, status: "Planning", progress: 25, delivery: "4 weeks" },
  ];

  const equipmentStatus = [
    { name: "Assembly Line 1", status: "Active", efficiency: 92, utilization: "85%" },
    { name: "Quality Control Station", status: "Active", efficiency: 88, utilization: "90%" },
    { name: "Testing Lab", status: "Active", efficiency: 95, utilization: "75%" },
    { name: "Packaging Unit", status: "Maintenance", efficiency: 0, utilization: "0%" },
  ];

  return (
    <Container size="xl">
      <Stack gap="xl">
        {/* Welcome Section */}
        <Card shadow="sm" padding="xl" radius="lg" style={{ background: "linear-gradient(135deg, #e0f2f1, #e8f5e8)" }}>
          <Group justify="space-between" align="flex-start">
            <Stack gap="sm">
              <Title order={2} c="teal.8">
                Manufacturer Dashboard 🔧
              </Title>
              <Text c="dimmed" size="lg">
                Manage your production, equipment, and manufacturing operations
              </Text>
            </Stack>
            <Button color="teal" size="sm">
              New Production Order
            </Button>
          </Group>
        </Card>

        {/* Key Metrics */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Total Products
                </Text>
                <Text size="2rem" fw={700} c="teal.7">
                  {manufacturerStats.totalProducts}
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "teal.4", to: "teal.6" }}>
                <IconTools size={30} />
              </ThemeIcon>
            </Group>
          </Card>

          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Active Production
                </Text>
                <Text size="2rem" fw={700} c="blue.7">
                  {manufacturerStats.activeProduction}
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
                  Production Efficiency
                </Text>
                <Text size="2rem" fw={700} c="green.7">
                  {manufacturerStats.productionEfficiency}%
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "green.4", to: "green.6" }}>
                <IconSettings size={30} />
              </ThemeIcon>
            </Group>
          </Card>

          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Quality Rating
                </Text>
                <Text size="2rem" fw={700} c="orange.7">
                  {manufacturerStats.qualityRating}%
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "orange.4", to: "orange.6" }}>
                <IconCheck size={30} />
              </ThemeIcon>
            </Group>
          </Card>
        </SimpleGrid>

        <Grid>
          {/* Production Orders */}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Card shadow="sm" padding="xl" radius="lg" h="100%">
              <Stack gap="lg">
                <Title order={3} c="teal.8">
                  Production Orders
                </Title>

                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Product</Table.Th>
                      <Table.Th>Quantity</Table.Th>
                      <Table.Th>Progress</Table.Th>
                      <Table.Th>Status</Table.Th>
                      <Table.Th>Delivery</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {productionOrders.map((order) => (
                      <Table.Tr key={order.id}>
                        <Table.Td>{order.product}</Table.Td>
                        <Table.Td>{order.quantity}</Table.Td>
                        <Table.Td>
                          <Progress value={order.progress} color="teal" size="sm" />
                          <Text size="xs" c="dimmed" mt="xs">{order.progress}%</Text>
                        </Table.Td>
                        <Table.Td>
                          <Badge
                            color={
                              order.status === "Completed" ? "green" :
                              order.status === "In Production" ? "blue" :
                              order.status === "Testing" ? "orange" : "gray"
                            }
                            variant="light"
                          >
                            {order.status}
                          </Badge>
                        </Table.Td>
                        <Table.Td>{order.delivery}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Equipment Status & Quick Actions */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="lg">
              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={4} c="teal.8">
                    Equipment Status
                  </Title>
                  <Stack gap="sm">
                    {equipmentStatus.map((equipment) => (
                      <Group key={equipment.name} justify="space-between" p="sm" style={{ borderRadius: "8px", backgroundColor: "#f8f9fa" }}>
                        <div>
                          <Text size="sm" fw={500}>{equipment.name}</Text>
                          <Text size="xs" c="dimmed">Efficiency: {equipment.efficiency}%</Text>
                        </div>
                        <Badge
                          size="sm"
                          color={
                            equipment.status === "Active" ? "green" : "red"
                          }
                          variant="light"
                        >
                          {equipment.status}
                        </Badge>
                      </Group>
                    ))}
                  </Stack>
                </Stack>
              </Card>

              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={4} c="teal.8">
                    Quick Actions
                  </Title>
                  <Stack gap="sm">
                    <Button variant="outline" color="teal" fullWidth>
                      Schedule Production
                    </Button>
                    <Button variant="outline" color="blue" fullWidth>
                      Quality Control
                    </Button>
                    <Button variant="outline" color="green" fullWidth>
                      Generate Reports
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Performance Metrics */}
        <Card shadow="sm" padding="xl" radius="lg">
          <Stack gap="lg">
            <Title order={3} c="teal.8">
              Performance Metrics
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
              <Card shadow="sm" padding="lg" radius="lg" style={{ background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)" }}>
                <Stack gap="sm" align="center">
                  <ThemeIcon size={50} radius="xl" variant="gradient" gradient={{ from: "green.4", to: "green.6" }}>
                    <IconSettings size={25} />
                  </ThemeIcon>
                  <Text size="2rem" fw={700} c="green.7">
                    {manufacturerStats.productionEfficiency}%
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    Production Efficiency
                  </Text>
                </Stack>
              </Card>

              <Card shadow="sm" padding="lg" radius="lg" style={{ background: "linear-gradient(135deg, #e3f2fd, #f3e5f5)" }}>
                <Stack gap="sm" align="center">
                  <ThemeIcon size={50} radius="xl" variant="gradient" gradient={{ from: "blue.4", to: "blue.6" }}>
                    <IconCheck size={25} />
                  </ThemeIcon>
                  <Text size="2rem" fw={700} c="blue.7">
                    {manufacturerStats.qualityRating}%
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    Quality Rating
                  </Text>
                </Stack>
              </Card>

              <Card shadow="sm" padding="lg" radius="lg" style={{ background: "linear-gradient(135deg, #fff3e0, #fce4ec)" }}>
                <Stack gap="sm" align="center">
                  <ThemeIcon size={50} radius="xl" variant="gradient" gradient={{ from: "orange.4", to: "orange.6" }}>
                    <IconTrendingUp size={25} />
                  </ThemeIcon>
                  <Text size="2rem" fw={700} c="orange.7">
                    ${(manufacturerStats.revenue / 1000).toFixed(0)}K
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    Monthly Revenue
                  </Text>
                </Stack>
              </Card>
            </SimpleGrid>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
