"use client";

import * as React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export interface ProfileImageItem {
  src: string;
  alt: string;
  title?: string;
  badge?: string;
  subtitle?: string;
  description?: string;
}

export const RATNESH_PATEL_PROFILE_IMAGES: ProfileImageItem[] = [
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel4.JPG",
    alt: "Ratnesh Patel - Pranam & Jan Seva Sankalp",
    title: "Ratnesh Patel",
    badge: "वरिष्ठ नेतृत्व",
    subtitle: "Senior State Vice President, Bihar • HAM(S)",
    description: "Dedicated to the welfare, social justice, and all-round development of Bihar.",
  },
  {
    src: "/images/ratnesh-patel/profile/ratnesh-patel.webp",
    alt: "Official Portrait of Ratnesh Patel",
    title: "Ratnesh Patel",
    badge: "Since 1995",
    subtitle: "Senior State Vice President, Bihar • HAM(S)",
    description: "Over 30 years of dedicated grassroots public commitment and community advocacy.",
  },
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel2.JPG",
    alt: "Ratnesh Patel with Shri Jitan Ram Manjhi Ji",
    title: "With Shri Jitan Ram Manjhi Ji",
    badge: "Party Guidance",
    subtitle: "Founder HAM(S) & Union Minister (MSME)",
    description: "Guiding the party's grassroots mission and NDA coordination across Bihar.",
  },
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel3.JPG",
    alt: "Ratnesh Patel with Dr. Santosh Kumar Suman Ji",
    title: "With Dr. Santosh Kumar Suman Ji",
    badge: "Party Leadership",
    subtitle: "National President HAM(S) & Cabinet Minister, Bihar",
    description: "Advancing NDA & HAM(S) public welfare resolutions across Bihar.",
  },
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel1.JPG",
    alt: "Ratnesh Patel in official attire",
    title: "Ratnesh Patel",
    badge: "NDA Incharge 2024",
    subtitle: "Senior State Vice President, Bihar • HAM(S)",
    description: "Executive coordination and grassroots campaign management in Tirhut Division.",
  },
];

interface ProfileImageRotatorProps {
  images?: ProfileImageItem[];
  intervalMs?: number;
  initialIndex?: number;
  randomize?: boolean;
  className?: string;
  footer?: React.ReactNode;
  footerVariant?: "hero" | "about" | "none";
}

export function ProfileImageRotator({
  images = RATNESH_PATEL_PROFILE_IMAGES,
  intervalMs = 6000,
  initialIndex = 0,
  randomize = false,
  className = "",
  footer,
  footerVariant = "hero",
}: ProfileImageRotatorProps) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (!images || images.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (randomize) {
          let next = Math.floor(Math.random() * images.length);
          if (next === prev) {
            next = (prev + 1) % images.length;
          }
          return next;
        }
        return (prev + 1) % images.length;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [images, intervalMs, randomize, isPaused]);

  const currentItem = images[currentIndex] || images[0];

  return (
    <div
      className={`relative w-full max-w-md mx-auto ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative clean frame */}
      <div className="relative rounded-2xl border-2 border-white bg-white p-3 shadow-xl overflow-hidden ring-1 ring-slate-200">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
          {images.map((img, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover object-top"
                />
              </div>
            );
          })}

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-2.5 left-0 right-0 z-20 flex items-center justify-center gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View photo ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex
                    ? "w-5 bg-[var(--color-primary)]"
                    : "w-1.5 bg-white/75 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic / Custom Footer Card */}
        {footer ? (
          <div className="mt-3 px-1.5 pb-1">{footer}</div>
        ) : footerVariant === "about" ? (
          <div className="mt-3 px-1.5 pb-1 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-base text-slate-900">
                {currentItem.title || "Ratnesh Patel"}
              </span>
              {currentItem.badge && (
                <span className="text-[11px] font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                  {currentItem.badge}
                </span>
              )}
            </div>
            <p className="text-xs font-semibold text-[var(--color-primary)]">
              {currentItem.subtitle || "Senior State Vice President, Bihar • HAM(S)"}
            </p>
            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
              {currentItem.description ||
                "Rooted in Kudhani, Muzaffarpur with active executive leadership spanning the Tirhut division and the entire state of Bihar."}
            </p>
          </div>
        ) : footerVariant === "hero" ? (
          <div className="mt-3 px-1.5 pb-1 space-y-1">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                {currentItem.title || "Ratnesh Patel"}
              </h2>
              {currentItem.badge && (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[var(--color-primary)] px-2 py-0.5 rounded shadow-2xs">
                  <ShieldCheck className="h-3 w-3" />
                  <span>{currentItem.badge}</span>
                </span>
              )}
            </div>
            <p className="text-xs font-semibold text-[var(--color-primary-dark)]">
              {currentItem.subtitle || "Senior State Vice President, Bihar"}
            </p>
            {currentItem.description && (
              <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                {currentItem.description}
              </p>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
