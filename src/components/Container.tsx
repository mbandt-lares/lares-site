import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Container({ children, className, id }: ContainerProps) {
  const base = "max-w-6xl mx-auto px-6 md:px-12";
  const classes = `${base} ${className || ""}`;
  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
}
