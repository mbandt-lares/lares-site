import type { Metadata } from "next";
import Image from "next/image";
import { LandingButton } from "@/components/landing/LandingButton";
import { MotionScene } from "@/components/landing/MotionScene";
import { PilotSection } from "@/components/landing/PilotSection";
import { TextLink } from "@/components/landing/TextLink";
import { landingSections, pilotHref } from "@/design-system/sections";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "LaresCare | A little company. A brighter day.",
  description: "A familiar conversation, a little support, and more context for the people you love. Join the LaresCare pilot.",
  alternates: { canonical: "https://larescare.io/" },
  openGraph: {
    title: "LaresCare | A little company. A brighter day.",
    description: "A familiar conversation, a little support, and more context for the people you love. Join the LaresCare pilot.",
    url: "https://larescare.io/",
    siteName: "LaresCare",
    type: "website",
  },
};

const asset = (name: string) => `/landing/home/${name}`;

function Icon({ name, size = 24 }: { name: string; size?: number }) {
  return <Image src={asset(name)} alt="" width={size} height={size} aria-hidden="true" />;
}

function HeroArt() {
  return (
    <div className={styles.heroArt} aria-label="Illustration of a conversation with Lar">
      <div className={styles.heroPhoto}>
        <Image src={asset("hero-conversation-photo.jpg")} alt="Woman smiling while looking at her phone"
          width={720} height={480} sizes="(max-width: 390px) 380px, (max-width: 520px) 470px, (max-width: 900px) 540px, (max-width: 1060px) 490px, 720px" priority className={styles.heroPhotoImage} />
      </div>
      <div className={styles.phone}>
        <div className={styles.phoneScreen}>
          <div className={styles.statusBar}>
            <span>9:41</span>
            <span className={styles.statusIcons}>
              <Image src={asset("icon-status-cellular.svg")} alt="" width={15} height={10} />
              <Image src={asset("icon-status-wifi.svg")} alt="" width={13} height={10} style={{ height: "auto" }} />
              <Image src={asset("icon-status-battery.svg")} alt="" width={21} height={10} />
            </span>
          </div>
          <div className={styles.phoneMenu}><Icon name="icon-menu.svg" /></div>
          <Image src={asset("lar-original.png")} alt="" width={118} height={79} className={styles.phoneLar} />
          <div className={styles.phoneMessages}>
            <p className={styles.messageYou}>I stayed inside because of the rain and got lost in a book.</p>
            <p className={styles.messageLar}>That sounds like a good rainy-day plan. What are you reading?</p>
            <p className={styles.messageYou}>A mystery. I couldn’t put it down.</p>
            <p className={styles.messageLar}>Sounds like a story worth staying in for.</p>
          </div>
          <div className={styles.phoneComposer}>
            <span>Message Lar</span><span className={styles.phoneMic}><Icon name="icon-microphone.svg" /></span>
          </div>
          <span className={styles.homeIndicator} />
        </div>
      </div>
      <MotionScene effect="settle" className={styles.momentCard}>
        <span>THIS WEEK</span><strong>A good book for a rainy day</strong>
        <p>Shared with the family, with permission.</p>
      </MotionScene>
    </div>
  );
}

function Hero() {
  return (
    <section id={landingSections.home.hero} className={styles.hero} aria-labelledby="home-title">
      <div className={styles.heroInner}>
        <MotionScene effect="hero" className={styles.heroCopy}>
          <div className={styles.heroBadge} data-motion-item>
            <Image src={asset("lar-original.png")} alt="" width={54} height={36} />
            <span>Meet Lar, your everyday AI companion</span>
          </div>
          <h1 id="home-title" data-motion-item>A little company.<br /><span>A brighter day.</span></h1>
          <p className={styles.heroLead} data-motion-item>A familiar conversation, a little support, and more<br className={styles.heroLeadBreak} /> context for the people you love.</p>
          <div className={styles.heroActions} data-motion-item>
            <LandingButton href={pilotHref}>Join the pilot</LandingButton>
            <LandingButton href="/how-it-works" variant="outline">See how it works</LandingButton>
          </div>
          <div className={styles.heroBenefits}>
            <span><Icon name="icon-shield-check.svg" />Shared only with permission</span>
            <span><Icon name="icon-microphone-dark.svg" />Speak or type</span>
          </div>
        </MotionScene>
        <HeroArt />
      </div>
    </section>
  );
}

