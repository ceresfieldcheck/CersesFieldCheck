import { Box } from "@mantine/core";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { HeroSection } from "../../components/home/HeroSection";
import { FeaturesSection } from "../../components/home/FeaturesSection";
import { StatsSection } from "../../components/home/StatsSection";

export default function HomePage() {
  return (
    <Box style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box component="main" style={{ flex: 1 }}>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
      </Box>
      <Footer />
    </Box>
  );
}