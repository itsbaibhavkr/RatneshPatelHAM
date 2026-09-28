"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, ZoomIn } from "lucide-react";
import type { GalleryItem, GalleryCategory } from "@/types/gallery";
import { EmptyState } from "@/components/ui/empty-state";
import { cn } from "@/lib/utils";

interface GalleryViewProps {
  categories: GalleryCategory[];
  items: GalleryItem[];
}

export function GalleryView({ categories, items }: GalleryViewProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [activePhotoIndex, setActivePhotoIndex] = React.useState<number | null>(null);

  // Filter items based on selected category
  const filteredItems = React.useMemo(() => {
    if (selectedCategory === "all") return items;
    return items.filter(
      (item) =>
        item.category === selectedCategory ||
        item.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [items, selectedCategory]);

  // Lightbox keyboard controls
  React.useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhotoIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) =>
          prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activePhotoIndex, filteredItems.length]);

  const activePhoto =
    activePhotoIndex !== null ? filteredItems[activePhotoIndex] : null;

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      {categories.length > 0 && items.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer",
              selectedCategory === "all"
                ? "bg-[var(--color-primary)] text-white shadow-xs"
                : "bg-[var(--color-white)] text-[var(--color-dark-text)] border border-[var(--color-border-gray)] hover:bg-[var(--color-light-gray)]"
            )}
          >
            All Photographs ({items.length})
          </button>

          {categories.map((cat) => {
            if (cat.id === "all") return null;
            const count = items.filter(
              (i) =>
                i.category === cat.id ||
                i.category === cat.slug ||
                i.category.toLowerCase() === cat.name.toLowerCase()
            ).length;
            if (count === 0) return null;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.slug || cat.id)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer",
                  selectedCategory === (cat.slug || cat.id)
                    ? "bg-[var(--color-primary)] text-white shadow-xs"
                    : "bg-[var(--color-white)] text-[var(--color-dark-text)] border border-[var(--color-border-gray)] hover:bg-[var(--color-light-gray)]"
                )}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>
      )}

      {/* Grid or Empty State */}
      {filteredItems.length === 0 ? (
        <EmptyState
          icon={ImageIcon}
          title="No Published Photographs Found"
          description={
            selectedCategory === "all"
              ? "Official event photographs and public meeting albums will appear here as they are placed in /public/images/ratnesh-patel/gallery/."
              : "No photographs currently found under this category filter."
          }
          action={
            selectedCategory !== "all"
              ? {
                  label: "Show All Photographs",
                  onClick: () => setSelectedCategory("all"),
                }
              : undefined
          }
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all hover:border-[var(--color-primary)] hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                {photo.image ? (
                  <Image
                    src={photo.image}
                    alt={photo.alt || photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-slate-400">
                    <ImageIcon className="h-10 w-10 opacity-40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[2px] transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-slate-900 shadow-md">
                    <ZoomIn className="h-4 w-4 text-[var(--color-primary)]" />
                    <span>View Photo</span>
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h4 className="font-bold text-sm text-slate-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
                  {photo.title}
                </h4>
                {photo.caption && (
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous button */}
          {filteredItems.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
                );
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Next button */}
          {filteredItems.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex((prev) =>
                  prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
                );
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Modal Container */}
          <div
            className="max-h-[90vh] max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[60vh] sm:h-[70vh] w-full">
              {activePhoto.image ? (
                <Image
                  src={activePhoto.image}
                  alt={activePhoto.alt || activePhoto.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-white/50">
                  <ImageIcon className="h-16 w-16" />
                </div>
              )}
            </div>

            {/* Captions */}
            <div className="mt-4 text-center text-white max-w-2xl px-4 space-y-1">
              <h3 className="text-base sm:text-lg font-bold">
                {activePhoto.title}
              </h3>
              {activePhoto.caption && (
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {activePhoto.caption}
                </p>
              )}
              <div className="pt-2 text-[11px] text-white/50">
                Photo {(activePhotoIndex || 0) + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
