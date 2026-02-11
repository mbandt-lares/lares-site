import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { ContactForm } from "@/components/ContactForm";

function PilotRibbon() {
  return (
    <div className="bg-brand-cream text-brand-blue py-3 border-b border-brand-blue/5">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-bold uppercase tracking-widest text-center">
          <p>Bay Area pilot now recruiting — Join LaresCare early</p>
          <Link href="#pilot" className="underline hover:text-brand-orange transition-colors decoration-brand-orange/50 underline-offset-4">
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
          {/* Background decorative blob */}
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
                  AI-powered health monitoring for <span className="text-brand-orange">elders</span> who want
                  independence.
                </h1>

                <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg font-medium">
                  LaresCare watches for small changes in daily patterns so
                  families don&apos;t have to. Without turning home into a hospital.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button href="/#contact" variant="primary" className="h-14 px-10 text-base">Join the pilot</Button>
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

        {/* AT A GLANCE */}
        <div className="bg-brand-blue relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-cream/20 to-transparent" />
          <Section inverted={true}>
            <div className="grid md:grid-cols-3 gap-16 md:gap-24 relative z-10">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-cream/10 rounded-2xl flex items-center justify-center mb-6 text-brand-orange">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h3 className="text-2xl font-headline font-bold text-brand-cream">Independence</h3>
                <p className="text-brand-cream/80 text-lg leading-relaxed">Elders keep their independence and routines, staying in the home they love.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-brand-cream/10 rounded-2xl flex items-center justify-center mb-6 text-brand-orange">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="text-2xl font-headline font-bold">Connection</h3>
                <p className="text-brand-cream/80 text-lg leading-relaxed">Families get timely insight instead of guesswork and constant check-in calls.</p>
              </div>
              <div className="space-y-4">
                 <div className="w-12 h-12 bg-brand-cream/10 rounded-2xl flex items-center justify-center mb-6 text-brand-orange">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                </div>
                <h3 className="text-2xl font-headline font-bold text-brand-cream">Prevention</h3>
                <p className="text-brand-cream/80 text-lg leading-relaxed">Subtle trends trigger checks before they become crises or emergencies.</p>
              </div>
            </div>
          </Section>
        </div>

        {/* PILOT SECTION */}
        <Section id="pilot" className="bg-white">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8 sticky top-32">
              <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                Pilot Program
              </span>
              <h2 className="section-title text-brand-blue">
                Pilot LaresCare with real Bay Area seniors.
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                We&apos;re starting with a small group of families to help decide what &quot;useful&quot; looks like day to day.
              </p>
              <Button variant="primary">Apply for Pilot</Button>
            </div>

            <div className="grid gap-12 bg-brand-cream/30 p-10 rounded-[3rem]">
              <div className="space-y-4">
                <h3 className="text-2xl font-headline font-bold text-brand-blue">What the pilot includes</h3>
                <ul className="space-y-4 text-text-secondary font-medium">
                  <li className="flex gap-3"><span className="text-brand-orange">✓</span> Setup and onboarding with Apple Watch or iPhone.</li>
                  <li className="flex gap-3"><span className="text-brand-orange">✓</span> Regular summaries sent to you and your family.</li>
                  <li className="flex gap-3"><span className="text-brand-orange">✓</span> Early signals when patterns change or risk increases.</li>
                </ul>
              </div>

              <div className="space-y-4 border-t border-brand-blue/10 pt-8">
                <h3 className="text-2xl font-headline font-bold text-brand-blue">What it doesn&apos;t replace</h3>
                <ul className="space-y-4 text-text-secondary font-medium">
                  <li className="flex gap-3"><span className="text-gray-400">✕</span> No emergency response or 911 replacement.</li>
                  <li className="flex gap-3"><span className="text-gray-400">✕</span> No medical advice; always talk to your doctor.</li>
                  <li className="flex gap-3"><span className="text-gray-400">✕</span> No cameras in the living room or constant surveillance.</li>
                </ul>
              </div>

              <div className="space-y-4 border-t border-brand-blue/10 pt-8">
                <h3 className="text-2xl font-headline font-bold text-brand-blue">Who we&apos;re looking for</h3>
                <ul className="space-y-4 text-text-secondary font-medium">
                  <li className="flex gap-3"><span className="text-brand-blue">→</span> Independent seniors living in the Bay Area.</li>
                  <li className="flex gap-3"><span className="text-brand-blue">→</span> Families who worry about falls or slowing down.</li>
                  <li className="flex gap-3"><span className="text-brand-blue">→</span> People willing to share practical feedback.</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* HOW IT WORKS */}
        <div className="bg-brand-blue overflow-hidden relative">
          <Section id="how-it-works" inverted={true}>
            <div className="flex flex-col items-center">
              <div className="w-full max-w-5xl">
                <WorkflowDiagram />
              </div>
            </div>
          </Section>
        </div>

        {/* TESTIMONIALS */}
        <Section
          className="bg-white"
          eyebrow="Testimonials"
          title="Trusted by families."
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-8 p-10 bg-brand-cream/30 rounded-[2.5rem] hover:bg-brand-cream/50 transition-colors">
              <div className="text-brand-orange mb-4">
                  <span className="text-6xl font-serif leading-none opacity-50">“</span>
              </div>
              <p className="text-xl font-headline leading-relaxed text-brand-blue">&quot;Before LaresCare, I was checking my mom&apos;s log every day. Now I get a weekly summary. It&apos;s worry without the guesswork.&quot;</p>
              <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">— Adult daughter, pilot user</p>
            </div>
            <div className="space-y-8 p-10 bg-brand-cream/30 rounded-[2.5rem] hover:bg-brand-cream/50 transition-colors">
              <div className="text-brand-orange mb-4">
                  <span className="text-6xl font-serif leading-none opacity-50">“</span>
              </div>
              <p className="text-xl font-headline leading-relaxed text-brand-blue">&quot;I like that it&apos;s watching without hovering. I still decide what I do each day—it just notices if I start slowing down.&quot;</p>
              <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">— 78-year-old living alone</p>
            </div>
            <div className="space-y-8 p-10 bg-brand-cream/30 rounded-[2.5rem] hover:bg-brand-cream/50 transition-colors">
              <div className="text-brand-orange mb-4">
                  <span className="text-6xl font-serif leading-none opacity-50">“</span>
              </div>
              <p className="text-xl font-headline leading-relaxed text-brand-blue">&quot;It feels like we&apos;re finally using the data from the watch for something that actually matters to our family.&quot;</p>
              <p className="text-xs font-bold uppercase tracking-widest text-text-secondary">— Son caring for parents</p>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <div className="bg-brand-cream/30">
          <Section title="Common Questions">
            <div className="max-w-4xl">
              <div className="grid gap-16">
                <div className="space-y-4">
                  <h3 className="text-2xl font-headline font-bold text-brand-blue">Who is this pilot for?</h3>
                  <p className="text-lg opacity-70 leading-relaxed">Independent seniors in the Bay Area and families who want clearer insight without constant check-ins.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-headline font-bold text-brand-blue">What devices do we need?</h3>
                  <p className="text-lg opacity-70 leading-relaxed">LaresCare works with iPhone, Apple Watch, and connected scales or blood pressure cuffs.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-headline font-bold text-brand-blue">How does LaresCare protect privacy?</h3>
                  <p className="text-lg opacity-70 leading-relaxed">We focus on trends, not minute-by-minute tracking. Data is encrypted and shared only as needed.</p>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* CONTACT */}
        <div id="contact" className="bg-linear-to-br from-[#F4F1EA] to-[#EBE5D9]">
          <Container className="py-16 md:py-24">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
              <div className="space-y-6">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange/80">
                  Join the waitlist
                </p>
                <h2 className="section-title text-brand-blue">
                  Become a pilot family.
                </h2>
                <p className="text-lg md:text-xl text-text-secondary max-w-xl">
                  Early families help shape the product and receive preferred pricing. Share your
                  details and we&apos;ll reach out.
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
