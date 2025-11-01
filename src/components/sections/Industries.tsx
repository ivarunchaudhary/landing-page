"use client";

import { Box, Container, Heading, Text, SimpleGrid, Stack } from "@chakra-ui/react";

const industries = [
  {
    title: "LegalTech",
    description: "From our flagship product niyam.ai to ongoing legal industry collaborations, we're transforming legal practices through Artificial Intelligence.",
  },
  {
    title: "MarTech",
    description: "Enhancing customer engagement and marketing strategies through AI-powered tools that optimize campaigns and drive higher ROI.",
  },
  {
    title: "SalesTech",
    description: "Empowering sales teams with AI-driven insights, lead scoring, and sales funnel automation to close deals faster and scale efficiently.",
  },
];

export function Industries() {
  return (
    <Box py={{ base: 12, sm: 16, md: 20, lg: 24 }} bg="gray.900" color="white">
      <Container maxW="7xl" px={{ base: 4, sm: 6, md: 8 }}>
        <Stack gap={{ base: 8, md: 10, lg: 12 }}>
          <Stack gap={{ base: 3, md: 4 }} textAlign="center">
            <Heading fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} px={{ base: 2, sm: 0 }}>
              Scale with AI
            </Heading>
            <Text 
              fontSize={{ base: "md", sm: "lg" }} 
              color="gray.300" 
              maxW="3xl" 
              mx="auto"
              px={{ base: 4, sm: 2, md: 0 }}
            >
              By focusing on industry-specific solutions, TinyCheque accelerates the development and scaling of SaaS products that make a measurable impact.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={{ base: 5, sm: 6, md: 8 }}>
            {industries.map((industry) => (
              <Box
                key={industry.title}
                p={{ base: 6, sm: 7, md: 8 }}
                bgGradient="to-br"
                gradientFrom="gray.800"
                gradientTo="gray.900"
                borderRadius="2xl"
                borderWidth="1px"
                borderColor="gray.700"
                shadow="lg"
                _hover={{ 
                  borderColor: "blue.400",
                  shadow: "2xl",
                  transform: "translateY(-4px)"
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <Stack gap={{ base: 3, md: 4 }}>
                  <Heading fontSize={{ base: "xl", md: "2xl" }} color="blue.400">
                    {industry.title}
                  </Heading>
                  <Text fontSize={{ base: "sm", md: "md" }} color="gray.300">{industry.description}</Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
