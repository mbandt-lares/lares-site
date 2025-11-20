// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">
        About Lares Health
      </h1>
      <p className="text-sm md:text-base text-slate-300">
        Lares Health exists for one reason: to make aging in place safer,
        calmer, and more connected—without turning home into a hospital or
        family into full-time monitors.
      </p>

      <div className="space-y-4 text-sm text-slate-300">
        <div>
          <h2 className="mb-1 text-sm font-semibold text-white">Mission</h2>
          <p>
            Use everyday health data and modern AI to catch small changes early,
            support independence, and give families clear, actionable signals
            instead of vague worry.
          </p>
        </div>

        <div>
          <h2 className="mb-1 text-sm font-semibold text-white">
            Why Lares is different
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Built for consumer devices, not clinic hardware.</li>
            <li>Focuses on safety, wellbeing, and daily life—not just disease codes.</li>
            <li>Designed for elders and families first, systems second.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-1 text-sm font-semibold text-white">
            How it works in practice
          </h2>
          <p>
            Lares brings together Apple Health signals, light-touch check-ins,
            and clear summaries for families. Over time, we aim to become the
            quiet, reliable companion that notices when things change and helps
            you respond early.
          </p>
        </div>
      </div>
    </div>
  );
}
