import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col space-y-2.5 max-w-3xl mb-8 sm:mb-12",
        alignmentClasses[align],
        className
      )}
      {...props}
    >
      {badge && (
        <Badge
          variant="subtle"
          className="text-xs uppercase tracking-wider py-0.5 px-2.5 mb-1 w-fit"
        >
          {badge}
        </Badge>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-dark-text)] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-[var(--color-muted-text)] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
