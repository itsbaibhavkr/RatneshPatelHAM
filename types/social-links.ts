/**
 * Social Links TypeScript definitions.
 */
export interface SocialLink {
  id: string;
  platform: "facebook" | "instagram" | "x";
  url: string;
  label: string;
}
