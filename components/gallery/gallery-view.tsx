"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, ZoomIn } from "lucide-react";
import type { Database } from "@/types/database";
import { EmptyState } from "@/components/ui/empty-state";
import { cn } from "@/lib/utils";

type GalleryRow = Database["public"]["Tables"]["gallery"]["Row"];
type CategoryRow = Database["public"]["Tables"]["gallery_categories"]["Row"];

interface GalleryViewProps {
  categories: CategoryRow[];
  items: GalleryRow[];
}

export function GalleryView({ categories, items }: GalleryViewProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [activePhotoIndex, setActivePhotoIndex] = React.useState<number | null>(null);

  // Filter items based on selected category
  const filteredItems = React.useMemo(() => {
    if (selectedCategory === "all") return items;
    return items.filter((item) => item.category_id === selectedCategory);
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
            const count = items.filter((i) => i.category_id === cat.id).length;
            if (count === 0) return null;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer",
                  selectedCategory === cat.id
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
              ? "Official event photographs and public meeting albums will appear here once verified and published through the portal administration."
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
              className="group relative cursor-pointer overflow-hidden rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-white)] shadow-xs transition-all hover:border-[var(--color-primary)] hover:shadow-md"
            >
              <div className="relative aspect-4/3 w-full bg-[var(--color-light-gray)] overflow-hidden">
                {photo.image_url ? (
                  <Image
                    src={photo.thumbnail_url || photo.image_url}
                    alt={photo.alt_text || photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[var(--color-muted-text)]">
                    <ImageIcon className="h-10 w-10 opacity-40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--color-dark-text)] shadow-xs">
                    <ZoomIn className="h-3.5 w-3.5" />
                    <span>View Photo</span>
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h4 className="font-semibold text-sm text-[var(--color-dark-text)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
                  {photo.title}
                </h4>
                {photo.caption && (
                  <p className="text-xs text-[var(--color-muted-text)] line-clamp-2 leading-relaxed">
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
              {activePhoto.image_url ? (
                <Image
                  src={activePhoto.image_url}
                  alt={activePhoto.alt_text || activePhoto.title}
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
