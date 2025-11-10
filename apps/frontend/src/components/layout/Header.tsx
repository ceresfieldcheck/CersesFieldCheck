"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Box,
  Group,
  Button,
  Image,
  Burger,
  Drawer,
  Stack,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { motion } from "framer-motion";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Details", href: "/details" },
    { label: "Impact", href: "/impact" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  const authButtons = [
    { label: "Login", href: "/login", variant: "outline" as const },
    { label: "Register", href: "/register", variant: "filled" as const },
  ];

  return (
    <Box
      component="header"
      style={{
        background: "rgba(255, 255, 255, 0.8)", // White, slightly transparent background
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "0 24px",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e9ecef",
      }}
    >
      {/* ---- Logo ---- */}
      <motion.div
        onClick={() => router.push("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          width: "150px",
        }}
      >
        <Image
          src="/assets/MainLogo.svg"
          alt="CFC Logo"
          height={150}
          fit="contain"
        />
      </motion.div>

      {/* ---- Desktop Navigation ---- */}
      <Group visibleFrom="sm" gap="xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={item.href}
                style={{
                  position: "relative",
                  textDecoration: "none",
                  color: "#1A1B1E", // Dark text color
                  fontWeight: 500,
                  fontSize: "15px",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  transition: "all 0.25s ease",
                }}
              >
                {item.label}
                {/* underline effect */}
                <Box
                  component="span"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#43a047", // Green underline
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "center",
                    opacity: isActive ? 1 : 0,
                    transition: "transform 0.3s ease, opacity 0.3s ease",
                  }}
                  className="nav-underline"
                />
              </Link>
            </motion.div>
          );
        })}

        {/* <Group gap="sm">
          {authButtons.map((button) => (
            <motion.div key={button.label} whileHover={{ scale: 1.05 }}>
              <Button
                variant={button.variant}
                color="green"
                component={Link}
                href={button.href}
                size="sm"
                radius="md"
                style={{
                  fontWeight: 600,
                  letterSpacing: "0.4px",
                  boxShadow:
                    button.variant === "filled"
                      ? "0 4px 12px rgba(0,0,0,0.15)"
                      : "none",
                }}
              >
                {button.label}
              </Button>
            </motion.div>
          ))}
        </Group> */}
      </Group>

      {/* ---- Mobile Menu ---- */}
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm" // Only show on small screens
        color="gray"
        size="sm"
        aria-label="Toggle navigation"
      />

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="260px"
        overlayProps={{ opacity: 0.4, blur: 2 }}
        transitionProps={{
          transition: "slide-right",
          duration: 250,
        }}
        styles={{
          header: { background: "#fff" },
          body: {
            background: "#f9f9f9",
            padding: "20px",
          },
        }}
      >
        <Stack gap="lg">
          <Divider
            label="Navigation"
            labelPosition="left"
            color="green"
            style={{ fontWeight: 600 }}
          />
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={close}
              style={{
                textDecoration: "none",
                color: pathname === item.href ? "#2e7d32" : "#373A40",
                fontWeight: 500,
                padding: "10px 0",
                borderBottom: "1px solid #e9ecef",
                transition: "color 0.3s ease",
              }}
            >
              {item.label}
            </Link>
          ))}

          <Divider
            label="Account"
            labelPosition="left"
            color="green"
            style={{ fontWeight: 600 }}
          />
          {authButtons.map((button) => (
            <motion.div key={button.label} whileTap={{ scale: 0.97 }}>
              <Button
                variant={button.variant}
                color="green"
                fullWidth
                radius="md"
                component={Link}
                href={button.href}
                onClick={close}
              >
                {button.label}
              </Button>
            </motion.div>
          ))}
        </Stack>
      </Drawer>

      {/* ---- underline hover styling ---- */}
      <style jsx global>{`
        a:hover .nav-underline {
          transform: scaleX(1) !important;
          opacity: 1 !important;
        }
      `}</style>
    </Box>
  );
}
