import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
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
