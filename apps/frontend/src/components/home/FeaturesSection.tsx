"use client";

import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Stack,
  ThemeIcon,
  Box,
  Group,
} from "@mantine/core";
import {
  IconEye,
  IconTrendingUp,
  IconLeaf,
  IconCurrencyEuro,
  IconUsers,
  IconPercentage,
  IconPigMoney,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <IconEye size={32} />,
      title: "98% AI Accuracy",
      description:
        "Advanced computer vision for precise weed detection and crop health monitoring, validated through extensive field testing.",
      color: "teal",
    },
    {
      icon: <IconTrendingUp size={32} />,
      title: "26% Yield Recovery",
      description:
        "Proven field results show significant crop loss prevention, directly increasing farmer income and food security.",
      color: "blue",
    },
    {
      icon: <IconLeaf size={32} />,
      title: "Chemical-Free Solution",
      description:
        "Sustainable mechanical weed removal preserves soil health, reduces environmental impact, and eliminates herbicide costs.",
      color: "green",
    },
  ];

  const stats = [
    {
      value: "€27.5B",
      label: "Addressable Market in Andhra Pradesh",
      icon: <IconCurrencyEuro size={28} />,
    },
    {
      value: "22M",
      label: "Farmers We Can Reach",
      icon: <IconUsers size={28} />,
    },
    {
      value: "84%",
      label: "Small Farmers We Serve",
      icon: <IconPercentage size={28} />,
    },
    {
      value: "€43,602",
      label: "Annual Savings per NGO",
      icon: <IconPigMoney size={28} />,
    },
  ];

  return (
    <>
      {/* =============================
          INNOVATIONS SECTION
      ============================== */}
      <Box
        style={{
          position: "relative",
          backgroundColor: "#f8f9fa", // Light background
          padding: "100px 0",
        }}
      >
        <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
          <Stack gap="md" align="center" mb="xl" ta="center">
            <Title order={2} size="2.5rem" fw={700} c="green.8">
              60% of global crops are lost to weeds and diseases. We're changing
              that.
            </Title>
            <Text size="lg" c="dimmed">
              Three key innovations that make the difference
            </Text>
          </Stack>

          <Grid gutter="xl">
            {features.map((feature, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                <Card
                  shadow="md"
                  padding="xl"
                  radius="lg"
                  h="100%"
                  style={{
                    background: "#ffffff", // White card background
                    border: "1px solid #e9ecef",                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(76, 175, 80, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 1px 3px rgba(0, 0, 0, 0.1)";
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
        </Container>
      </Box>

      {/* =============================
          STATISTICS SECTION
      ============================== */}
      <Box
        style={{
          background: "linear-gradient(180deg, #e8f5e9, #f1f8e9)", // Light green gradient
          padding: "80px 0",
        }}
      >
        <Container size="lg">
          <Grid gutter="xl">
            {stats.map((stat, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
                <Stack align="center" ta="center">
                  <ThemeIcon
                    size={60}
                    radius="50%"
                    color="green"
                    variant="light"
                  >
                    {stat.icon}
                  </ThemeIcon>
                  <Title order={2} c="green.8">
                    {stat.value}
                  </Title>
                  <Text size="sm" c="dimmed" style={{ maxWidth: "180px" }}>
                    {stat.label}
                  </Text>
                </Stack>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* =============================
          PROBLEM SECTION
      ============================== */}
      <Box
        style={{
          position: "relative",
          backgroundColor: "#ffffff",
          padding: "100px 0",
        }}
      >
        <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="md">
                <Title order={2} c="green.8">
                  The Challenge Small Farmers Face
                </Title>
                <Text size="md" c="dimmed">
                  <strong>60% of crops are lost to weeds and diseases</strong>,
                  yet existing solutions fail small farmers. Fully-automatic
                  robots are too expensive, manual weeding is labor-intensive,
                  and chemical herbicides degrade soil health while becoming
                  increasingly ineffective.
                </Text>
                <Text size="md" c="dimmed">
                  With <strong>84% of farmers owning less than 5 acres</strong>,
                  they cannot afford modern agricultural technology — creating a
                  cycle of low yields and food insecurity.
                </Text>
                <Text size="md" c="dimmed">
                  <strong>Ceres FieldCheck</strong> was created to break this
                  cycle with affordable, intelligent robotics designed
                  specifically for small-scale farmers.
                </Text>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop&q=80"
                alt="Small farm challenges"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                }}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
