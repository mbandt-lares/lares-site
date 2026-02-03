import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={`space-y-6 md:space-y-8 py-4 ${className || ""}`}>
      {(eyebrow || title || description) && (
        <header className="space-y-3 max-w-3xl">
          {eyebrow && (
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-sky-600">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              {title}
            </h2>
          )}
          {description && (
            <div className="text-base md:text-lg text-slate-600 leading-relaxed">
              {description}
            </div>
          )}
        </header>
      )}
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}
