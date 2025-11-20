import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function Section({
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  const base = "space-y-4 md:space-y-6";
  const classes = className ? `${base} ${className}` : base;

  return (
    <section className={classes}>
      {(eyebrow || title || description) && (
        <header className="space-y-2">
          {eyebrow && (
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
              {eyebrow}
            </p>
          )}
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
