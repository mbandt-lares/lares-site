import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Container({ children, className, id }: ContainerProps) {
  const base = "mx-auto max-w-5xl px-4 py-10 md:py-12";
  const classes = className ? `${base} ${className}` : base;

  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
}
