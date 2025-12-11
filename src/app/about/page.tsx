import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      {/* HERO */}
      <Container className="space-y-8 py-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
            About Lares Health
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            AI-powered monitoring that respects independence.
          </h1>
          <p className="text-base md:text-lg text-slate-700">
            Lares Health helps families support aging in place without turning home into a
            hospital. We watch quiet, everyday signals from Apple devices and highlight
            meaningful changes—so small shifts don’t become big crises.
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <Image
            src="/images/discussing_care.jpg"
            alt="Older mother and adult daughter sitting together and looking at a smartphone."
            width={1151}
            height={768}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </Container>

      {/* WHAT WE'RE TRYING TO FIX */}
      <Container className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          What we’re trying to fix
        </h2>
        <div className="grid gap-4 text-sm md:text-base text-slate-700 md:grid-cols-2">
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Traditional tools are clinical
            </h3>
            <p>
              Most options are built around billing codes and medical workflows, not the
              reality of everyday life at home. Families get dashboards and alarms, not
              clarity.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Families see problems too late
            </h3>
            <p>
              Subtle changes in steadiness, sleep, or activity often show up weeks before
              a fall or hospitalization. Without data, those patterns are easy to miss
              until they become a crisis.
            </p>
          </Card>
        </div>
      </Container>

      {/* HOW LARES IS DIFFERENT */}
      <Container className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          How Lares is different
        </h2>
        <div className="grid gap-4 text-sm md:text-base text-slate-700 md:grid-cols-2">
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Built around Apple Health
            </h3>
            <p>
              We start with devices seniors and families already use: iPhone, Apple
              Watch, and Apple Health–connected devices like scales and blood pressure
              cuffs. No hubs, no special hardware deliveries, no new gadgets to learn.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Signals, not dashboards
            </h3>
            <p>
              Lares summarizes what’s changing in clear language: whether a trend is
              unusual, how long it’s been drifting, and when it might be worth checking
              in or calling a clinician. No dense charts, no training.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Early, gentle nudges
            </h3>
            <p>
              We care about soft interventions: a call from a daughter, a nudge to
              schedule a visit, or a reminder to review fall risk—not constant alarming
              notifications that everyone learns to ignore.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Respect for independence
            </h3>
            <p>
              The goal is not to monitor every second. It&apos;s to keep seniors in
              control for as long as possible, while families feel less like they&apos;re
              guessing and more like they&apos;re genuinely informed.
            </p>
          </Card>
        </div>
      </Container>

      {/* WHO WE'RE BUILDING WITH */}
      <Container className="space-y-4 pb-10">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Who we’re building with
        </h2>
        <div className="max-w-3xl space-y-3 text-sm md:text-base text-slate-700">
          <p>
            Early pilots are focused on families where an older adult is living
            independently, and someone in the family is starting to worry about falls,
            slowing down, or subtle cognitive changes.
          </p>
          <p>
            We’re deliberately keeping the first cohort small so we can adapt the product
            to real-world routines, not theoretical workflows. We care as much about the
            emotional experience of aging in place as the metrics on a chart.
          </p>
          <p>
            If you’re interested in shaping what Lares becomes, we’d like to hear from
            you.
          </p>
        </div>

        <Link href="/contact" className="btn-primary w-full sm:w-auto">
          Join the waitlist
        </Link>
      </Container>
    </div>
  );
}
