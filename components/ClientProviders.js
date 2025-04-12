"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "../src/lib/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function ClientProviders({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          {children}
        </WagmiProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}