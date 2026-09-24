import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./landing.module.css";

export function TextLink({ href, children, inverse = false, className = "" }: {
  href: string;
  children: ReactNode;
  inverse?: boolean;
  className?: string;
}) {
  return <Link href={href} className={`${styles.textLink} ${inverse ? styles.textLinkInverse : ""} ${className}`}>
    <span>{children}</span><Image src={inverse ? "/landing/shared/arrow-right-inverse.svg" : "/landing/shared/arrow-right.svg"} alt="" width={20} height={20} />
  </Link>;
}
