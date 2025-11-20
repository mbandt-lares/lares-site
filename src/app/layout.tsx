import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lares Health",
  description:
    "AI-powered health monitoring for elders who want independence—and for families who stay connected.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="flex min-h-screen flex-col">
          {/* Top navigation */}
          <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
              <a
                href="/"
                className="text-lg font-semibold tracking-tight text-slate-900"
              >
                Lares Health
              </a>
              <nav className="flex gap-6 text-sm text-slate-600">
                <a href="/" className="hover:text-slate-900">
                  Home
                </a>
                <a href="/about" className="hover:text-slate-900">
                  About
                </a>
                <a href="/contact" className="hover:text-slate-900">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
              <span>© {new Date().getFullYear()} Lares Health, Inc.</span>
              <div className="flex flex-wrap gap-4">
                <a href="/about" className="hover:text-slate-900">
                  About
                </a>
                <a href="/contact" className="hover:text-slate-900">
                  Contact
                </a>
                <a href="/legal/privacy" className="hover:text-slate-900">
                  Privacy
                </a>
                <a href="/legal/terms" className="hover:text-slate-900">
                  Terms
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
