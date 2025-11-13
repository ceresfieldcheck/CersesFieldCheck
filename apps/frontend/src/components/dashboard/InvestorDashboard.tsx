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
  IconTrendingUp,
  IconTractor,
  IconBuilding,
  IconCurrencyDollar,
  IconTarget,
} from "@tabler/icons-react";

interface DashboardProps {
  user: {
    email: string;
  };
}

export function InvestorDashboard({ user }: DashboardProps) { 
  // Mock data - replace with real API calls
  const portfolioStats = {
    totalInvestment: 2500000,
    currentValue: 2875000,
    totalReturn: 15.0,
    activeInvestments: 12,
    farmersSupported: 150,
    acresCovered: 2500,
  };

  const investments = [
    { id: 1, farm: "Green Valley Farms", amount: 150000, return: 18.5, status: "Active", acres: 200 },
    { id: 2, farm: "Sunrise Agriculture", amount: 200000, return: 12.3, status: "Active", acres: 300 },
    { id: 3, farm: "Organic Harvest Co.", amount: 100000, return: 22.1, status: "Active", acres: 150 },
    { id: 4, farm: "Tech Farm Solutions", amount: 300000, return: 8.7, status: "Active", acres: 400 },
  ];

  const marketTrends = [
    { metric: "Agricultural GDP Growth", value: "4.2%", trend: "up" },
    { metric: "Crop Yield Index", value: "115.3", trend: "up" },
    { metric: "Farm Technology Adoption", value: "68%", trend: "up" },
    { metric: "Sustainable Farming Practices", value: "45%", trend: "up" },
  ];

  return (
    <Container size="xl">
      <Stack gap="xl">
        {/* Welcome Section */}
        <Card shadow="sm" padding="xl" radius="lg" style={{ background: "linear-gradient(135deg, #fff3e0, #fce4ec)" }}>
          <Group justify="space-between" align="flex-start">
            <Stack gap="sm">
              <Title order={2} c="orange.8">
                Investor Dashboard 📈
              </Title>
              <Text c="dimmed" size="lg">
                Welcome, {user.email}. Track your investments and portfolio performance.
              </Text>
            </Stack>
            <Button color="orange" size="sm">
              New Investment
            </Button>
          </Group>
        </Card>

        {/* Portfolio Metrics */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Total Investment
                </Text>
                <Text size="2rem" fw={700} c="orange.7">
                  ${(portfolioStats.totalInvestment / 1000000).toFixed(1)}M
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "orange.4", to: "orange.6" }}>
                <IconCurrencyDollar size={30} />
              </ThemeIcon>
            </Group>
          </Card>

          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Current Value
                </Text>
                <Text size="2rem" fw={700} c="green.7">
                  ${(portfolioStats.currentValue / 1000000).toFixed(1)}M
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "green.4", to: "green.6" }}>
                <IconTrendingUp size={30} />
              </ThemeIcon>
            </Group>
          </Card>

          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Total Return
                </Text>
                <Text size="2rem" fw={700} c="green.7">
                  +{portfolioStats.totalReturn}%
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "green.4", to: "green.6" }}>
                <IconTarget size={30} />
              </ThemeIcon>
            </Group>
          </Card>

          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Active Investments
                </Text>
                <Text size="2rem" fw={700} c="blue.7">
                  {portfolioStats.activeInvestments}
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "blue.4", to: "blue.6" }}>
                <IconBuilding size={30} />
              </ThemeIcon>
            </Group>
          </Card>
        </SimpleGrid>

        <Grid>
          {/* Investment Portfolio */}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Card shadow="sm" padding="xl" radius="lg" h="100%">
              <Stack gap="lg">
                <Title order={3} c="orange.8">
                  Investment Portfolio
                </Title>

                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Farm/Project</Table.Th>
                      <Table.Th>Investment</Table.Th>
                      <Table.Th>Acres</Table.Th>
                      <Table.Th>Return</Table.Th>
                      <Table.Th>Status</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {investments.map((investment) => (
                      <Table.Tr key={investment.id}>
                        <Table.Td>
                          <Group gap="sm">
                            <ThemeIcon size="sm" color="green" radius="xl">
                              <IconTractor size={16} />
                            </ThemeIcon>
                            {investment.farm}
                          </Group>
                        </Table.Td>
                        <Table.Td>${investment.amount.toLocaleString()}</Table.Td>
                        <Table.Td>{investment.acres}</Table.Td>
                        <Table.Td>
                          <Text c={investment.return > 15 ? "green" : investment.return > 10 ? "orange" : "red"}>
                            +{investment.return}%
                          </Text>
                        </Table.Td>
                        <Table.Td>
                          <Badge color="green" variant="light">
                            {investment.status}
                          </Badge>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Market Trends & Quick Actions */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="lg">
              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={4} c="orange.8">
                    Market Trends
                  </Title>
                  <Stack gap="sm">
                    {marketTrends.map((trend) => (
                      <Group key={trend.metric} justify="space-between" p="sm" style={{ borderRadius: "8px", backgroundColor: "#f8f9fa" }}>
                        <div>
                          <Text size="sm" fw={500}>{trend.metric}</Text>
                          <Text size="lg" fw={700} c={trend.trend === "up" ? "green" : "red"}>
                            {trend.value}
                          </Text>
                        </div>
                        <ThemeIcon
                          size="sm"
                          radius="xl"
                          color={trend.trend === "up" ? "green" : "red"}
                        >
                          <IconTrendingUp size={12} />
                        </ThemeIcon>
                      </Group>
                    ))}
                  </Stack>
                </Stack>
              </Card>

              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={4} c="orange.8">
                    Quick Actions
                  </Title>
                  <Stack gap="sm">
                    <Button variant="outline" color="orange" fullWidth>
                      Browse Opportunities
                    </Button>
                    <Button variant="outline" color="green" fullWidth>
                      Generate Reports
                    </Button>
                    <Button variant="outline" color="blue" fullWidth>
                      Market Analysis
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Impact Summary */}
        <Card shadow="sm" padding="xl" radius="lg">
          <Stack gap="lg">
            <Title order={3} c="orange.8">
              Investment Impact Summary
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
              <Card shadow="sm" padding="lg" radius="lg" style={{ background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)" }}>
                <Stack gap="sm" align="center">
                  <ThemeIcon size={50} radius="xl" variant="gradient" gradient={{ from: "green.4", to: "green.6" }}>
                    <IconTractor size={25} />
                  </ThemeIcon>
                  <Text size="2rem" fw={700} c="green.7">
                    {portfolioStats.farmersSupported}
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    Farmers Supported
                  </Text>
                </Stack>
              </Card>

              <Card shadow="sm" padding="lg" radius="lg" style={{ background: "linear-gradient(135deg, #e3f2fd, #f3e5f5)" }}>
                <Stack gap="sm" align="center">
                  <ThemeIcon size={50} radius="xl" variant="gradient" gradient={{ from: "blue.4", to: "blue.6" }}>
                    <IconTarget size={25} />
                  </ThemeIcon>
                  <Text size="2rem" fw={700} c="blue.7">
                    {portfolioStats.acresCovered}
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    Acres Covered
                  </Text>
                </Stack>
              </Card>

              <Card shadow="sm" padding="lg" radius="lg" style={{ background: "linear-gradient(135deg, #fff3e0, #fce4ec)" }}>
                <Stack gap="sm" align="center">
                  <ThemeIcon size={50} radius="xl" variant="gradient" gradient={{ from: "orange.4", to: "orange.6" }}>
                    <IconCurrencyDollar size={25} />
                  </ThemeIcon>
                  <Text size="2rem" fw={700} c="orange.7">
                    ${((portfolioStats.currentValue - portfolioStats.totalInvestment) / 1000).toFixed(0)}K
                  </Text>
                  <Text size="sm" c="dimmed" ta="center">
                    Net Profit
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
