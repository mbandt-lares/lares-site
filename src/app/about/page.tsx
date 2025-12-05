import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export default function AboutPage() {
  return (
    <Container className="space-y-10 md:space-y-12 max-w-4xl">
      {/* HERO / INTRO */}
      <div className="grid gap-8 md:grid-cols-[1.2fr,0.9fr] md:items-center">
        <div className="space-y-4">
          <Section
            eyebrow="About Lares Health"
            title="AI-powered monitoring that respects independence."
            description="Lares Health helps families support aging in place without turning home into a hospital. We watch quiet, everyday signals from Apple devices and highlight meaningful changes—so small shifts don’t become big crises."
          />
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-sky-50 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
            <Image
              src="/images/about-family-meeting.jpg"
              alt="Family discussing care and plans with an older adult at home"
              width={700}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* WHAT WE’RE TRYING TO FIX */}
      <Section title="What we’re trying to fix">
        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-600">
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Traditional tools are clinical
            </h3>
            <p>
              Most options are built around billing codes and medical workflows,
              not the reality of everyday life at home. Families get dashboards
              and alarms, not clarity.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Families see problems too late
            </h3>
            <p>
              Subtle changes in steadiness, sleep, or activity often show up
              weeks before a fall or hospitalization. Without data, those
              patterns are easy to miss until they become a crisis.
            </p>
          </Card>
        </div>
      </Section>

      {/* HOW LARES IS DIFFERENT */}
      <Section title="How Lares is different">
        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-600">
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Built around Apple Health
            </h3>
            <p>
              We start with devices seniors and families already use: iPhone,
              Apple Watch, and Apple Health–connected devices like scales and
              blood pressure cuffs. No hubs, no special hardware deliveries, no
              new gadgets to learn.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Signals, not dashboards
            </h3>
            <p>
              Lares summarizes what&apos;s changing in clear language: whether a
              trend is unusual, how long it&apos;s been drifting, and when it
              might be worth checking in or calling a clinician. No dense
              charts, no training.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Early, gentle nudges
            </h3>
            <p>
              We care about soft interventions: a call from a daughter, a nudge
              to schedule a visit, or a reminder to review fall risk—not
              constant alarming notifications that everyone learns to ignore.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Respect for independence
            </h3>
            <p>
              The goal is not to monitor every second. It&apos;s to keep seniors
              in control for as long as possible, while families feel less like
              they&apos;re guessing and more like they&apos;re genuinely
              informed.
            </p>
          </Card>
        </div>
      </Section>

      {/* WHO WE’RE BUILDING WITH */}
      <Section title="Who we’re building with">
        <Card className="p-5 text-sm text-slate-600 space-y-3">
          <p>
            Early pilots are focused on families where an older adult is living
            independently, and someone in the family is starting to worry about
            falls, slowing down, or subtle cognitive changes.
          </p>
          <p>
            We&apos;re deliberately keeping the first cohort small so we can
            adapt the product to real-world routines, not theoretical
            workflows. We care as much about the emotional experience of aging
            in place as the metrics on a chart.
          </p>
          <p>
            If you&apos;re interested in shaping what Lares becomes, we&apos;d
            like to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
                       bg-sky-600 text-white hover:bg-sky-500 focus:outline-none focus:ring-2
                       focus:ring-offset-1 focus:ring-sky-600"
          >
            Join the Waitlist
          </Link>
        </Card>
      </Section>
    </Container>
  );
}
