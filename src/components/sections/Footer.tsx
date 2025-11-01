"use client";

import { Box, Container, Heading, Text, SimpleGrid, Stack, HStack, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

const footerLinks = {
  Services: [
    { name: "AI SaaS Development", href: "#" },
    { name: "Joint Ventures", href: "https://forms.tinycheque.com/jv" },
    { name: "Partnership", href: "https://forms.tinycheque.com/jv" },
    { name: "Consultation", href: "https://cal.com/team/tinycheque/15" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "https://blog.tinycheque.com" },
    { name: "Contact", href: "#" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <Box 
      bgGradient="to-b"
      gradientFrom="gray.900"
      gradientTo="gray.950"
      color="white" 
      py={{ base: 12, sm: 14, md: 16, lg: 20 }}
      borderTopWidth="1px"
      borderTopColor="gray.800"
    >
      <Container maxW="7xl" px={{ base: 4, sm: 6, md: 8 }}>
        <Stack gap={{ base: 10, md: 12, lg: 14 }}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={{ base: 8, sm: 10 }}>
            <Stack gap={{ base: 4, md: 5 }}>
              <Heading 
                fontSize={{ base: "2xl", sm: "3xl" }}
                bgGradient="to-r"
                gradientFrom="blue.400"
                gradientTo="cyan.400"
                bgClip="text"
                fontWeight="800"
              >
                TinyCheque
              </Heading>
              <Text color="gray.300" fontSize="sm" lineHeight="tall">
                India&apos;s First AI-First SaaS Venture Studio
              </Text>
            </Stack>

            {Object.entries(footerLinks).map(([category, links]) => (
              <Stack key={category} gap={{ base: 3, md: 4 }}>
                <Heading 
                  fontSize={{ base: "sm", sm: "md" }} 
                  color="white"
                  fontWeight="700"
                  letterSpacing="wide"
                >
                  {category}
                </Heading>
                <Stack gap={{ base: 2, md: 2.5 }}>
                  {links.map((link) => (
                    <ChakraLink
                      key={link.name}
                      href={link.href}
                      color="gray.400"
                      fontSize="sm"
                      _hover={{ 
                        color: "blue.400",
                        transform: "translateX(4px)"
                      }}
                      transition="all 0.2s"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </ChakraLink>
                  ))}
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>

          <HStack 
            gap={{ base: 3, sm: 4 }} 
            flexWrap="wrap" 
            justify="center"
            pt={{ base: 6, md: 8 }}
            mt={{ base: 2, md: 0 }}
            borderTopWidth="1px"
            borderColor="gray.700"
          >
            <ChakraLink href="#" color="gray.400" fontSize="sm" _hover={{ color: "blue.400" }}>
              Twitter
            </ChakraLink>
            <ChakraLink href="#" color="gray.400" fontSize="sm" _hover={{ color: "blue.400" }}>
              LinkedIn
            </ChakraLink>
            <ChakraLink href="#" color="gray.400" fontSize="sm" _hover={{ color: "blue.400" }}>
              GitHub
            </ChakraLink>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
