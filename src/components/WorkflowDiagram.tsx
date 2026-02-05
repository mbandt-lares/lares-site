import Image from "next/image";

interface WorkflowDiagramProps {
  className?: string;
}

export function WorkflowDiagram({ className }: WorkflowDiagramProps) {
  return (
    <div className={`${className || ""}`}>
      <div className="text-center mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange/80 mb-3">
          Visual signal flow
        </p>
        <h2 className="section-title text-brand-cream">
          How LaresCare works in real life
        </h2>
        <p className="text-base md:text-lg text-brand-cream/70 max-w-2xl mx-auto mt-4">
          A simple, quiet loop: connect data, learn a baseline, and notify families when patterns change.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Connect to Apple Health",
            body: "Securely links Apple Watch and iPhone data like activity, sleep, and heart rate.",
            image: "/images/how-it-works/step-1-connect-to-apple-health.jpg",
          },
          {
            title: "Establish a baseline",
            body: "AI learns what “normal” looks like for each person over time.",
            image: "/images/how-it-works/step-2-establish-baseline.jpg",
          },
          {
            title: "Monitor & alert",
            body: "Families get clear updates when trends shift or risk rises.",
            image: "/images/how-it-works/step-3-monitor-alert.jpg",
          },
        ].map((item, index) => (
          <div
            key={item.title}
            className="card-light bg-white rounded-[2rem] border border-white/10 shadow-xl shadow-brand-blue/15 overflow-hidden flex flex-col"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover photo-warm"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index === 0}
                unoptimized
              />
            </div>
            <div className="p-8 space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange">
                Step {index + 1}
              </p>
              <h3 className="text-2xl font-headline font-bold text-brand-blue">{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-3 text-brand-cream/70 text-sm font-medium uppercase tracking-widest">
        <span>Family Notifications</span>
        <span className="hidden md:inline">→</span>
        <span>Deeper Health Insights</span>
      </div>
    </div>
  );
}
