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
      title: "Campaign not found | Lares Health",
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
    <Container className="space-y-10 md:space-y-12 max-w-4xl">
      {/* HERO */}
      <div className="grid gap-8 md:grid-cols-[1.2fr,0.9fr] md:items-center">
        <div className="space-y-4">
          {campaign.heroEyebrow && (
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
              {campaign.heroEyebrow}
            </p>
          )}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            {campaign.heroTitle}
          </h1>
          <p className="text-sm md:text-base text-slate-600">
            {campaign.heroSubtitle}
          </p>
          {campaign.audienceTagline && (
            <p className="text-xs md:text-sm text-slate-500">
              {campaign.audienceTagline}
            </p>
          )}
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href={campaign.ctaHref}
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
                         bg-sky-600 text-white hover:bg-sky-500 focus:outline-none focus:ring-2
                         focus:ring-offset-1 focus:ring-sky-600"
            >
              {campaign.ctaLabel}
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
                         border border-slate-300 bg-white text-slate-800 hover:border-slate-400
                         focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-600"
            >
              Learn more about Lares
            </Link>
          </div>
        </div>

        {campaign.heroImage && (
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-sky-50 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
              <Image
                src={campaign.heroImage}
                alt={campaign.heroTitle}
                width={700}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {/* BULLETS / VALUE */}
      <Section title="Why this matters for your family">
        <Card className="p-4 text-sm text-slate-600">
          <ul className="list-disc space-y-2 pl-4">
            {campaign.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* PROOF / STORY */}
      <Section title="What makes Lares different">
        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-600">
          {campaign.proof.map((block) => (
            <Card key={block.heading} className="p-4">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                {block.heading}
              </h3>
              <p>{block.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section title="What happens after you join">
        <Card className="p-5 text-sm text-slate-600 space-y-2">
          <p>
            When you join this campaign cohort, we&apos;ll reach out with next
            steps, ask a few questions about your parent&apos;s situation, and
            confirm whether you&apos;re a fit for early access.
          </p>
          <p>
            We&apos;re keeping the initial group small so we can learn quickly
            and shape the product around real families, not theoretical
            workflows.
          </p>
          <div className="pt-2">
            <Link
              href={campaign.ctaHref}
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
                         bg-sky-600 text-white hover:bg-sky-500 focus:outline-none focus:ring-2
                         focus:ring-offset-1 focus:ring-sky-600"
            >
              {campaign.ctaLabel}
            </Link>
          </div>
        </Card>
      </Section>
    </Container>
  );
}
