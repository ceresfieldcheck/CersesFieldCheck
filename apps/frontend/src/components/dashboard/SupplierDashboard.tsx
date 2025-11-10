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
  IconPackage,
  IconUsers,
  IconTrendingUp,
  IconTruck,
  IconCheck,
  IconAlertTriangle,
} from "@tabler/icons-react";

interface SupplierDashboardProps {
  user: {
    id: number;
    email: string;
    role: string;
    userId: number;
  };
}

export function SupplierDashboard({ user }: SupplierDashboardProps) {
  // Mock data - replace with real API calls
  const supplierStats = {
    totalProducts: 45,
    activeOrders: 28,
    totalCustomers: 150,
    revenue: 85000,
    deliveryRate: 94,
    inventoryValue: 125000,
  };

  const orders = [
    { id: 1, customer: "Green Valley Farms", product: "Seeds - Wheat", quantity: 100, status: "Shipped", delivery: "2 days" },
    { id: 2, customer: "Sunrise Agriculture", product: "Fertilizer - NPK", quantity: 50, status: "Processing", delivery: "1 day" },
    { id: 3, customer: "Organic Harvest Co.", product: "Pesticides", quantity: 25, status: "Delivered", delivery: "Completed" },
    { id: 4, customer: "Tech Farm Solutions", product: "Equipment Parts", quantity: 15, status: "Pending", delivery: "3 days" },
  ];

  const inventory = [
    { product: "Seeds - Wheat", stock: 500, minStock: 100, status: "Good" },
    { product: "Fertilizer - NPK", stock: 200, minStock: 150, status: "Low" },
    { product: "Pesticides", stock: 75, minStock: 50, status: "Good" },
    { product: "Equipment Parts", stock: 30, minStock: 25, status: "Critical" },
  ];

  return (
    <Container size="xl">
      <Stack gap="xl">
        {/* Welcome Section */}
        <Card shadow="sm" padding="xl" radius="lg" style={{ background: "linear-gradient(135deg, #f3e5f5, #e8eaf6)" }}>
          <Group justify="space-between" align="flex-start">
            <Stack gap="sm">
              <Title order={2} c="violet.8">
                Supplier Dashboard 📦
              </Title>
              <Text c="dimmed" size="lg">
                Manage your inventory, orders, and customer relationships
              </Text>
            </Stack>
            <Button color="violet" size="sm">
              Add New Product
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
                <Text size="2rem" fw={700} c="violet.7">
                  {supplierStats.totalProducts}
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "violet.4", to: "violet.6" }}>
                <IconPackage size={30} />
              </ThemeIcon>
            </Group>
          </Card>

          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Active Orders
                </Text>
                <Text size="2rem" fw={700} c="blue.7">
                  {supplierStats.activeOrders}
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "blue.4", to: "blue.6" }}>
                <IconTruck size={30} />
              </ThemeIcon>
            </Group>
          </Card>

          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Total Customers
                </Text>
                <Text size="2rem" fw={700} c="green.7">
                  {supplierStats.totalCustomers}
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "green.4", to: "green.6" }}>
                <IconUsers size={30} />
              </ThemeIcon>
            </Group>
          </Card>

          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Monthly Revenue
                </Text>
                <Text size="2rem" fw={700} c="orange.7">
                  ${supplierStats.revenue.toLocaleString()}
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "orange.4", to: "orange.6" }}>
                <IconTrendingUp size={30} />
              </ThemeIcon>
            </Group>
          </Card>
        </SimpleGrid>

        <Grid>
          {/* Orders Management */}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Card shadow="sm" padding="xl" radius="lg" h="100%">
              <Stack gap="lg">
                <Title order={3} c="violet.8">
                  Recent Orders
                </Title>

                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Customer</Table.Th>
                      <Table.Th>Product</Table.Th>
                      <Table.Th>Quantity</Table.Th>
                      <Table.Th>Status</Table.Th>
                      <Table.Th>Delivery</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {orders.map((order) => (
                      <Table.Tr key={order.id}>
                        <Table.Td>{order.customer}</Table.Td>
                        <Table.Td>{order.product}</Table.Td>
                        <Table.Td>{order.quantity}</Table.Td>
                        <Table.Td>
                          <Badge
                            color={
                              order.status === "Delivered" ? "green" :
                              order.status === "Shipped" ? "blue" :
                              order.status === "Processing" ? "orange" : "gray"
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

          {/* Inventory & Quick Actions */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="lg">
              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={4} c="violet.8">
                    Inventory Status
                  </Title>
                  <Stack gap="sm">
                    {inventory.map((item) => (
                      <Group key={item.product} justify="space-between" p="sm" style={{ borderRadius: "8px", backgroundColor: "#f8f9fa" }}>
                        <div>
                          <Text size="sm" fw={500}>{item.product}</Text>
                          <Text size="xs" c="dimmed">Stock: {item.stock} units</Text>
                        </div>
                        <Badge
                          size="sm"
                          color={
                            item.status === "Good" ? "green" :
                            item.status === "Low" ? "orange" : "red"
                          }
                          variant="light"
                        >
                          {item.status}
                        </Badge>
                      </Group>
                    ))}
                  </Stack>
                </Stack>
              </Card>

              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={4} c="violet.8">
                    Quick Actions
                  </Title>
                  <Stack gap="sm">
                    <Button variant="outline" color="violet" fullWidth>
                      Process Orders
                    </Button>
                    <Button variant="outline" color="blue" fullWidth>
                      Update Inventory
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

        {/* Delivery Performance */}
        <Card shadow="sm" padding="xl" radius="lg">
          <Stack gap="lg">
            <Title order={3} c="violet.8">
              Delivery Performance
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
              <Card shadow="sm" padding="lg" radius="lg" style={{ background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)" }}>
                <Stack gap="sm" align="center">
                  <ThemeIcon size={50} radius="xl" variant="gradient" gradient={{ from: "green.4", to: "green.6" }}>
                    <IconCheck size={25} />
                  </ThemeIcon>
                  <Text size="2rem" fw={700} c="green.7">
                    {supplierStats.deliveryRate}%
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    On-Time Delivery Rate
                  </Text>
                </Stack>
              </Card>

              <Card shadow="sm" padding="lg" radius="lg" style={{ background: "linear-gradient(135deg, #e3f2fd, #f3e5f5)" }}>
                <Stack gap="sm" align="center">
                  <ThemeIcon size={50} radius="xl" variant="gradient" gradient={{ from: "blue.4", to: "blue.6" }}>
                    <IconPackage size={25} />
                  </ThemeIcon>
                  <Text size="2rem" fw={700} c="blue.7">
                    ${(supplierStats.inventoryValue / 1000).toFixed(0)}K
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    Inventory Value
                  </Text>
                </Stack>
              </Card>

              <Card shadow="sm" padding="lg" radius="lg" style={{ background: "linear-gradient(135deg, #fff3e0, #fce4ec)" }}>
                <Stack gap="sm" align="center">
                  <ThemeIcon size={50} radius="xl" variant="gradient" gradient={{ from: "orange.4", to: "orange.6" }}>
                    <IconTrendingUp size={25} />
                  </ThemeIcon>
                  <Text size="2rem" fw={700} c="orange.7">
                    +12%
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    Monthly Growth
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
