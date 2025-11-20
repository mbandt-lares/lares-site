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

          {/* UPDATED CTA → FULL FILE CHANGE */}
          <Link
            href="/how-it-works"
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
            <li>Trends trigger checks before they become crises.</li>
          </ul>
        </Card>
      </Container>

      {/* PROBLEM */}
      <Container className="space-y-6">
        <Section
          eyebrow="The problem"
          title="Aging in place shouldn’t mean guessing about safety."
          description="Most families only find out something is wrong after a fall or an urgent visit. The signals were there—but nobody was watching full time."
        />

        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-600">
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Aging in place feels isolating
            </h3>
            <p>Days blur together. It’s easy for subtle declines to go unnoticed.</p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Small health changes go unnoticed
            </h3>
            <p>
              Slower walks, restless sleep, skipped meals—minor individually, big over time.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Families worry without insight
            </h3>
            <p>Check-ins help, but they’re snapshots. Lares sees the whole picture.</p>
          </Card>
        </div>
      </Container>

      {/* HOW IT WORKS PREVIEW */}
      <Container id="how-it-works" className="space-y-6">
        <Section
          eyebrow="How it works"
          title="Lares watches patterns, then steps in when it matters."
          description="Built on Apple Health, Lares links activity trends with smart outreach and clear, human-readable alerts."
        />

        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-600">
          <Card className="p-4 flex flex-col gap-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-600">
              Step 1
            </p>
            <h3 className="text-sm font-semibold text-slate-900">
              Sync with Apple Health
            </h3>
            <p>
              Connects to Apple Watch, iPhone, and compatible health devices.
            </p>
          </Card>
          <Card className="p-4 flex flex-col gap-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-600">
              Step 2
            </p>
            <h3 className="text-sm font-semibold text-slate-900">
              Learn what’s normal
            </h3>
            <p>
              Builds a personal baseline for activity, steadiness, and routines.
            </p>
          </Card>
          <Card className="p-4 flex flex-col gap-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-600">
              Step 3
            </p>
            <h3 className="text-sm font-semibold text-slate-900">
              Flag meaningful changes
            </h3>
            <p>Signals when patterns shift in ways that matter.</p>
          </Card>
        </div>
      </Container>

      {/* BENEFITS */}
      <Container className="space-y-6">
        <Section
          eyebrow="Benefits"
          title="Support independence without becoming a burden."
          description="Lares gives seniors control—and families peace of mind."
        />

        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-600">
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Non-intrusive monitoring
            </h3>
            <p>Runs quietly in the background using devices seniors already wear.</p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Early warning system
            </h3>
            <p>Highlights drifts in steadiness, movement, sleep, and more.</p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Family dashboard & updates
            </h3>
            <p>Simple summaries, not complex dashboards.</p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Compassionate check-ins
            </h3>
            <p>Human language that supports dignity—not surveillance.</p>
          </Card>
        </div>
      </Container>

      {/* TESTIMONIALS */}
      <Container className="space-y-6">
        <Section eyebrow="Testimonials" title="What families are saying" />

        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-600">
          <Card className="p-4">
            <p>“Lares helped us understand Dad’s routines in a way that felt natural.”</p>
            <p className="mt-2 text-[0.75rem] text-slate-500">— Son</p>
          </Card>
          <Card className="p-4">
            <p>“I like that it checks in without hovering over me.”</p>
            <p className="mt-2 text-[0.75rem] text-slate-500">— Senior pilot user</p>
          </Card>
          <Card className="p-4">
            <p>“We finally feel informed instead of worried.”</p>
            <p className="mt-2 text-[0.75rem] text-slate-500">— Daughter</p>
          </Card>
        </div>
      </Container>

      {/* PRICING */}
      <Container className="space-y-6">
        <Section
          eyebrow="Pricing"
          title="Launching soon. Join the waitlist."
          description="Early families receive preferred pricing and the ability to shape what we build next."
        />

        <Card className="p-4 text-sm text-slate-600 space-y-2">
          <ul className="list-disc pl-4 space-y-1">
            <li>Simple subscription per senior household.</li>
            <li>Includes monitoring + alerts + summaries.</li>
            <li>No new devices needed—Apple only.</li>
          </ul>
        </Card>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex w-full justify-center md:w-auto rounded-md px-4 py-2 text-sm font-medium
                       bg-sky-600 text-white hover:bg-sky-500 focus:outline-none focus:ring-2
                       focus:ring-offset-1 focus:ring-sky-600"
          >
            Join the Waitlist
          </Link>
        </div>
      </Container>
    </div>
  );
}
