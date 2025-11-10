"use client";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

// Farmer theme definition
const farmerTheme = createTheme({
  // TODO: Replace 'Inter' with the custom font provided by Adersh and his wife.
  fontFamily: "Inter, sans-serif",
  primaryColor: "green",

  colors: {
    // 🌿 Green palette
    // Expanded shades of green for more depth
    green: [
      "#e8f5e9", // lightest
      "#c8e6c9",
      "#a5d6a7",
      "#81c784",
      "#66bb6a",
      "#4caf50",
      "#43a047",
      "#388e3c", // primary shade
      "#2e7d32",
      "#1b5e20", // darkest
    ],

  },

  primaryShade: 7,

  // Default component settings
  defaultRadius: "md",
  components: {
    Button: {
      defaultProps: {
        radius: "md",
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={farmerTheme} defaultColorScheme="light" withCssVariables>
      <Notifications />
      {children}
    </MantineProvider>
  );
}
