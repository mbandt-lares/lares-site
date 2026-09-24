import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/design-system/tokens.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const urbanist = localFont({
  variable: "--font-urbanist",
  display: "swap",
  src: [
    { path: "../../public/fonts/Urbanist-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Urbanist-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Urbanist-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Urbanist-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const manrope = localFont({
  variable: "--font-manrope",
  display: "swap",
  src: [{ path: "../../public/fonts/Manrope-Variable.ttf", weight: "200 800", style: "normal" }],
});

export const metadata: Metadata = {
  title: "LaresCare",
  description:
    "AI-powered health monitoring for elders who want independence — and for families who want peace of mind.",
  icons: {
    icon: [
      { url: "/icon.svg?v=lar-20260924", type: "image/svg+xml", sizes: "any" },
      { url: "/icon.png?v=lar-20260924", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico?v=lar-20260924", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico?v=lar-20260924",
    apple: [{ url: "/apple-icon.png?v=lar-20260924", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${urbanist.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <SiteHeader />

        <main>
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
