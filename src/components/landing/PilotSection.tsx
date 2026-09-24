import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import styles from "./landing.module.css";

export function PilotSection({ id }: { id: string }) {
  return <section id={id} className={styles.pilotSection} data-design-system="landing" aria-labelledby={`${id}-heading`}>
    {id === "pilot" && <span id="contact" className={styles.legacyAnchor} aria-hidden="true" />}
    <div className={styles.pilotInner}>
      <div className={styles.pilotInvite}>
        <div className={styles.pilotCopy}>
          <h2 id={`${id}-heading`}>Good company.<br />A good place to start.</h2>
          <p>Join the pilot for yourself or someone you love.<br className={styles.desktopBreak} /> Help shape LaresCare around real life.</p>
        </div>
        <Image src="/landing/shared/pilot-scene.png" alt="LaresCare companion beside a phone in a warm living room" width={1536} height={1024} className={styles.pilotImage} />
      </div>
      <ContactForm pilot className={styles.pilotForm} />
    </div>
  </section>;
}
