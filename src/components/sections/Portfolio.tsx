"use client";

import { Box, Container, Heading, Text, SimpleGrid, Stack, Badge } from "@chakra-ui/react";

const products = [
  {
    name: "Niyam.ai",
    description: "AI-First LegalTech Platform",
    launched: "Sept 22, 2024",
    status: "Launched",
  },
  {
    name: "AutoPosting.ai",
    description: "AI-powered social media automation",
    status: "Active",
  },
  {
    name: "FableShorts",
    description: "AI-driven short content creation",
    status: "Active",
  },
  {
    name: "Coming Soon",
    description: "Next generation AI SaaS solution",
    status: "In Development",
  },
];

export function Portfolio() {
  return (
    <Box py={{ base: 12, sm: 16, md: 20, lg: 24 }} bg="white">
      <Container maxW="7xl" px={{ base: 4, sm: 6, md: 8 }}>
        <Stack gap={{ base: 8, md: 10, lg: 12 }}>
          <Stack gap={{ base: 3, md: 4 }} textAlign="center">
            <Heading fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} px={{ base: 2, sm: 0 }}>
              Building For the Future.. ..TODAY
            </Heading>
            <Text 
              fontSize={{ base: "md", sm: "lg" }} 
              color="gray.600" 
              maxW="3xl" 
              mx="auto"
              px={{ base: 4, sm: 2, md: 0 }}
            >
              At TinyCheque, we pride ourselves on developing and distributing innovative AI-powered SaaS solutions that are transforming industries.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={{ base: 4, sm: 5, md: 6 }}>
            {products.map((product) => (
              <Box
                key={product.name}
                p={{ base: 6, sm: 7 }}
                bg="white"
                borderRadius="2xl"
                borderWidth="1px"
                borderColor="gray.100"
                shadow="sm"
                _hover={{ 
                  shadow: "xl", 
                  borderColor: "blue.300",
                  transform: "translateY(-4px)"
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <Stack gap={{ base: 2.5, sm: 3 }}>
                  <Badge
                    borderRadius="full"
                    fontWeight="600"
                    fontSize="xs"
                    px={3}
                    py={1}
                    colorPalette={
                      product.status === "Launched"
                        ? "green"
                        : product.status === "Active"
                        ? "blue"
                        : "purple"
                    }
                    alignSelf="start"
                  >
                    {product.status}
                  </Badge>
                  <Heading fontSize={{ base: "md", sm: "lg" }}>{product.name}</Heading>
                  <Text fontSize="sm" color="gray.600">
                    {product.description}
                  </Text>
                  {product.launched && (
                    <Text fontSize="xs" color="gray.500">
                      Launched: {product.launched}
                    </Text>
                  )}
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
