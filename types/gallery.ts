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
  width?: number;
  height?: number;
  date?: string;
  location?: string;
}

export interface DownloadablePngItem {
  id: string;
  title: string;
  filename: string;
  filePath: string;
  downloadName: string;
  alt: string;
  width: number;
  height: number;
  fileSizeBytes: number;
  sizeFormatted: string;
  description: string;
  recommendedUse: string;
  tags: string[];
}
