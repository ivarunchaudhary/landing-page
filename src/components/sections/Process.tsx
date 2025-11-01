"use client";

import { Box, Container, Heading, Text, SimpleGrid, Stack, Badge } from "@chakra-ui/react";

const steps = [
  {
    step: "Step 1",
    title: "Share Your Vision",
    description: "Collaborate with TinyCheque to co-create AI SaaS products that revolutionize industries.",
  },
  {
    step: "Step 2",
    title: "Develop Solution",
    description: "We provide the technology and expertise to transform ideas into successful AI-driven SaaS solutions.",
  },
  {
    step: "Step 3",
    title: "Launch and Scale",
    description: "Partner with us to launch and scale AI-powered software solutions that reach new markets and customers.",
  },
];

const timeline = [
  { time: "48 Hours", label: "Response Time" },
  { time: "14 Days", label: "To Receive an offer" },
  { time: "8 Weeks", label: "To Close the deal" },
];

export function Process() {
  return (
    <Box py={{ base: 12, sm: 16, md: 20, lg: 24 }} bg="white">
      <Container maxW="7xl" px={{ base: 4, sm: 6, md: 8 }}>
        <Stack gap={{ base: 8, md: 10, lg: 12 }}>
          <Stack gap={{ base: 3, md: 4 }} textAlign="center">
            <Heading fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} px={{ base: 2, sm: 0 }}>
              AI-Solutions
            </Heading>
            <Text 
              fontSize={{ base: "md", sm: "lg" }} 
              color="gray.600" 
              maxW="3xl" 
              mx="auto"
              px={{ base: 4, sm: 2, md: 0 }}
            >
              TinyCheque reduces the uncertainty of SaaS product development by offering a clear and proven path to success, whether you&apos;re building with us or partnering to scale.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={{ base: 4, sm: 6, md: 8 }}>
            {steps.map((item) => (
              <Box
                key={item.step}
                p={{ base: 6, sm: 7, md: 8 }}
                bg="white"
                borderRadius="2xl"
                borderWidth="1px"
                borderColor="gray.100"
                shadow="sm"
                _hover={{ 
                  shadow: "2xl", 
                  transform: "translateY(-6px)",
                  borderColor: "blue.200"
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <Stack gap={{ base: 3, md: 4 }}>
                  <Badge 
                    colorPalette="blue" 
                    alignSelf="start" 
                    px={3} 
                    py={1}
                    borderRadius="full"
                    fontWeight="600"
                    fontSize="xs"
                  >
                    {item.step}
                  </Badge>
                  <Heading fontSize={{ base: "lg", md: "xl" }}>{item.title}</Heading>
                  <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">{item.description}</Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>

          <Box mt={{ base: 8, md: 10, lg: 12 }}>
            <Heading 
              fontSize={{ base: "xl", sm: "2xl", md: "3xl" }} 
              textAlign="center" 
              mb={{ base: 6, md: 8 }}
              px={{ base: 2, sm: 0 }}
            >
              Process & Methodologies
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={{ base: 4, sm: 6, md: 8 }}>
              {timeline.map((item) => (
                <Box
                  key={item.label}
                  textAlign="center"
                  p={{ base: 6, sm: 7, md: 8 }}
                  bgGradient="to-br"
                  gradientFrom="blue.50"
                  gradientTo="blue.100/50"
                  borderRadius="2xl"
                  borderWidth="1px"
                  borderColor="blue.100"
                  shadow="sm"
                  _hover={{
                    shadow: "lg",
                    borderColor: "blue.200"
                  }}
                  transition="all 0.3s"
                >
                  <Text fontSize={{ base: "3xl", sm: "4xl" }} fontWeight="bold" color="blue.600">
                    {item.time}
                  </Text>
                  <Text fontSize={{ base: "md", sm: "lg" }} mt={2} color="gray.700">
                    {item.label}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
