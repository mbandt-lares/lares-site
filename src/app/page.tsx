import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";

function PilotRibbon() {
  return (
    <div className="bg-brand-cream text-brand-blue py-3 border-b border-brand-blue/5">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-bold uppercase tracking-widest text-center">
          <p>Bay Area pilot now recruiting — Join Lares early</p>
          <Link href="#contact" className="underline hover:text-brand-orange transition-colors decoration-brand-orange/50 underline-offset-4">
            Learn more
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <PilotRibbon />

      <div className="overflow-x-hidden">
        {/* HERO */}
        <div
          id="hero"
          className="relative min-h-[600px] lg:min-h-[75vh] flex items-center py-12 lg:py-0 bg-linear-to-br from-[#F4F1EA] to-[#EBE5D9]"
        >
          <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-linear-to-bl from-brand-blue/5 to-transparent rounded-bl-[10rem] -z-10" />
          
          <Container>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6 lg:space-y-8">
                <div className="inline-block px-4 py-2 bg-brand-blue/5 rounded-full border border-brand-blue/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                    Quietly watching. Actively caring.
                  </p>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] font-headline tracking-tight text-brand-blue font-bold">
                  Know how they&apos;re <span className="text-brand-orange">really</span> doing.
                </h1>

                <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg font-medium">
                  A daily check-in that actually asks. Health data that actually shows. Real insight—before it becomes a crisis.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button href="#contact" variant="primary" className="h-14 px-10 text-base">Get started</Button>
                  <Button href="#how-it-works" variant="secondary" className="h-14 px-10 text-base">How it works</Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-blue/20 aspect-4/5 lg:aspect-3/4">
                  <Image
                    src="/images/hero-senior-living-room.jpg"
                    alt="Older woman relaxing on a couch in a bright living room"
                    fill
                    className="object-cover object-[center_35%] photo-warm hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-blue/45 to-transparent opacity-65" />
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-10 -left-10 md:bottom-10 md:-left-12 bg-white p-6 rounded-3xl shadow-xl shadow-brand-blue/10 max-w-xs animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 hidden md:block">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-blue uppercase tracking-wider">Health Status</p>
                      <p className="font-bold text-lg text-brand-blue">All Normal</p>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary">Mom&apos;s activity levels are consistent with her baseline this week.</p>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* THE PROBLEM */}
        <div className="bg-brand-blue relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-cream/20 to-transparent" />
          <Section inverted={true} eyebrow="The Problem" title="The slow things are the dangerous things.">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="bg-brand-cream/10 p-8 rounded-[2rem] space-y-4">
                <h3 className="text-xl font-headline font-bold text-brand-cream">Decline is invisible</h3>
                <p className="text-brand-cream/80 text-lg leading-relaxed">
                  She stopped going out. Started skipping meals. Sleeps worse than she used to. Some days, no one calls. You won&apos;t hear about it until she falls.
                </p>
              </div>
              <div className="bg-brand-cream/10 p-8 rounded-[2rem] space-y-4">
                <h3 className="text-xl font-headline font-bold text-brand-cream">Loneliness is a health risk</h3>
                <p className="text-brand-cream/80 text-lg leading-relaxed">
                  Not just sad. 31% higher dementia risk. Mortality impact of smoking a pack a day. Isolation kills—slowly, quietly.
                </p>
              </div>
              <div className="bg-brand-cream/10 p-8 rounded-[2rem] space-y-4">
                <h3 className="text-xl font-headline font-bold text-brand-cream">&quot;I&apos;m fine&quot; tells you nothing</h3>
                <p className="text-brand-cream/80 text-lg leading-relaxed">
                  You call. She says she&apos;s fine. She&apos;s not going to tell you she&apos;s lonely, unsteady, or scared. You need more than her word.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* HOW IT WORKS */}
        <Section id="how-it-works" className="bg-white" eyebrow="How It Works" title="Two signals. One clear picture.">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-cream/30 p-8 rounded-[2rem] space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange">Step 1</p>
              <h3 className="text-xl font-headline font-bold text-brand-blue">Someone checks in. Every day.</h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                How&apos;d you sleep? Getting out today? How are you feeling? It&apos;s a small thing—but for someone living alone, it might be the only voice they hear.
              </p>
            </div>
            <div className="bg-brand-cream/30 p-8 rounded-[2rem] space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange">Step 2</p>
              <h3 className="text-xl font-headline font-bold text-brand-blue">Continuous health data</h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                Apple Watch and iPhone capture gait, sleep, activity, and fall risk—passively, with devices they already have.
              </p>
            </div>
            <div className="bg-brand-cream/30 p-8 rounded-[2rem] space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange">Step 3</p>
              <h3 className="text-xl font-headline font-bold text-brand-blue">Data meets conversation</h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                The watch shows she&apos;s walking less. The check-in reveals she hasn&apos;t left the house in days. That&apos;s not a glitch—that&apos;s a pattern worth noticing.
              </p>
            </div>
          </div>
        </Section>

        {/* WHAT YOU GET */}
        <div className="bg-brand-cream/30">
          <Section eyebrow="What You Get" title="Insight, not alerts.">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                </div>
                <h3 className="text-xl font-headline font-bold text-brand-blue">Weekly summary</h3>
                <p className="text-text-secondary leading-relaxed">What changed. What didn&apos;t. What you should pay attention to. Not data—answers.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <h3 className="text-xl font-headline font-bold text-brand-blue">Trend detection</h3>
                <p className="text-text-secondary leading-relaxed">Sleeping less this month. Walking slower this week. You&apos;ll see the slide before it becomes a fall.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                </div>
                <h3 className="text-xl font-headline font-bold text-brand-blue">Family dashboard</h3>
                <p className="text-text-secondary leading-relaxed">One place. Clear picture. No calling to ask. No hoping she&apos;ll tell you.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h3 className="text-xl font-headline font-bold text-brand-blue">Daily touchpoint</h3>
                <p className="text-text-secondary leading-relaxed">Not a survey. Not a sensor. A check-in that asks how they&apos;re doing—and notices when the answer changes.</p>
              </div>
            </div>
          </Section>
        </div>

        {/* HOW LARES IS DIFFERENT */}
        <Section className="bg-white" eyebrow="The Difference" title="Proactive. Not reactive.">
          <div className="max-w-4xl">
            <div className="grid grid-cols-2 gap-px bg-brand-blue/10 rounded-[2rem] overflow-hidden">
              <div className="bg-brand-blue p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-cream/60 mb-2">What&apos;s out there</p>
              </div>
              <div className="bg-white p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange mb-2">Lares</p>
              </div>
              
              <div className="bg-brand-blue/5 p-6 md:p-8">
                <p className="text-text-secondary">Tells you after she falls</p>
              </div>
              <div className="bg-white p-6 md:p-8">
                <p className="text-brand-blue font-medium">Sees the fall coming</p>
              </div>
              
              <div className="bg-brand-blue/5 p-6 md:p-8">
                <p className="text-text-secondary">Proves she&apos;s alive</p>
              </div>
              <div className="bg-white p-6 md:p-8">
                <p className="text-brand-blue font-medium">Shows how she&apos;s actually doing</p>
              </div>
              
              <div className="bg-brand-blue/5 p-6 md:p-8">
                <p className="text-text-secondary">Another device she won&apos;t wear</p>
              </div>
              <div className="bg-white p-6 md:p-8">
                <p className="text-brand-blue font-medium">Uses the watch she already has</p>
              </div>
              
              <div className="bg-brand-blue/5 p-6 md:p-8">
                <p className="text-text-secondary">Needs a doctor&apos;s order</p>
              </div>
              <div className="bg-white p-6 md:p-8">
                <p className="text-brand-blue font-medium">You sign up. Done.</p>
              </div>
              
              <div className="bg-brand-blue/5 p-6 md:p-8 rounded-bl-[2rem]">
                <p className="text-text-secondary">Fine until it&apos;s not</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-br-[2rem]">
                <p className="text-brand-blue font-medium">You see the change happening</p>
              </div>
            </div>
          </div>
        </Section>

        {/* THE RESEARCH */}
        <div className="bg-brand-blue">
          <Section inverted={true} eyebrow="The Research" title="This isn't opinion. It's science.">
            <div className="max-w-3xl space-y-6">
              <p className="text-xl md:text-2xl text-brand-cream leading-relaxed">
                Loneliness increases dementia risk by <strong>31%</strong>. Heart attack risk by <strong>29%</strong>. Mortality impact on par with <strong>smoking 15 cigarettes a day</strong>.
              </p>
              <p className="text-lg text-brand-cream/80 leading-relaxed">
                This isn&apos;t about feeling sad. It&apos;s about what happens to the brain and body when someone goes days without meaningful contact—and no one notices.
              </p>
              <p className="text-sm text-brand-cream/50 uppercase tracking-widest">
                Sources: NIA, Lancet Psychiatry, US Surgeon General
              </p>
            </div>
          </Section>
        </div>

        {/* FAQ */}
        <div className="bg-brand-cream/30">
          <Section title="Common Questions">
            <div className="max-w-4xl">
              <div className="grid gap-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-headline font-bold text-brand-blue">What devices do they need?</h3>
                  <p className="text-lg text-text-secondary leading-relaxed">iPhone and Apple Watch. No extra hardware.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-headline font-bold text-brand-blue">Is this a medical service?</h3>
                  <p className="text-lg text-text-secondary leading-relaxed">No. Lares provides insight for families, not clinical care.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-headline font-bold text-brand-blue">What if they don&apos;t answer a check-in?</h3>
                  <p className="text-lg text-text-secondary leading-relaxed">You&apos;ll be notified. Patterns matter more than any single day.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-headline font-bold text-brand-blue">How is this different from a medical alert pendant?</h3>
                  <p className="text-lg text-text-secondary leading-relaxed">Pendants react after a fall. Lares notices before.</p>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* CONTACT / CTA */}
        <div id="contact" className="bg-linear-to-br from-[#F4F1EA] to-[#EBE5D9]">
          <Container className="py-16 md:py-24">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
              <div className="space-y-6">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange/80">
                  Get Started
                </p>
                <h2 className="section-title text-brand-blue">
                  Stop wondering. Start knowing.
                </h2>
                <p className="text-lg md:text-xl text-text-secondary max-w-xl">
                  Get real insight into how your parent is doing—before something goes wrong. Early families help shape the product and receive preferred pricing.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-brand-blue/70">
                  <span>Small cohort, real feedback.</span>
                  <span>Bay Area pilots first.</span>
                </div>
              </div>

              <ContactForm />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
