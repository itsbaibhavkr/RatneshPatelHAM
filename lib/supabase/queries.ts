import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/types/database";

type ProfileRow = Database["public"]["Tables"]["profiles"]["Row"];
type PoliticalJourneyRow = Database["public"]["Tables"]["political_journey"]["Row"];
type PublicWorkRow = Database["public"]["Tables"]["public_work"]["Row"];
type GalleryCategoryRow = Database["public"]["Tables"]["gallery_categories"]["Row"];
type GalleryRow = Database["public"]["Tables"]["gallery"]["Row"];
type SocialLinkRow = Database["public"]["Tables"]["social_links"]["Row"];
type SiteSettingsRow = Database["public"]["Tables"]["site_settings"]["Row"];

export const DEFAULT_PROFILE: ProfileRow = {
  id: "00000000-0000-0000-0000-000000000001",
  name: "Ratnesh Patel",
  designation: "Senior State Vice President, Bihar",
  party: "Hindustani Awam Morcha (Secular)",
  biography:
    "Senior State Vice President of Hindustani Awam Morcha (Secular) representing organizational leadership, state-level coordination, and constituent advocacy across Bihar.",
  profile_image_url: null,
  hero_image_url: null,
  public_email: null,
  public_phone: null,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

export const DEFAULT_SOCIAL_LINKS: SocialLinkRow[] = [
  {
    id: "00000000-0000-0000-0000-000000000010",
    platform: "facebook",
    url: "https://www.facebook.com/RatneshPatelHAM/",
    label: "Facebook",
    display_order: 1,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "00000000-0000-0000-0000-000000000011",
    platform: "instagram",
    url: "https://www.instagram.com/ratneshpatelham",
    label: "Instagram",
    display_order: 2,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "00000000-0000-0000-0000-000000000012",
    platform: "x",
    url: "https://x.com/ratneshpatelham",
    label: "X (formerly Twitter)",
    display_order: 3,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const DEFAULT_SITE_SETTINGS: SiteSettingsRow = {
  id: "00000000-0000-0000-0000-000000000020",
  site_title:
    "Ratnesh Patel | Senior State Vice President, Bihar | Hindustani Awam Morcha (Secular)",
  site_description:
    "Official personal profile and public communication portal of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
  logo_url: null,
  favicon_url: null,
  og_image_url: null,
  contact_email: null,
  contact_phone: null,
  footer_text:
    "Official personal profile portal of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular). Not the official party website.",
  seo_title: "Ratnesh Patel - Senior State Vice President, Bihar",
  seo_description:
    "Official public communication portal and documentation archive of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).",
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

/**
 * Fetch official profile with safe fallback
 */
export async function getProfile(): Promise<ProfileRow> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .limit(1)
      .maybeSingle();

    if (error || !data) {
      return DEFAULT_PROFILE;
    }
    return data;
  } catch {
    return DEFAULT_PROFILE;
  }
}

/**
 * Fetch published political journey milestones
 */
export async function getPoliticalJourney(): Promise<PoliticalJourneyRow[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("political_journey")
      .select("*")
      .eq("is_published", true)
      .order("display_order", { ascending: true })
      .order("year", { ascending: false });

    if (error || !data) {
      return [];
    }
    return data;
  } catch {
    return [];
  }
}

/**
 * Fetch published public work initiatives
 */
export async function getPublicWork(): Promise<PublicWorkRow[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("public_work")
      .select("*")
      .eq("is_published", true)
      .order("display_order", { ascending: true })
      .order("date", { ascending: false });

    if (error || !data) {
      return [];
    }
    return data;
  } catch {
    return [];
  }
}

/**
 * Fetch gallery categories
 */
export async function getGalleryCategories(): Promise<GalleryCategoryRow[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("gallery_categories")
      .select("*")
      .order("display_order", { ascending: true });

    if (error || !data) {
      return [];
    }
    return data;
  } catch {
    return [];
  }
}

/**
 * Fetch published gallery items, optionally filtered by category
 */
export async function getGalleryItems(
  categoryId?: string
): Promise<GalleryRow[]> {
  try {
    const supabase = await createClient();
    let query = supabase
      .from("gallery")
      .select("*")
      .eq("is_published", true)
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: false });

    if (categoryId && categoryId !== "all") {
      query = query.eq("category_id", categoryId);
    }

    const { data, error } = await query;
    if (error || !data) {
      return [];
    }
    return data;
  } catch {
    return [];
  }
}

/**
 * Fetch active social links
 */
export async function getSocialLinks(): Promise<SocialLinkRow[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("social_links")
      .select("*")
      .eq("is_active", true)
      .order("display_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return DEFAULT_SOCIAL_LINKS;
    }
    return data;
  } catch {
    return DEFAULT_SOCIAL_LINKS;
  }
}

/**
 * Fetch site settings
 */
export async function getSiteSettings(): Promise<SiteSettingsRow> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("site_settings")
      .select("*")
      .limit(1)
      .maybeSingle();

    if (error || !data) {
      return DEFAULT_SITE_SETTINGS;
    }
    return data;
  } catch {
    return DEFAULT_SITE_SETTINGS;
  }
}
