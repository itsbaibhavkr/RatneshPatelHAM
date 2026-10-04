"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ZoomIn } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { galleryItems } from "@/data/gallery";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import type { GalleryItem } from "@/types/gallery";

export function GalleryMarqueeSection() {
  const [activePhotoIndex, setActivePhotoIndex] = React.useState<number | null>(
    null
  );

  // All 18 authentic gallery photographs
  const photos = galleryItems;

  const handleOpenPhoto = (index: number) => {
    setActivePhotoIndex(index % photos.length);
  };

  const handleCloseLightbox = () => {
    setActivePhotoIndex(null);
  };

  const handlePrev = () => {
    setActivePhotoIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : photos.length - 1
    );
  };

  const handleNext = () => {
    setActivePhotoIndex((prev) =>
      prev !== null && prev < photos.length - 1 ? prev + 1 : 0
    );
  };

  const activePhoto =
    activePhotoIndex !== null ? photos[activePhotoIndex] : null;

  return (
    <section
      id="gallery"
      className="scroll-mt-20 bg-slate-50/70 border-b border-slate-200 py-10 sm:py-14 overflow-hidden"
    >
      <Container size="wide">
        {/* Compact & Professional Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7 sm:mb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                तस्वीरें एवं जनसंवाद &bull; Moments
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Photo Gallery &amp; Moments
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Photographic highlights from party conventions, constituent outreach, and public leadership across Bihar.
            </p>
          </div>

          <Link href="/gallery" className="shrink-0 self-start sm:self-end">
            <Button
              variant="outline"
              size="sm"
              className="font-bold text-xs gap-1.5 rounded-xl border-slate-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] bg-white shadow-2xs hover:bg-red-50/40 transition-all cursor-pointer"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        {/* Continuous Automatic Sliding Gallery Slider Track */}
        <div
          className="marquee-container marquee-fade-mask group relative w-full overflow-hidden py-1"
          style={
            {
              "--marquee-gap": "1.25rem",
              "--marquee-duration": "60s",
            } as React.CSSProperties
          }
          aria-label="Continuous Photo Gallery Slider. Hover to pause."
        >
          <div className="flex gap-[var(--marquee-gap)] w-max select-none">
            {/* Group 1 */}
            <div className="animate-marquee flex gap-[var(--marquee-gap)]">
              {photos.map((photo, index) => (
                <div
                  key={`track1-${photo.id}-${index}`}
                  onClick={() => handleOpenPhoto(index)}
                  className="gallery-slider-card group/card relative h-60 sm:h-64 lg:h-72 rounded-2xl border border-slate-200/90 bg-white p-2.5 sm:p-3 shadow-2xs hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-center"
                >
                  {/* Clean fixed-size container with object-fit: contain for zero cropping & full visibility */}
                  <div className="relative h-full w-full rounded-xl bg-slate-50/90 overflow-hidden flex items-center justify-center">
                    <Image
                      src={photo.image}
                      alt={photo.alt || photo.title}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 380px"
                      className="object-contain p-2 transition-transform duration-500 group-hover/card:scale-[1.03]"
                      loading="lazy"
                    />

                    {/* Subtle Hover Zoom Overlay */}
                    <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-md transform translate-y-1 group-hover/card:translate-y-0 transition-transform">
                        <ZoomIn className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                        <span>View Photo</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Group 2 (Duplicate for continuous seamless gapless loop) */}
            <div
              className="animate-marquee flex gap-[var(--marquee-gap)]"
              aria-hidden="true"
            >
              {photos.map((photo, index) => (
                <div
                  key={`track2-${photo.id}-${index}`}
                  onClick={() => handleOpenPhoto(index)}
                  className="gallery-slider-card group/card relative h-60 sm:h-64 lg:h-72 rounded-2xl border border-slate-200/90 bg-white p-2.5 sm:p-3 shadow-2xs hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex items-center justify-center"
                >
                  <div className="relative h-full w-full rounded-xl bg-slate-50/90 overflow-hidden flex items-center justify-center">
                    <Image
                      src={photo.image}
                      alt={photo.alt || photo.title}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 380px"
                      className="object-contain p-2 transition-transform duration-500 group-hover/card:scale-[1.03]"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-md transform translate-y-1 group-hover/card:translate-y-0 transition-transform">
                        <ZoomIn className="h-3.5 w-3.5 text-[var(--color-primary)]" />
                        <span>View Photo</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Lightbox Modal on Card Click */}
      <GalleryLightbox
        isOpen={activePhotoIndex !== null}
        onClose={handleCloseLightbox}
        item={activePhoto}
        itemType="photo"
        currentIndex={activePhotoIndex || 0}
        totalCount={photos.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
