"use client";

import * as React from "react";
import Image from "next/image";

export interface ProfileImageItem {
  src: string;
  alt: string;
}

export const RATNESH_PATEL_PROFILE_IMAGES: ProfileImageItem[] = [
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel1.JPG",
    alt: "Ratnesh Patel - Senior State Vice President, Bihar",
  },
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel2.JPG",
    alt: "Ratnesh Patel - Grassroots Leadership",
  },
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel3.JPG",
    alt: "Ratnesh Patel - Public Representative",
  },
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel4.JPG",
    alt: "Ratnesh Patel - State Vice President, HAM(S)",
  },
  {
    src: "/images/ratnesh-patel/profile/RatneshPatel5.JPG",
    alt: "Ratnesh Patel - Senior Leadership Portrait",
  },
  {
    src: "/images/ratnesh-patel/profile/ratnesh-patel-portrait.webp",
    alt: "Official portrait of Ratnesh Patel",
  },
  {
    src: "/images/ratnesh-patel/profile/ratnesh-patel.webp",
    alt: "Ratnesh Patel standing in official attire",
  },
];

interface ProfileImageRotatorProps {
  images?: ProfileImageItem[];
  intervalMs?: number;
  initialIndex?: number;
  randomize?: boolean;
  className?: string;
  footer?: React.ReactNode;
}

export function ProfileImageRotator({
  images = RATNESH_PATEL_PROFILE_IMAGES,
  intervalMs = 10000,
  initialIndex = 0,
  randomize = true,
  className = "",
  footer,
}: ProfileImageRotatorProps) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  React.useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (randomize) {
          let next = Math.floor(Math.random() * images.length);
          if (next === prev) {
            next = (prev + 1) % images.length;
          }
          return next;
        }
        return (prev + 1) % images.length;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [images, intervalMs, randomize]);

  return (
    <div className={`relative w-full max-w-md mx-auto ${className}`}>
      {/* Decorative clean frame with no controls */}
      <div className="relative rounded-2xl border-2 border-white bg-white p-3 shadow-xl overflow-hidden ring-1 ring-slate-200">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100">
          {images.map((img, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={idx === initialIndex}
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover object-top"
                />
              </div>
            );
          })}
        </div>

        {/* Optional Custom Footer Card */}
        {footer && <div className="mt-3.5 px-2 pb-1">{footer}</div>}
      </div>
    </div>
  );
}
