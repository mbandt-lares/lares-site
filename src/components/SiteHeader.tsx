 "use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "@/components/MobileNav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [heroVisible, setHeroVisible] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const hero = document.getElementById("hero");
    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      { threshold: [0, 1] }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  const ctaClasses = isHome && heroVisible
    ? "bg-transparent text-brand-cream border-2 border-brand-cream/60 hover:border-brand-cream"
    : "bg-brand-orange text-white border-2 border-transparent hover:bg-brand-orange/90";

  return (
    <header className="sticky top-0 z-50 py-4 site-header shadow-lg shadow-brand-blue/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/Lares_care_logo.svg"
            alt="LaresCare logo"
            width={140}
            height={35}
            priority
            className="object-contain"
          />
        </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide uppercase opacity-90 hover:opacity-100 transition-opacity relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

        <div className="hidden md:block">
          <Link
            href="/#contact"
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-200 ${ctaClasses}`}
          >
            Join Pilot
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
