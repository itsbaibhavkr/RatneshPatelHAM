import * as React from "react";
import { Image as ImageIcon, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  category: "profile" | "hero" | "gallery" | "ham";
  aspectRatio?: "1:1" | "4:3" | "16:9" | "3:4";
  title?: string;
  description?: string;
}

export function ImagePlaceholder({
  category,
  aspectRatio = "16:9",
  title,
  description,
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
    profile: "Ratnesh Patel",
    hero: "Official Leadership Archive",
    gallery: "Official Photographic Documentation",
    ham: "Hindustani Awam Morcha (Secular)",
  };

  const defaultDescriptions = {
    profile: "Senior State Vice President, Bihar",
    hero: "State Leadership & Public Administration, Bihar",
    gallery: "Public meetings, conventions, and state committee sessions",
    ham: "Official Party Affiliation Context",
  };

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center border border-[var(--color-border-gray)] bg-gradient-to-b from-[var(--color-off-white)] to-[var(--color-light-gray)] text-[var(--color-muted-text)] overflow-hidden rounded-lg p-6 text-center select-none shadow-2xs",
        aspectClasses[aspectRatio],
        className
      )}
      {...props}
    >
      {/* Editorial Watermark / Background Texture Accent */}
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[var(--color-primary)] mb-3 shadow-xs border border-[var(--color-border-gray)]">
        {category === "profile" ? (
          <span className="font-bold text-lg tracking-wider">RP</span>
        ) : (
          <ImageIcon className="h-7 w-7 text-[var(--color-primary)]" aria-hidden="true" />
        )}
      </div>

      <div className="font-bold text-sm text-[var(--color-dark-text)] tracking-tight">
        {title || defaultTitles[category]}
      </div>

      <p className="mt-1 text-xs text-[var(--color-muted-text)] max-w-xs leading-relaxed">
        {description || defaultDescriptions[category]}
      </p>

      <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-[var(--color-dark-text)] bg-white px-3 py-1 rounded-md border border-[var(--color-border-gray)] shadow-2xs">
        <ShieldCheck className="h-3.5 w-3.5 text-[var(--color-primary)]" />
        <span>Official Photographic Record</span>
      </div>
    </div>
  );
}
