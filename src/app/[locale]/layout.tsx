import type { Metadata } from "next";
import "@/styles/globals.css";
import { I18nProviderClient } from "@/locales/client";

export const metadata: Metadata = {
  title: "Web3 DApp",
  description: "Experience the power of decentralized applications",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body>
        <I18nProviderClient locale={locale}>
          {children}
        </I18nProviderClient>
      </body>
    </html>
  );
}
