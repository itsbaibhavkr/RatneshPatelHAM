import * as React from "react";
import { Calendar, MapPin, Building2, ShieldCheck, Award } from "lucide-react";
import type { PoliticalJourneyItem } from "@/types/political-journey";
import { cn } from "@/lib/utils";

interface PoliticalTimelineProps {
  items: PoliticalJourneyItem[];
  className?: string;
}

export function PoliticalTimeline({ items, className }: PoliticalTimelineProps) {
  return (
    <div className={cn("relative py-6 sm:py-10", className)}>
      {/* Central Timeline Spine (Desktop: Centered; Mobile: Left-aligned at 20px) */}
      <div
        className="absolute top-4 bottom-4 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-red-300 to-slate-200 left-5 lg:left-1/2 lg:-translate-x-1/2"
        aria-hidden="true"
      />

      <div className="space-y-10 sm:space-y-12 lg:space-y-16">
        {items.map((item, index) => {
          const isEven = index % 2 === 0; // index 0, 2: left on desktop; index 1, 3: right on desktop

          return (
            <div
              key={item.id}
              className={cn(
                "relative flex flex-col lg:flex-row items-start group",
                // Desktop: alternating alignment
                isEven ? "lg:flex-row-reverse" : "lg:flex-row"
              )}
            >
              {/* Central Spine Node (Desktop: Exactly on center line; Mobile: Left at 20px) */}
              <div className="absolute left-5 -translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2 top-1 sm:top-2 z-20 flex items-center justify-center">
                <div
                  className={cn(
                    "flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 bg-white shadow-md transition-transform duration-300 group-hover:scale-110",
                    item.is_current
                      ? "border-[var(--color-primary)] ring-4 ring-red-100 text-[var(--color-primary)]"
                      : "border-slate-300 text-slate-600 group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]"
                  )}
                >
                  {item.is_current ? (
                    <ShieldCheck className="h-5 w-5" />
                  ) : (
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </div>
              </div>

              {/* Content Card (Desktop: 50% width on left or right; Mobile: Placed with left margin for single-sided timeline) */}
              <div
                className={cn(
                  "w-full lg:w-[calc(50%-2.5rem)]",
                  // Mobile offset for the left timeline spine
                  "pl-12 sm:pl-14 lg:pl-0",
                  // Desktop spacing from center
                  isEven ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"
                )}
              >
                <div
                  className={cn(
                    "relative rounded-2xl border bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:shadow-lg",
                    item.is_current
                      ? "border-red-200/90 ring-1 ring-red-100"
                      : "border-slate-200 hover:border-[var(--color-primary)]"
                  )}
                >
                  {/* Subtle horizontal pointer on desktop */}
                  <div
                    className={cn(
                      "hidden lg:block absolute top-6 h-3 w-3 rotate-45 border-slate-200 bg-white",
                      isEven
                        ? "-right-1.5 border-t border-r"
                        : "-left-1.5 border-b border-l"
                    )}
                    aria-hidden="true"
                  />

                  {/* Header metadata row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-bold tracking-wide",
                          item.is_current
                            ? "bg-red-50 text-[var(--color-primary)] border border-red-200"
                            : "bg-slate-100 text-slate-700"
                        )}
                      >
                        {item.period || item.year}
                      </span>
                    </div>

                    {item.is_current && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[var(--color-primary)] px-2.5 py-0.5 rounded-full shadow-2xs">
                        <Award className="h-3 w-3" />
                        <span>Current Mandate</span>
                      </span>
                    )}
                  </div>

                  {/* Role Title & Organization */}
                  <div className="pt-4 space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                      <span className="flex items-center gap-1.5 font-bold text-slate-800">
                        <Building2 className="h-3.5 w-3.5 text-[var(--color-primary)] shrink-0" />
                        <span>{item.organization}</span>
                      </span>

                      {item.location && (
                        <span className="flex items-center gap-1 font-medium text-slate-500">
                          <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                          <span>{item.location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Narrative Description */}
                  <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
