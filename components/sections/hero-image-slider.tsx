"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

export interface HeroImageSlide {
  src: string;
  alt: string;
  title: string;
  badge?: string;
  subtitle?: string;
  objectPosition?: string;
}

export const DEFAULT_HERO_SLIDES: HeroImageSlide[] = [
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel4.JPG",
    alt: "Ratnesh Patel - Pranam & Jan Seva Sankalp",
    title: "Ratnesh Patel",
    badge: "वरिष्ठ नेतृत्व",
    subtitle: "Senior State Vice President, Bihar",
    objectPosition: "object-top",
  },
  {
    src: "/images/ratnesh-patel/profile/ratnesh-patel.webp",
    alt: "Official portrait of Ratnesh Patel",
    title: "Ratnesh Patel",
    badge: "Since 1995",
    subtitle: "Rooted in Kudhani, Tirhut Division",
    objectPosition: "object-top",
  },
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel2.JPG",
    alt: "Ratnesh Patel with Shri Jitan Ram Manjhi Ji",
    title: "With Shri Jitan Ram Manjhi",
    badge: "Party Guidance",
    subtitle: "Founder HAM(S) & Union Minister (MSME)",
    objectPosition: "object-[center_30%]",
  },
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel3.JPG",
    alt: "Ratnesh Patel with Dr. Santosh Kumar Suman Ji",
    title: "With Dr. Santosh Kumar Suman",
    badge: "Party Leadership",
    subtitle: "National President HAM(S) & Cabinet Minister, Bihar",
    objectPosition: "object-top",
  },
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel1.JPG",
    alt: "Ratnesh Patel - Senior State Vice President",
    title: "Ratnesh Patel",
    badge: "NDA Incharge 2024",
    subtitle: "Senior State Vice President, Bihar",
    objectPosition: "object-top",
  },
];

interface HeroImageSliderProps {
  slides?: HeroImageSlide[];
}

export function HeroImageSlider({ slides = DEFAULT_HERO_SLIDES }: HeroImageSliderProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const total = slides.length;

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto advance every 5 seconds if not paused
  React.useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused, total]);

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="relative w-full max-w-md mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative frame with strict layout stability */}
      <div className="relative rounded-2xl border-2 border-white bg-white p-3 shadow-xl overflow-hidden ring-1 ring-slate-200">
        {/* Main image container with fixed aspect ratio */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index <= 1}
                  sizes="(max-width: 768px) 90vw, 420px"
                  className={`object-cover ${slide.objectPosition || "object-top"}`}
                />
              </div>
            );
          })}

          {/* Top Counter Badge */}
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-full bg-slate-900/75 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-white shadow-xs">
            <span>
              {currentIndex + 1} / {total}
            </span>
          </div>

          {/* Arrow navigation buttons */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous photo"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-xs transition-all shadow-md hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next photo"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-xs transition-all shadow-md hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Bottom Indicators Dots */}
          <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex
                    ? "w-6 bg-[var(--color-primary)]"
                    : "w-2 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Identification Card at Bottom of Frame - Locked height to prevent layout shift */}
        <div className="mt-3 px-1.5 pb-1 h-[84px] sm:h-[90px] flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between gap-2 min-h-[26px]">
            <h2
              className="text-base sm:text-lg font-bold text-slate-900 leading-tight truncate"
              title={currentSlide.title}
            >
              {currentSlide.title}
            </h2>
            <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[var(--color-primary)] px-2 py-0.5 rounded shadow-2xs">
              <ShieldCheck className="h-3 w-3" />
              <span>{currentSlide.badge || "State Leadership"}</span>
            </span>
          </div>
          <p
            className="text-xs font-semibold text-[var(--color-primary-dark)] truncate leading-tight"
            title={currentSlide.subtitle || "Senior State Vice President, Bihar"}
          >
            {currentSlide.subtitle || "Senior State Vice President, Bihar"}
          </p>
          <p className="text-[11px] text-slate-500 font-medium truncate leading-tight">
            Hindustani Awam Morcha (Secular), Bihar
          </p>
        </div>
      </div>
    </div>
  );
}
