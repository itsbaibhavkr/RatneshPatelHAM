import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { GalleryView } from "@/components/gallery/gallery-view";
import { getGalleryCategories, getGalleryItems } from "@/lib/supabase/queries";

export const metadata: Metadata = {
  title: "Media & Gallery",
  description:
    "Official photographic archive, public meetings, and organizational events of Ratnesh Patel, Senior State Vice President, Bihar.",
  openGraph: {
    title: "Media & Gallery | Ratnesh Patel",
    description:
      "Official photographic archive, public meetings, and organizational events of Ratnesh Patel, Senior State Vice President, Bihar.",
  },
};

export default async function GalleryPage() {
  const [categories, items] = await Promise.all([
    getGalleryCategories(),
    getGalleryItems(),
  ]);

  return (
    <div>
      {/* Header */}
      <section className="border-b border-[var(--color-border-gray)] bg-[var(--color-white)] py-12 sm:py-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs text-[var(--color-muted-text)]">
              <Link href="/" className="hover:text-[var(--color-primary)]">
                Home
              </Link>
              <span>/</span>
              <span className="text-[var(--color-dark-text)] font-medium">Gallery</span>
            </div>

            <div className="space-y-2">
              <Badge variant="subtle" className="text-xs uppercase tracking-wider">
                Photographic Archive
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-dark-text)]">
                Media &amp; Gallery
              </h1>
              <p className="text-sm sm:text-base text-[var(--color-muted-text)] leading-relaxed max-w-2xl">
                Official photographic documentation from public meetings, state party sessions, constituent assemblies, and organizational conventions across Bihar.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery View Section */}
      <Section variant="default">
        <Container size="wide">
          <GalleryView categories={categories} items={items} />
        </Container>
      </Section>
    </div>
  );
}
