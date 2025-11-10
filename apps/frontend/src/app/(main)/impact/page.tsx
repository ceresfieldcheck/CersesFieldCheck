import { Box } from "@mantine/core";
import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import { ImpactContent } from "../../../components/impact/ImpactContent";

export const metadata: Metadata = {
  title: "Our Impact - Ceres FieldCheck",
  description:
    "Ceres FieldCheck creates sustainable impact through economic transformation, environmental protection, and social empowerment aligned with UN SDGs.",
};
export default function ImpactPage() {
  return (
    <Box style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box component="main" style={{ flex: 1 }}>
        <ImpactContent />
      </Box>
      <Footer />
    </Box>

  );
}