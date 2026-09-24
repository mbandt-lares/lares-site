import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./landing.module.css";

type Common = {
  variant?: "primary" | "outline";
  children: ReactNode;
  className?: string;
};
type Props = (Common & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)
  | (Common & { href?: never } & ButtonHTMLAttributes<HTMLButtonElement>);

export function LandingButton(props: Props) {
  const classes = `${styles.button} ${styles[props.variant ?? "primary"]} ${props.className ?? ""}`;
  if (typeof props.href === "string") {
    const { href, variant: _variant, children, className: _className, ...linkProps } = props;
    void _variant; void _className;
    return <Link href={href} className={classes} {...linkProps}>{children}</Link>;
  }
  const { href: _href, variant: _variant, children, className: _className, ...buttonProps } = props as Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
  void _href; void _variant; void _className;
  return <button className={classes} {...buttonProps}>{children}</button>;
}
