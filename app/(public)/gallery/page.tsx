import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { GalleryView } from "@/components/gallery/gallery-view";
import { galleryCategories, galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Media & Gallery | Ratnesh Patel",
  description:
    "Official photographic archive, public meetings, and organizational events of Ratnesh Patel, Senior State Vice President, Bihar.",
  openGraph: {
    title: "Media & Gallery | Ratnesh Patel",
    description:
      "Official photographic archive, public meetings, and organizational events of Ratnesh Patel, Senior State Vice President, Bihar.",
  },
};

export default function GalleryPage() {
  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50/70 py-12 sm:py-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold">Gallery</span>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                  तस्वीरें एवं मीडिया &bull; Public Archive
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                Media &amp; Photographic Gallery
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Photographic moments from state party conventions, grassroots outreach drives, leadership addresses, and constituent assemblies across Bihar.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery View Section */}
      <Section variant="default">
        <Container size="wide">
          <GalleryView categories={galleryCategories} items={galleryItems} />
        </Container>
      </Section>
    </div>
  );
}
