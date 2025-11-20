import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Lares Health",
  description: "Quietly watching. Actively caring.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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

        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

        <footer className="border-t border-slate-200 py-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Lares Health. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
