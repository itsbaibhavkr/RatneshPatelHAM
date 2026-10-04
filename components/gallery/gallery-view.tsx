"use client";

import * as React from "react";
import { Camera, Download } from "lucide-react";
import type { GalleryItem, DownloadablePngItem } from "@/types/gallery";
import { GalleryPhotoCard } from "@/components/gallery/gallery-photo-card";
import { PngCutoutCard } from "@/components/gallery/png-cutout-card";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import { cn } from "@/lib/utils";

interface GalleryViewProps {
  items: GalleryItem[];
  pngItems: DownloadablePngItem[];
  defaultTab?: "photos" | "pngs";
}

export function GalleryView({
  items,
  pngItems,
  defaultTab = "photos",
}: GalleryViewProps) {
  const [activeTab, setActiveTab] = React.useState<"photos" | "pngs">(defaultTab);

  // Lightbox State
  const [lightboxState, setLightboxState] = React.useState<{
    isOpen: boolean;
    type: "photo" | "png";
    index: number;
  }>({
    isOpen: false,
    type: "photo",
    index: 0,
  });

  const handleOpenPhoto = (index: number) => {
    setLightboxState({
      isOpen: true,
      type: "photo",
      index,
    });
  };

  const handleOpenPng = (index: number) => {
    setLightboxState({
      isOpen: true,
      type: "png",
      index,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handlePrev = () => {
    setLightboxState((prev) => {
      const listLength = prev.type === "photo" ? items.length : pngItems.length;
      if (listLength <= 1) return prev;
      const nextIndex = prev.index > 0 ? prev.index - 1 : listLength - 1;
      return { ...prev, index: nextIndex };
    });
  };

  const handleNext = () => {
    setLightboxState((prev) => {
      const listLength = prev.type === "photo" ? items.length : pngItems.length;
      if (listLength <= 1) return prev;
      const nextIndex = prev.index < listLength - 1 ? prev.index + 1 : 0;
      return { ...prev, index: nextIndex };
    });
  };

  const currentLightboxItem =
    lightboxState.type === "photo"
      ? items[lightboxState.index] || null
      : pngItems[lightboxState.index] || null;

  return (
    <div className="space-y-8">
      {/* Simple, Clean Tab Switcher */}
      <div className="flex items-center justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
          <button
            type="button"
            onClick={() => setActiveTab("photos")}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer",
              activeTab === "photos"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            <Camera className="h-4 w-4 text-[var(--color-primary)]" />
            <span>Photographs</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("pngs")}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer",
              activeTab === "pngs"
                ? "bg-[var(--color-primary)] text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            <Download className="h-4 w-4" />
            <span>Downloadable PNGs</span>
          </button>
        </div>
      </div>

      {/* ================= TAB 1: PHOTOGRAPHS (Uncropped Natural Aspect Ratio Masonry) ================= */}
      {activeTab === "photos" && (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] animate-in fade-in duration-300">
          {items.map((photo, index) => (
            <div key={photo.id} className="mb-6 break-inside-avoid">
              <GalleryPhotoCard
                item={photo}
                index={index}
                onClick={() => handleOpenPhoto(index)}
              />
            </div>
          ))}
        </div>
      )}

      {/* ================= TAB 2: DOWNLOADABLE PNGs ================= */}
      {activeTab === "pngs" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
          {pngItems.map((png, index) => (
            <PngCutoutCard
              key={png.id}
              item={png}
              onPreview={() => handleOpenPng(index)}
            />
          ))}
        </div>
      )}

      {/* Clean Universal Lightbox */}
      <GalleryLightbox
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        item={currentLightboxItem}
        itemType={lightboxState.type}
        currentIndex={lightboxState.index}
        totalCount={
          lightboxState.type === "photo" ? items.length : pngItems.length
        }
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
