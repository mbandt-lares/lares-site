import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Lares Health",
  description: "Quietly watching. Actively caring.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <header className="border-b border-slate-200">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold text-slate-900">
              Lares Health
            </Link>
            <nav className="flex items-center gap-6 text-xs text-slate-600">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              <Link href="/how-it-works" className="hover:text-slate-900">
                How It Works
              </Link>
              <Link href="/about" className="hover:text-slate-900">
                About
              </Link>
              <Link href="/contact" className="hover:text-slate-900">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-slate-200">
          <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col gap-2 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <span>
              © {new Date().getFullYear()} Lares Health. All rights reserved.
            </span>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-slate-900">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-slate-900">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
