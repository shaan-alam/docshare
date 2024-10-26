import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Lora } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import Providers from "../components/providers";

export const metadata: Metadata = {
  title: "Docshare",
  description: "Share beautiful docs instantly",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const fatface = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-lora",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.className} ${fatface.variable}`}>
      <body>
        <TRPCReactProvider>
          <Providers>{children}</Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
