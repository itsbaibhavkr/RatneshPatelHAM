/**
 * Public Work & Civic Initiatives TypeScript definitions.
 */
export interface PublicWorkItem {
  id: string;
  title: string;
  category: string;
  date?: string | null;
  location?: string | null;
  short_description?: string | null;
  description: string;
  image?: string | null;
  video_url?: string | null;
}
