"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

// Dynamic import with no SSR
const Web3ProviderComponent = dynamic(
  () => import("./web3-provider").then((mod) => ({ default: mod.Web3Provider })),
  {
    ssr: false,
    loading: () => <div>Loading Web3...</div>,
  }
);

export const ClientWeb3Provider = ({ children }: { children: ReactNode }) => {
  return <Web3ProviderComponent>{children}</Web3ProviderComponent>;
};
