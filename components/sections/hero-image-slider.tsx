"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";

export interface HeroImageSlide {
  src: string;
  alt: string;
  title: string;
  badge?: string;
  subtitle?: string;
}

const DEFAULT_HERO_SLIDES: HeroImageSlide[] = [
  {
    src: "/images/ratnesh-patel/profile/ratnesh-patel-portrait.webp",
    alt: "Ratnesh Patel -  Senior State Vice President, Bihar",
    title: "Ratnesh Patel",
    badge: "State Leadership",
    subtitle: "Senior State Vice President, Bihar",
  },
  {
    src: "/images/ratnesh-patel/profile/ratnesh-patel.webp",
    alt: "Ratnesh Patel in official attire",
    title: "Grassroots Public Dedication",
    badge: "Since 1995",
    subtitle: "Rooted in Kudhani, Tirhut Division",
  },
  {
    src: "/images/ratnesh-patel/hero/hero1.webp",
    alt: "HAM(S) Leadership Vision",
    title: "HAM(S) Vision & Mission",
    badge: "Party Vision",
    subtitle: "स्वस्थ एवं विकसित बिहार संकल्प",
  },
  {
    src: "/images/ratnesh-patel/hero/hero2.webp",
    alt: "Statewide Leadership Address",
    title: "Statewide Public Leadership",
    badge: "NDA & HAM(S)",
    subtitle: "बिहार को विकसित बनाने का संकल्प",
  },
  {
    src: "/images/ratnesh-patel/hero/hero3.webp",
    alt: "Public Rally & Vision",
    title: "Public Rally & Mandate",
    badge: "Jan Seva",
    subtitle: "सामाजिक न्याय एवं किसान कल्याण",
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
      {/* Decorative frame */}
      <div className="relative rounded-2xl border-2 border-white bg-white p-3 shadow-xl overflow-hidden ring-1 ring-slate-200">
        {/* Main image container */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover object-top"
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
            className="absolute left-2.5 top-1/2 - translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-xs transition-all shadow-md hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next photo"
            className="absolute right-2.5 top-1/2 - translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-xs transition-all shadow-md hover:scale-105 cursor-pointer"
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
                className={`h-2 rounded-full transition-all cursor-pointer ${idx === currentIndex
                    ? "w-6 bg-[var(--color-primary)]"
                    : "w-2 bg-white/70 hover:bg-white"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Identification Card at Bottom of Frame */}
        <div className="mt-3.5 px-2 pb-1 space-y-1">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
              {currentSlide.title}
            </h2>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[var(--color-primary)] px-2 py-0.5 rounded shadow-2xs">
              <ShieldCheck className="h-3 w-3" />
              <span>{currentSlide.badge || "State Leadership"}</span>
            </span>
          </div>
          <p className="text-xs font-semibold text-[var(--color-primary-dark)]">
            {currentSlide.subtitle || "Senior State Vice President, Bihar"}
          </p>
          <p className="text-[11px] text-slate-500 font-medium">
            Hindustani Awam Morcha (Secular), Bihar
          </p>
        </div>
      </div>
    </div>
  );
}
