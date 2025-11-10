"use client";

import {
  Container,
  Grid,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Image,
  Box,
} from "@mantine/core";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export function HeroSection() {
  return (
    <Box
      style={{
        // Light green gradient for a fresh, clean look
        background: "linear-gradient(180deg, #f8f9fa 0%, #e8f5e9 100%)",
        padding: "100px 0",
      }}
    >
      <Container size="xl">
        <Grid align="center">
          {/* Left Section */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">
              {/* Logo + Title */}
              <Group align="center" gap="md" mb="lg">
                {/* <Image
                  src="/assets/MainLogo.svg" // ✅ your logo path
                  alt="Ceres FieldCheck Logo"
                  height={180}
                  width={50}
                /> */}
                <div>
                  <Title
                    order={1}
                    style={{
                      fontSize: "2.2rem",
                      margin: 0,
                      lineHeight: 1.2,
                      textTransform: "none",
                      fontWeight: 700,
                      color: "#2e7d32", // Darker green for better contrast on light bg
                    }}
                  >
                    Ceres FieldCheck
                  </Title>
                  <Text
                    size="sm"
                    c="green.5"
                    fw={600}
                    tt="uppercase"
                    style={{
                      margin: 0,
                      letterSpacing: "0.1em",
                    }}
                  >
                    Keeping World's Fields Healthy
                  </Text>
                </div>
              </Group>

              {/* Eyebrow */}
              <Text
                size="sm"
                c="green.6"
                fw={600}
                tt="uppercase"
                style={{
                  letterSpacing: "0.08em",
                  marginBottom: "-8px",
                }}
              >
                AI-Powered Agricultural Robotics
              </Text>

              {/* Main Title */}
              <Title
                order={1}
                size="3.5rem"
                fw={800}
                style={{
                  color: "#1b5e20", // Darkest green for main title
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.2,
                }}
              >
                Transform Your Farm with LUKE
              </Title>

              {/* Subtitle */}
              <Text
                size="lg"
                c="dimmed" // Standard dimmed text color for readability
                style={{
                  lineHeight: 1.6,
                  maxWidth: "520px",
                }}
              >
                Empowering small farmers with affordable, intelligent robots that remove
                weeds, monitor crop health, and increase yields—all without harmful
                chemicals.
              </Text>

              {/* CTA Buttons */}
              <Group mt="md" gap="md">
                <Button
                  component={Link}
                  href="/details" // Changed to point to the "inform" page
                  size="lg"
                  color="green"
                  radius="md"
                  style={{
                    fontWeight: 600,
                    boxShadow: "0 4px 12px rgba(76, 175, 80, 0.3)",
                  }}
                  rightSection={<IconArrowRight size={18} />}
                >
                  See Our Solution
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outline"
                  size="lg"
                  color="green"
                  radius="md"
                  style={{
                    fontWeight: 600,
                  }}
                >
                  Contact Us
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          {/* Right Section - Video */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  maxWidth: "520px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                }}
              >
                <video
                  src="/assets/wheel-machining.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "500px",
                    display: "block",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
