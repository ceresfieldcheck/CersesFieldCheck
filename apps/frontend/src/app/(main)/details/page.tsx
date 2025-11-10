import { Box } from "@mantine/core";
import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { DetailsContent } from "../../../components/details/DetailsContent";

export default function DetailsPage() {
  return (
    <Box style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box component="main" style={{ flex: 1 }}>
        <DetailsContent />
      </Box>
      <Footer />
    </Box>
  );
}
