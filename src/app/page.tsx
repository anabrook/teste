"use client";

import RegisterUsers from "@/components/RegisterUsers";
import TesteForm from "@/components/TesteForm";

import {
  ChakraProvider,
  Flex,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";

import { QueryClient, QueryClientProvider } from "react-query";
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
});
const queryClient = new QueryClient();

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Flex flexDirection={"column"}></Flex>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
