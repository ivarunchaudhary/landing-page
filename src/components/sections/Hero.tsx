"use client";

import { Box, Container, Heading, Text, Stack, Button } from "@chakra-ui/react";
import Link from "next/link";

export function Hero() {
  return (
    <Box 
      position="relative"
      bgGradient="to-br"
      gradientFrom="gray.900"
      gradientTo="gray.800"
      color="white" 
      py={{ base: 20, sm: 24, md: 28, lg: 36 }}
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: "to-br",
        gradientFrom: "blue.600/20",
        gradientTo: "transparent",
        pointerEvents: "none",
      }}
    >
      <Container maxW="7xl" px={{ base: 4, sm: 6, md: 8 }} position="relative" zIndex={1}>
        <Stack gap={{ base: 8, md: 10 }} align="center" textAlign="center">
          <Heading
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl", xl: "7xl" }}
            fontWeight="800"
            lineHeight="1.1"
            px={{ base: 2, sm: 4 }}
            letterSpacing="-0.02em"
          >
            India&apos;s First AI-First{" "}
            <Text 
              as="span" 
              bgGradient="to-r"
              gradientFrom="blue.400"
              gradientTo="cyan.400"
              bgClip="text"
            >
              SaaS Venture Studio
            </Text>
          </Heading>
          
          <Text 
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }} 
            maxW="3xl" 
            color="gray.200"
            px={{ base: 2, sm: 4 }}
            fontWeight="400"
            lineHeight="1.6"
          >
            Building the Future of SaaS with AI-Driven Products and Strategic Partnerships
          </Text>
          
          <Stack 
            direction={{ base: "column", sm: "row" }} 
            gap={4} 
            pt={{ base: 6, md: 8 }}
            w={{ base: "full", sm: "auto" }}
            px={{ base: 4, sm: 0 }}
          >
            <Button 
              size={{ base: "lg", sm: "xl" }} 
              colorPalette="blue" 
              px={{ base: 8, sm: 10 }}
              py={{ base: 6, sm: 7 }}
              w={{ base: "full", sm: "auto" }}
              bgGradient="to-r"
              gradientFrom="blue.500"
              gradientTo="blue.600"
              _hover={{
                gradientFrom: "blue.600",
                gradientTo: "blue.700",
                transform: "translateY(-2px)",
                shadow: "xl",
              }}
              transition="all 0.2s"
              fontWeight="600"
              asChild
            >
              <Link href="https://forms.tinycheque.com/jv">
                Partner with us
              </Link>
            </Button>
            <Button 
              size={{ base: "lg", sm: "xl" }} 
              variant="outline" 
              borderColor="blue.400"
              color="white"
              px={{ base: 8, sm: 10 }}
              py={{ base: 6, sm: 7 }}
              w={{ base: "full", sm: "auto" }}
              _hover={{
                bg: "blue.500/10",
                borderColor: "blue.300",
                transform: "translateY(-2px)",
              }}
              transition="all 0.2s"
              fontWeight="600"
              asChild
            >
              <Link href="https://tinycheque-blog.vercel.app" target="_blank" rel="noopener noreferrer">
                Read Our Blog
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
