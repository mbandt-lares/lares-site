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
              <div className="bg-brand-cream/10 p-8 rounded-[2rem] space-y-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-2xl bg-brand-orange/20 flex items-center justify-center text-brand-orange mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle><line x1="3" y1="3" x2="21" y2="21"></line></svg>
                </div>
                <h3 className="text-xl font-headline font-bold text-brand-cream">Decline is invisible</h3>
                <div className="h-px w-12 bg-brand-orange/50"></div>
                <p className="text-brand-cream/80 text-lg leading-relaxed">
                  She stopped going out. Started skipping meals. Sleeps worse than she used to. Some days, no one calls. You won&apos;t hear about it until she falls.
                </p>
              </div>
              <div className="bg-brand-cream/10 p-8 rounded-[2rem] space-y-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-2xl bg-brand-orange/20 flex items-center justify-center text-brand-orange mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="23" y2="12"></line><line x1="23" y1="8" x2="19" y2="12"></line></svg>
                </div>
                <h3 className="text-xl font-headline font-bold text-brand-cream">Loneliness is a health risk</h3>
                <div className="h-px w-12 bg-brand-orange/50"></div>
                <p className="text-brand-cream/80 text-lg leading-relaxed">
                  Not just sad. 31% higher dementia risk. Mortality impact of smoking a pack a day. Isolation kills—slowly, quietly.
                </p>
              </div>
              <div className="bg-brand-cream/10 p-8 rounded-[2rem] space-y-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-2xl bg-brand-orange/20 flex items-center justify-center text-brand-orange mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 10h.01"></path><path d="M12 10h.01"></path><path d="M16 10h.01"></path></svg>
                </div>
                <h3 className="text-xl font-headline font-bold text-brand-cream">&quot;I&apos;m fine&quot; tells you nothing</h3>
                <div className="h-px w-12 bg-brand-orange/50"></div>
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
            <div className="bg-white p-8 rounded-[2rem] space-y-5 border border-brand-blue/5 shadow-xl shadow-brand-blue/5 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              <span className="absolute -right-4 -bottom-6 text-[8rem] font-bold text-brand-blue/[0.03] pointer-events-none leading-none">01</span>
              <div className="w-12 h-12 bg-brand-cream/30 rounded-2xl flex items-center justify-center text-brand-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="text-xl font-headline font-bold text-brand-blue">Someone checks in. Every day.</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  How&apos;d you sleep? Getting out today? How are you feeling? It&apos;s a small thing—but for someone living alone, it might be the only voice they hear.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] space-y-5 border border-brand-blue/5 shadow-xl shadow-brand-blue/5 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              <span className="absolute -right-4 -bottom-6 text-[8rem] font-bold text-brand-blue/[0.03] pointer-events-none leading-none">02</span>
              <div className="w-12 h-12 bg-brand-cream/30 rounded-2xl flex items-center justify-center text-brand-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="text-xl font-headline font-bold text-brand-blue">Continuous health data</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Apple Watch and iPhone capture gait, sleep, activity, and fall risk—passively, with devices they already have.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] space-y-5 border border-brand-blue/5 shadow-xl shadow-brand-blue/5 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              <span className="absolute -right-4 -bottom-6 text-[8rem] font-bold text-brand-blue/[0.03] pointer-events-none leading-none">03</span>
              <div className="w-12 h-12 bg-brand-cream/30 rounded-2xl flex items-center justify-center text-brand-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="text-xl font-headline font-bold text-brand-blue">Data meets conversation</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  The watch shows she&apos;s walking less. The check-in reveals she hasn&apos;t left the house in days. That&apos;s not a glitch—that&apos;s a pattern worth noticing.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* WHAT YOU GET */}
        <div className="bg-white">
          <Section eyebrow="What You Get" title="Insight, not alerts.">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-brand-blue/10 bg-brand-cream/25 p-8 md:p-9 space-y-5">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                </div>
                <h3 className="text-xl font-headline font-bold text-brand-blue">Weekly summary</h3>
                <p className="text-text-secondary text-lg leading-relaxed">What changed. What didn&apos;t. What you should pay attention to. Not data—answers.</p>
              </div>

              <div className="rounded-[2rem] border border-brand-blue/10 bg-brand-cream/25 p-8 md:p-9 space-y-5">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <h3 className="text-xl font-headline font-bold text-brand-blue">Trend detection</h3>
                <p className="text-text-secondary text-lg leading-relaxed">Sleeping less this month. Walking slower this week. You&apos;ll see the slide before it becomes a fall.</p>
              </div>

              <div className="rounded-[2rem] border border-brand-blue/10 bg-brand-cream/25 p-8 md:p-9 space-y-5">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                </div>
                <h3 className="text-xl font-headline font-bold text-brand-blue">Family dashboard</h3>
                <p className="text-text-secondary text-lg leading-relaxed">One place. Clear picture. No calling to ask. No hoping she&apos;ll tell you.</p>
              </div>

              <div className="rounded-[2rem] border border-brand-blue/10 bg-brand-cream/25 p-8 md:p-9 space-y-5">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h3 className="text-xl font-headline font-bold text-brand-blue">Daily touchpoint</h3>
                <p className="text-text-secondary text-lg leading-relaxed">Not a survey. Not a sensor. A check-in that asks how they&apos;re doing—and notices when the answer changes.</p>
              </div>
            </div>
          </Section>
        </div>

        {/* HOW LARES IS DIFFERENT */}
        <Section className="bg-white" eyebrow="The Difference" title="Proactive. Not reactive.">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Competitors Column */}
              <div className="bg-brand-blue/5 rounded-[2rem] p-8 md:p-10 border border-brand-blue/10">
                <h3 className="text-xl font-bold uppercase tracking-widest text-text-secondary/60 mb-8 border-b border-brand-blue/10 pb-4">What's out there</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-text-secondary/40">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>
                    <p className="text-lg text-text-secondary">Tells you after she falls</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-text-secondary/40">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>
                    <p className="text-lg text-text-secondary">Proves she&apos;s alive</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-text-secondary/40">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>
                    <p className="text-lg text-text-secondary">Another device she won&apos;t wear</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-text-secondary/40">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>
                    <p className="text-lg text-text-secondary">Needs a doctor&apos;s order</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-text-secondary/40">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>
                    <p className="text-lg text-text-secondary">Fine until it&apos;s not</p>
                  </li>
                </ul>
              </div>

              {/* Lares Column */}
              <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-brand-blue/10 shadow-2xl shadow-brand-blue/10 relative -mt-4 md:mt-0 md:-ml-4 z-10">
                <h3 className="text-xl font-bold uppercase tracking-widest text-brand-orange mb-8 border-b border-brand-blue/10 pb-4">Lares</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-brand-orange bg-brand-orange/10 rounded-full p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-lg font-medium text-brand-blue">Sees the fall coming</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-brand-orange bg-brand-orange/10 rounded-full p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-lg font-medium text-brand-blue">Shows how she&apos;s actually doing</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-brand-orange bg-brand-orange/10 rounded-full p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-lg font-medium text-brand-blue">Uses the watch she already has</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-brand-orange bg-brand-orange/10 rounded-full p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-lg font-medium text-brand-blue">You sign up. Done.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-brand-orange bg-brand-orange/10 rounded-full p-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <p className="text-lg font-medium text-brand-blue">You see the change happening</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* THE RESEARCH */}
        <div className="bg-brand-blue relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-cream/20 to-transparent" />
          <Section inverted={true} eyebrow="The Research" title="This isn't opinion. It's science.">
            <div className="max-w-5xl mx-auto space-y-12">
              <h3 className="text-2xl md:text-3xl text-brand-cream leading-relaxed text-center font-medium max-w-3xl mx-auto">
                This isn&apos;t about feeling sad. It&apos;s about what happens to the brain and body when someone goes days without meaningful contact—and no one notices.
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-brand-cream/10 p-8 rounded-[2rem] text-center space-y-4 border border-brand-cream/10">
                  <div className="text-6xl md:text-7xl font-bold text-brand-orange">31%</div>
                  <div className="h-px w-16 bg-brand-orange/50 mx-auto"></div>
                  <p className="text-xl text-brand-cream font-medium">Higher dementia risk</p>
                  <p className="text-brand-cream/70 text-sm">linked to chronic loneliness</p>
                </div>
                
                <div className="bg-brand-cream/10 p-8 rounded-[2rem] text-center space-y-4 border border-brand-cream/10">
                  <div className="text-6xl md:text-7xl font-bold text-brand-orange">29%</div>
                  <div className="h-px w-16 bg-brand-orange/50 mx-auto"></div>
                  <p className="text-xl text-brand-cream font-medium">Higher heart attack risk</p>
                  <p className="text-brand-cream/70 text-sm">associated with social isolation</p>
                </div>
                
                <div className="bg-brand-cream/10 p-8 rounded-[2rem] text-center space-y-4 border border-brand-cream/10">
                  <div className="text-6xl md:text-7xl font-bold text-brand-orange">15</div>
                  <div className="h-px w-16 bg-brand-orange/50 mx-auto"></div>
                  <p className="text-xl text-brand-cream font-medium">Cigarettes a day</p>
                  <p className="text-brand-cream/70 text-sm">equivalent mortality impact</p>
                </div>
              </div>

              <p className="text-xs text-brand-cream/50 uppercase tracking-widest text-center mt-8">
                Sources: National Institute on Aging, Lancet Psychiatry, US Surgeon General Advisory
              </p>
            </div>
          </Section>
        </div>

        {/* FAQ */}
        <div className="bg-white">
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
