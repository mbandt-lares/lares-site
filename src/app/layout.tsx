import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LaresCare",
  description:
    "AI-powered health monitoring for elders who want independence — and for families who want peace of mind.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${urbanist.variable}`}>
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
