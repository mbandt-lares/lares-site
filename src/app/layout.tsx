import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Lares Health",
  description:
    "AI-powered health monitoring for elders who want independence — and for families who want peace of mind.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased font-sans">
        <div className="flex min-h-screen flex-col">
          {/* HEADER */}
          <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
              {/* Logo + brand */}
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative h-12 w-12 overflow-hidden">
                  <Image
                    src="/images/lares_mark.png"
                    alt="Lares Health logo"
                    fill
                    sizes="48px"
                    className="object-contain transition-transform group-hover:scale-105"
                    priority
                  />
                </div>
                <span className="text-lg font-semibold tracking-tight text-slate-900">
                  Lares Health
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-sky-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Navigation */}
              <MobileNav />
            </div>
          </header>

          {/* MAIN CONTENT */}
          <main className="flex-1">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-8 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
              <p>© {new Date().getFullYear()} Lares Health. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-slate-900">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-slate-900">
                  Terms
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
