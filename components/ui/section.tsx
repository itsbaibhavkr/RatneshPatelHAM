import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "surface" | "muted" | "brand-tint";
}

export function Section({
  className,
  variant = "default",
  children,
  ...props
}: SectionProps) {
  const variantClasses = {
    default: "bg-[var(--color-white)] text-[var(--color-dark-text)]",
    surface: "bg-[var(--color-off-white)] text-[var(--color-dark-text)] border-y border-[var(--color-border-gray)]",
    muted: "bg-[var(--color-light-gray)] text-[var(--color-dark-text)]",
    "brand-tint": "bg-[var(--color-primary-subtle)] text-[var(--color-dark-text)] border-y border-[var(--color-primary-border)]",
  };

  return (
    <section
      className={cn("py-12 sm:py-16 lg:py-20", variantClasses[variant], className)}
      {...props}
    >
      {children}
    </section>
  );
}