function Conversation() {
  return (
    <section id={landingSections.home.conversation} className={styles.conversation} aria-labelledby="conversation-title">
      <div className={styles.conversationBand}>
        <div className={styles.conversationLar} aria-hidden="true">
          <MotionScene effect="greet" className={styles.larMotion}>
            <Image src={asset("lar-conversation.png")} alt="" width={248} height={165} />
            <span className={`${styles.eyePatch} ${styles.eyeLeft}`}><Image src={asset("lar-expression.png")} alt="" width={248} height={165} /></span>
            <span className={`${styles.eyePatch} ${styles.eyeRight}`}><Image src={asset("lar-expression.png")} alt="" width={248} height={165} /></span>
          </MotionScene>
        </div>
        <h2 id="conversation-title">A story, a question,<br className={styles.desktopBreak} /> or just a little company.</h2>
        <div className={styles.conversationSide}>
          <p>Talk naturally, or type whenever you prefer. There’s room for your everyday life.</p>
          <div className={styles.modeLabels}>
            <span><Icon name="icon-microphone-pill.svg" />Speak</span>
            <span><Icon name="icon-keyboard.svg" />Type</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const bars = [66, 80, 61, 21, 75, 86, 67];

function Signals() {
  return (
    <section id={landingSections.home.signals} className={styles.signals} aria-labelledby="signals-title">
      <div className={styles.container}>
        <div className={styles.signalsIntro}>
          <h2 id="signals-title">Two signals.<br />A fuller picture.</h2>
          <p>Conversation adds the person’s own account to patterns in activity and sleep. Together, they help make sense of everyday changes.</p>
        </div>
        <MotionScene effect="sequence" className={styles.signalCards}>
          <article className={`${styles.signalCard} ${styles.wordsCard}`} data-motion-item>
            <p className={styles.eyebrow}>THEIR OWN WORDS</p>
            <Icon name="icon-chat-circle.svg" size={44} />
            <p className={styles.wordsQuote}>“I stayed in with a book because of the rain.”</p>
          </article>
          <span className={styles.signalOperator} aria-hidden="true"><Icon name="icon-plus.svg" /></span>
          <article className={`${styles.signalCard} ${styles.patternsCard}`} data-motion-item>
            <p className={styles.eyebrow}>EVERYDAY PATTERNS</p>
            <div className={styles.activityBars} aria-hidden="true">
              {bars.map((height, index) => <span key={index} style={{ height }} />)}
            </div>
            <p className={styles.patternsText}>Activity and sleep, with Apple Health.</p>
          </article>
          <span className={styles.signalOperator} aria-hidden="true"><Icon name="icon-equals.svg" /></span>
          <article className={`${styles.signalCard} ${styles.contextCard}`} data-motion-item>
            <p className={styles.eyebrow}>CONTEXT</p>
            <p className={styles.contextText}>A change in routine, with the person’s own explanation.</p>
            <TextLink href="/how-it-works" inverse>Explore how it works</TextLink>
          </article>
        </MotionScene>
      </div>
    </section>
  );
}

function Family() {
  return (
    <section id={landingSections.home.family} className={styles.family} aria-labelledby="family-title">
      <div className={`${styles.container} ${styles.familyGrid}`}>
        <div className={styles.familyCopy}>
          <p className={styles.eyebrow}>FOR FAMILIES</p>
          <h2 id="family-title">More to share.<br />More to talk about.</h2>
          <p className={styles.familyLead}>A weekly summary brings everyday highlights and changes in routine together in the family dashboard. Clear context for your next conversation.</p>
          <p className={styles.familyPermission}>Shared with permission, with the person at the center.</p>
          <LandingButton href="/how-it-works">See what families receive</LandingButton>
        </div>
        <MotionScene effect="sequence" className={styles.familySummary} aria-label="Illustrative family weekly summary">
          <h3>Your week, in context</h3>
          <div className={styles.summaryItem} data-motion-item>
            <span className={styles.walkIcon}><Icon name="icon-walk.svg" size={32} /></span>
            <div><strong>A quieter week for walking</strong><p>Activity was lower than the usual pattern.</p></div>
          </div>
          <div className={styles.summaryItem} data-motion-item>
            <span className={styles.bookIcon}><Icon name="icon-book.svg" size={32} /></span>
            <div><strong>A good book for a rainy day</strong><p>“I stayed in because of the rain and got lost in a book.”</p></div>
          </div>
          <div className={styles.summaryFooter} data-motion-item>
            <p className={styles.eyebrow}>CONVERSATION STARTER</p>
            <p>Ask about the book, or offer company for the next walk.</p>
          </div>
        </MotionScene>
      </div>
    </section>
  );
}

function Independence() {
  return (
    <section id={landingSections.home.independence} className={styles.independence} aria-labelledby="independence-title">
      <div className={`${styles.container} ${styles.independenceGrid}`}>
        <div className={styles.familyPhotoWrap}>
          <Image src={asset("family-tea.png")} alt="Older father and his daughter enjoying tea together at home"
            width={640} height={482} sizes="(max-width: 900px) calc(100vw - 40px), (max-width: 1390px) 50vw, 640px" className={styles.familyPhoto} />
          <p className={styles.familyPhotoCaption}>A little closer,<br />even from afar.</p>
        </div>
        <div className={styles.independenceCopy}>
          <h2 id="independence-title">Built around<br />independence.</h2>
          <p>Support should fit the way you live. We bring conversation and everyday context together, with independence at the center.</p>
          <TextLink href="/about">Why LaresCare</TextLink>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ["Can I speak or type?", "Yes. Use whichever feels comfortable."],
  ["Which devices do I need?", "We’ll confirm the iPhone and Apple Watch setup for the pilot."],
  ["What can my family see?", "Updates are shared with permission."],
  ["Is this a medical service?", "LaresCare offers everyday support, not medical or emergency care."],
];

function FAQ() {
  return (
    <section id={landingSections.home.faq} className={styles.faq} aria-labelledby="faq-title">
      <div className={`${styles.container} ${styles.faqGrid}`}>
        <div className={styles.faqIntro}>
          <h2 id="faq-title">A few things<br />to know.</h2>
          <TextLink href="/how-it-works">See how it works</TextLink>
        </div>
        <div className={styles.faqList}>
          {faqs.map(([question, answer]) => (
            <details key={question} open>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div data-design-system="landing" className={styles.page}>
      <Hero />
      <Conversation />
      <Signals />
      <Family />
      <Independence />
      <FAQ />
      <PilotSection id={landingSections.home.pilot} />
    </div>
  );
}
