import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
      <body className="bg-slate-50 text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          {/* HEADER */}
          <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
              {/* Logo + brand */}
              <Link href="/" className="flex items-center gap-2">
                {/* BIG, CLEAR LOGO */}
                <img
                  src="/images/lares_mark.png"
                  alt="Lares Health logo"
                  className="h-14 w-auto"
                />
                <span className="text-lg font-semibold tracking-tight text-slate-900">
                  Lares Health
                </span>
              </Link>

              {/* Navigation */}
              <nav className="flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <main className="flex-1">
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
              {children}
            </div>
          </main>

          {/* FOOTER */}
          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
              <p>© 2025 Lares Health. All rights reserved.</p>
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
