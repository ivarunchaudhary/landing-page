"use client";

import { Box, Container, Heading, Text, SimpleGrid, Stack, Button } from "@chakra-ui/react";
import Link from "next/link";

const verticals = [
  {
    title: "Building Proprietary AI SaaS Solutions",
    subtitle: "AI-driven software products",
    description: "At TinyCheque, we develop our own AI-driven software products, focused on addressing specific industry pain points.",
    features: [
      "Innovative Products: Built with the future in mind, our SaaS products are designed to be scalable and adaptable to industry needs.",
      "Problem-Solving Focus: Each product solves a unique challenge for businesses, driven by AI-powered automation and efficiency.",
    ],
  },
  {
    title: "Joint Ventures & Partnerships",
    subtitle: "Joint Ventures",
    description: "Our second vertical involves forming Joint Ventures (JVs) with entrepreneurs and businesses to co-create and co-distribute innovative SaaS products.",
    features: [
      "Shared Expertise: We partner with visionaries to co-develop software solutions that tap into emerging market needs.",
      "Strategic Distribution: Using our distribution channels and market insights, we scale products for maximum impact.",
    ],
  },
];

export function Verticals() {
  return (
    <Box py={{ base: 12, sm: 16, md: 20, lg: 24 }} bg="gray.50">
      <Container maxW="7xl" px={{ base: 4, sm: 6, md: 8 }}>
        <Stack gap={{ base: 8, md: 10, lg: 12 }}>
          <Stack gap={{ base: 3, md: 4 }} textAlign="center">
            <Heading fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} px={{ base: 2, sm: 0 }}>
              Product & Service
            </Heading>
            <Text 
              fontSize={{ base: "md", sm: "lg" }} 
              color="gray.600" 
              maxW="3xl" 
              mx="auto"
              px={{ base: 4, sm: 2, md: 0 }}
            >
              Balance the need to manage new opportunities with the need to optimize existing businesses
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 6, md: 8 }}>
            {verticals.map((vertical) => (
              <Box
                key={vertical.title}
                p={{ base: 6, sm: 7, md: 8 }}
                bg="white"
                borderRadius="2xl"
                borderWidth="1px"
                borderColor="gray.100"
                shadow="md"
                _hover={{ 
                  shadow: "2xl",
                  transform: "translateY(-4px)",
                  borderColor: "blue.200"
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <Stack gap={{ base: 3, md: 4 }}>
                  <Text fontSize="sm" fontWeight="bold" color="blue.600" textTransform="uppercase">
                    {vertical.subtitle}
                  </Text>
                  <Heading fontSize={{ base: "xl", md: "2xl" }}>{vertical.title}</Heading>
                  <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">{vertical.description}</Text>
                  <Stack gap={{ base: 1.5, md: 2 }}>
                    {vertical.features.map((feature, idx) => (
                      <Text key={idx} fontSize={{ base: "xs", sm: "sm" }} color="gray.600">
                        • {feature}
                      </Text>
                    ))}
                  </Stack>
                  <Button
                    variant="plain"
                    colorPalette="blue"
                    alignSelf="start"
                    fontWeight="600"
                    _hover={{
                      textDecoration: "none",
                      transform: "translateX(4px)"
                    }}
                    transition="all 0.2s"
                    asChild
                  >
                    <Link href="https://tinycheque.com">
                      Learn More →
                    </Link>
                  </Button>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
