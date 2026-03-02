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
        {/* Top part: logo + slogan (left) | contact label + email (right) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-4">
            <Image
              src="/images/Lares_care_logo.svg"
              alt="LaresCare logo"
              width={120}
              height={30}
              className="brightness-0 invert opacity-85"
            />
            <p className="text-[11px] md:text-xs text-brand-cream/50 whitespace-nowrap">
              Know more. Worry less. Built for families supporting aging in place.
            </p>
          </div>
          <div className="flex flex-col text-[11px] md:text-xs font-medium uppercase tracking-widest text-brand-cream/70">
            <p className="text-brand-cream/50 text-[10px] mb-1 normal-case tracking-normal">Contact email address</p>
            <a href="mailto:info@larescare.com" className="hover:text-brand-cream transition-colors">
              info@larescare.com
            </a>
          </div>
        </div>

        {/* Bottom part: copyright (left) | Privacy, Terms (right) */}
        <div className="mt-8 pt-6 border-t border-brand-cream/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs opacity-60 text-brand-cream">
            © {new Date().getFullYear()} LaresCare. All rights reserved.
          </p>
          <nav className="flex gap-6 text-[11px] md:text-xs font-medium uppercase tracking-widest text-brand-cream/70">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-cream transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
