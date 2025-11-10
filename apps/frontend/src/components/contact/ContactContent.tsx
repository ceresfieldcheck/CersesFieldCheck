"use client";

import {
  Box,
  Container,
  Title,
  Text,
  Grid,
  Stack,
  TextInput,
  Textarea,
  Select,
  Button,
  Group,
  ThemeIcon,
  Card,
  Accordion,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconMail,
  IconBuildingBank,
  IconHeartHandshake,
  IconSpeakerphone,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

export function ContactContent() {
  const lightBackground = "#f8f9fa";

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      inquiryType: "",
      message: "",
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? "Name is too short" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) => (value.trim().length < 10 ? "Message is too short" : null),
      inquiryType: (value) => (value ? null : "Please select an inquiry type"),
    },
  });

  const contactMethods = [
    { icon: <IconMail size={20} />, title: "General Inquiries", value: "info@ceresfieldcheck.com", href: "mailto:info@ceresfieldcheck.com" },
    { icon: <IconBuildingBank size={20} />, title: "Investment Opportunities", value: "investors@ceresfieldcheck.com", href: "mailto:investors@ceresfieldcheck.com" },
    { icon: <IconHeartHandshake size={20} />, title: "Partnership Proposals", value: "partnerships@ceresfieldcheck.com", href: "mailto:partnerships@ceresfieldcheck.com" },
    { icon: <IconSpeakerphone size={20} />, title: "Media & Press", value: "press@ceresfieldcheck.com", href: "mailto:press@ceresfieldcheck.com" },
  ];

  const faqs = [
    { value: "cost", question: "How much does LUKE cost?", answer: "LUKE is available through our Robot-as-a-Service model at €16/day/farmer through cooperatives and NGOs. This includes maintenance, support, and no upfront costs." },
    { value: "crops", question: "What crops does LUKE work with?", answer: "Currently, LUKE is optimized for rice farming with interchangeable wheels that allow adaptation to other crops. We're expanding to additional crop applications based on farmer needs." },
    { value: "accuracy", question: "How accurate is the AI system?", answer: "Our AI crop health inspection system has achieved 98% accuracy in field testing, validated through extensive real-world deployments with partner farmers." },
    { value: "investment", question: "Are you accepting investment?", answer: "Yes, we're currently raising our Series A round. Please contact investors@ceresfieldcheck.com for our pitch deck and financial projections." },
  ];

  return (
    <>
      {/* Page Header */}
      <Box
        pt={150}
        pb={100}
        style={{ background: "linear-gradient(135deg, #388e3c, #1b5e20)" }}
        ta="center"
      >
        <Container size="xl">
          <Title order={1} c="white" mb="md">
            Get in Touch
          </Title>
          <Text
            size="xl"
            c="white"
            style={{ opacity: 0.9, maxWidth: "800px", margin: "0 auto" }}
          >
            We'd love to hear from you. Reach out for partnerships, demos, or any questions about our solutions.
          </Text>
        </Container>
      </Box>

      {/* CONTACT FORM & INFO */}
      <Box py={80} style={{ backgroundColor: "#ffffff" }}>
        <Container size="lg">
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} mb="md">Send Us a Message</Title>
              <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <Stack>
                  <TextInput
                    label="Full Name"
                    placeholder="Your name"
                    required
                    {...form.getInputProps("name")}
                  />
                  <TextInput
                    label="Email Address"
                    placeholder="your@email.com"
                    required
                    {...form.getInputProps("email")}
                  />
                  <TextInput
                    label="Organization"
                    placeholder="Company or NGO name"
                    {...form.getInputProps("organization")}
                  />
                  <Select
                    label="Inquiry Type"
                    placeholder="Please select..."
                    required
                    data={[
                      { value: "demo", label: "Request a Demo" },
                      { value: "partnership", label: "Partnership Inquiry" },
                      { value: "investment", label: "Investment Opportunity" },
                      { value: "press", label: "Press & Media" },
                      { value: "career", label: "Careers" },
                      { value: "general", label: "General Inquiry" },
                    ]}
                    {...form.getInputProps("inquiryType")}
                  />
                  <Textarea
                    label="Message"
                    placeholder="Tell us about your inquiry..."
                    required
                    minRows={4}
                    {...form.getInputProps("message")}
                  />
                  <Button type="submit" color="green" size="md">
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} mb="md">Contact Information</Title>
              <Stack>
                {contactMethods.map((method) => (
                  <Group key={method.title} wrap="nowrap" align="flex-start">
                    <ThemeIcon size={40} radius="50%" color="green">
                      {method.icon}
                    </ThemeIcon>
                    <Box>
                      <Text fw={600}>{method.title}</Text>
                      <Text c="dimmed" component="a" href={method.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {method.value}
                      </Text>
                    </Box>
                  </Group>
                ))}
              </Stack>

              <Card mt="xl" padding="lg" radius="md" withBorder style={{ backgroundColor: lightBackground }}>
                <Title order={3} size="h4" mb="md">Office Locations</Title>
                <Stack>
                  <Group wrap="nowrap" align="flex-start">
                    <ThemeIcon size={30} radius="50%" variant="light" color="green">
                      <IconMapPin size={16} />
                    </ThemeIcon>
                    <Box>
                      <Text fw={600}>Germany (Headquarters)</Text>
                      <Text c="dimmed" size="sm">RWTH Aachen Centre for Innovation, Aachen</Text>
                    </Box>
                  </Group>
                  <Group wrap="nowrap" align="flex-start">
                    <ThemeIcon size={30} radius="50%" variant="light" color="green">
                      <IconMapPin size={16} />
                    </ThemeIcon>
                    <Box>
                      <Text fw={600}>India Operations</Text>
                      <Text c="dimmed" size="sm">IIT Kanpur, Kanpur</Text>
                    </Box>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* MAP SECTION */}
# Dependencies
node_modules/

# Build artifacts
dist/
.next/

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE and editor files
.vscode/
.idea/

# Turbopack
.turbo/

# Mac OS
.DS_Store
# Dependencies
node_modules/

# Build artifacts
dist/
.next/

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE and editor files
.vscode/
.idea/

# Turbopack
.turbo/

# Mac OS
.DS_Store
 */}

      {/* FAQ SECTION */}
      <Box py={80} style={{ backgroundColor: "#ffffff" }}>
        <Container size="md">
          <Stack align="center" mb="xl" ta="center">
            <Title order={2} c="green.8">Frequently Asked Questions</Title>
            <Text size="lg" c="dimmed">Quick answers to common questions</Text>
          </Stack>
          <Accordion variant="separated">
            {faqs.map((faq) => (
              <Accordion.Item key={faq.value} value={faq.value}>
                <Accordion.Control>{faq.question}</Accordion.Control>
                <Accordion.Panel>{faq.answer}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </Box>
    </>
  );
}