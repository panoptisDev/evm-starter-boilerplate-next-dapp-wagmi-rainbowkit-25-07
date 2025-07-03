import { ClientWeb3Provider } from "@/components/client-web3-provider";

export default function DAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientWeb3Provider>{children}</ClientWeb3Provider>;
}
