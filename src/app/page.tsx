import Image from "next/image";
import Link from "next/link";
import { getPageData } from "@/lib/sanity.queries";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export default async function HomePage() {
  const data = await getPageData("home");
  const heroBlock = data?.content?.find((block: any) => block._type === "hero");

  return (
    <div className="space-y-24 pb-24">
      {/* 1. HERO SECTION (Connected to CMS) */}
      <Container className="grid gap-10 py-10 md:grid-cols-[1.1fr,1fr] md:items-center">
        <div className="space-y-6">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-sky-600">
            {heroBlock?.eyebrow || "QUIETLY WATCHING. ACTIVELY CARING."}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            {heroBlock?.heading || "Health monitoring for elders who want independence."}
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-slate-600 leading-relaxed">
            {heroBlock?.subheading || "Lares Health watches for small changes in daily patterns so families don't have to. When something looks off, we keep everyone in the loop."}
          </p>
          <div className="pt-4">
            <Link href="/contact" className="btn-primary rounded-full px-10 py-4 shadow-xl">
              {heroBlock?.ctaLabel || "Join the pilot"}
            </Link>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-[3rem] border-8 border-white bg-white shadow-2xl">
          <Image 
            src={heroBlock?.imageUrl || "/images/hero-elder-family.jpg"} 
            alt="Lares Health" fill className="object-cover" priority 
          />
        </div>
      </Container>

      {/* 2. CORE VALUE PROPOSITION (Restored Original Content) */}
      <Container className="bg-slate-900 rounded-[3rem] py-16 px-8 md:px-16 text-white text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold max-w-3xl mx-auto">
          Independence isn't about being alone. It's about being safe.
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-left pt-8">
          <div className="space-y-4">
            <div className="h-1 w-12 bg-sky-500" />
            <h3 className="text-xl font-bold">Early Warning</h3>
            <p className="text-slate-400 text-sm leading-relaxed">We detect subtle changes in gait, sleep, and activity levels before they become medical emergencies.</p>
          </div>
          <div className="space-y-4">
            <div className="h-1 w-12 bg-sky-500" />
            <h3 className="text-xl font-bold">Privacy First</h3>
            <p className="text-slate-400 text-sm leading-relaxed">No cameras. No microphones. We use non-intrusive sensors to maintain dignity while providing 24/7 peace of mind.</p>
          </div>
          <div className="space-y-4">
            <div className="h-1 w-12 bg-sky-500" />
            <h3 className="text-xl font-bold">Family Connected</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Instant notifications for family members through our intuitive app, ensuring you're never in the dark.</p>
          </div>
        </div>
      </Container>

      {/* 3. HOW IT WORKS (Restored Original Content) */}
      <Container className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900">How Lares Protects Your Family</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Three simple steps to smarter, more compassionate elder care.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Simple Setup", desc: "Place our small, sleek sensors around the home. No wearable devices required." },
            { step: "02", title: "Pattern Learning", desc: "Our AI learns the unique daily rhythms of your loved one over the first week." },
            { step: "03", title: "Smart Alerts", desc: "If a pattern changes—like a missed meal or a restless night—you get a gentle nudge." }
          ].map((item, i) => (
            <Card key={i} className="p-10 space-y-6 border-slate-100 relative overflow-hidden group">
              <span className="text-6xl font-black text-slate-50 absolute -right-2 -top-2 group-hover:text-sky-50 transition-colors">{item.step}</span>
              <h3 className="text-xl font-bold text-slate-900 relative z-10">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
