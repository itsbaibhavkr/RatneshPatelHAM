"use client";

import * as React from "react";
import Image from "next/image";
import { ZoomIn, ImageIcon } from "lucide-react";
import type { GalleryItem } from "@/types/gallery";

interface GalleryPhotoCardProps {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}

export function GalleryPhotoCard({ item, index, onClick }: GalleryPhotoCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-xs hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {item.image ? (
        <Image
          src={item.image}
          alt={item.alt || item.title}
          width={item.width || 1200}
          height={item.height || 900}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] block"
          loading={index < 6 ? "eager" : "lazy"}
        />
      ) : (
        <div className="flex h-64 w-full items-center justify-center text-slate-400">
          <ImageIcon className="h-10 w-10 opacity-40" />
        </div>
      )}

      {/* Subtle Hover Zoom Overlay */}
      <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
        <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-slate-900 shadow-md transform translate-y-1 group-hover:translate-y-0 transition-transform">
          <ZoomIn className="h-3.5 w-3.5 text-[var(--color-primary)]" />
          <span>View Full</span>
        </span>
      </div>
    </div>
  );
}
