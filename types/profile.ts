/**
 * Profile TypeScript definitions for Ratnesh Patel website.
 */
export interface Profile {
  name: string;
  designation: string;
  party: string;
  biography: string;
  profile_image: string | null;
  hero_image: string | null;
  public_email?: string | null;
  public_phone?: string | null;
}
