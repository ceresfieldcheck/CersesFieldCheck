import { Box } from "@mantine/core";
import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Metadata } from "next";
import { ContactContent } from "../../../components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us - Ceres FieldCheck",
  description:
    "Contact Ceres FieldCheck for partnerships, investment opportunities, product demos, or general inquiries about our agricultural robotics solutions.",
};

export default function ContactPage() {
  return (
    <Box style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box component="main" style={{ flex: 1 }}>
        <ContactContent />
      </Box>
      <Footer />
    </Box>
  );
}