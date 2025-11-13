"use client";

import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Stack,
  ThemeIcon,
  Group,
  Box,
  List,
  Button,
} from "@mantine/core";
import {
  IconTarget,
  IconRocket,
  IconAward,
  IconUsers,
  IconLeaf,
  IconPuzzle,
  IconCheck,
  IconMapPin,
  IconCalendarEvent,
} from "@tabler/icons-react";
import Link from "next/link";

const lightBackground = "#f8f9fa"; // Similar to section--cream background

export function DetailsContent() {
  const whyUsCards = [
    {
      icon: <IconUsers size={24} />,
      title: "Farmer-First Design",
      description: "Built with farmers, for farmers. Our solutions are designed based on direct feedback from small-scale farmers who understand the real challenges in the field.",
    },
    {
      icon: <IconCheck size={24} />,
      title: "Proven Technology",
      description: "Developed at world-renowned institutions (RWTH Aachen, IIT Kanpur), backed by rigorous research and extensive field testing achieving 98% AI accuracy.",
    },
    {
      icon: <IconMapPin size={24} />,
      title: "Local Understanding",
      description: "Our team members come from farming families and understand the unique challenges, cultural context, and practical needs of small-scale agriculture.",
    },
    {
      icon: <IconTarget size={24} />,
      title: "Global Vision",
      description: "Combining German engineering excellence with Indian agricultural expertise to create solutions that work globally while respecting local conditions.",
    },
  ];

  const valueCards = [
    { title: "Innovation with Purpose", description: "We develop technology that solves real problems, not just for innovation's sake. Every feature must deliver tangible value to farmers." },
    { title: "Sustainability First", description: "Chemical-free, environmentally conscious solutions that preserve soil health and protect our planet for future generations." },
    { title: "Accessibility", description: "Affordable solutions designed specifically for small farmers who need them most, with Robot-as-a-Service models that remove barriers to entry." },
    { title: "Partnership", description: "Working collaboratively with NGOs, cooperatives, governments, and research institutions to maximize our collective impact." },
    { title: "Excellence", description: "German engineering standards combined with local adaptability ensure our solutions are both world-class and practical." },
    { title: "Transparency", description: "Open communication with all stakeholders about our progress, challenges, and impact on the farming communities we serve." },
  ];

  const milestoneData = [
    {
        year: "2023-2024: Foundation",
        icon: <IconCalendarEvent size={20} />,
        details: [
            "€72,000 in grant funding secured (Hessian.AI, EXIST Women)",
            "Prototype developed and tested",
            "98% AI accuracy achieved in crop health detection",
            "Partnerships established with GIZ and Government of Andhra Pradesh",
            "3rd place in SDG Innovation Challenge",
            "Incubation at 5 universities across Germany and India",
        ],
    },
    {
        year: "2024-2025: Current Status",
        icon: <IconPuzzle size={20} />,
        details: [
            "Field testing with partner farmers in progress",
            "Manufacturing partnership development",
            "Regulatory approvals in progress",
            "Pilot projects with cooperatives being planned",
            "Team expansion and co-location planning",
        ],
    },
    {
        year: "2025-2027: Future Roadmap",
        icon: <IconRocket size={20} />,
        details: [
            "Q2 2025: Complete pilot projects and secure Series A funding",
            "Q3 2025: Begin commercial production and launch in Andhra Pradesh",
            "Q4 2025: Scale to 100 robots deployed",
            "2026: Expand to 3 additional states, achieve break-even",
            "2027+: Pan-India presence, Southeast Asian expansion, additional crop applications",
        ],
    },
];

  const awards = [
    "Hessian.AI Startup Program: Selected as finalist and scholarship recipient for AI innovation in agriculture",
    "SDG Innovation Challenge - 3rd Place: 3rd Place for sustainable development impact",
    "RWTH Innovation Award: Recognized for technological innovation and entrepreneurial excellence",
    "Frankfurt School Demo Day: Finalist presentation to investors and industry leaders",
    "EXIST Women Scholar: Supporting female founders in deep-tech entrepreneurship",
    "DAAD Innovators Tandem - 1st Place: 1st Place for exceptional robot design and Indo-German collaboration",
  ];

  return (
    <div>
      {/* 1. Page Header (section--primary) */}
      <Box
        pt={150} pb={100} bg="green.7" ta="center"
      >
        <Container size="xl">
          <Title order={1} c="white" mb="md">
            About Ceres FieldCheck
          </Title>
          <Text size="xl" c="white" style={{ opacity: 0.9, maxWidth: "800px", margin: "0 auto" }}>
            Building a sustainable agricultural future through innovation, technology, and partnership
          </Text>
        </Container>
      </Box>

      {/* 2. Mission & Vision (section with two primary-colored cards) */}
      <Container size="xl" py={80}>
        <Grid gutter="xl">
          {/* Mission Card */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card p="xl" radius="lg" bg="green.7" c="white" h="100%">
              <Title order={2} c="white" mb="md">Our Mission</Title>
              <Text size="xl" fw={600} c="white" lh={1.4} mb="md">
                Keeping World's Fields Healthy
              </Text>
              <Text c="white" style={{ opacity: 0.9 }}>
                We empower farmers worldwide with affordable, intelligent agricultural technology
                that increases yields, reduces environmental impact, and creates sustainable livelihoods.
              </Text>
            </Card>
          </Grid.Col>

          {/* Vision Card */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card p="xl" radius="lg" bg="green.6" c="white" h="100%">
              <Title order={2} c="white" mb="md">Our Vision</Title>
              <Text size="xl" fw={600} c="white" lh={1.4} mb="md">
                Help Every Single Farmer in Need
              </Text>
              <Text c="white" style={{ opacity: 0.9 }}>
                To save all farmers from crop losses and create a sustainable agricultural future
                where technology serves those who feed the world.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
      
      {/* 3. Our Story (section--cream with image/placeholder) */}
      <Box py={80} style={{ backgroundColor: lightBackground }}>
        <Container size="xl">
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="lg">
                <Title order={2} c="green.8">Our Story</Title>
                <Text>
                  Ceres FieldCheck was born from a simple observation: **farmers, who feed the world,
                  lose more than half their potential harvest to preventable causes.**
                </Text>
                <Text>
                  Founded in November 2023 by a team with deep agricultural roots and cutting-edge robotics
                  expertise, we're building affordable, intelligent solutions that work for small farmers.
                </Text>
                <Text>
                  Our journey has taken us from university incubators to international recognition, securing
                  **€72,000 in pre-seed funding** and partnerships with major agricultural organizations including
                  GIZ India, ICAR, and the Government of Andhra Pradesh.
                </Text>
                <Text>
                  We've achieved finalist positions in major innovation competitions, been featured in
                  international media, and most importantly—validated our technology with real farmers
                  in the field.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&auto=format&fit=crop&q=80"
                alt="Lush green field"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
                }}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* 4. Why Ceres FieldCheck? (Grid of cards) */}
      <Container size="xl" py={80} ta="center">
        <Stack gap="sm" mb="xl">
          <Title order={2} c="green.8">Why Ceres FieldCheck?</Title>
          <Text size="lg" c="dimmed">What makes us different</Text>
        </Stack>

        <Grid gutter="xl">
          {whyUsCards.map((item, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="xl" radius="lg" h="100%" style={{ border: "1px solid #e8f5e9", backgroundColor: lightBackground}}>
                <Group mb="md">
                  <ThemeIcon size={40} radius="xl" variant="light" color="green">
                    {item.icon}
                  </ThemeIcon>
                  <Title order={3} size="h4" fw={600} c="green.8">{item.title}</Title>
                </Group>
                <Text size="sm" c="dimmed">{item.description}</Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* 5. Our Values (section--light, grid of centered cards) */}
      <Box py={80} style={{ backgroundColor: lightBackground }}>
        <Container size="xl" ta="center">
          <Stack gap="sm" mb="xl">
            <Title order={2} c="green.8">Our Values</Title>
            <Text size="lg" c="dimmed">The principles that guide our work</Text>
          </Stack>

          <Grid gutter="xl">
            {valueCards.map((item, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 6, lg: 4 }}>
                <Card shadow="sm" padding="xl" radius="lg" h="100%" style={{ border: "1px solid #e8f5e9", backgroundColor: lightBackground}}>
                  <Stack gap="sm" align="center" ta="center">
                    <ThemeIcon size={40} radius="xl" variant="gradient" gradient={{ from: 'green.5', to: 'green.7' }}>
                      <IconLeaf size={24} />
                    </ThemeIcon>
                    <Title order={4} fw={600} c="green.8">{item.title}</Title>
                    <Text size="sm" c="dimmed">{item.description}</Text>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 6. Our Journey (Milestones - Timeline-like cards) */}
      <Container size="xl" py={80} ta="center">
        <Stack gap="sm" mb="xl">
          <Title order={2} c="green.8">Our Journey</Title>
          <Text size="lg" c="dimmed">Key milestones and achievements</Text>
        </Stack>

        <Stack gap="xl" maw={800} mx="auto">
          {milestoneData.map((milestone, index) => (
            <Card key={index} shadow="md" padding="xl" radius="lg" style={{backgroundColor: lightBackground, border: "1px solid #e8f5e9",Left: `4px solid ${milestone.year.includes("Future") ? "#4CAF50" : "#8BC34A"}` }} ta="left">
              <Group mb="md">
                <ThemeIcon size={30} radius="xl" variant="filled" color="green">
                  {milestone.icon}
                </ThemeIcon>
                <Title order={3} size="h4" fw={600} c="green.8">
                  {milestone.year}
                </Title>
              </Group>
              <List spacing="xs" size="sm" icon={<IconCheck size={12} style={{ color: "green" }} />}>
                {milestone.details.map((detail, idx) => (
                  <List.Item key={idx}>{detail}</List.Item>
                ))}
              </List>
            </Card>
          ))}
        </Stack>
      </Container>
      
      {/* 7. Awards & Recognition */}
      <Box py={80} style={{ backgroundColor: lightBackground }}>
        <Container size="xl" ta="center">
          <Stack gap="sm" mb="xl">
            <Title order={2} c="green.8">Awards & Recognition</Title>
            <Text size="lg" c="dimmed">Recognized by leading institutions and competitions</Text>
          </Stack>

          <Grid gutter="xl">
            {awards.map((award, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6 }}>
                <Card shadow="sm" padding="lg" radius="lg" h="100%" style={{ border: "1px solid #e9ecef", backgroundColor: lightBackground}} ta="left" >
                  <Group>
                    <ThemeIcon size={35} radius="xl" variant="gradient" gradient={{ from: 'green.5', to: 'green.7' }}>
                      <IconAward size={20} />
                    </ThemeIcon>
                    <Stack gap={2}>
                        <Title order={4} fw={600} c="green.8" style={{ margin: 0 }}>
                            {award.split(":")[0]}
                        </Title>
                        <Text size="sm" c="dimmed">
                            {award.split(":").length > 1 ? award.split(":")[1].trim() : award}
                        </Text>
                    </Stack>
                  </Group>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 8. CTA Section (section--primary) */}
      <Box
        py={80}
        ta="center"
        bg="green.7"
      >
        <Container size="xl">
          <Stack gap="md" align="center">
            <Title order={2} c="white">Join Us in Transforming Agriculture</Title>
            <Text size="lg" c="white" style={{ opacity: 0.9, maxWidth: "700px" }} mb="lg">
              Whether you're a farmer, investor, partner organization, or supporter of sustainable agriculture,
              we'd love to connect with you.
            </Text>
            <Group gap="md" justify="center">
              <Button
                component={Link}
                href="/contact"
                size="lg"
                color="white"
                c="green.7"
                radius="md"
              >
                Get in Touch
              </Button>
              <Button
                component={Link}
                href="/team"
                variant="outline"
                size="lg"
                color="white"
                radius="md"
              >
                Meet Our Team
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}