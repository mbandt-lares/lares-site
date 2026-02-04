// src/app/how-it-works/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Lares Care Works',
  description:
    'See how Lares Care connects to Apple devices, learns daily patterns, and flags meaningful changes for families.',
};

export default function HowItWorksPage() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        {/* Eyebrow + Hero copy */}
        <header className="mb-10 md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
            How it works
          </p>
          <h1 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Lares quietly watches daily patterns, then steps in when it matters.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
            Lares connects to Apple devices already in the home, learns what &ldquo;normal&rdquo; looks
            like for each person, and flags meaningful changes for families—not every tiny fluctuation.
          </p>
        </header>

        {/* Signals -> alerts */}
        <section
          aria-labelledby="signals-to-alerts-heading"
          className="mb-12 md:mb-14"
        >
          <h2
            id="signals-to-alerts-heading"
            className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl"
          >
            From real-world signals to meaningful alerts
          </h2>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm md:mt-5 md:p-8">
            <p className="text-base leading-relaxed text-slate-700 md:text-[17px]">
              We don&apos;t ship hubs or proprietary hardware. Lares starts with Apple Watch, iPhone,
              and Apple Health–connected devices like scales and blood pressure cuffs. These devices
              quietly collect movement-related data and vital patterns throughout the day.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-[17px]">
              Our models turn that raw stream into simple stories about routine, steadiness, and change
              over time—so families can see whether things are stable, drifting, or slipping in ways
              that might merit action.
            </p>
          </div>
        </section>

        {/* Pipeline in three steps */}
        <section
          aria-labelledby="pipeline-heading"
          className="mb-12 md:mb-14"
        >
          <h2
            id="pipeline-heading"
            className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl"
          >
            The Lares pipeline in three steps
          </h2>

          <ol className="mt-4 grid gap-4 md:mt-5 md:grid-cols-3">
            <li className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm md:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700">
                Step 1
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900 md:text-base">
                Connect to Apple Health
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-[15px]">
                Lares connects to Apple Health data from iPhone, Apple Watch, and compatible devices
                with the family&apos;s permission. We focus on movement, steadiness, activity, and
                sleep—signals that say a lot about how someone is doing at home.
              </p>
            </li>

            <li className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm md:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700">
                Step 2
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900 md:text-base">
                Learn what&rsquo;s &ldquo;normal&rdquo;
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-[15px]">
                For each person, Lares builds a baseline—how active they usually are, how steady they
                tend to be, how their sleep and daily rhythms look over weeks, not hours. We care about
                the shape of their routine, not individual spikes.
              </p>
            </li>

            <li className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm md:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700">
                Step 3
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900 md:text-base">
                Flag meaningful changes
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-[15px]">
                When patterns drift—slower walks, more nighttime wake-ups, less movement overall—Lares
                highlights those shifts in plain language and suggests when it might be time to check in
                or seek help.
              </p>
            </li>
          </ol>
        </section>

        {/* Signals Lares looks at */}
        <section
          aria-labelledby="signals-heading"
          className="mb-12 md:mb-14"
        >
          <h2
            id="signals-heading"
            className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl"
          >
            What signals Lares looks at
          </h2>

          <div className="mt-4 grid gap-4 md:mt-5 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm md:p-6">
              <h3 className="text-sm font-semibold text-slate-900 md:text-[15px]">
                Activity and movement
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-[15px]">
                Daily step counts, walking distance, and general activity levels. We&apos;re looking
                for slow drifts: fewer steps, shorter walks, more time sitting than usual.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm md:p-6">
              <h3 className="text-sm font-semibold text-slate-900 md:text-[15px]">
                Steadiness &amp; fall risk indicators
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-[15px]">
                Signals from Apple&apos;s mobility metrics—walk steadiness, balance-related trends,
                and changes that may increase fall risk over time.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm md:p-6">
              <h3 className="text-sm font-semibold text-slate-900 md:text-[15px]">
                Sleep &amp; rest patterns
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-[15px]">
                Changes in sleep duration, fragmentation, and overnight restlessness that may correlate
                with mood, medication effects, or overall decline.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm md:p-6">
              <h3 className="text-sm font-semibold text-slate-900 md:text-[15px]">
                Connected devices
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-[15px]">
                Where families use Apple Health–connected scales or blood pressure cuffs, Lares can
                incorporate those trends as additional context for changes in mobility and energy.
              </p>
            </article>
          </div>
        </section>

        {/* Alerts & check-ins */}
        <section
          aria-labelledby="alerts-heading"
          className="mb-12 md:mb-14"
        >
          <h2
            id="alerts-heading"
            className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl"
          >
            How alerts and check-ins actually work
          </h2>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm md:mt-5 md:p-8">
            <p className="text-base leading-relaxed text-slate-700 md:text-[17px]">
              Lares is deliberately conservative about alerts. We&apos;re not trying to create a stream
              of pings that families learn to ignore. Instead, we focus on sustained or meaningful shifts
              in patterns.
            </p>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 md:text-[15px]">
              <li>
                <span className="font-semibold text-slate-900">
                  Summaries, not dashboards.
                </span>{' '}
                Families see clear statements like &ldquo;activity has been trending lower for 10
                days&rdquo; instead of raw graphs.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Context over panic.
                </span>{' '}
                When we highlight a change, we explain whether it&apos;s mild, moderate, or significant
                relative to that person&apos;s baseline.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Gentle prompts first.
                </span>{' '}
                Often the right next step is a call, a visit, or a discussion with a clinician—not an
                emergency response.
              </li>
            </ul>
          </div>
        </section>

        {/* Experience for families */}
        <section
          aria-labelledby="experience-heading"
          className="mb-12 md:mb-14"
        >
          <h2
            id="experience-heading"
            className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl"
          >
            What the experience feels like for families
          </h2>

          <div className="mt-4 grid gap-4 md:mt-5 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm md:p-6">
              <h3 className="text-sm font-semibold text-slate-900 md:text-[15px]">
                A simple view of how things are going
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-[15px]">
                Families get a concise picture of how routines are trending: broadly stable, drifting,
                or clearly worsening. No training needed, no dashboards to learn.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm md:p-6">
              <h3 className="text-sm font-semibold text-slate-900 md:text-[15px]">
                Clear next-step suggestions
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 md:text-[15px]">
                When a trend matters, Lares frames reasonable options—like checking in, encouraging a
                walk, adjusting supports, or talking with a clinician—without overstepping into medical
                advice.
              </p>
            </article>
          </div>
        </section>

        {/* What Lares is / is not */}
        <section
          aria-labelledby="is-isnt-heading"
          className="mb-4 md:mb-6"
        >
          <h2
            id="is-isnt-heading"
            className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl"
          >
            What Lares is—and what it isn&apos;t
          </h2>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm md:mt-5 md:p-8">
            <p className="text-base leading-relaxed text-slate-700 md:text-[17px]">
              Lares is an early-warning and peace-of-mind layer for families. It is not an emergency
              response system or a replacement for clinical care.
            </p>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 md:text-[15px]">
              <li>
                <span className="font-semibold text-slate-900">
                  Not 911 or a call center.
                </span>{' '}
                We don&apos;t dispatch ambulances or run a 24/7 call service.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Not a diagnostic tool.
                </span>{' '}
                We highlight patterns that may warrant attention; clinicians remain the source of
                diagnosis and treatment decisions.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Built to respect independence.
                </span>{' '}
                Seniors stay in control; Lares is there to help families notice when support might need
                to change.
              </li>
            </ul>
          </div>
        </section>

        {/* Optional gentle CTA – comment out if you truly don't want it */}
        <div className="mt-8 border-t border-slate-200 pt-6 md:mt-10 md:pt-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="max-w-xl text-sm leading-relaxed text-slate-700 md:text-[15px]">
              Ready to see Lares in action with your family? Early Bay Area pilots help shape how the
              product works in the real world.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
