"use client";

import * as React from "react";
import Image from "next/image";
import { Download, Check } from "lucide-react";
import type { DownloadablePngItem } from "@/types/gallery";

interface PngCutoutCardProps {
  item: DownloadablePngItem;
  onPreview: () => void;
}

export function PngCutoutCard({ item, onPreview }: PngCutoutCardProps) {
  const [downloading, setDownloading] = React.useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-[var(--color-primary)] hover:shadow-lg transition-all duration-300 group">
      {/* Transparent Checkerboard Image Frame (Preserves full height without cropping) */}
      <div
        onClick={onPreview}
        className="relative aspect-[3/4] w-full bg-transparency-grid overflow-hidden cursor-pointer flex items-center justify-center p-4 sm:p-6 border-b border-slate-100"
        title="Click to view full size"
      >
        <div className="relative h-full w-full">
          <Image
            src={item.filePath}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-2 sm:p-3 transition-transform duration-500 group-hover:scale-103 drop-shadow-sm"
          />
        </div>
      </div>

      {/* Card Content & Direct Download Action */}
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-sm text-slate-900 group-hover:text-[var(--color-primary)] transition-colors leading-snug line-clamp-1">
          {item.title}
        </h3>

        {/* Clear, Prominent Download Button */}
        <a
          href={item.filePath}
          download={item.downloadName}
          onClick={handleDownload}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white py-2.5 px-4 text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all cursor-pointer"
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
      </div>
    </div>
  );
}
