import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export default function HowItWorksPage() {
  return (
    <Container className="space-y-10 md:space-y-12 max-w-4xl">
      {/* INTRO */}
      <Section
        eyebrow="How it works"
        title="Lares quietly watches daily patterns, then steps in when it matters."
        description="Lares connects to Apple devices already in the home, learns what “normal” looks like for each person, and flags meaningful changes for families—not every tiny fluctuation."
      />

      {/* OVERVIEW */}
      <Section title="From real-world signals to meaningful alerts">
        <Card className="p-5 text-sm text-slate-600 space-y-3">
          <p>
            We don&apos;t ship hubs or proprietary hardware. Lares starts with
            Apple Watch, iPhone, and Apple Health–connected devices like scales
            and blood pressure cuffs. These devices quietly collect
            movement-related data and vital patterns throughout the day.
          </p>
          <p>
            Our models turn that raw stream into simple stories about routine,
            steadiness, and change over time—so families can see whether things
            are stable, drifting, or slipping in ways that might merit action.
          </p>
        </Card>
      </Section>

      {/* PIPELINE: 3 STEPS */}
      <Section title="The Lares pipeline in three steps">
        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-600">
          <Card className="p-4 flex flex-col gap-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-600">
              Step 1
            </p>
            <h3 className="text-sm font-semibold text-slate-900">
              Connect to Apple Health
            </h3>
            <p>
              Lares connects to Apple Health data from iPhone, Apple Watch, and
              compatible devices with the family&apos;s permission. We focus on
              movement, steadiness, activity, and sleep—signals that say a lot
              about how someone is doing at home.
            </p>
          </Card>

          <Card className="p-4 flex flex-col gap-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-600">
              Step 2
            </p>
            <h3 className="text-sm font-semibold text-slate-900">
              Learn what&apos;s “normal”
            </h3>
            <p>
              For each person, Lares builds a baseline—how active they usually
              are, how steady they tend to be, how their sleep and daily rhythms
              look over weeks, not hours. We care about the shape of their
              routine, not individual spikes.
            </p>
          </Card>

          <Card className="p-4 flex flex-col gap-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-sky-600">
              Step 3
            </p>
            <h3 className="text-sm font-semibold text-slate-900">
              Flag meaningful changes
            </h3>
            <p>
              When patterns drift—slower walks, more nighttime wake-ups, less
              movement overall—Lares highlights those shifts in plain language
              and suggests when it might be time to check in or seek help.
            </p>
          </Card>
        </div>
      </Section>

      {/* DATA WE USE */}
      <Section title="What signals Lares looks at">
        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-600">
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Activity and movement
            </h3>
            <p>
              Daily step counts, walking distance, and general activity levels.
              We&apos;re looking for slow drifts: fewer steps, shorter walks,
              more time sitting than usual.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Steadiness & fall risk indicators
            </h3>
            <p>
              Signals from Apple&apos;s mobility metrics—walk steadiness,
              balance-related trends, and changes that may increase fall risk
              over time.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Sleep & rest patterns
            </h3>
            <p>
              Changes in sleep duration, fragmentation, and overnight
              restlessness that may correlate with mood, medication effects, or
              overall decline.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Connected devices
            </h3>
            <p>
              Where families use Apple Health–connected scales or blood pressure
              cuffs, Lares can incorporate those trends as additional context
              for changes in mobility and energy.
            </p>
          </Card>
        </div>
      </Section>

      {/* ALERTS & CHECK-INS */}
      <Section title="How alerts and check-ins actually work">
        <Card className="p-5 text-sm text-slate-600 space-y-3">
          <p>
            Lares is deliberately conservative about alerts. We&apos;re not
            trying to create a stream of pings that families learn to ignore.
            Instead, we focus on sustained or meaningful shifts in patterns.
          </p>
          <ul className="list-disc space-y-1 pl-4">
            <li>
              <span className="font-semibold">Summaries, not dashboards.</span>{" "}
              Families see clear statements like “activity has been trending
              lower for 10 days” instead of raw graphs.
            </li>
            <li>
              <span className="font-semibold">Context over panic.</span> When we
              highlight a change, we explain whether it&apos;s mild, moderate,
              or significant relative to that person&apos;s baseline.
            </li>
            <li>
              <span className="font-semibold">Gentle prompts first.</span> Often
              the right next step is a call, a visit, or a discussion with a
              clinician—not an emergency response.
            </li>
          </ul>
        </Card>
      </Section>

      {/* EXPERIENCE FOR FAMILIES */}
      <Section title="What the experience feels like for families">
        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-600">
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              A simple view of how things are going
            </h3>
            <p>
              Families get a concise picture of how routines are trending:
              broadly stable, drifting, or clearly worsening. No training
              needed, no dashboards to learn.
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Clear next-step suggestions
            </h3>
            <p>
              When a trend matters, Lares frames reasonable options—like
              checking in, encouraging a walk, adjusting supports, or talking
              with a clinician—without overstepping into medical advice.
            </p>
          </Card>
        </div>
      </Section>

      {/* LIMITS & SCOPE */}
      <Section title="What Lares is—and what it isn’t">
        <Card className="p-5 text-sm text-slate-600 space-y-3">
          <p>
            Lares is an early-warning and peace-of-mind layer for families. It
            is not an emergency response system or a replacement for clinical
            care.
          </p>
          <ul className="list-disc space-y-1 pl-4">
            <li>
              <span className="font-semibold">Not 911 or a call center.</span>{" "}
              We don&apos;t dispatch ambulances or run a 24/7 call service.
            </li>
            <li>
              <span className="font-semibold">Not a diagnostic tool.</span> We
              highlight patterns that may warrant attention; clinicians remain
              the source of diagnosis and treatment decisions.
            </li>
            <li>
              <span className="font-semibold">Built to respect independence.</span>{" "}
              Seniors stay in control; Lares is there to help families notice
              when support might need to change.
            </li>
          </ul>
        </Card>
      </Section>
    </Container>
  );
}
