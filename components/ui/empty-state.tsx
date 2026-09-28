import * as React from "react";
import Link from "next/link";
import { FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

export function EmptyState({
  title,
  description,
  icon: Icon = FolderOpen,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border border-dashed border-[var(--color-border-dark)] bg-[var(--color-surface)] p-8 sm:p-12 text-center",
        className
      )}
      {...props}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-light-gray)] text-[var(--color-primary)] mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-base font-semibold text-[var(--color-dark-text)]">
        {title}
      </h3>
      {description && (
        <p className="mt-1.5 text-xs sm:text-sm text-[var(--color-muted-text)] max-w-sm leading-relaxed">
          {description}
        </p>
      )}
      {action && (
        <div className="mt-5">
          {action.href ? (
            <Link href={action.href}>
              <Button size="sm" variant="default">
                {action.label}
              </Button>
            </Link>
          ) : (
            <Button size="sm" variant="default" onClick={action.onClick}>
              {action.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
