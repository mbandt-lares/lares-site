// src/app/how-it-works/page.tsx
import type { Metadata } from 'next';
import { Activity, Shield, Moon, Smartphone } from "lucide-react";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: 'How Lares Health Works',
  description:
    'See how Lares Health connects to Apple devices, learns daily patterns, and flags meaningful changes for families.',
};

export default function HowItWorksPage() {
  return (
    <div className="bg-bg-main">
      <div className="bg-linear-to-br from-[#F4F1EA] to-[#EBE5D9]">
        <Section
          eyebrow="How it works"
          title={
            <>
              Lares quietly watches daily patterns,
              <br className="hidden sm:block" /> then steps in when it matters.
            </>
          }
          description="Lares connects to Apple devices already in the home, learns what “normal” looks like for each person, and flags meaningful changes for families—not every tiny fluctuation."
        >
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-10 space-y-6 border-none shadow-xl shadow-brand-blue/5">
              <span className="text-5xl font-bold text-brand-blue/20">01</span>
              <h3 className="text-3xl font-headline font-bold text-brand-blue">Syncs</h3>
              <p className="text-text-secondary text-lg">
                Connects to Apple Watch and iPhone to track movement and sleep.
              </p>
            </Card>
            <Card className="p-10 space-y-6 border-none shadow-xl shadow-brand-blue/5">
              <span className="text-5xl font-bold text-brand-blue/20">02</span>
              <h3 className="text-3xl font-headline font-bold text-brand-blue">Learns</h3>
              <p className="text-text-secondary text-lg">
                AI detects unusual patterns by learning what “normal” looks like for each person.
              </p>
            </Card>
            <Card className="p-10 space-y-6 border-none shadow-xl shadow-brand-blue/5">
              <span className="text-5xl font-bold text-brand-blue/20">03</span>
              <h3 className="text-3xl font-headline font-bold text-brand-blue">Alerts</h3>
              <p className="text-text-secondary text-lg">
                Sends clear alerts and triggers voice check-ins when something looks off.
              </p>
            </Card>
          </div>
        </Section>
      </div>

      {/* Signals -> alerts */}
      <div className="bg-brand-cream/30">
        <Section title="From real-world signals to meaningful alerts">
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              We don&apos;t ship hubs or proprietary hardware. Lares starts with Apple Watch, iPhone,
              and Apple Health–connected devices like scales and blood pressure cuffs. These devices
              quietly collect movement-related data and vital patterns throughout the day.
            </p>
            <div className="h-px bg-brand-blue/10 my-6" />
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              Our models turn that raw stream into simple stories about routine, steadiness, and change
              over time—so families can see whether things are stable, drifting, or slipping in ways
              that might merit action.
            </p>
          </div>
        </Section>
      </div>

      {/* Signals Lares looks at */}
      <Section title="What signals Lares looks at">
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Activity and movement",
              body: "Daily step counts, walking distance, and general activity levels. We’re looking for slow drifts: fewer steps, shorter walks, more time sitting than usual.",
              icon: Activity,
            },
            {
              title: "Steadiness & fall risk indicators",
              body: "Signals from Apple’s mobility metrics—walk steadiness, balance-related trends, and changes that may increase fall risk over time.",
              icon: Shield,
            },
            {
              title: "Sleep & rest patterns",
              body: "Changes in sleep duration, fragmentation, and overnight restlessness that may correlate with mood, medication effects, or overall decline.",
              icon: Moon,
            },
            {
              title: "Connected devices",
              body: "Where families use Apple Health–connected scales or blood pressure cuffs, Lares can incorporate those trends as additional context.",
              icon: Smartphone,
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="p-8 md:p-10 bg-white border border-brand-cream/40 shadow-lg shadow-brand-blue/5"
            >
              <div className="w-10 h-10 rounded-2xl bg-brand-cream/40 text-brand-blue flex items-center justify-center mb-4">
                <item.icon size={20} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-headline font-bold text-brand-blue mb-3">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Workflow Diagram */}
      <div className="bg-brand-blue overflow-hidden relative">
        <Section inverted={true}>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-5xl">
              <WorkflowDiagram />
            </div>
          </div>
        </Section>
      </div>

      {/* Experience for families */}
      <Section title="What it feels like for families">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-8 md:p-10 space-y-4 bg-white border border-brand-cream/40 shadow-lg shadow-brand-blue/5">
            <h3 className="text-2xl font-headline font-bold text-brand-blue">
              A simple view of how things are going
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Families get a concise picture of how routines are trending: broadly stable, drifting,
              or clearly worsening. No training needed.
            </p>
          </Card>

          <Card className="p-8 md:p-10 space-y-4 bg-white border border-brand-cream/40 shadow-lg shadow-brand-blue/5">
            <h3 className="text-2xl font-headline font-bold text-brand-blue">
              Clear next-step suggestions
            </h3>
            <p className="text-text-secondary leading-relaxed">
              When a trend matters, Lares frames reasonable options—like checking in, encouraging a
              walk, or talking with a clinician.
            </p>
          </Card>
        </div>
      </Section>

      {/* Optional gentle CTA */}
      <div className="bg-brand-cream/30">
        <Section title="Ready to see Lares in action&nbsp;with&nbsp;your&nbsp;family?">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <p className="max-w-xl text-lg text-text-secondary">
              Early Bay Area pilots help shape how the product works in the real world.
            </p>
            <Button href="/#contact" variant="primary" className="px-8 py-3 text-base">
              Join the waitlist
            </Button>
          </div>
        </Section>
      </div>
    </div>
  );
}
