import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  // Narrower max width + solid horizontal padding
  const base =
    "mx-auto max-w-3xl px-6 md:px-8 lg:px-10 py-10 md:py-16";
  const classes = className ? `${base} ${className}` : base;

  return <div className={classes}>{children}</div>;
}
