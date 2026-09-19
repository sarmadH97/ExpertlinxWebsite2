import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "ExpertLinx | Microsoft, Cloud, AI & Custom Software Solutions",
  description: "ExpertLinx helps businesses modernize using Microsoft technologies, cloud infrastructure, AI and custom software.",
  openGraph: { title: "ExpertLinx | Microsoft, Cloud, AI & Custom Software Solutions", description: "Microsoft solutions, cloud infrastructure, AI and custom software built around your business.", type: "website" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"><body className={manrope.variable}>{children}</body></html>
  );
}
