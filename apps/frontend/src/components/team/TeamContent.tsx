"use client";

import {
  Box,
  Container,
  Title,
  Text,
  Grid,
  Card,
  Stack,
  Avatar,
  SimpleGrid,
} from "@mantine/core";
import Image from "next/image";

const foundingTeam = [
  {
    name: "Poojitha Reddy Nellipudi",
    role: "Chief Executive Officer",
    education: "M.Sc. Robotic Systems Engineering, RWTH Aachen University",
    bio: "Robotics expert specializing in kinematics, machine learning, and computer vision. EXIST Women Scholar with a farming background, driving the mission to empower small farmers globally.",
    image: "/assets/poojitha.jpg",
  },
  {
    name: "Hruthik Chindam",
    role: "Chief Operating Officer",
    education: "M.Sc. Robotic Systems Engineering, RWTH Aachen University",
    bio: "AI and control algorithms specialist leading autonomous SLAM navigation for LUKE. Experienced in manufacturing operations with ISO 9001:2015 implementation.",
    image: "/assets/hruthik.jpg", // Placeholder path
  },
  {
    name: "Svyatoslav Gusev",
    role: "Chief Financial Officer",
    education: "B.Sc. Management, Philosophy & Economics, Frankfurt School",
    bio: "Business strategy leader with fintech startup experience. Bloomberg certified with investment banking training, specializing in scaling businesses in developing markets.",
    image: "/assets/svyatoslav.jpeg",
  },
  {
    name: "Adersh Maruvattu",
    role: "Chief Technology Officer",
    education: "PhD Candidate in Robotics, IIT Kanpur",
    bio: "Robotics PhD specialist in path planning and mobile manipulators for rough terrains. DAAD Innovators Tandem competition winner with exceptional technical contributions.",
    image: "/assets/Adersh.jpg", // Placeholder path
  },
];

const strategicAdvisor = {
  name: "Radhakrishna",
  role: "Strategic Advisor",
  education: "50+ Years of Farming Experience",
  bio: "Radhakrishna brings over five decades of hands-on farming experience. His deep understanding of small-scale agriculture, crop management, and the challenges farmers face daily ensures our solutions are grounded in real-world practicality.",
};

const advisoryBoard = [
    { name: "Phillip Travers", role: "AI Coach & Strategic Communications" },
    { name: "Anne Vallersnes", role: "Sustainable Development Expert" },
    { name: "Johannes Weisser", role: "Legal Consultant & International Relations" },
    { name: "Nitesh Saini", role: "Strategic Advisor & Network Catalyst" },
    { name: "Prof. Dr.-Ing. Dr. h. c. Burkhard Corves", role: "EXIST Mentor - RWTH Aachen" },
    { name: "Industry & Academic Experts", role: "Extended Advisory Network" },
];

const institutionalSupport = [
    { name: "IGMR - RWTH Aachen University", description: "Mentor institution guiding development of LUKE, especially SLAM algorithms." },
    { name: "Frankfurt School Entrepreneurship Center", description: "Partner institution providing business support and network expansion." },
    { name: "IIT Kanpur SIIC", description: "Incubation center providing R&D support and testing facilities." },
    { name: "Hessian.AI", description: "Grant support and AI startup stipendium." },
    { name: "EXIST Women", description: "Stipendium supporting female founders in deep-tech." },
    { name: "Hessen Ideen", description: "Regional innovation program supporting technology startups." },
];


export function TeamContent() {
  const lightBackground = "#f8f9fa";

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
            Meet Our Team
          </Title>
          <Text
            size="xl"
            c="white"
            style={{ opacity: 0.9, maxWidth: "800px", margin: "0 auto" }}
          >
            Engineers, entrepreneurs, and agricultural experts united by a mission to transform farming
          </Text>
        </Container>
      </Box>

      {/* FOUNDING TEAM */}
      <Box py={80} style={{ backgroundColor: lightBackground }}>
        <Container size="lg">
          <Stack align="center" mb="xl" ta="center">
            <Title order={2} c="green.8">Founding Team</Title>
            <Text size="lg" c="dimmed">The visionaries behind Ceres FieldCheck</Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
            {foundingTeam.map((member) => (
              <Card key={member.name} shadow="sm" padding="lg" radius="lg" withBorder h="100%">
                <Stack align="center">
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    size={120}
                    radius="50%"
                    mb="md"
                  />
                  <Title order={4} ta="center">{member.name}</Title>
                  <Text c="green.7" fw={600} size="sm" tt="uppercase">{member.role}</Text>
                  <Text c="dimmed" size="xs" ta="center">{member.education}</Text>
                  <Text size="sm" c="dimmed" ta="center" mt="sm">
                    {member.bio}
                  </Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* STRATEGIC ADVISOR */}
      <Box py={80} style={{ backgroundColor: "#ffffff" }}>
        <Container size="md">
          <Stack align="center" mb="xl" ta="center">
            <Title order={2} c="green.8">Strategic Advisor</Title>
            <Text size="lg" c="dimmed">Agricultural expertise guiding our mission</Text>
          </Stack>
          <Card shadow="sm" padding="xl" radius="lg" withBorder>
            <Stack align="center">
              <Avatar size={100} radius="50%" color="green" mb="md">
                R
              </Avatar>
              <Title order={3}>{strategicAdvisor.name}</Title>
              <Text c="green.7" fw={600} size="sm" tt="uppercase">{strategicAdvisor.role}</Text>
              <Text c="dimmed" size="sm" fw={500}>{strategicAdvisor.education}</Text>
              <Text size="sm" c="dimmed" ta="center" mt="sm">
                {strategicAdvisor.bio}
              </Text>
            </Stack>
          </Card>
        </Container>
      </Box>

      {/* ADVISORY BOARD */}
      <Box py={80} style={{ backgroundColor: lightBackground }}>
        <Container size="lg">
          <Stack align="center" mb="xl" ta="center">
            <Title order={2} c="green.8">Advisory Board</Title>
            <Text size="lg" c="dimmed">Expert guidance across multiple domains</Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
            {advisoryBoard.map((advisor) => (
              <Card key={advisor.name} shadow="sm" padding="lg" radius="lg" withBorder h="100%">
                <Stack>
                  <Title order={4} c="green.9">{advisor.name}</Title>
                  <Text c="green.7" size="sm" fw={600}>{advisor.role}</Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* INSTITUTIONAL SUPPORT */}
      <Box py={80} style={{ backgroundColor: "#ffffff" }}>
        <Container size="lg">
          <Stack align="center" mb="xl" ta="center">
            <Title order={2} c="green.8">Institutional Support</Title>
            <Text size="lg" c="dimmed">Academic and incubation partners</Text>
          </Stack>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
            {institutionalSupport.map((org) => (
              <Card key={org.name} shadow="sm" padding="lg" radius="lg" withBorder h="100%">
                <Stack>
                  <Title order={4} c="green.9">{org.name}</Title>
                  <Text c="dimmed" size="sm">{org.description}</Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}