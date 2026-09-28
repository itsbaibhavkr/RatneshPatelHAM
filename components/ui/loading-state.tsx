import * as React from "react";
import { cn } from "@/lib/utils";

export interface LoadingStateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
  size?: "sm" | "default" | "lg";
  fullPage?: boolean;
}

export function LoadingState({
  message = "Loading...",
  size = "default",
  fullPage = false,
  className,
  ...props
}: LoadingStateProps) {
  const spinnerSizes = {
    sm: "h-5 w-5 border-2",
    default: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  const textSizes = {
    sm: "text-xs",
    default: "text-sm",
    lg: "text-base",
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex flex-col items-center justify-center p-8 text-center space-y-3",
        fullPage ? "min-h-[50vh] w-full" : "w-full",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "animate-spin rounded-full border-solid border-[var(--color-border-gray)] border-t-[var(--color-primary)]",
          spinnerSizes[size]
        )}
      />
      {message && (
        <p
          className={cn(
            "font-medium text-[var(--color-muted-text)]",
            textSizes[size]
          )}
        >
          {message}
        </p>
      )}
      <span className="sr-only">Loading</span>
    </div>
  );
}
