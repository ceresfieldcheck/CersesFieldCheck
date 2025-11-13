"use client";

import {
  Box,
  Group,
  Text,
  Stack,
  Grid,
  Anchor,
  Title,
  ActionIcon,
  TextInput,
  Button,
} from "@mantine/core";
import { IconMail, IconMapPin, IconBrandTwitter, IconBrandFacebook, IconBrandLinkedin, IconArrowRight } from "@tabler/icons-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <IconMail size={16} />,
      label: "Email",
      value: "ceresfieldcheck@gmail.com",
      href: "mailto:ceresfieldcheck@gmail.com",
    },
    // {
    //   icon: <IconPhone size={16} />,
    //   label: "Phone",
    //   value: "+91 98765 43210",
    //   href: "tel:+919876543210",
    // },
    {
      icon: <IconMapPin size={16} />,
      label: "Address",
      value: "Agricultural Innovation Hub, India",
      href: "#",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Details", href: "/details" },
    { label: "Contact", href: "/contact" },
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
  ];

  return (
    <Box
      component="footer"
      style={{
        backgroundColor: "#1b5e20", // Dark green from theme
        color: "#e0e0e0", // Light gray for default text
        padding: "40px 0 20px 0",
      }}
    >
      <Box style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <Grid gutter="xl">
          {/* Brand Section */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="md">
              <Group>
                <div>
                  <Title order={3} c="white" style={{ fontFamily: "Inter, sans-serif" }}>
                    CFC
                  </Title>
                  {/* <Image
                    src="/assets/MainLogo1.svg"
                    alt="CFC Logo"
                    height={150}
                    fit="contain"
                  /> */}
                  <Text size="sm" c="white" style={{ opacity: 0.8 }}>
                    Ceres Field Check
                  </Text>
                </div>
              </Group>
              
              <Text size="sm" c="white" style={{ opacity: 0.9, lineHeight: 1.6 }}>
                Empowering farmers with cutting-edge technology and intelligent robots 
                for sustainable agriculture and enhanced crop yields.
              </Text>

              <Group gap="sm">
                <ActionIcon
                  variant="subtle"
                  color="white"
                  size="lg"
                  component="a"
                  href="#"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <IconBrandTwitter size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  color="white"
                  size="lg"
                  component="a"
                  href="#"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <IconBrandFacebook size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  color="white"
                  size="lg"
                  component="a"
                  href="#"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <IconBrandLinkedin size={18} />
                </ActionIcon>
              </Group>
            </Stack>
          </Grid.Col>

          {/* Quick Links */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap="md">
              <Title order={5} c="white" style={{ fontFamily: "Inter, sans-serif" }}>
                Quick Links
              </Title>
              {quickLinks.map((link) => (
                <Anchor
                  key={link.label}
                  href={link.href}
                  c="white"
                  size="sm"
                  style={{
                    opacity: 0.9,
                    textDecoration: "none",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0.9";
                  }}
                >
                  {link.label}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>

          {/* Services */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap="sm">
              <Title order={5} c="white" tt="uppercase" size="xs" fw={600} lts="1px">
                Stay Updated
              </Title>
              <Text size="sm" c="white" style={{ opacity: 0.9 }}>
                Subscribe to our newsletter for the latest on our technology and impact.
              </Text>
              <Group gap="xs">
                <TextInput
                  placeholder="Your email"
                  variant="filled"
                  styles={{
                    input: { // Adjust input field for dark green background
                      backgroundColor: '#2e7d32', // Slightly lighter green
                      border: '1px solid #388e3c', // Green border
                      color: 'white',
                      '::placeholder': { color: 'rgba(255,255,255,0.7)' },
                    },
                  }}
                />
                <Button color="green" variant="light" p="xs">
                  <IconArrowRight size={18} />
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          {/* Contact Info */}
          <Grid.Col span={{ base: 12, md: 2 }}>
            <Stack gap="md">
              <Title order={5} c="white" style={{ fontFamily: "Inter, sans-serif" }}>
                Contact Info
              </Title>
              {contactInfo.map((contact) => (
                <Group key={contact.label} gap="sm" align="flex-start">
                  <div style={{ color: "white", opacity: 0.8, marginTop: "2px" }}>
                    {contact.icon}
                  </div>
                  <div>
                    <Text size="xs" c="white" style={{ opacity: 0.7 }}>
                      {contact.label}
                    </Text>
                    <Anchor
                      href={contact.href}
                      c="white"
                      size="sm"
                      style={{
                        textDecoration: "none",
                        opacity: 0.9,
                      }}
                    >
                      {contact.value}
                    </Anchor>
                  </div>
                </Group>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: "30px",
            paddingTop: "20px",
          }}
        >
          <Group justify="space-between" align="center">
            <Text size="sm" c="white" style={{ opacity: 0.8 }}>
              © {currentYear} Ceres Field Check. All rights reserved.
            </Text>
            <Group gap="lg">
              <Anchor
                href="#"
                c="white"
                size="sm"
                style={{
                  opacity: 0.8,
                  textDecoration: "none",
                }}
              >
                Privacy Policy
              </Anchor>
              <Anchor
                href="#"
                c="white"
                size="sm"
                style={{
                  opacity: 0.8,
                  textDecoration: "none",
                }}
              >
                Terms of Service
              </Anchor>
            </Group>
          </Group>
        </div>
      </Box>
      <style jsx global>{`
        .footer-link:hover {
          color: #ffffff !important;
        }
      `}</style>
    </Box>
  );
}
