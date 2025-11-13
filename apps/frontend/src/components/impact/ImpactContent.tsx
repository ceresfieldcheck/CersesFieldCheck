"use client";

import {
  Box,
  Container,
  Title,
  Text,
  Grid,
  Card,
  Stack,
  ThemeIcon,
  List,
} from "@mantine/core";
import {
  IconCurrencyEuro,
  IconUsers,
  IconCheck,
  IconBuildingFactory,
  IconPlant2,
  IconUsersGroup,
} from "@tabler/icons-react";

export function ImpactContent() {
  const lightBackground = "#f8f9fa";

  const targetSegments = [
    {
      title: "Small Farmers",
      description: "84% of Indian farmers\n< 5 acres",
      icon: <IconUsers size={24} />,
    },
    {
      title: "Cooperatives",
      description: "Serving multiple\nsmall farmers",
      icon: <IconUsersGroup size={24} />,
    },
    {
      title: "NGOs",
      description: "Agricultural development\nprograms",
      icon: <IconPlant2 size={24} />,
    },
    {
      title: "Government",
      description: "Subsidized technology\nadoption",
      icon: <IconBuildingFactory size={24} />,
    },
  ];

  return (
    <>
      {/* Page Header */}
      <Box
        pt={150}
        pb={100}
        style={{ background: "linear-gradient(135deg, #388e3c, #1b5e20)" }}
        ta="center"
      >
        <Container size="xl">
          <Title order={1} c="white" mb="md">
            Creating Sustainable Impact
          </Title>
          <Text
            size="xl"
            c="white"
            style={{ opacity: 0.9, maxWidth: "800px", margin: "0 auto" }}
          >
            Economic transformation, environmental protection, and social
            empowerment
          </Text>
        </Container>
      </Box>

      {/* MARKET OPPORTUNITY */}
      <Box py={80} style={{ backgroundColor: "#ffffff" }}>
        <Container size="xl">
          <Stack align="center" mb="xl" ta="center">
            <Title order={2} c="green.8">
              Market Opportunity
            </Title>
            <Text size="lg" c="dimmed">
              Addressing a massive, underserved market
            </Text>
          </Stack>
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" ta="center" style={{ border: "1px solid #e9ecef" }}>
                <Title order={3} c="green.8" style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  €1.45T
                </Title>
                <Title order={4} c="green.8">Global Agricultural Market</Title>
                <Text c="dimmed">Total addressable market worldwide</Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" ta="center" style={{ border: "1px solid #e9ecef" }}>
                <Title order={3} c="green.8" style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  €52.5B
                </Title>
                <Title order={4} c="green.8">Indian Rice Market</Title>
                <Text c="dimmed">Serviceable available market</Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" ta="center" style={{ background: "linear-gradient(135deg, #43a047, #388e3c)", color: "white" }}>
                <Title order={3} c="white" style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  €27.5B
                </Title>
                <Title order={4} c="white">Andhra Pradesh Rice Market</Title>
                <Text c="white" style={{ opacity: 0.9 }}>Serviceable obtainable market (SOM)</Text>
              </Card>
            </Grid.Col>
          </Grid>
          <Card shadow="sm" padding="xl" radius="lg" mt="xl" ta="center" style={{ backgroundColor: lightBackground, border: "1px solid #e9ecef" }}>
            <Title order={3} c="green.8" mb="md">Target Segments</Title>
            <Grid gutter="md">
              {targetSegments.map((segment, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                  <Stack align="center" gap="xs">
                    <ThemeIcon size={40} radius="xl" variant="light" color="green">
                      {segment.icon}
                    </ThemeIcon>
                    <Text fw={700} c="green.8">{segment.title}</Text>
                    <Text size="sm" c="dimmed" ta="center" style={{ whiteSpace: 'pre-line' }}>
                      {segment.description}
                    </Text>
                  </Stack>
                </Grid.Col>
              ))}
            </Grid>
          </Card>
        </Container>
      </Box>

      {/* ECONOMIC IMPACT */}
      <Box py={80} style={{ backgroundColor: lightBackground }}>
        <Container size="xl">
          <Stack align="center" mb="xl" ta="center">
            <Title order={2} c="green.8">
              Economic Impact
            </Title>
            <Text size="lg" c="dimmed">
              Increasing farmer prosperity and creating jobs
            </Text>
          </Stack>
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" style={{ border: "1px solid #e9ecef" }}>
                <Title order={3} c="green.8" mb="md">Farmer Benefits</Title>
                <List spacing="md" size="lg" icon={<ThemeIcon size={24} radius="xl" color="green" variant="light"><IconCheck size={16} /></ThemeIcon>}>
                  <List.Item>
                    <Text>
                      <Text component="strong" c="green.7" style={{ fontSize: "1.5rem" }}>35.14% increase</Text> in farmer income
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      <Text component="strong" c="green.7" style={{ fontSize: "1.5rem" }}>€100.81</Text> saved per acre per season
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      <Text component="strong" c="green.7" style={{ fontSize: "1.5rem" }}>26% crop loss</Text> recovery
                    </Text>
                  </List.Item>
                  <List.Item>Reduction in farming debt</List.Item>
                </List>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" style={{ border: "1px solid #e9ecef" }}>
                <Title order={3} c="green.8" mb="md">Economic Transformation</Title>
                <List spacing="md" size="lg" icon={<ThemeIcon size={24} radius="xl" color="green" variant="light"><IconCheck size={16} /></ThemeIcon>}>
                  <List.Item>
                    <Text>
                      <Text component="strong" c="green.7" style={{ fontSize: "1.5rem" }}>100+ jobs</Text> created in manufacturing & maintenance
                    </Text>
                  </List.Item>
                  <List.Item>€43,602 annual savings per NGO (28 farmers)</List.Item>
                  <List.Item>Rural employment opportunities</List.Item>
                  <List.Item>Technology ecosystem development</List.Item>
                </List>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* ENVIRONMENTAL IMPACT */}
      <Box py={80} style={{ backgroundColor: "#ffffff" }}>
        <Container size="xl">
          <Stack align="center" mb="xl" ta="center">
            <Title order={2} c="green.8">
              Environmental Impact
            </Title>
            <Text size="lg" c="dimmed">
              Protecting our planet for future generations
            </Text>
          </Stack>
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" ta="center" style={{ border: "1px solid #e9ecef" }}>
                <Title order={3} c="green.7" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  100%
                </Title>
                <Title order={4} c="green.8">Herbicide Reduction</Title>
                <Text c="dimmed">Complete elimination of herbicide use through mechanical weed removal</Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" ta="center" style={{ border: "1px solid #e9ecef" }}>
                <Title order={3} c="green.7" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  30%
                </Title>
                <Title order={4} c="green.8">Pesticide Reduction</Title>
                <Text c="dimmed">Significant decrease in chemical pesticide usage</Text>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" ta="center" style={{ border: "1px solid #e9ecef" }}>
                <Title order={3} c="green.7" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  <IconCheck size={48} style={{ verticalAlign: 'middle' }} />
                </Title>
                <Title order={4} c="green.8">Soil Health</Title>
                <Text c="dimmed">Improved soil quality and reduced water contamination</Text>
              </Card>
            </Grid.Col>
          </Grid>
          <Card shadow="sm" padding="xl" radius="lg" mt="xl" style={{ background: "linear-gradient(135deg, #43a047, #388e3c)", color: "white" }}>
            <Title order={3} c="white" mb="md" ta="center">Environmental Benefits</Title>
            <Grid gutter="xl">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <List spacing="xs" size="md" icon={<ThemeIcon size={20} radius="xl" color="white" variant="light"><IconCheck size={14} /></ThemeIcon>}>
                  <List.Item><Text c="white" style={{ opacity: 0.9 }}>Chemical-free food production</Text></List.Item>
                  <List.Item><Text c="white" style={{ opacity: 0.9 }}>Preservation of biodiversity</Text></List.Item>
                  <List.Item><Text c="white" style={{ opacity: 0.9 }}>Reduction in greenhouse gas emissions</Text></List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <List spacing="xs" size="md" icon={<ThemeIcon size={20} radius="xl" color="white" variant="light"><IconCheck size={14} /></ThemeIcon>}>
                  <List.Item><Text c="white" style={{ opacity: 0.9 }}>Protection of water sources</Text></List.Item>
                  <List.Item><Text c="white" style={{ opacity: 0.9 }}>Sustainable farming practices</Text></List.Item>
                  <List.Item><Text c="white" style={{ opacity: 0.9 }}>Circular economy (weeds as fertilizer)</Text></List.Item>
                </List>
              </Grid.Col>
            </Grid>
          </Card>
        </Container>
      </Box>

      {/* SOCIAL IMPACT */}
      <Box py={80} style={{ backgroundColor: lightBackground }}>
        <Container size="xl">
          <Stack align="center" mb="xl" ta="center">
            <Title order={2} c="green.8">
              Social Impact
            </Title>
            <Text size="lg" c="dimmed">
              Empowering farming communities
            </Text>
          </Stack>
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" style={{ border: "1px solid #e9ecef" }}>
                <Stack>
                  <ThemeIcon size={40} radius="xl" variant="light" color="green">
                    <IconUsers size={24} />
                  </ThemeIcon>
                  <Title order={3} size="h4" fw={600} c="green.8">Empowering Small Farmers</Title>
                  <Text size="sm" c="dimmed">
                    Providing access to advanced technology for the 84% of farmers who own less than 5 acres,
                    leveling the playing field and enabling competitive, sustainable farming.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" style={{ border: "1px solid #e9ecef" }}>
                <Stack>
                  <ThemeIcon size={40} radius="xl" variant="light" color="green">
                    <IconCurrencyEuro size={24} />
                  </ThemeIcon>
                  <Title order={3} size="h4" fw={600} c="green.8">Reducing Farmer Debt</Title>
                  <Text size="sm" c="dimmed">
                    Increased yields and reduced costs help break the cycle of debt that traps many small farmers,
                    improving quality of life for entire families.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" style={{ border: "1px solid #e9ecef" }}>
                <Stack>
                  <ThemeIcon size={40} radius="xl" variant="light" color="green">
                    <IconBuildingFactory size={24} />
                  </ThemeIcon>
                  <Title order={3} size="h4" fw={600} c="green.8">Creating Rural Employment</Title>
                  <Text size="sm" c="dimmed">
                    Manufacturing, maintenance, and support roles create 100+ jobs in rural areas, keeping
                    talent and economic benefits in farming communities.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" style={{ border: "1px solid #e9ecef" }}>
                <Stack>
                  <ThemeIcon size={40} radius="xl" variant="light" color="green">
                    <IconPlant2 size={24} />
                  </ThemeIcon>
                  <Title order={3} size="h4" fw={600} c="green.8">Preserving Farming Communities</Title>
                  <Text size="sm" c="dimmed">
                    Making farming economically viable and sustainable ensures traditional farming communities
                    can thrive for generations to come.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* UN SDGs */}
      <Box py={80} style={{ background: "linear-gradient(135deg, #388e3c, #1b5e20)" }}>
        <Container size="xl">
          <Stack align="center" mb="xl" ta="center">
            <Title order={2} c="white">
              UN Sustainable Development Goals
            </Title>
            <Text size="lg" c="white" style={{ opacity: 0.9 }}>
              Our work directly contributes to global sustainability objectives
            </Text>
          </Stack>
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" style={{ background: "rgba(255,255,255,0.95)" }}>
                <Title order={3} c="green.8" mb="md">Primary SDGs</Title>
                <List spacing="md" size="lg" icon={<ThemeIcon size={24} radius="xl" color="green" variant="light"><IconCheck size={16} /></ThemeIcon>}>
                  <List.Item>
                    <Text>
                      <Text component="strong" c="green.8">SDG 2: Zero Hunger</Text> - Increasing food production and farmer income
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      <Text component="strong" c="green.8">SDG 13: Climate Action</Text> - Reducing chemical use and environmental impact
                    </Text>
                  </List.Item>
                </List>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" style={{ background: "rgba(255,255,255,0.95)" }}>
                <Title order={3} c="green.8" mb="md">Secondary SDGs</Title>
                <List spacing="md" size="lg" icon={<ThemeIcon size={24} radius="xl" color="green" variant="light"><IconCheck size={16} /></ThemeIcon>}>
                  <List.Item>
                    <Text>
                      <Text component="strong" c="green.8">SDG 1: No Poverty</Text> - Increasing farmer prosperity
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      <Text component="strong" c="green.8">SDG 8: Decent Work</Text> - Creating quality jobs
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text>
                      <Text component="strong" c="green.8">SDG 12: Responsible Production</Text> - Sustainable farming
                    </Text>
                  </List.Item>
                </List>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* IMPACT TRACKING */}
      <Box py={80} style={{ backgroundColor: "#ffffff" }}>
        <Container size="xl">
          <Stack align="center" mb="xl" ta="center">
            <Title order={2} c="green.8">
              Impact Tracking & Goals
            </Title>
            <Text size="lg" c="dimmed">
              Measurable outcomes we&apos;re committed to achieving
            </Text>
          </Stack>
          <Box maw={900} mx="auto" style={{ overflowX: 'auto' }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: '600px' }}>
              <thead style={{ background: "linear-gradient(135deg, #43a047, #388e3c)", color: "white" }}>
                <tr>
                  <th style={{ padding: "1rem", textAlign: "left" }}>Category</th>
                  <th style={{ padding: "1rem", textAlign: "left" }}>Metric</th>
                  <th style={{ padding: "1rem", textAlign: "left" }}>Goal</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: lightBackground }}>
                  <td style={{ padding: "1rem" }}><Text fw={700} c="green.8">Revenue</Text></td>
                  <td style={{ padding: "1rem" }}><Text c="dimmed">Crop yield increase</Text></td>
                  <td style={{ padding: "1rem" }}><Text c="dimmed">26% crop loss recovery</Text></td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem" }}><Text fw={700} c="green.8">Cost Reduction</Text></td>
                  <td style={{ padding: "1rem" }}><Text c="dimmed">Herbicide elimination</Text></td>
                  <td style={{ padding: "1rem" }}><Text c="dimmed">€10/acre/season saved</Text></td>
                </tr>
                <tr style={{ background: lightBackground }}>
                  <td style={{ padding: "1rem" }}><Text fw={700} c="green.8">Cost Reduction</Text></td>
                  <td style={{ padding: "1rem" }}><Text c="dimmed">Pesticide reduction</Text></td>
                  <td style={{ padding: "1rem" }}><Text c="dimmed">30% decrease (€33.23/acre)</Text></td>
                </tr>
                <tr>
                  <td style={{ padding: "1rem" }}><Text fw={700} c="green.8">Employment</Text></td>
                  <td style={{ padding: "1rem" }}><Text c="dimmed">Jobs created</Text></td>
                  <td style={{ padding: "1rem" }}><Text c="dimmed">100+ in first 3 years</Text></td>
                </tr>
                <tr style={{ background: lightBackground }}>
                  <td style={{ padding: "1rem" }}><Text fw={700} c="green.8">Income</Text></td>
                  <td style={{ padding: "1rem" }}><Text c="dimmed">Farmer income increase</Text></td>
                  <td style={{ padding: "1rem" }}><Text c="dimmed">35.14% improvement</Text></td> 
                </tr>
              </tbody>
            </table>
          </Box>
        </Container>
      </Box>
    </>
  );
}