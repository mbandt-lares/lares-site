import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium " +
    "focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-600 disabled:opacity-60";

  const variantClasses =
    variant === "primary"
      ? "bg-sky-600 text-white hover:bg-sky-500"
      : "border border-slate-300 text-slate-800 bg-white hover:border-slate-400";

  const classes = [base, variantClasses, className].filter(Boolean).join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
