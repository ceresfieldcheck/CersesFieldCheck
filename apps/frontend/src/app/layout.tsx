import type { Metadata } from "next";
import { Providers } from "./providers";
import { ColorSchemeScript } from "@mantine/core";

export const metadata: Metadata = {
  title: "CFC Web",
  description: "Next.js + Mantine + NestJS + Prisma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body style={{ backgroundColor: 'white' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
