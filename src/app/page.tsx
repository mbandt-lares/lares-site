// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-20 pb-20">
      {/* TOP PILOT RIBBON */}
      <section className="border-b border-slate-100 bg-white">
        <Container className="flex flex-col gap-2 py-3 text-xs md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-amber-700">
              Bay Area pilot now running
            </span>
            <span className="text-[0.75rem] text-slate-600">
              We&apos;re actively monitoring independent seniors in the Bay Area
              — including Rossmoor — to help shape Lares Health.
            </span>
          </div>
          <Link
            href="#pilot"
            className="inline-flex items-center justify-center rounded-md border border-amber-300 bg-amber-50 px-3 py-1.5 text-[0.75rem] font-medium text-amber-800 hover:bg-amber-100"
          >
            Learn more / join the pilot
          </Link>
        </Container>
      </section>

      {/* HERO */}
      <section className="pt-6">
        <Container className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center">
          <div className="space-y-5">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
              Quietly watching. Actively caring.
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              AI-powered health monitoring for elders who want independence—
              and for families who stay connected.
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-xl">
              Lares Health watches for small changes in daily patterns so
              families don&apos;t have to. When something looks off, Lares
              nudges, checks in, and keeps everyone in the loop—without turning
              home into a hospital.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Link
                href="#pilot"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
                           bg-sky-600 text-white hover:bg-sky-500 focus:outline-none focus:ring-2
                           focus:ring-offset-1 focus:ring-sky-600"
              >
                Join the pilot
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
                           border border-slate-300 bg-white text-slate-800 hover:border-slate-400
                           focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-600"
              >
                How it works
              </Link>
            </div>
            <p className="text-[0.75rem] text-slate-500">
              Designed for aging in place. Built on Apple Health and connected
              devices. We&apos;re starting with a small pilot in the Bay Area.
            </p>
          </div>

          <Card className="overflow-hidden p-0 shadow-sm">
            <Image
              src="/images/hero-elder-family.jpg"
              alt="Grandparent on a couch with two grandchildren, relaxed and smiling"
              width={900}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </Card>
        </Container>
      </section>

      {/* AT A GLANCE */}
      <section>
        <Container>
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
      </section>

      {/* PILOT SECTION (NO FULL-WIDTH YELLOW BAND) */}
      <section id="pilot">
        <Container>
          <div className="rounded-xl border border-amber-100 bg-amber-50/60 p-6 md:p-8 shadow-sm">
            <div className="space-y-3 md:space-y-4">
              <div className="space-y-1">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-amber-700">
                  Pilot first, then full launch.
                </p>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
                  Pilot Lares with real Bay Area seniors — and shape how it
                  works.
                </h2>
              </div>
              <p className="text-sm text-slate-700 max-w-2xl">
                We&apos;re starting with a small group of independent seniors in
                the Bay Area — including Rossmoor. These first families aren&apos;t
                just &quot;early users&quot;; they help decide what &quot;useful
                looks like&quot; before we scale.
              </p>

              <div className="grid gap-4 md:grid-cols-3 text-xs md:text-sm">
                <Card className="p-4 border-amber-100">
                  <h3 className="mb-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-amber-700">
                    What the pilot includes
                  </h3>
                  <ul className="space-y-1 text-slate-700">
                    <li>Initial setup and help linking Apple Watch &amp; iPhone.</li>
                    <li>Check-ins on early signal changes we notice.</li>
                    <li>Simple weekly summaries for your family.</li>
                    <li>Early say in what matters and what doesn&apos;t.</li>
                  </ul>
                </Card>

                <Card className="p-4 border-amber-100">
                  <h3 className="mb-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-amber-700">
                    What it doesn’t replace
                  </h3>
                  <ul className="space-y-1 text-slate-700">
                    <li>We don&apos;t manage 911 emergencies.</li>
                    <li>No pressure to change doctors or plans.</li>
                    <li>No cameras in the living room or bedroom.</li>
                    <li>No complicated portals to learn.</li>
                  </ul>
                </Card>

                <Card className="p-4 border-amber-100">
                  <h3 className="mb-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-amber-700">
                    Who we&apos;re looking for
                  </h3>
                  <ul className="space-y-1 text-slate-700">
                    <li>Independent seniors living in the Bay Area.</li>
                    <li>
                      A family member who&apos;s starting to worry about falls,
                      slowing down, or subtle changes.
                    </li>
                    <li>
                      People willing to give practical feedback on what&apos;s
                      useful—and what isn&apos;t.
                    </li>
                  </ul>
                </Card>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-amber-700 px-4 py-2 text-sm font-medium text-white hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-1"
                >
                  I&apos;d like to learn more / join the pilot
                </Link>
                <p className="mt-2 text-[0.7rem] text-amber-900/80 max-w-xl">
                  Pilot participation includes preferred pricing at launch and
                  extra support as we refine the service.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PROBLEM */}
      <section>
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
                families are guessing whether things are truly ok.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS (TEXT) */}
      <section id="how-it-works">
        <Container className="space-y-6">
          <Section
            eyebrow="How it works"
            title="Lares quietly watches patterns, then steps in when it matters."
            description="Built on Apple Health and connected devices, Lares links daily activity with proactive outreach and clear, human-readable alerts."
          />
          <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-600">
            <Card className="p-4">
              <p className="mb-1 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-sky-600">
                Step 1
              </p>
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                Syncs with Apple Health &amp; devices
              </h3>
              <p>
                Connects to Apple Watch, iPhone, and compatible devices to track
                movement, activity, sleep, and other key signals.
              </p>
            </Card>
            <Card className="p-4">
              <p className="mb-1 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-sky-600">
                Step 2
              </p>
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                Learns what’s normal
              </h3>
              <p>
                Builds a baseline for each person—how active they usually are,
                how steady they tend to be, and how their sleep and rhythms look
                over weeks.
              </p>
            </Card>
            <Card className="p-4">
              <p className="mb-1 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-sky-600">
                Step 3
              </p>
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                Flags meaningful changes
              </h3>
              <p>
                When patterns shift, Lares highlights what changed and suggests
                when it may be time to check in or seek help.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* VISUAL HOW-IT-WORKS DIAGRAM */}
      <section>
        <Container className="space-y-4">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sky-600">
            Visual signal flow
          </p>
          <Card className="overflow-hidden p-0 shadow-sm">
            <Image
              src="/images/how-it-works-diagram.png"
              alt="Diagram showing how Lares connects Apple Health data, establishes a baseline, and alerts families"
              width={1200}
              height={1200}
              className="h-auto w-full"
            />
          </Card>
        </Container>
      </section>

      {/* BENEFITS */}
      <section>
        <Container className="space-y-6">
          <Section
            eyebrow="Benefits"
            title="Support independence without becoming a burden."
            description="Lares is for seniors who want to stay in control—and for families who want peace of mind without constant surveillance."
          />
          <div className="grid gap-4 md:grid-cols-4 text-sm text-slate-600">
            <Card className="p-4">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                Non-intrusive monitoring
              </h3>
              <p>
                Runs quietly in the background using signals from devices
                seniors already wear and use. No cameras in the living room, no
                hospital feel at home.
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
      </section>

      {/* TESTIMONIALS */}
      <section>
        <Container className="space-y-4">
          <Section
            eyebrow="Testimonials"
            title="What families and elders are saying."
          />
          <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-600">
            <Card className="p-4">
              <p className="mb-2 text-slate-800">
                &quot;Before Lares, I was checking my mom&apos;s phone log every
                day. Now I get a weekly summary and an alert if something
                changes. It&apos;s worry without the guesswork.&quot;
              </p>
              <p className="text-[0.75rem] text-slate-500">
                — Adult daughter, pilot user
              </p>
            </Card>
            <Card className="p-4">
              <p className="mb-2 text-slate-800">
                &quot;I like that it&apos;s watching without hovering. I still
                decide what I do each day—it just notices if I start slowing
                down.&quot;
              </p>
              <p className="text-[0.75rem] text-slate-500">
                — 78-year-old living alone
              </p>
            </Card>
            <Card className="p-4">
              <p className="mb-2 text-slate-800">
                &quot;It feels like we&apos;re finally using the data from the
                watch for something that actually matters to our family.&quot;
              </p>
              <p className="text-[0.75rem] text-slate-500">
                — Son caring for both parents
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section>
        <Container className="space-y-4">
          <Section eyebrow="FAQ" title="Questions families usually ask." />
          <div className="space-y-4 text-sm text-slate-700">
            <div>
              <h3 className="mb-1 font-semibold text-slate-900">
                Who is this pilot for?
              </h3>
              <p>
                Independent seniors living in the Bay Area who want to stay in
                control, and families who want clearer insight into day-to-day
                patterns without constant check-ins.
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
                Lares is not an emergency response or diagnostic service. It&apos;s
                an early-warning and peace-of-mind layer that helps families act
                sooner and communicate better with clinicians.
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
      </section>
    </div>
  );
}
