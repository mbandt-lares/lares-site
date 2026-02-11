import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-blue text-brand-cream">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center">
            <Image
              src="/images/Lares_care_logo.svg"
              alt="LaresCare logo"
              width={120}
              height={30}
              className="brightness-0 invert opacity-85"
            />
          </div>
          <nav className="flex gap-8 text-[11px] md:text-xs font-medium uppercase tracking-widest text-brand-cream/70">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-cream transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-brand-cream/70 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-brand-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs opacity-60 text-brand-cream">
            © {new Date().getFullYear()} LaresCare. All rights reserved.
          </p>
          <p className="text-[11px] md:text-xs text-brand-cream/50 md:whitespace-nowrap">
            Know more. Worry less. Built for families supporting aging in place.
          </p>
        </div>
      </div>
    </footer>
  );
}
