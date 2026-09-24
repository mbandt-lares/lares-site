import type { ReactNode } from "react";
import styles from "./legal.module.css";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, description, children }: LegalPageProps) {
  return (
    <div data-design-system="landing" className={styles.page}>
      <div className={styles.container}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </header>
        <article className={styles.article}>{children}</article>
      </div>
    </div>
  );
}
