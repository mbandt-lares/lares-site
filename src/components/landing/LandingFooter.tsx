import Image from "next/image";
import Link from "next/link";
import { landingNavigation } from "@/design-system/sections";
import styles from "./landing.module.css";

export function LandingFooter() {
  return <footer id="site-footer" className={styles.footer} data-design-system="landing">
    <div className={styles.footerInner}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <Link href="/" aria-label="LaresCare home"><Image src="/landing/shared/wordmark-light.svg" alt="LaresCare" width={252} height={40} /></Link>
          <p>More connection for everyday life.</p>
        </div>
        <nav className={styles.footerNav} aria-label="Footer navigation">
          {landingNavigation.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className={styles.footerBottom}><p>© {new Date().getFullYear()} LaresCare</p>
        <nav className={styles.footerLegalLinks} aria-label="Legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav>
      </div>
    </div>
  </footer>;
}
