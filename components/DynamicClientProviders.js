"use client";

import dynamic from "next/dynamic";

const ClientProviders = dynamic(
  () => import("@/components/ClientProviders").then((mod) => mod.ClientProviders),
  {
    ssr: false,
    loading: () => <div>Loading providers...</div>,
  }
);

export default function DynamicClientProviders({ children }) {
  return <ClientProviders>{children}</ClientProviders>;
}