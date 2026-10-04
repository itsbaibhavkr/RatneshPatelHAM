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
  objectPosition?: string;
}

export const RATNESH_PATEL_PROFILE_IMAGES: ProfileImageItem[] = [
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel4.JPG",
    alt: "Ratnesh Patel - Pranam & Jan Seva Sankalp",
    title: "Ratnesh Patel",
    badge: "वरीय नेतृत्व",
    subtitle: "Senior State Vice President, Bihar • HAM(S)",
    description: "Dedicated to the welfare, social justice, and all-round development of Bihar.",
    objectPosition: "object-top",
  },
  {
    src: "/images/ratnesh-patel/profile/ratnesh-patel.webp",
    alt: "Official Portrait of Ratnesh Patel",
    title: "Ratnesh Patel",
    badge: "Since 1995",
    subtitle: "Senior State Vice President, Bihar • HAM(S)",
    description: "Over 30 years of dedicated grassroots public commitment and community advocacy.",
    objectPosition: "object-top",
  },
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel2.JPG",
    alt: "Ratnesh Patel with Shri Jitan Ram Manjhi Ji",
    title: "With Shri Jitan Ram Manjhi Ji",
    badge: "Party Guidance",
    subtitle: "Founder HAM(S) & Union Minister (MSME)",
    description: "Guiding the party's grassroots mission and NDA coordination across Bihar.",
    objectPosition: "object-[center_30%]",
  },
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel3.JPG",
    alt: "Ratnesh Patel with Dr. Santosh Kumar Suman Ji",
    title: "With Dr. Santosh Kumar Suman Ji",
    badge: "Party Leadership",
    subtitle: "National President HAM(S) & Cabinet Minister, Bihar",
    description: "Advancing NDA & HAM(S) public welfare resolutions across Bihar.",
    objectPosition: "object-top",
  },
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel1.JPG",
    alt: "Ratnesh Patel in official attire",
    title: "Ratnesh Patel",
    badge: "NDA Incharge 2024",
    subtitle: "Senior State Vice President, Bihar • HAM(S)",
    description: "Executive coordination and grassroots campaign management in Tirhut Division.",
    objectPosition: "object-top",
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
      {/* Decorative clean frame with strict layout stability */}
      <div className="relative rounded-2xl border-2 border-white bg-white p-3 shadow-xl overflow-hidden ring-1 ring-slate-200">
        {/* Fixed aspect ratio container to prevent any vertical shift when loading/switching */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
          {images.map((img, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={idx <= 1}
                  sizes="(max-width: 768px) 90vw, 420px"
                  className={`object-cover ${img.objectPosition || "object-top"}`}
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
                className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === currentIndex
                    ? "w-5 bg-[var(--color-primary)]"
                    : "w-1.5 bg-white/75 hover:bg-white"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic / Custom Footer Card with LOCKED HEIGHT to prevent layout shifts across slides */}
        {footer ? (
          <div className="mt-3 px-1.5 pb-1">{footer}</div>
        ) : footerVariant === "about" ? (
          <div className="mt-3 px-1.5 pb-1 h-[106px] sm:h-[112px] flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between gap-2 min-h-[26px]">
              <span
                className="font-extrabold text-base text-slate-900 truncate"
                title={currentItem.title || "Ratnesh Patel"}
              >
                {currentItem.title || "Ratnesh Patel"}
              </span>
              {currentItem.badge && (
                <span className="shrink-0 whitespace-nowrap text-[11px] font-bold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                  {currentItem.badge}
                </span>
              )}
            </div>
            <p
              className="text-xs font-semibold text-[var(--color-primary)] truncate leading-tight"
              title={currentItem.subtitle || "Senior State Vice President, Bihar • HAM(S)"}
            >
              {currentItem.subtitle || "Senior State Vice President, Bihar • HAM(S)"}
            </p>
            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 h-[34px] overflow-hidden">
              {currentItem.description ||
                "Rooted in Kudhani, Muzaffarpur with active executive leadership spanning the Tirhut division and the entire state of Bihar."}
            </p>
          </div>
        ) : footerVariant === "hero" ? (
          <div className="mt-3 px-1.5 pb-1 h-[84px] sm:h-[90px] flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between gap-2 min-h-[26px]">
              <p
                className="text-base sm:text-lg font-bold text-slate-900 leading-tight truncate"
                title={currentItem.title || "Ratnesh Patel"}
              >
                {currentItem.title || "Ratnesh Patel"}
              </p>
              {currentItem.badge && (
                <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[var(--color-primary)] px-2 py-0.5 rounded shadow-2xs">
                  <ShieldCheck className="h-3 w-3" />
                  <span>{currentItem.badge}</span>
                </span>
              )}
            </div>
            <p
              className="text-xs font-semibold text-[var(--color-primary-dark)] truncate leading-tight"
              title={currentItem.subtitle || "Senior State Vice President, Bihar"}
            >
              {currentItem.subtitle || "Senior State Vice President, Bihar"}
            </p>
            <p className="text-[11px] text-slate-500 font-medium line-clamp-1 leading-tight min-h-[16px]">
              {currentItem.description || "\u00A0"}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
