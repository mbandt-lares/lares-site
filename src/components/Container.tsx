import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  const base = "mx-auto max-w-5xl px-4 md:px-6 py-10 md:py-16";
  const classes = className ? `${base} ${className}` : base;

  return <div className={classes}>{children}</div>;
}
