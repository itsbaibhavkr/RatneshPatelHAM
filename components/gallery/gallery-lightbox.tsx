"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Download, Check } from "lucide-react";
import type { GalleryItem, DownloadablePngItem } from "@/types/gallery";

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  item: GalleryItem | DownloadablePngItem | null;
  itemType: "photo" | "png";
  currentIndex: number;
  totalCount: number;
  onPrev: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  isOpen,
  onClose,
  item,
  itemType,
  currentIndex,
  totalCount,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const [downloading, setDownloading] = React.useState(false);

  // Keyboard controls
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  const isPng = itemType === "png";
  const pngItem = isPng ? (item as DownloadablePngItem) : null;
  const photoItem = !isPng ? (item as GalleryItem) : null;

  const imageSrc = isPng ? pngItem!.filePath : photoItem!.image;
  const imageAlt = isPng ? pngItem!.alt : photoItem!.alt || photoItem!.title;
  const title = item.title;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      {/* Top Action Bar */}
      <div
        className="absolute top-4 right-4 z-20 flex items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Save option ONLY for PNG images */}
        {isPng && pngItem && (
          <a
            href={pngItem.filePath}
            download={pngItem.downloadName}
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-4 py-2 text-xs font-bold shadow-md transition-all cursor-pointer"
          >
            {downloading ? (
              <>
                <Check className="h-4 w-4" />
                <span>Downloading...</span>
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                <span>Download PNG</span>
              </>
            )}
          </a>
        )}

        <button
          type="button"
          onClick={onClose}
          className="rounded-full bg-white/10 hover:bg-white/20 text-white p-2.5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Prev & Next Navigation Chevrons */}
      {totalCount > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 - translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 backdrop-blur-xs transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 - translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 backdrop-blur-xs transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Main Image Container */}
      <div
        className="max-w-5xl w-full flex flex-col items-center justify-center max-h-[85vh] z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative h-[65vh] sm:h-[75vh] w-full rounded-xl overflow-hidden flex items-center justify-center ${isPng ? "bg-transparency-grid" : ""
            }`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-contain select-none"
            priority
          />
        </div>

        {/* Clean Simple Title Only */}
        <div className="mt-3 text-center text-white/90 px-4">
          <p className="text-sm sm:text-base font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
}
