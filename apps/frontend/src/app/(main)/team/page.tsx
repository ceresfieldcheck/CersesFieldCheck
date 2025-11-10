import { Box } from "@mantine/core";
import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import { TeamContent } from "../../../components/team/TeamContent";

export const metadata: Metadata = {
  title: "Our Team - Ceres FieldCheck",
  description:
    "Meet the Ceres FieldCheck team - Engineers, entrepreneurs, and agricultural experts working together to transform farming.",
};

export default function TeamPage() {
  return (
    <Box style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box component="main" style={{ flex: 1 }}>
        <TeamContent />
      </Box>
      <Footer />
    </Box>
  );
}