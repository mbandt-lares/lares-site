// src/app/campaigns/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { campaigns } from "@/content/campaigns";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const campaign = campaigns[params.slug];

  if (!campaign) {
    return {
      title: "Campaign not found | LaresCare",
    };
  }

  return {
    title: campaign.metaTitle,
    description: campaign.metaDescription,
  };
}

export default function CampaignPage({ params }: Props) {
  const campaign = campaigns[params.slug];

  if (!campaign) {
    return notFound();
  }

  return (
    <>
      <Container className="pt-16 pb-20">
        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {campaign.heroEyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange">
                {campaign.heroEyebrow}
              </p>
            )}
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-brand-blue leading-tight">
              {campaign.heroTitle}
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-xl">
              {campaign.heroSubtitle}
            </p>
            {campaign.audienceTagline && (
              <p className="text-sm font-medium text-brand-blue opacity-60">
                {campaign.audienceTagline}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href={campaign.ctaHref}
                className="bg-brand-orange text-white px-8 py-4 rounded-full text-center font-bold hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/20"
              >
                {campaign.ctaLabel}
              </Link>
              <Link
                href="/"
                className="border-2 border-brand-blue/10 text-brand-blue px-8 py-4 rounded-full text-center font-bold hover:bg-brand-blue/5 transition-all"
              >
                Learn more about LaresCare
              </Link>
            </div>
          </div>

          {campaign.heroImage && (
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-brand-cream/20">
                <Image
                  src={campaign.heroImage}
                  alt={campaign.heroTitle}
                  fill
                  className="object-cover photo-warm"
                />
              </div>
            </div>
          )}
        </div>
      </Container>

      {/* BULLETS / VALUE */}
      <Section title="Why this matters for your family">
        <Card className="p-12 md:p-16">
          <ul className="grid md:grid-cols-2 gap-8">
            {campaign.bullets.map((b) => (
              <li key={b} className="flex gap-4 items-start">
                <span className="text-brand-orange text-2xl">✓</span>
                <span className="text-lg text-text-secondary leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* PROOF / STORY */}
      <Section title="What makes LaresCare different">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaign.proof.map((block) => (
            <Card key={block.heading} className="p-10 space-y-4">
              <h3 className="text-xl font-headline font-bold text-brand-blue">
                {block.heading}
              </h3>
              <p className="text-text-secondary leading-relaxed">{block.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section title="What happens after you join">
        <Card className="p-12 md:p-16 bg-brand-blue text-brand-cream border-none">
          <div className="grid md:grid-cols-[1fr,auto] gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed opacity-90">
                When you join this campaign cohort, we&apos;ll reach out with next
                steps, ask a few questions about your parent&apos;s situation, and
                confirm whether you&apos;re a fit for early access.
              </p>
              <p className="text-xl leading-relaxed opacity-90">
                We&apos;re keeping the initial group small so we can learn quickly
                and shape the product around real families, not theoretical
                workflows.
              </p>
            </div>
            
            <div>
              <Link
                href={campaign.ctaHref}
                className="inline-block bg-brand-orange text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-orange/90 transition-all shadow-xl shadow-black/20"
              >
                {campaign.ctaLabel}
              </Link>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}
