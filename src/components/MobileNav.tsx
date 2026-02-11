"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="p-2 text-brand-cream"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <nav className="fixed inset-0 top-[72px] bg-brand-blue z-50 flex flex-col p-8 gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-headline text-brand-cream border-b border-brand-cream/10 pb-4 transition-colors hover:text-brand-orange"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/#contact" 
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-brand-cream text-brand-blue px-8 py-4 rounded-full text-center font-bold uppercase tracking-widest"
          >
            Join Pilot
          </Link>
        </nav>
      )}
    </div>
  );
}
