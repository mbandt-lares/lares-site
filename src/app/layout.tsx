import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/design-system/tokens.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { socialImage, socialMetadataBase } from "@/lib/social-metadata";

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

const siteMetadata: Metadata = {
  title: "LaresCare",
  description:
    "A familiar conversation, a little support, and more context for the people you love. Join the LaresCare pilot.",
  openGraph: {
    title: "LaresCare | A little company. A brighter day.",
    description: "A familiar conversation, a little support, and more context for the people you love.",
    siteName: "LaresCare",
    type: "website",
    images: [socialImage],
  },
  twitter: { card: "summary_large_image", images: [socialImage] },
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

export async function generateMetadata(): Promise<Metadata> {
  return { ...siteMetadata, metadataBase: await socialMetadataBase() };
}

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
