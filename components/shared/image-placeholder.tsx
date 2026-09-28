import * as React from "react";
import { Image as ImageIcon, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  category: "profile" | "hero" | "gallery" | "public-work" | "ham";
  aspectRatio?: "1:1" | "4:3" | "16:9" | "3:4";
  title?: string;
  description?: string;
}

export function ImagePlaceholder({
  category,
  aspectRatio = "16:9",
  title,
  description = "Awaiting official supplied photography",
  className,
  ...props
}: ImagePlaceholderProps) {
  const aspectClasses = {
    "1:1": "aspect-square",
    "4:3": "aspect-4/3",
    "16:9": "aspect-video",
    "3:4": "aspect-3/4",
  };

  const defaultTitles = {
    profile: "Official Portrait Arch",
    hero: "Featured Editorial Hero",
    gallery: "Official Meeting & Event Archive",
    "public-work": "Public Service Initiative",
    ham: "Organizational Reference",
  };

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center border border-dashed border-[var(--color-border-dark)] bg-[var(--color-surface)] text-[var(--color-muted-text)] overflow-hidden rounded-lg p-6 text-center select-none",
        aspectClasses[aspectRatio],
        className
      )}
      {...props}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-light-gray)] text-[var(--color-primary)] mb-3">
        {category === "profile" ? (
          <span className="font-bold text-base tracking-wider">RP</span>
        ) : (
          <ImageIcon className="h-6 w-6" aria-hidden="true" />
        )}
      </div>
      <div className="font-medium text-sm text-[var(--color-dark-text)]">
        {title || defaultTitles[category]}
      </div>
      <p className="mt-1 text-xs text-[var(--color-muted-text)] max-w-xs">
        {description}
      </p>
      <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-[var(--color-primary-dark)] bg-[var(--color-primary-subtle)] px-2.5 py-1 rounded-md border border-[var(--color-primary-border)]">
        <ShieldCheck className="h-3.5 w-3.5" />
        <span>Supplied Image Slot</span>
      </div>
    </div>
  );
}
