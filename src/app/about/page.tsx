import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function AboutPage() {
  return (
    <div className="bg-bg-main">
      {/* LEAD STATEMENT */}
      <Container className="py-12 md:py-16">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange/80">
            About LaresCare
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-brand-blue">
            Calm, human‑readable insight for families supporting aging in place.
          </h1>
          <p className="text-lg md:text-xl text-text-secondary">
            We focus on quiet daily patterns—movement, steadiness, rest—so families can act earlier
            without turning home into a hospital.
          </p>
          <div className="grid gap-3 md:grid-cols-2 text-sm text-brand-blue/70">
            <span>Designed for dignity.</span>
            <span>Built for families who can’t be there every day.</span>
          </div>
        </div>
      </Container>

      {/* PROBLEM / STANCE */}
      <div className="bg-brand-blue">
        <Section inverted={true} title="The gap we’re closing">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-headline text-brand-cream">Most tools are clinical</h3>
              <p className="text-brand-cream/70 text-lg leading-relaxed">
                Families get dashboards and alerts, but not a clear sense of whether someone is
                drifting, stable, or slipping.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-headline text-brand-cream">Subtle change is easy to miss</h3>
              <p className="text-brand-cream/70 text-lg leading-relaxed">
                Early shifts often appear weeks before a fall or decline. Quiet signals deserve quiet attention.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* WHAT WE BELIEVE */}
      <Section title="What we believe">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              body: "Independence is the goal, not a feature.",
            },
            {
              body: "Families need clarity, not constant alerts.",
            },
            {
              body: "Respectful tech should fade into daily life.",
            },
          ].map((item, index) => (
            <Card
              key={item.body}
              className="p-8 md:p-10 bg-white border border-brand-cream/40 shadow-lg shadow-brand-blue/5"
            >
              <span className="text-4xl font-bold text-brand-blue/20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-lg text-text-secondary">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* WHAT WE'RE TRYING TO FIX */}
      <div className="bg-brand-blue">
        <Section inverted={true} title="What we're trying to fix">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-headline text-brand-cream">Traditional tools are clinical</h3>
              <p className="text-brand-cream/70 text-lg leading-relaxed">
                Most options are built around medical workflows, not home life. Families get dashboards, not clarity.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-headline text-brand-cream">Families see problems too late</h3>
              <p className="text-brand-cream/70 text-lg leading-relaxed">
                Subtle changes often show up weeks before a fall. Without data, those patterns are easy to miss.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* HOW LARES IS DIFFERENT */}
      <Section title="How LaresCare is different">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Built around Apple Health",
              body: "No hubs, no hardware deliveries, no new gadgets to learn.",
            },
            {
              title: "Signals, not dashboards",
              body: "Clear language summaries: unusual trends, drifts, and check-ins.",
            },
            {
              title: "Early, gentle nudges",
              body: "A call from a daughter or a visit—not constant alarming notifications.",
            },
            {
              title: "Respect for independence",
              body: "Seniors stay in control. Families stay informed.",
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="p-10 md:p-12 space-y-4 bg-white border border-brand-cream/40 shadow-lg shadow-brand-blue/5"
            >
              <h3 className="text-3xl font-headline text-brand-blue">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div className="bg-brand-cream/30">
        <Section title="Ready to shape the future of care?" className="text-center">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-8">
            <p className="text-xl text-text-secondary">
              We&apos;re keeping the first cohort small so we can learn quickly.
            </p>
            <Button href="/#contact" variant="primary">
              Join the waitlist
            </Button>
          </div>
        </Section>
      </div>
    </div>
  );
}
