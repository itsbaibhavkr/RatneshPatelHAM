import type { GalleryCategory, GalleryItem } from "@/types/gallery";

/**
 * Gallery categories for photo filtering.
 */
export const galleryCategories: GalleryCategory[] = [
  { id: "all", name: "All Photographs", slug: "all" },
  { id: "public-meetings", name: "Public Meetings", slug: "public-meetings" },
  { id: "party-conventions", name: "Party Conventions", slug: "party-conventions" },
  { id: "constituent-outreach", name: "Constituent Outreach", slug: "constituent-outreach" },
];

/**
 * Official photographic documentation archive.
 * ALL gallery images must come exclusively from /public/images/ratnesh-patel/gallery/
 *
 * Example structure:
 * {
 *   id: "gallery-001",
 *   title: "Public Meeting",
 *   image: "/images/ratnesh-patel/gallery/public-meeting-01.jpg",
 *   alt: "Ratnesh Patel at a public meeting",
 *   category: "public-meetings",
 *   caption: "Addressing constituent delegates in Bihar."
 * }
 */
export const galleryItems: GalleryItem[] = [];
