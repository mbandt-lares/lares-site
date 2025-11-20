function SectionTitle({
  label,
  title,
  eyebrow,
}: {
  label?: string;
  title: string;
  eyebrow?: string;
}) {
  return (
    <div className="space-y-2">
      {eyebrow && (
        <div className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
          {eyebrow}
        </div>
      )}
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      {label && (
        <p className="text-sm text-slate-600 max-w-2xl">{label}</p>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-20">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-[1.2fr,1fr] items-center">
        <div className="space-y-6">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
            Quietly watching. Actively caring.
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            AI-powered health monitoring for elders who want independence—and
            for families who stay connected.
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-xl">
            Lares Health watches for small changes in daily patterns so families
            don&apos;t have to. When something looks off, Lares nudges, checks
            in, and keeps everyone in the loop.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium
                         bg-sky-600 hover:bg-sky-500 text-white"
            >
              Get Early Access
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium
                         border border-slate-300 text-slate-800 hover:border-slate-400"
            >
              How It Works
            </a>
          </div>
          <p className="text-[0.8rem] text-slate-500">
            Designed for aging in place. Built on Apple Health and connected
            devices.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 text-xs text-slate-600 shadow-sm">
          <div className="text-slate-500 uppercase tracking-[0.2em] text-[0.65rem] mb-3">
            At a glance
          </div>
          <ul className="space-y-2">
            <li>• Elders keep their independence and routines.</li>
            <li>• Families get timely insight instead of guesswork.</li>
            <li>• Subtle trends trigger checks before they become crises.</li>
          </ul>
        </div>
      </section>

      {/* Problem */}
      <section className="space-y-6">
        <SectionTitle
          eyebrow="The problem"
          title="Aging in place shouldn’t mean guessing about safety."
          label="Most families only find out something is wrong after a fall, a hospital visit, or days of unanswered calls. The signals were there—but nobody was watching full time."
        />
        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-600">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Aging in place feels isolating
            </h3>
            <p>
              Days blur together. It&apos;s easy for loneliness, low mood, or
              reduced activity to build up quietly.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Small health changes go unnoticed
            </h3>
            <p>
              Slower walks, restless sleep, skipped meals—each looks minor on
              its own but can signal real risk over time.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Families worry without insight
            </h3>
            <p>
              Check-in calls help, but they&apos;re snapshots. Without data,
              families are guessing whether things are truly ok.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="space-y-6">
        <SectionTitle
          eyebrow="How it works"
          title="Lares quietly watches patterns, then steps in when it matters."
          label="Built on Apple Health and connected devices, Lares links daily activity with proactive outreach and clear, human-readable alerts."
        />
        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-600">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
              Step 1
            </div>
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Syncs with Apple Health & devices
            </h3>
            <p>
              Connects to Apple Watch, iPhone, and compatible devices to track
              movement, activity, sleep, and other key signals.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
              Step 2
            </div>
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Detects unusual patterns via AI
            </h3>
            <p>
              Learns what &quot;normal&quot; looks like for each person, then
              flags meaningful changes in activity, steadiness, or routines.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
              Step 3
            </div>
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Sends alerts & voice check-ins
            </h3>
            <p>
              Sends simple, clear alerts to family. When needed, Lares can
              trigger a gentle voice check-in to confirm how things are going.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits / Features */}
      <section className="space-y-6">
        <SectionTitle
          eyebrow="Benefits"
          title="Support independence without becoming a burden."
          label="Lares is for seniors who want to stay in control—and for families who want peace of mind without constant surveillance."
        />
        <div className="grid gap-4 md:grid-cols-4 text-sm text-slate-600">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Non-intrusive monitoring
            </h3>
            <p>
              Runs quietly in the background using signals from devices seniors
              already wear and use.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Early warning system
            </h3>
            <p>
              Highlights trends before they become emergencies: reduced
              movement, changes in steadiness, disrupted sleep, and more.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Family dashboard & updates
            </h3>
            <p>
              A simple view of how things are going, with periodic summaries and
              timely alerts when attention is needed.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              Compassionate check-ins
            </h3>
            <p>
              Respectful, human language instead of clinical jargon—so seniors
              feel supported, not managed.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-6">
        <SectionTitle
          eyebrow="Testimonials"
          title="What families and elders are saying."
        />
        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-600">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="mb-3">
              “Before Lares, I was checking my mom&apos;s phone log every day.
              Now I get a weekly summary and an alert if something changes.
              It&apos;s worry without the guesswork.”
            </p>
            <p className="text-xs text-slate-500">— Adult daughter, pilot user</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="mb-3">
              “I like that it&apos;s watching without hovering. I still decide
              what I do each day—it just notices if I start slowing down.”
            </p>
            <p className="text-xs text-slate-500">— 78-year-old living alone</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="mb-3">
              “It feels like we&apos;re finally using the data from the watch
              for something that actually matters to our family.”
            </p>
            <p className="text-xs text-slate-500">
              — Son caring for both parents
            </p>
          </div>
        </div>
      </section>

      {/* Pricing / Waitlist */}
      <section className="space-y-6">
        <SectionTitle
          eyebrow="Pricing"
          title="Launching soon. Join the early access waitlist."
          label="We’re finalizing pricing with families and caregivers now. Early access members will help shape the product and receive preferred pricing at launch."
        />
        <div className="grid gap-6 md:grid-cols-[1.4fr,1fr] items-start">
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm space-y-3">
            <ul className="space-y-2">
              <li>• One simple subscription per senior household.</li>
              <li>• Includes monitoring, alerts, and family dashboard.</li>
              <li>• Works with existing Apple devices—no hub required.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm space-y-4">
            <p className="text-xs text-slate-500">
              Interested in early access? Share your email and we&apos;ll
              contact you as soon as pilot spots open.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
                         bg-sky-600 hover:bg-sky-500 text-white w-full"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <SectionTitle
          eyebrow="FAQ"
          title="Questions families usually ask."
        />
        <div className="space-y-3 text-sm text-slate-600">
          <details className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <summary className="cursor-pointer text-slate-900">
              What devices do we need?
            </summary>
            <p className="mt-2 text-slate-600">
              Lares is designed to work with Apple Watch and iPhone as the
              primary data sources, and can incorporate other Apple
              Health–connected devices over time.
            </p>
          </details>
          <details className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <summary className="cursor-pointer text-slate-900">
              How does Lares protect privacy?
            </summary>
            <p className="mt-2 text-slate-600">
              Lares focuses on trends and safety signals—not constant
              surveillance. We use secure, encrypted data flows and share
              only the insights families need to make good decisions.
            </p>
          </details>
          <details className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <summary className="cursor-pointer text-slate-900">
              Is this a medical or emergency service?
            </summary>
            <p className="mt-2 text-slate-600">
              Lares is a proactive monitoring and insight service, not a
              replacement for emergency response, clinical care, or 911. It&apos;s
              designed to complement existing care, not replace it.
            </p>
          </details>
          <details className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <summary className="cursor-pointer text-slate-900">
              How much will it cost?
            </summary>
            <p className="mt-2 text-slate-600">
              Pricing is being finalized with early families. Early access
              members will receive preferred pricing and direct influence over
              the roadmap.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
