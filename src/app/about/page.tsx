import type { Metadata } from "next";
import { socialImage } from "@/lib/social-metadata";
import Image from "next/image";
import { LandingButton } from "@/components/landing/LandingButton";
import { PilotSection } from "@/components/landing/PilotSection";
import { TextLink } from "@/components/landing/TextLink";
import { landingSections } from "@/design-system/sections";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Why LaresCare | LaresCare",
  description:
    "Learn why LaresCare starts with conversation, connection and respect for each person’s independence.",
  alternates: { canonical: "https://larescare.com/about" },
  openGraph: {
    title: "Why LaresCare | LaresCare",
    description: "Learn why LaresCare starts with conversation, connection and respect for each person’s independence.",
    url: "/about",
    images: [socialImage],
    siteName: "LaresCare",
    type: "website",
  },
};

const principles = [
  {
    title: "The person comes first",
    description: "Their conversation and their perspective stay at the centre.",
  },
  {
    title: "Shared with permission",
    description: "We explain what is shared and who can see it before the pilot starts.",
  },
  {
    title: "Patterns need context",
    description: "A quieter day may have a simple explanation. The person’s words matter.",
  },
  {
    title: "Everyday support",
    description: "LaresCare supports family understanding. It is not medical or emergency care.",
  },
] as const;

function PhoneStatus() {
  return (
    <div className={styles.phoneStatus} aria-hidden="true">
      <span>9:41</span>
      <span className={styles.statusIcons}>
        <Image src="/landing/home/icon-status-cellular.svg" alt="" width={15} height={10} />
        <Image src="/landing/home/icon-status-wifi.svg" alt="" width={13} height={10} style={{ height: "auto" }} />
        <Image src="/landing/home/icon-status-battery.svg" alt="" width={21} height={10} />
      </span>
    </div>
  );
}

function ConversationPhones() {
  return (
    <div className={styles.phones} aria-label="Illustrative examples of speaking and typing with Lar">
      <div className={styles.phoneExample}>
        <div className={styles.phone}>
          <div className={styles.phoneScreen}>
            <PhoneStatus />
            <div className={styles.phoneTopIcons}>
              <Image src="/landing/secondary/icon-menu.svg" alt="" width={20} height={20} />
              <Image src="/landing/secondary/icon-history.svg" alt="" width={20} height={20} />
            </div>
            <Image className={styles.voiceLar} src="/landing/home/lar-original.png" alt="" width={240} height={160} style={{ height: "auto" }} />
            <div className={styles.voiceMessage}>
              <p className={styles.speakingLabel}><span className={styles.wave} aria-hidden="true"><i /><i /><i /><i /><i /></span>Lar is speaking</p>
              <p>What would you like to talk about today?</p>
            </div>
            <span className={styles.callCircle} aria-hidden="true">
              <Image src="/landing/secondary/icon-call.svg" alt="" width={23} height={25} style={{ height: "auto" }} />
            </span>
            <span className={styles.homeIndicator} aria-hidden="true" />
          </div>
        </div>
        <p className={styles.phoneCaption}>Speak naturally</p>
      </div>
      <div className={styles.phoneExample}>
        <div className={styles.phone}>
          <div className={styles.phoneScreen}>
            <PhoneStatus />
            <div className={styles.phoneTopIcons}>
              <Image src="/landing/secondary/icon-menu.svg" alt="" width={20} height={20} />
            </div>
            <Image className={styles.chatLar} src="/landing/home/lar-original.png" alt="" width={96} height={64} style={{ height: "auto" }} />
            <div className={styles.phoneMessages}>
              <p className={styles.userMessage}>I stayed inside because of the rain and got lost in a book.</p>
              <p className={styles.larMessage}>That sounds like a good rainy-day plan. What are you reading?</p>
              <p className={styles.userMessage}>A mystery. I couldn’t put it down.</p>
              <p className={styles.larMessage}>Sounds like a story worth staying in for.</p>
            </div>
            <div className={styles.phoneComposer}>
              <span>Message Lar</span>
              <span className={styles.micCircle} aria-hidden="true">
                <Image src="/landing/secondary/icon-microphone.svg" alt="" width={20} height={20} />
              </span>
            </div>
            <span className={styles.homeIndicator} aria-hidden="true" />
          </div>
        </div>
        <p className={styles.phoneCaption}>Type whenever you prefer</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div data-design-system="landing" className={styles.page}>
      <section id={landingSections.about.hero} className={styles.hero} aria-labelledby="about-title">
        <div className={styles.container + " " + styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>WHY LARESCARE</p>
            <h1 id="about-title">Care starts<br />with connection.</h1>
            <p>We’re building a familiar companion for everyday life. Someone to talk to, with the person’s independence and perspective at the centre.</p>
            <LandingButton href="/how-it-works" variant="outline">See how it works</LandingButton>
          </div>
          <div className={styles.heroPhoto}>
            <Image
              src="/landing/home/family-tea.png"
              alt="An older man and a woman sharing tea together at home"
              fill
              priority
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 620px"
            />
            <p className={styles.heroNote}>A little closer,<br />even from afar.</p>
          </div>
        </div>
      </section>

      <section id={landingSections.about.conversation} className={styles.conversation} aria-labelledby="about-conversation-title">
        <div className={styles.container + " " + styles.conversationGrid}>
          <div className={styles.conversationCopy}>
            <p className={styles.eyebrow}>OUR VIEW BEGINS WITH THE PERSON</p>
            <h2 id="about-conversation-title">Conversation<br />comes first.</h2>
            <p>A regular conversation makes room for stories, questions and small changes. Activity and sleep patterns add context to what a person shares.</p>
            <p>A person’s words bring meaning to a pattern. Listening is part of understanding.</p>
            <LandingButton href="/how-it-works">See how it works</LandingButton>
          </div>
          <ConversationPhones />
        </div>
      </section>

      <section id={landingSections.about.connection} className={styles.connection} aria-labelledby="about-connection-title">
        <div className={styles.container + " " + styles.connectionFlow}>
          <p className={styles.eyebrow}>WHY IT MATTERS</p>
          <div>
            <h2 id="about-connection-title">The National Institute on Aging describes how social connection relates to health and wellbeing as we age.</h2>
            <p>This informs our focus on everyday conversation and connection to the people you care about.</p>
            <TextLink href="https://www.nia.nih.gov/health/loneliness-and-social-isolation/loneliness-and-social-isolation-tips-staying-connected">
              Read the NIA guide
            </TextLink>
          </div>
        </div>
      </section>

      <section id={landingSections.about.independence} className={styles.independence} aria-labelledby="about-independence-title">
        <div className={styles.container + " " + styles.independenceGrid}>
          <div className={styles.independenceCopy}>
            <h2 id="about-independence-title">Close to them.<br />On their terms.</h2>
            <TextLink href="/how-it-works">See how it works</TextLink>
          </div>
          <ol className={styles.principles}>
            {principles.map((item, index) => (
              <li key={item.title}>
                <span className={styles.principleNumber}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PilotSection id={landingSections.about.pilot} />
    </div>
  );
}
