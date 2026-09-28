import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs hover:bg-[var(--color-primary-dark)] active:bg-[var(--color-primary-dark)]",
        outline:
          "border border-[var(--color-border-gray)] bg-[var(--color-white)] text-[var(--color-dark-text)] hover:bg-[var(--color-surface)] hover:text-[var(--color-dark-text)]",
        secondary:
          "bg-[var(--color-light-gray)] text-[var(--color-dark-text)] hover:bg-[var(--color-border-gray)]",
        ghost:
          "text-[var(--color-dark-text)] hover:bg-[var(--color-light-gray)]",
        link:
          "text-[var(--color-primary)] underline-offset-4 hover:underline p-0 h-auto",
        subtle:
          "bg-[var(--color-primary-subtle)] text-[var(--color-primary)] border border-[var(--color-primary-border)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
