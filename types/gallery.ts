/**
 * Gallery & Media TypeScript definitions.
 */
export interface GalleryCategory {
  id: string;
  name: string;
  slug: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  category: string;
  caption?: string | null;
}
