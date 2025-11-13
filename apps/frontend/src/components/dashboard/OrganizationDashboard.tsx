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
import { IconUsers, IconTractor, IconBuilding, IconLeaf } from "@tabler/icons-react"; 

interface DashboardProps {
  user: {
    email: string;
  };
}

export function OrganizationDashboard({ user }: DashboardProps) { 
  // Mock data - replace with real API calls
  const orgStats = {
    totalMembers: 125,
    activeMembers: 118,
    totalAcres: 2500,
    averageYield: 15.2, // tons per acre
    revenue: 125000,
    programsActive: 8,
  };

  const memberStats = [
    { region: "North Zone", members: 45, acres: 950, yield: 14.8 },
    { region: "South Zone", members: 38, acres: 820, yield: 15.6 },
    { region: "East Zone", members: 25, acres: 480, yield: 15.1 },
    { region: "West Zone", members: 17, acres: 250, yield: 15.5 },
  ];

  const recentActivities = [
    { id: 1, action: "New member registration", member: "Rajesh Kumar", time: "2 hours ago", status: "completed" },
    { id: 2, action: "Training program completed", member: "45 farmers", time: "1 day ago", status: "completed" },
    { id: 3, action: "Seed distribution", member: "North Zone", time: "2 days ago", status: "completed" },
    { id: 4, action: "Market linkage established", member: "South Zone", time: "3 days ago", status: "completed" },
  ];

  return (
    <Container size="xl">
      <Stack gap="xl">
        {/* Welcome Section */}
        <Card shadow="sm" padding="xl" radius="lg" style={{ background: "linear-gradient(135deg, #e3f2fd, #f3e5f5)" }}>
          <Group justify="space-between" align="flex-start">
            <Stack gap="sm">
              <Title order={2} c="blue.8">
                Organization Dashboard 🏢
              </Title>
              <Text c="dimmed" size="lg">
                Welcome, {user.email}. Manage your farmer members and agricultural programs.
              </Text>
            </Stack>
            <Button color="blue" size="sm">
              Add New Member
            </Button>
          </Group>
        </Card>

        {/* Key Metrics */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Total Members
                </Text>
                <Text size="2rem" fw={700} c="blue.7">
                  {orgStats.totalMembers}
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
                  Total Acres
                </Text>
                <Text size="2rem" fw={700} c="green.7">
                  {orgStats.totalAcres}
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
                  Avg Yield
                </Text>
                <Text size="2rem" fw={700} c="orange.7">
                  {orgStats.averageYield}t
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "orange.4", to: "orange.6" }}>
                <IconLeaf size={30} />
              </ThemeIcon>
            </Group>
          </Card>

          <Card shadow="sm" padding="lg" radius="lg">
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                  Active Programs
                </Text>
                <Text size="2rem" fw={700} c="violet.7">
                  {orgStats.programsActive}
                </Text>
              </div>
              <ThemeIcon size={60} radius="xl" variant="gradient" gradient={{ from: "violet.4", to: "violet.6" }}>
                <IconBuilding size={30} />
              </ThemeIcon>
            </Group>
          </Card>
        </SimpleGrid>

        <Grid>
          {/* Member Distribution */}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Card shadow="sm" padding="xl" radius="lg" h="100%">
              <Stack gap="lg">
                <Title order={3} c="blue.8">
                  Member Distribution by Zone
                </Title>

                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Zone</Table.Th>
                      <Table.Th>Members</Table.Th>
                      <Table.Th>Acres</Table.Th>
                      <Table.Th>Avg Yield</Table.Th>
                      <Table.Th>Performance</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {memberStats.map((stat) => (
                      <Table.Tr key={stat.region}>
                        <Table.Td>
                          <Group gap="sm">
                            <ThemeIcon size="sm" color="blue" radius="xl">
                              <IconTractor size={16} />
                            </ThemeIcon>
                            {stat.region}
                          </Group>
                        </Table.Td>
                        <Table.Td>{stat.members}</Table.Td>
                        <Table.Td>{stat.acres}</Table.Td>
                        <Table.Td>{stat.yield}t</Table.Td>
                        <Table.Td>
                          <Badge
                            color={stat.yield >= 15 ? "green" : "orange"}
                            variant="light"
                          >
                            {stat.yield >= 15 ? "Excellent" : "Good"}
                          </Badge>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Quick Actions */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="lg">
              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={4} c="blue.8">
                    Quick Actions
                  </Title>
                  <Stack gap="sm">
                    <Button variant="outline" color="blue" fullWidth>
                      Register New Member
                    </Button>
                    <Button variant="outline" color="green" fullWidth>
                      Schedule Training
                    </Button>
                    <Button variant="outline" color="orange" fullWidth>
                      Generate Reports
                    </Button>
                    <Button variant="outline" color="violet" fullWidth>
                      Market Linkage
                    </Button>
                  </Stack>
                </Stack>
              </Card>

              <Card shadow="sm" padding="lg" radius="lg">
                <Stack gap="md">
                  <Title order={4} c="blue.8">
                    Member Health
                  </Title>
                  <div>
                    <Group justify="space-between" mb="xs">
                      <Text size="sm" fw={500}>Active Members</Text>
                      <Text size="sm" c="dimmed">{orgStats.activeMembers}/{orgStats.totalMembers}</Text>
                    </Group>
                    <Progress
                      value={(orgStats.activeMembers / orgStats.totalMembers) * 100}
                      color="green"
                      size="lg"
                      radius="md"
                    />
                  </div>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Recent Activities */}
        <Card shadow="sm" padding="xl" radius="lg">
          <Stack gap="lg">
            <Title order={3} c="blue.8">
              Recent Organization Activities
            </Title>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Action</Table.Th>
                  <Table.Th>Member/Program</Table.Th>
                  <Table.Th>Time</Table.Th>
                  <Table.Th>Status</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {recentActivities.map((activity) => (
                  <Table.Tr key={activity.id}>
                    <Table.Td>{activity.action}</Table.Td>
                    <Table.Td>{activity.member}</Table.Td>
                    <Table.Td>{activity.time}</Table.Td>
                    <Table.Td>
                      <Badge color="green" variant="light">
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
