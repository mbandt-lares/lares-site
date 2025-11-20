import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  const base = "rounded-xl border border-slate-200 bg-white shadow-sm";
  const classes = className ? `${base} ${className}` : base;

  return <div className={classes}>{children}</div>;
}
