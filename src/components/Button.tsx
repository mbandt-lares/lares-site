import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  href?: string;
}

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 uppercase tracking-wider";
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-brand-orange/90 hover:scale-[1.02] shadow-lg shadow-brand-orange/20",
    secondary: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-cream hover:scale-[1.02]"
  };

  const classes = `${base} ${variants[variant]} ${className || ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
