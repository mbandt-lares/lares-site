import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* HERO */}
      <Container className="space-y-8">
        <Section
          eyebrow="Quietly watching. Actively caring."
          title="AI-powered health monitoring for elders who want independence—and for families who stay connected."
          description="Lares Health watches for small changes in daily patterns so families don’t have to. When something looks off, Lares nudges, checks in, and keeps everyone in the loop."
        />

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
                       bg-sky-600 text-white hover:bg-sky-500 focus:outline-none focus:ring-2
                       focus:ring-offset-1 focus:ring-sky-600"
          >
            Get Early Access
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
                       border border-slate-300 bg-white text-slate-800 hover:border-slate-400
                       focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-600"
          >
            How It Works
          </Link>
          <p className="mt-2 text-[0.75rem] text-slate-500 md:mt-0">
            Designed for aging in place. Built on Apple Health and connected devices.
          </p>
        </div>

        <Card className="p-4 text-xs text-slate-600">
          <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
            At a glance
          </p>
          <ul className="list-disc space-y-1 pl-4">
            <li>Elders keep their independence and routines.</li>
            <li>Families get timely insight instead of guesswork.</li>
            <li>Subtle trends trigger checks before they become crises.</li>
          </ul>
        </Card>
      </Container>

      {/* PROBLEM */}
      <Container className="space-y-6">
        <Section
          eyebrow="The problem"
          title="Aging in place shouldn’t mean guessing about safety."
          description="Most families only find out something is wrong after a fall, a hospital visit, or days of unanswered calls. The signals were there—but nobody was watching full time."
        />

        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-600">
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Aging in place feels isolating
            </h3>
            <p>
              Days blur together. It&apos;s easy for loneliness, low mood, or
              reduced activity to build up quietly.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Small health changes go unnoticed
            </h3>
            <p>
              Slower walks, restless sleep, skipped meals—each looks minor on
              its own but can signal real risk over time.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Families worry without insight
            </h3>
            <p>
              Check-in calls help, but they&apos;re snapshots. Without data,
              families are guessing whether things are truly OK.
            </p>
          </Card>
        </div>
      </Container>

      {/* HOW IT WORKS */}
      <Container id="how-it-works" className="space-y-6">
        <Section
          eyebrow="How it works"
          title="Lares quietly watches patterns, then steps in when it matters."
          description="Built on Apple Health and connected devices, Lares links daily activity with proactive outreach and clear, human-readable alerts."
        />

        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-600">
          <Card className="p-4 flex flex-col gap-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-600">
              Step 1
            </p>
            <h3 className="text-sm font-semibold text-slate-900">
              Syncs with Apple Health &amp; devices
            </h3>
            <p>
              Connects to Apple Watch, iPhone, and compatible devices to track
              movement, activity, sleep, and other key signals.
            </p>
          </Card>
          <Card className="p-4 flex flex-col gap-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-600">
              Step 2
            </p>
            <h3 className="text-sm font-semibold text-slate-900">
              Detects unusual patterns via AI
            </h3>
            <p>
              Learns what &quot;normal&quot; looks like for each person, then
              flags meaningful changes in activity, steadiness, or routines.
            </p>
          </Card>
          <Card className="p-4 flex flex-col gap-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-600">
              Step 3
            </p>
            <h3 className="text-sm font-semibold text-slate-900">
              Sends alerts &amp; voice check-ins
            </h3>
            <p>
              Sends simple, clear alerts to family. When needed, Lares can
              trigger a gentle voice check-in to confirm how things are going.
            </p>
          </Card>
        </div>
      </Container>

      {/* BENEFITS */}
      <Container className="space-y-6">
        <Section
          eyebrow="Benefits"
          title="Support independence without becoming a burden."
          description="Lares is for seniors who want to stay in control—and for families who want peace of mind without constant surveillance."
        />

        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-600">
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Non-intrusive monitoring
            </h3>
            <p>
              Runs quietly in the background using signals from devices seniors
              already wear and use.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Early warning system
            </h3>
            <p>
              Highlights trends before they become emergencies: reduced
              movement, changes in steadiness, disrupted sleep, and more.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Family dashboard &amp; updates
            </h3>
            <p>
              A simple view of how things are going, with periodic summaries and
              timely alerts when attention is needed.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Compassionate check-ins
            </h3>
            <p>
              Respectful, human language instead of clinical jargon—so seniors
              feel supported, not managed.
            </p>
          </Card>
        </div>
      </Container>

      {/* TESTIMONIALS */}
      <Container className="space-y-6">
        <Section
          eyebrow="Testimonials"
          title="What families and elders are saying."
        />

        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-600">
          <Card className="p-4 flex flex-col justify-between">
            <p className="mb-3">
              “Before Lares, I was checking my mom’s phone log every day. Now I
              get a weekly summary and an alert if something changes. It’s worry
              without the guesswork.”
            </p>
            <p className="text-[0.75rem] text-slate-500">
              — Adult daughter, pilot user
            </p>
          </Card>
          <Card className="p-4 flex flex-col justify-between">
            <p className="mb-3">
              “I like that it’s watching without hovering. I still decide what I
              do each day—it just notices if I start slowing down.”
            </p>
            <p className="text-[0.75rem] text-slate-500">
              — 78-year-old living alone
            </p>
          </Card>
          <Card className="p-4 flex flex-col justify-between">
            <p className="mb-3">
              “It feels like we’re finally using the data from the watch for
              something that actually matters to our family.”
            </p>
            <p className="text-[0.75rem] text-slate-500">
              — Son caring for both parents
            </p>
          </Card>
        </div>
      </Container>

      {/* PRICING / WAITLIST */}
      <Container className="space-y-6">
        <Section
          eyebrow="Pricing"
          title="Launching soon. Join the early access waitlist."
          description="We’re finalizing pricing with families and caregivers now. Early access members will help shape the product and receive preferred pricing at launch."
        />

        <Card className="p-4 text-sm text-slate-600 space-y-2">
          <ul className="list-disc space-y-1 pl-4">
            <li>One simple subscription per senior household.</li>
            <li>Includes monitoring, alerts, and family dashboard.</li>
            <li>Works with existing Apple devices—no hub required.</li>
          </ul>
        </Card>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium
                       bg-sky-600 text-white hover:bg-sky-500 focus:outline-none focus:ring-2
                       focus:ring-offset-1 focus:ring-sky-600 md:w-auto"
          >
            Join the Waitlist
          </Link>
        </div>
      </Container>

      {/* FAQ */}
      <Container className="space-y-4">
        <Section
          eyebrow="FAQ"
          title="Questions families usually ask."
        />

        <div className="space-y-3 text-sm text-slate-600">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              What devices do we need?
            </h3>
            <p>
              Lares works with iPhone, Apple Watch, and
              Apple Health–connected devices such as scales and blood pressure
              cuffs.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              How does Lares protect privacy?
            </h3>
            <p>
              We focus on trends, not minute-by-minute tracking. Data is
              encrypted in transit and at rest, and we share only what families
              need to understand changes.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Is this a medical or emergency service?
            </h3>
            <p>
              Lares is not an emergency response or diagnostic service. It&apos;s
              an early-warning and peace-of-mind layer that helps families act
              sooner and communicate better with clinicians.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              How much will it cost?
            </h3>
            <p>
              Early families will receive preferred pricing and help shape the
              final plans. Our goal is a simple, predictable subscription that
              covers monitoring and family access.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
