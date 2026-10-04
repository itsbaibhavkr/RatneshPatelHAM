import * as React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { GalleryView } from "@/components/gallery/gallery-view";
import { galleryItems, downloadablePngItems } from "@/data/gallery";

import { BreadcrumbJsonLd, GalleryPageJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Photo Gallery & Official Media Archive",
  description:
    "Official photographic archive and high-resolution transparent PNG cutouts of Ratnesh Patel, Senior State Vice President of Hindustani Awam Morcha (Secular), Bihar.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Photo Gallery & Official Media Archive | Ratnesh Patel",
    description:
      "Explore official photographs from party conventions, constituent outreach, and public leadership across Bihar.",
    url: "/gallery",
    type: "website",
    images: [
      {
        url: "/images/Gallery/Gallery1.jpg",
        width: 2048,
        height: 1536,
        alt: "Ratnesh Patel - State Worker Convention",
      },
    ],
  },
};

export default function GalleryPage() {
  return (
    <div className="space-y-0">
      {/* Search Engine Schema */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Photo Gallery", url: "/gallery" },
        ]}
      />
      <GalleryPageJsonLd />
      {/* Clean Header */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50/50 to-stone-100/30 py-10 sm:py-14 text-center">
        <Container size="narrow">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                तस्वीरें एवं मीडिया &bull; Media Archive
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Photo Gallery
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Official photographs from public events, party conventions, and leadership outreach across Bihar, along with transparent PNG cutouts for personal and supporter use.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Interactive Gallery Section */}
      <Section variant="default" className="py-10 sm:py-14">
        <Container size="wide">
          <GalleryView
            items={galleryItems}
            pngItems={downloadablePngItems}
          />
        </Container>
      </Section>
    </div>
  );
}
