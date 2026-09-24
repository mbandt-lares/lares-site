"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { landingNavigation, pilotHref } from "@/design-system/sections";
import { LandingButton } from "./LandingButton";
import styles from "./landing.module.css";

export function LandingHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const nav = landingNavigation.map(({ href, label }) => <Link key={href} href={href} className={styles.navLink} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>);
  return <header id="site-header" className={styles.header} data-design-system="landing">
    <div className={styles.headerInner}>
      <Link href="/" className={styles.logo} aria-label="LaresCare home"><Image src="/landing/shared/wordmark.svg" alt="LaresCare" width={190} height={30} priority /></Link>
      <nav className={styles.desktopNav} aria-label="Main navigation">{nav}<LandingButton href={pilotHref}>Join the pilot</LandingButton></nav>
      <button ref={toggleRef} className={styles.mobileToggle} type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="landing-mobile-menu" onClick={() => setOpen(!open)}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">{open ? <path d="M6 6l16 16M22 6L6 22" stroke="currentColor" strokeWidth="2" /> : <path d="M4 8h20M4 14h20M4 20h20" stroke="currentColor" strokeWidth="2" />}</svg>
      </button>
    </div>
    {open && <nav ref={menuRef} id="landing-mobile-menu" className={styles.mobilePanel} aria-label="Mobile navigation">{nav}<LandingButton href={pilotHref} onClick={() => setOpen(false)}>Join the pilot</LandingButton></nav>}
  </header>;
}
