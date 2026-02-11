import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: "white" | "ghost" | "glass" | "outline";
};

export function Card({ children, className, variant = "white" }: CardProps) {
  const variants = {
    white: "bg-white border border-brand-cream shadow-sm",
    ghost: "bg-transparent border-none shadow-none",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white",
    outline: "bg-transparent border border-white/20 text-white",
  };

  const base = "rounded-[2rem] overflow-hidden transition-all duration-300";
  const classes = `${base} ${variants[variant]} ${className || ""}`;
  return <div className={classes}>{children}</div>;
}
