import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  inverted?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  inverted = false,
}: SectionProps) {
  const textColor = inverted ? "text-brand-cream" : "text-brand-blue";
  const secondaryTextColor = inverted ? "text-brand-cream/70" : "text-text-secondary";
  const eyebrowColor = inverted ? "text-brand-orange" : "text-brand-blue";

  return (
    <section
      id={id}
      className={`py-20 md:py-32 ${inverted ? "section-inverted text-brand-cream" : "text-brand-blue"} ${className || ""}`}
    >
      <Container>
        {(eyebrow || title || description) && (
          <div className="mb-12 md:mb-20">
            {eyebrow && (
              <p className={`text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-60 ${eyebrowColor}`}>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className={`section-title mb-6 ${textColor}`}>
                {title}
              </h2>
            )}
            {description && (
              <div className={`max-w-2xl text-lg md:text-xl ${secondaryTextColor}`}>
                {description}
              </div>
            )}
          </div>
        )}
        <div>
          {children}
        </div>
      </Container>
    </section>
  );
}
