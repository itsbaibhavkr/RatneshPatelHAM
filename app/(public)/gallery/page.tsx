import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";

export const metadata: Metadata = {
  title: "Media & Gallery",
  description:
    "Official photographic archive and public event records of Ratnesh Patel.",
};

const GALLERY_SLOTS = [
  { title: "State Executive Committee Conclave", aspect: "16:9" as const },
  { title: "Constituent Outreach & Assembly", aspect: "16:9" as const },
  { title: "District Leadership Delegation", aspect: "16:9" as const },
  { title: "Public Address & Civic Session", aspect: "16:9" as const },
  { title: "Party Organizational Meeting", aspect: "16:9" as const },
  { title: "Community Representation Forum", aspect: "16:9" as const },
];

export default function GalleryPage() {
  return (
    <Section variant="default">
      <Container>
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[var(--color-muted-text)]">
            <Link href="/" className="hover:text-[var(--color-primary)]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[var(--color-dark-text)] font-medium">Gallery</span>
          </div>

          {/* Heading */}
          <div className="space-y-3 border-b border-[var(--color-border-gray)] pb-6">
            <Badge variant="subtle" className="text-xs uppercase tracking-wider">
              Photographic Archive
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-dark-text)]">
              Media &amp; Gallery
            </h1>
            <p className="text-sm text-[var(--color-muted-text)] leading-relaxed max-w-2xl">
              Official photographic documentation covering public appearances, constituent meetings, party conferences, and organizational events across Bihar.
            </p>
          </div>

          {/* Grid of gallery slots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_SLOTS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[var(--color-border-gray)] bg-[var(--color-white)] p-3 shadow-xs"
              >
                <ImagePlaceholder
                  category="gallery"
                  aspectRatio={item.aspect}
                  title={item.title}
                  description="Awaiting verified high-res photograph."
                  className="w-full"
                />
                <div className="mt-3 text-xs font-medium text-[var(--color-dark-text)] text-center">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

          {/* Image Architecture Status */}
          <div className="rounded-lg border border-dashed border-[var(--color-border-dark)] bg-[var(--color-off-white)] p-6 text-center space-y-2">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-primary)] mx-auto">
              <Shield className="h-5 w-5" />
            </div>
            <h4 className="font-semibold text-sm text-[var(--color-dark-text)]">
              Gallery &amp; Storage Architecture Active
            </h4>
            <p className="text-xs text-[var(--color-muted-text)] max-w-lg mx-auto">
              Images will be served directly from Supabase Storage and the local `public/images/gallery/` asset pipeline once official photo assets are provided.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
