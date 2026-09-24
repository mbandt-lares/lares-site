import type { Metadata } from "next";
import Image from "next/image";
import { Bell, FileText, Phone } from "lucide-react";
import { LandingButton } from "@/components/landing/LandingButton";
import { MotionScene } from "@/components/landing/MotionScene";
import { TextLink } from "@/components/landing/TextLink";
import { landingSections, pilotHref } from "@/design-system/sections";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "How it works | LaresCare",
  description:
    "Learn how familiar devices, a personal baseline and everyday conversations help families understand meaningful changes.",
  alternates: { canonical: "https://larescare.io/how-it-works" },
  openGraph: {
    title: "How it works | LaresCare",
    description: "Learn how familiar devices, a personal baseline and everyday conversations help families understand meaningful changes.",
    url: "https://larescare.io/how-it-works",
    siteName: "LaresCare",
    type: "website",
  },
};

const steps = [
  {
    title: "Connect to Apple Health",
    description: "Link iPhone and Apple Watch data. No hub or proprietary hardware.",
    image: "/images/how-it-works/step-1-connect-to-apple-health.jpg",
    alt: "An iPhone showing health information beside an Apple Watch",
  },
  {
    title: "Learn your usual rhythm",
    description: "LaresCare learns your patterns over time, so meaningful changes stand out.",
    image: "/images/how-it-works/step-2-establish-baseline.jpg",
    alt: "An older man tending plants at home while wearing a watch",
  },
  {
    title: "Keep family informed",
    description: "Clear updates and voice check-ins help put changes into context.",
    image: "/images/how-it-works/step-3-monitor-alert.jpg",
    alt: "A woman looking at her phone at home",
  },
] as const;

const information = [
  {
    title: "Activity",
    description: "Steps, walking distance and changes in daily movement.",
    icon: "/landing/secondary/icon-trend.svg",
  },
  {
    title: "Walking steadiness",
    description: "Mobility metrics and balance-related trends over time.",
    icon: "/landing/secondary/icon-walk.svg",
  },
  {
    title: "Sleep and rest",
    description: "Sleep duration, interruptions and changes in rest.",
    icon: "/landing/secondary/icon-moon.svg",
  },
  {
    title: "Connected devices",
    description: "Weight and blood-pressure trends from Apple Health devices, where available.",
    icon: "/landing/secondary/icon-device.svg",
  },
] as const;

const familyBenefits = [
  {
    title: "Weekly summaries",
    description: "A concise view of routines, changes and conversation context.",
    icon: FileText,
  },
  {
    title: "Meaningful updates",
    description: "Clear notifications when patterns shift, rather than every small fluctuation.",
    icon: Bell,
  },
  {
    title: "A practical next step",
    description: "Suggestions such as a call, a visit or a conversation with a clinician.",
    icon: Phone,
  },
] as const;

export default function HowItWorksPage() {
  return (
    <div data-design-system="landing" className={styles.page}>
      <section id={landingSections.howItWorks.hero} className={styles.hero} aria-labelledby="how-title">
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>PRACTICAL DETAILS</p>
              <h1 id="how-title">How it works</h1>
            </div>
            <p className={styles.heroIntro}>
              Familiar devices, a personal baseline and everyday conversations. Together, they help
              families understand meaningful changes.
            </p>
          </div>
        </div>
      </section>

      <section id={landingSections.howItWorks.process} className={styles.process} aria-labelledby="process-title">
        <div className={styles.container}>
          <h2 id="process-title">Connect. Learn. Stay informed.</h2>
          <MotionScene effect="sequence">
            <ol className={styles.steps}>
              {steps.map((step, index) => (
                <li className={styles.stepCard} key={step.title} data-motion-item>
                  <div className={styles.stepImage}>
                    <Image src={step.image} alt={step.alt} fill loading={index === 0 ? "eager" : undefined} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 371px" />
                    <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
                  </div>
                  <div className={styles.stepCopy}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </MotionScene>
        </div>
      </section>

      <section id={landingSections.howItWorks.context} className={styles.context} aria-labelledby="context-title">
        <div className={styles.container}>
          <div className={styles.contextHeading}>
            <h2 id="context-title">What information<br />adds context</h2>
            <p>From Apple Health,<br />with permission</p>
          </div>
          <div className={styles.informationGrid}>
            {information.map((item) => (
              <article className={styles.informationItem} key={item.title}>
                <Image src={item.icon} alt="" width={24} height={24} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id={landingSections.howItWorks.conversation} className={styles.conversation} aria-labelledby="conversation-title">
        <div className={styles.container + " " + styles.conversationGrid}>
          <div className={styles.conversationCopy}>
            <h2 id="conversation-title">Where conversation fits</h2>
            <p>A change in routine can prompt a voice check-in. What the person shares with Lar helps explain the pattern.</p>
            <TextLink href="/about#about-conversation">Why conversation comes first</TextLink>
          </div>
          <MotionScene effect="messages" className={styles.chatExample} aria-label="Illustrative conversation about fewer walks this week">
            <p className={styles.chatLabel}>
              <span className={styles.chatIcon} aria-hidden="true" />
              <span>EXAMPLE: FEWER WALKS THIS WEEK</span>
            </p>
            <p className={styles.chatBubble + " " + styles.larBubble} data-motion-message>Have you been out much this week?</p>
            <p className={styles.chatBubble + " " + styles.personBubble} data-motion-message>I’ve been finishing a painting at home.</p>
            <p className={styles.chatBubble + " " + styles.larBubble}>What have you been painting?</p>
            <p className={styles.chatConclusion}>The pattern shows fewer walks. The conversation explains why.</p>
          </MotionScene>
        </div>
      </section>

      <section id={landingSections.howItWorks.family} className={styles.family} aria-labelledby="family-title">
        <div className={styles.container}>
          <h2 id="family-title">What families receive</h2>
          <MotionScene effect="sequence" className={styles.familyGrid}>
            {familyBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <article className={styles.familyCard} key={item.title} data-motion-item>
                  <Icon className={styles.familyIcon} size={28} strokeWidth={1.5} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </MotionScene>
          <p className={styles.permission}>
            <Image src="/landing/secondary/icon-shield.svg" alt="" width={24} height={24} />
            <span>Shared with permission. Agree together who receives updates and what is included.</span>
          </p>
        </div>
      </section>

      <section id={landingSections.howItWorks.pilot} className={styles.pilot} aria-labelledby="how-pilot-title">
        <div className={styles.container}>
          <div className={styles.pilotPanel}>
            <div>
              <h2 id="how-pilot-title">Join the Bay Area pilot</h2>
              <p>A small group of families helping shape LaresCare through real-world feedback.</p>
            </div>
            <LandingButton href={pilotHref}>Join the pilot</LandingButton>
          </div>
        </div>
      </section>
    </div>
  );
}
