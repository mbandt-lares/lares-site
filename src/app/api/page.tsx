import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

function PilotRibbon() {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Container className="py-3">
        <div className="flex flex-col gap-2 rounded-xl bg-amber-50/80 px-4 py-2 text-sm md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-800">
              Bay Area pilot now recruiting
            </span>
            <span className="max-w-xl text-slate-800">
              We&apos;re actively monitoring independent seniors in the Bay Area
              — including Rossmoor — to help shape Lares Health.
            </span>
          </div>
          <Link href="#pilot" className="btn-compact md:shrink-0">
            Learn more / join the pilot
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* TOP PILOT RIBBON - Outside main content wrapper */}
      <PilotRibbon />

      {/* MAIN CONTENT with consistent spacing */}
      <div className="space-y-12 md:space-y-16 pb-12 md:pb-16">
        {/* HERO */}
        <Container className="grid gap-8 pt-8 md:pt-12 md:grid-cols-[1.15fr,1fr] md:items-center">
          <div className="space-y-4 md:space-y-5">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
              Quietly watching. Actively caring.
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              AI-powered health monitoring for elders who want
              independence—and for families who stay connected.
            </h1>

            <p className="max-w-xl text-base md:text-lg text-slate-700">
              Lares Health watches for small changes in daily patterns so
              families don&apos;t have to. When something looks off, Lares
              nudges, checks in, and keeps everyone in the loop—without turning
              home into a hospital.
            </p>

            {/* HERO CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link href="#pilot" className="btn-primary">
                Join the pilot
              </Link>
              <Link href="#how-it-works" className="btn-secondary">
                How it works
              </Link>
            </div>

            <p className="max-w-md text-sm md:text-base text-slate-500">
              Designed for aging in place. Built on Apple Health and connected
              devices, with early-warning insights and gentle, human check-ins.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/hero-elder-family.jpg"
              alt="Grandparent on a couch with two grandchildren, relaxed and together."
              width={800}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </Container>

        {/* AT A GLANCE */}
        <Container>
          <Card className="p-4 text-sm md:text-base text-slate-600">
            <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
              At a glance
            </p>
            <ul className="list-disc space-y-1.5 pl-4">
              <li>Elders keep their independence and routines.</li>
              <li>Families get timely insight instead of guesswork.</li>
              <li>Subtle trends trigger checks before they become crises.</li>
            </ul>
          </Card>
        </Container>

        {/* PILOT SECTION */}
        <Container id="pilot">
          <div className="space-y-5 rounded-3xl bg-amber-50 p-5 text-sm text-slate-900 ring-1 ring-amber-100 shadow-sm md:p-6">
            <div className="space-y-2">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-800">
                Pilot first, then full launch.
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Pilot Lares with real Bay Area seniors — and shape how it works.
              </h2>
              <p className="max-w-3xl text-sm md:text-base text-slate-900/90">
                We&apos;re starting with a small group of independent seniors in
                the Bay Area — including Rossmoor. These first families
                aren&apos;t just users; they help decide what &quot;useful&quot;
                looks like, and how Lares should show up day to day.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-900">
                  What the pilot includes
                </h3>
                <ul className="space-y-1.5">
                  <li>Setup and onboarding with Apple Watch or iPhone.</li>
                  <li>Regular summaries sent to you and your family.</li>
                  <li>Early signals when patterns change or risk increases.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-900">
                  What it doesn&apos;t replace
                </h3>
                <ul className="space-y-1.5">
                  <li>No emergency response or 911 replacement.</li>
                  <li>
                    No medical advice; we encourage you to talk to your doctor.
                  </li>
                  <li>
                    No cameras in the living room or constant surveillance.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-900">
                  Who we&apos;re looking for
                </h3>
                <ul className="space-y-1.5">
                  <li>Independent seniors living in the Bay Area.</li>
                  <li>
                    Families who are starting to worry a bit about falls,
                    slowing down, or subtle changes.
                  </li>
                  <li>
                    People willing to share practical feedback on what works and
                    what doesn&apos;t.
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-1">
              <Link href="/contact" className="btn-primary w-full md:w-auto">
                I&apos;d like to learn more / join the pilot
              </Link>
            </div>
          </div>
        </Container>

        {/* THE PROBLEM */}
        <Container className="space-y-5">
          <Section
            eyebrow="The problem"
            title="Aging in place shouldn't mean guessing about safety."
            description="Most families only find out something is wrong after a fall, a hospital visit, or days of unanswered calls. The signals were there—but nobody was watching full time."
          />
          <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-3">
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
                families are guessing whether things are truly ok.
              </p>
            </Card>
          </div>
        </Container>

        {/* HOW IT WORKS */}
        <Container id="how-it-works" className="space-y-5">
          <Section
            eyebrow="How it works"
            title="Lares quietly watches patterns, then steps in when it matters."
            description="Built on Apple Health and connected devices, Lares links daily activity with proactive outreach and clear, human-readable alerts."
          />
          <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-3">
            <Card className="flex flex-col gap-2 p-4">
              <div className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
                Step 1
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Syncs with Apple Health &amp; devices
              </h3>
              <ul className="space-y-1.5">
                <li>
                  Connects to Apple Watch, iPhone, and compatible devices.
                </li>
                <li>Tracks movement, activity, sleep, and other key signals.</li>
              </ul>
            </Card>

            <Card className="flex flex-col gap-2 p-4">
              <div className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
                Step 2
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Detects unusual patterns via AI
              </h3>
              <ul className="space-y-1.5">
                <li>
                  Learns what &quot;normal&quot; looks like for each person.
                </li>
                <li>
                  Spots meaningful changes in activity, steadiness, or routines.
                </li>
              </ul>
            </Card>

            <Card className="flex flex-col gap-2 p-4">
              <div className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
                Step 3
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Sends alerts &amp; voice check-ins
              </h3>
              <ul className="space-y-1.5">
                <li>
                  Sends clear, simple alerts to family when something looks off.
                </li>
                <li>
                  Can trigger a gentle voice check-in to confirm how things are
                  going.
                </li>
              </ul>
            </Card>
          </div>
        </Container>

        {/* VISUAL SIGNAL FLOW */}
        <Container className="space-y-3">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-slate-500">
            Visual signal flow
          </p>
          <div className="mx-auto max-w-3xl md:max-w-4xl overflow-hidden rounded-3xl shadow-sm">
            <Image
              src="/images/how-it-works-diagram.png"
              alt="Diagram showing how Lares connects to Apple Health, establishes a baseline, and sends alerts and insights."
              width={1200}
              height={1200}
              className="block h-auto w-full"
            />
          </div>
        </Container>

        {/* BENEFITS */}
        <Container className="space-y-5">
          <Section
            eyebrow="Benefits"
            title="Support independence without becoming a burden."
            description="Lares is for seniors who want to stay in control—and for families who want peace of mind without constant surveillance."
          />
          <div className="grid gap-4 text-sm text-slate-600 md:grid-cols-4">
            <Card className="p-4">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                Non-intrusive monitoring
              </h3>
              <p>
                Runs quietly in the background using signals from devices
                seniors already wear and use.
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
                A simple view of how things are going, with periodic summaries
                and timely alerts when attention is needed.
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
        <Container className="space-y-3">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-slate-500">
            Testimonials
          </p>
          <div className="grid gap-4 md:grid-cols-3 text-slate-700">
            <Card className="p-4">
              <p className="mb-2">
                &quot;Before Lares, I was checking my mom&apos;s phone log every
                day. Now I get a weekly summary and an alert if something
                changes. It&apos;s worry without the guesswork.&quot;
              </p>
              <p className="text-sm text-slate-500">
                — Adult daughter, pilot user
              </p>
            </Card>

            <Card className="p-4">
              <p className="mb-2">
                &quot;I like that it&apos;s watching without hovering. I still
                decide what I do each day—it just notices if I start slowing
                down.&quot;
              </p>
              <p className="text-sm text-slate-500">
                — 78-year-old living alone
              </p>
            </Card>

            <Card className="p-4">
              <p className="mb-2">
                &quot;It feels like we&apos;re finally using the data from the
                watch for something that actually matters to our family.&quot;
              </p>
              <p className="text-sm text-slate-500">
                — Son caring for both parents
              </p>
            </Card>
          </div>
        </Container>

        {/* FAQ */}
        <Container className="space-y-3">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-slate-500">
            FAQ
          </p>
          <div className="max-w-3xl space-y-4 text-slate-700">
            <div>
              <h3 className="mb-1 font-semibold text-slate-900">
                Who is this pilot for?
              </h3>
              <p>
                Independent seniors living in the Bay Area who want to stay in
                control, and families who want clearer insight into day-to-day
                patterns without constant check-ins or devices everywhere.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-slate-900">
                What devices do we need?
              </h3>
              <p>
                Lares works with iPhone, Apple Watch, and Apple
                Health–connected devices such as scales and blood pressure
                cuffs.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-slate-900">
                How does Lares protect privacy?
              </h3>
              <p>
                We focus on trends, not minute-by-minute tracking. Data is
                encrypted in transit and at rest, and we share only what
                families need to understand changes.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-slate-900">
                Is this a medical or emergency service?
              </h3>
              <p>
                Lares is not an emergency response or diagnostic service.
                It&apos;s an early-warning and peace-of-mind layer that helps
                families act sooner and communicate better with clinicians.
              </p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-slate-900">
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
    </>
  );
}
