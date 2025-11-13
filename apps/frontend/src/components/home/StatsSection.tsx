"use client";

import {
  Container,
  Grid,
  Card,
  Text,
  ThemeIcon,
  Stack,
  Title,
  Group,
  Box,
  Image,
  Button,
} from "@mantine/core";
import { IconTools, IconRefresh, IconShieldCheck } from "@tabler/icons-react";
import Link from "next/link";

export function StatsSection() {
  const lukeFeatures = [
    {
      icon: <IconTools size={32} />,
      title: "Mechanical Weed Removal",
      description:
        "Patentable chemical-free mechanism removes weeds with millimeter precision while preserving soil health.",
      color: "green",
    },
    {
      icon: <IconShieldCheck size={32} />,
      title: "AI Crop Health Inspection",
      description:
        "98% accuracy in disease detection with early warning system and real-time field monitoring.",
      color: "blue",
    },
    {
      icon: <IconRefresh size={32} />,
      title: "Swarm Intelligence",
      description:
        "Multiple robots work together autonomously, optimizing coverage and reducing operational time.",
      color: "teal",
    },
  ];

  const partners = [
    {
      img: "/assets/giz-logo.png",
      name: "GIZ India",
      desc: "German Development Cooperation",
    },
    {
      img: "/assets/rwth-logo.png",
      name: "RWTH Aachen",
      desc: "Centre for Innovation",
    },
    {
      img: "/assets/iitk-logo.png",
      name: "IIT Kanpur",
      desc: "Robotics Research",
    },
    {
      img: "/assets/GovtAP.png",
      name: "Govt. of Andhra Pradesh",
      desc: "Agricultural Department",
      isText: true,
    },
  ];

  return (
    <>
      {/* ==========================================
          MEET LUKE SECTION
      ========================================== */}
      <Box
        style={{
          position: "relative",
          backgroundColor: "#f8f9fa", // Light cream background
          padding: "100px 0",
        }}
      >
        <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
          <Stack align="center" gap="md" mb="xl" ta="center">
            <Title order={2} size="2.5rem" fw={700} c="green.8">
              Meet LUKE: The Autonomous Field Robot
            </Title>
            <Text size="lg" c="dimmed">
              Affordable AI-powered robot for small and medium-scale farmers
            </Text>
          </Stack>

          <Box mb="3rem">
            <Image
              src="https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?w=1200&auto=format&fit=crop&q=80"
              alt="Agricultural technology in action"
              radius="lg"
              maw={900}
              mx="auto"
              shadow="xl"
            />
          </Box>

          <Grid gutter="xl">
            {lukeFeatures.map((feature, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                <Card
                  shadow="md"
                  padding="xl"
                  radius="lg"
                  style={{
                    border: "1px solid #e9ecef",
                    backgroundColor: "white",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(76,175,80,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 1px 3px rgba(0,0,0,0.1)";
                  }}
                >
                  <Stack gap="md" align="center" ta="center">
                    <ThemeIcon
                      size={70}
                      radius="xl"
                      variant="gradient"
                      gradient={{
                        from: `${feature.color}.4`,
                        to: `${feature.color}.6`,
                      }}
                    >
                      {feature.icon}
                    </ThemeIcon>
                    <Title order={4} fw={600} c="green.8">
                      {feature.title}
                    </Title>
                    <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                      {feature.description}
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>

          <Box ta="center" mt="xl">
            <Button
              size="lg"
              component="a" // Use anchor tag for external or different page logic
              href="/solution"
              color="green"
              radius="xl"
              variant="filled"
            >
              Learn More About LUKE
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ==========================================
          IMPACT SECTION
      ========================================== */}
      <Box
        style={{
          backgroundColor: "#ffffff",
          padding: "100px 0",
        }}
      >
        <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
          <Stack align="center" mb="xl" ta="center">
            <Title order={2} size="2.5rem" fw={700} c="green.8">
              Creating Sustainable Impact
            </Title>
            <Text size="lg" c="dimmed">
              Economic, environmental, and social transformation
            </Text>
          </Stack>

          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card
                shadow="sm"
                radius="lg"
                mb="lg"
                padding="xl"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #e9ecef" }}
              >
                <Title order={4} fw={600} c="green.8" mb="sm">
                  Economic Impact
                </Title>
                <ul style={{ lineHeight: "1.8", color: "#5c5f66" }}>
                  <li>
                    <strong>35.14% increase</strong> in farmer income
                  </li>
                  <li>
                    <strong>€100.81</strong> saved per acre per season
                  </li>
                  <li>
                    <strong>26% crop loss recovery</strong>
                  </li>
                  <li>
                    <strong>100+ jobs</strong> created in manufacturing
                  </li>
                </ul>
              </Card>

              <Card
                shadow="sm"
                radius="lg"
                padding="xl"
                style={{ backgroundColor: "#f8f9fa", border: "1px solid #e9ecef" }}
              >
                <Title order={4} fw={600} c="green.8" mb="sm">
                  Environmental Impact
                </Title>
                <ul style={{ lineHeight: "1.8", color: "#5c5f66" }}>
                  <li>
                    <strong>100% reduction</strong> in herbicide use
                  </li>
                  <li>
                    <strong>30% reduction</strong> in pesticide use
                  </li>
                  <li>Improved soil health</li>
                  <li>Reduced water contamination</li>
                </ul>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="md">
                <Image
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=80"
                  alt="Agricultural robot technology"
                  radius="lg"
                  shadow="md"
                />
                <Image
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&auto=format&fit=crop&q=80"
                  alt="Healthy green crops"
                  radius="lg"
                  shadow="md"
                />
              </Stack>
            </Grid.Col>
          </Grid>

          <Stack align="center" mt="xl" ta="center" gap="lg">
            <Title order={3} c="green.8">
              Supporting UN Sustainable Development Goals
            </Title>

            <Box
              p="md"
              radius="lg"
              style={{
                backgroundColor: "#e8f5e9",
                maxWidth: "800px",
              }}
            >
              <Text fw={700} c="green.9" mb="sm">
                Primary SDGs
              </Text>
              <Box
                style={{
                  background: "green",
                  color: "white",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "8px",
                }}
              >
                SDG 2: Zero Hunger - Increasing food production and farmer income
              </Box>
              <Box
                style={{
                  background: "green",
                  color: "white",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                SDG 13: Climate Action - Reducing chemical use and environmental impact
              </Box>
            </Box>

            <Box
              p="md"
              radius="lg"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                maxWidth: "800px",
              }}
            >
              <Text fw={700} c="green.9" mb="sm">
                Secondary SDGs
              </Text>
              <Text c="dimmed" fw={600} mb="xs">
                SDG 1: No Poverty - Increasing farmer prosperity
              </Text>
              <Text c="dimmed" fw={600} mb="xs">
                SDG 8: Decent Work - Creating quality jobs
              </Text>
              <Text c="dimmed" fw={600}>
                SDG 12: Responsible Production - Sustainable farming
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>

            {/* ==========================================
          CALL TO ACTION SECTION
      ========================================== */}
      <Box
        style={{
          background: "linear-gradient(135deg, #388e3c, #2e7d32)", // Green gradient
          padding: "100px 0",
          textAlign: "center",
        }}
      >
        <Container size="md">
          <Title order={2} c="white" mb="md">
            Ready to Transform Your Farming?
          </Title>
          <Text size="lg" c="white" opacity={0.9} mb="xl">
            Join thousands of farmers benefiting from our AI-powered agricultural robotics
          </Text>

          <Group justify="center" gap="md" wrap="wrap">
            <Button
              component={Link}
              href="/contact"
              color="green"
              variant="filled"
              radius="xl"
              size="lg"
            >
              Request a Demo
            </Button>
            <Button
              component={Link}
              href="/solution"
              variant="outline"
              color="white"
              radius="xl"
              size="lg"
            >
              Learn More
            </Button>
          </Group>
        </Container>
      </Box>

      {/* ==========================================
          PARTNERS SECTION
      ========================================== */}
      <Box
        style={{
          backgroundColor: "#f8f9fa",
          padding: "100px 0",
        }}
      >
        <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
          <Stack align="center" mb="xl" ta="center">
            <Title order={2} size="2.5rem" fw={700} c="green.8">
              Trusted by Leading Organizations
            </Title>
            <Text size="lg" c="dimmed">
              Strategic partnerships driving our mission forward
            </Text>
          </Stack>

          <Grid gutter="xl">
            {partners.map((p, i) => (
              <Grid.Col key={i} span={{ base: 12, sm: 6, md: 3 }}>
                <Card
                  shadow="md"
                  padding="lg"
                  radius="lg"
                  h="100%"
                  ta="center"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e9ecef",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <Stack align="center">
                    <Box h={80} display="flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                          src={p.img}
                          alt={p.name}
                          h={60} // Set a fixed height for the image
                          w="auto"
                          fit="contain"
                        />
                    </Box>
                    <Stack gap={0}>
                      <Title order={4} c="green.8">
                        {p.name}
                      </Title>
                      <Text size="sm" c="dimmed">
                        {p.desc}
                      </Text>
                    </Stack>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>

          {/* <Box ta="center" mt="xl">
            <Button
              component={Link}
              href="/partnerships"
              variant="outline"
              color="green"
              radius="xl"
              size="md"
            >
              View All Partners
            </Button>
          </Box> */}
        </Container>
      </Box>


    </>
  );
}
