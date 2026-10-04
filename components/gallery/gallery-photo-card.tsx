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
    <article
      onClick={onClick}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Clean Image Frame */}
      <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.alt || item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading={index < 6 ? "eager" : "lazy"}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-400">
            <ImageIcon className="h-10 w-10 opacity-40" />
          </div>
        )}

        {/* Subtle Hover Zoom Overlay */}
        <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-slate-900 shadow-md transform translate-y-1 group-hover:translate-y-0 transition-transform">
            <ZoomIn className="h-3.5 w-3.5 text-[var(--color-primary)]" />
            <span>View</span>
          </span>
        </div>
      </div>

      {/* Simple Clean Title Only */}
      <div className="p-3.5 sm:p-4">
        <h3 className="font-semibold text-xs sm:text-sm text-slate-800 group-hover:text-[var(--color-primary)] transition-colors leading-snug line-clamp-1">
          {item.title}
        </h3>
      </div>
    </article>
  );
}
