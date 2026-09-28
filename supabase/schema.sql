-- ==============================================================================
-- UNIFIED DATABASE & SECURITY SETUP: schema.sql
-- Project: RatneshPatelHAM
-- Target: Official Personal Website of Ratnesh Patel
--         Senior State Vice President, Bihar | Hindustani Awam Morcha (Secular)
--
-- Instructions:
-- Paste this entire script into your Supabase project's SQL Editor and run it.
-- It is idempotent and safely establishes:
--   1. Extensions & triggers
--   2. All 10 required tables (Strictly no news/events)
--   3. Strict Row-Level Security (RLS) policies
--   4. Supabase Storage bucket 'website-assets' & storage policies
--   5. Initial verified seed data for profile, social links, and site settings
-- ==============================================================================

-- 1. EXTENSIONS & HELPER FUNCTIONS
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 2. ADMIN PROFILES TABLE (Supabase Auth Integration)
CREATE TABLE IF NOT EXISTS public.admin_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  role TEXT NOT NULL DEFAULT 'admin' CHECK (role IN ('superadmin', 'admin', 'editor')),
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE OR REPLACE TRIGGER update_admin_profiles_timestamp
  BEFORE UPDATE ON public.admin_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Security Definer function to verify administrator status
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_profiles
    WHERE id = auth.uid()
    AND is_active = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  designation TEXT NOT NULL,
  party TEXT NOT NULL,
  biography TEXT,
  profile_image_url TEXT,
  hero_image_url TEXT,
  public_email TEXT,
  public_phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE OR REPLACE TRIGGER update_profiles_timestamp
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 4. POLITICAL JOURNEY TABLE
CREATE TABLE IF NOT EXISTS public.political_journey (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  year TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  title TEXT NOT NULL,
  organization TEXT NOT NULL,
  location TEXT,
  description TEXT NOT NULL,
  image_url TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE OR REPLACE TRIGGER update_political_journey_timestamp
  BEFORE UPDATE ON public.political_journey
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 5. PUBLIC WORK TABLE
CREATE TABLE IF NOT EXISTS public.public_work (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  date DATE,
  location TEXT,
  short_description TEXT,
  description TEXT NOT NULL,
  featured_image_url TEXT,
  video_url TEXT,
  is_published BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE OR REPLACE TRIGGER update_public_work_timestamp
  BEFORE UPDATE ON public.public_work
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 6. GALLERY CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS public.gallery_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE OR REPLACE TRIGGER update_gallery_categories_timestamp
  BEFORE UPDATE ON public.gallery_categories
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 7. GALLERY TABLE
CREATE TABLE IF NOT EXISTS public.gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  caption TEXT,
  image_url TEXT NOT NULL,
  thumbnail_url TEXT,
  alt_text TEXT,
  category_id UUID REFERENCES public.gallery_categories(id) ON DELETE SET NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE OR REPLACE TRIGGER update_gallery_timestamp
  BEFORE UPDATE ON public.gallery
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 8. VIDEOS TABLE
CREATE TABLE IF NOT EXISTS public.videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  platform TEXT NOT NULL DEFAULT 'youtube',
  display_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE OR REPLACE TRIGGER update_videos_timestamp
  BEFORE UPDATE ON public.videos
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 9. SOCIAL LINKS TABLE
CREATE TABLE IF NOT EXISTS public.social_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform TEXT NOT NULL,
  url TEXT NOT NULL,
  label TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE OR REPLACE TRIGGER update_social_links_timestamp
  BEFORE UPDATE ON public.social_links
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 10. CONTACT MESSAGES TABLE
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT NOT NULL,
  district TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'in_progress', 'resolved', 'archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE OR REPLACE TRIGGER update_contact_messages_timestamp
  BEFORE UPDATE ON public.contact_messages
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 11. SITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_title TEXT NOT NULL,
  site_description TEXT NOT NULL,
  logo_url TEXT,
  favicon_url TEXT,
  og_image_url TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  footer_text TEXT,
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE OR REPLACE TRIGGER update_site_settings_timestamp
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS)
-- ==============================================================================

ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.political_journey ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.public_work ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.social_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Admin Profiles
DROP POLICY IF EXISTS "Admins can view admin profiles" ON public.admin_profiles;
CREATE POLICY "Admins can view admin profiles"
  ON public.admin_profiles FOR SELECT
  TO authenticated
  USING (id = auth.uid() OR public.is_admin());

DROP POLICY IF EXISTS "Only active admins can modify admin profiles" ON public.admin_profiles;
CREATE POLICY "Only active admins can modify admin profiles"
  ON public.admin_profiles FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Profiles
DROP POLICY IF EXISTS "Public can view profiles" ON public.profiles;
CREATE POLICY "Public can view profiles"
  ON public.profiles FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Admins can modify profiles" ON public.profiles;
CREATE POLICY "Admins can modify profiles"
  ON public.profiles FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Political Journey
DROP POLICY IF EXISTS "Public can view published journey milestones" ON public.political_journey;
CREATE POLICY "Public can view published journey milestones"
  ON public.political_journey FOR SELECT
  USING (is_published = true OR public.is_admin());

DROP POLICY IF EXISTS "Admins can manage political journey" ON public.political_journey;
CREATE POLICY "Admins can manage political journey"
  ON public.political_journey FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Public Work
DROP POLICY IF EXISTS "Public can view published public work" ON public.public_work;
CREATE POLICY "Public can view published public work"
  ON public.public_work FOR SELECT
  USING (is_published = true OR public.is_admin());

DROP POLICY IF EXISTS "Admins can manage public work" ON public.public_work;
CREATE POLICY "Admins can manage public work"
  ON public.public_work FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Gallery Categories
DROP POLICY IF EXISTS "Public can view gallery categories" ON public.gallery_categories;
CREATE POLICY "Public can view gallery categories"
  ON public.gallery_categories FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Admins can manage gallery categories" ON public.gallery_categories;
CREATE POLICY "Admins can manage gallery categories"
  ON public.gallery_categories FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Gallery
DROP POLICY IF EXISTS "Public can view published gallery items" ON public.gallery;
CREATE POLICY "Public can view published gallery items"
  ON public.gallery FOR SELECT
  USING (is_published = true OR public.is_admin());

DROP POLICY IF EXISTS "Admins can manage gallery items" ON public.gallery;
CREATE POLICY "Admins can manage gallery items"
  ON public.gallery FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Videos
DROP POLICY IF EXISTS "Public can view published videos" ON public.videos;
CREATE POLICY "Public can view published videos"
  ON public.videos FOR SELECT
  USING (is_published = true OR public.is_admin());

DROP POLICY IF EXISTS "Admins can manage videos" ON public.videos;
CREATE POLICY "Admins can manage videos"
  ON public.videos FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Social Links
DROP POLICY IF EXISTS "Public can view active social links" ON public.social_links;
CREATE POLICY "Public can view active social links"
  ON public.social_links FOR SELECT
  USING (is_active = true OR public.is_admin());

DROP POLICY IF EXISTS "Admins can manage social links" ON public.social_links;
CREATE POLICY "Admins can manage social links"
  ON public.social_links FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Contact Messages (Strict Privacy: Insert only for public, zero public reads)
DROP POLICY IF EXISTS "Public can insert contact messages" ON public.contact_messages;
CREATE POLICY "Public can insert contact messages"
  ON public.contact_messages FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Only admins can view contact messages" ON public.contact_messages;
CREATE POLICY "Only admins can view contact messages"
  ON public.contact_messages FOR SELECT
  TO authenticated
  USING (public.is_admin());

DROP POLICY IF EXISTS "Only admins can update contact messages" ON public.contact_messages;
CREATE POLICY "Only admins can update contact messages"
  ON public.contact_messages FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Only admins can delete contact messages" ON public.contact_messages;
CREATE POLICY "Only admins can delete contact messages"
  ON public.contact_messages FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- Site Settings
DROP POLICY IF EXISTS "Public can view site settings" ON public.site_settings;
CREATE POLICY "Public can view site settings"
  ON public.site_settings FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Admins can manage site settings" ON public.site_settings;
CREATE POLICY "Admins can manage site settings"
  ON public.site_settings FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ==============================================================================
-- SUPABASE STORAGE CONFIGURATION
-- ==============================================================================

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'website-assets',
  'website-assets',
  true,
  26214400,
  ARRAY[
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/svg+xml',
    'image/gif',
    'video/mp4',
    'video/quicktime',
    'application/pdf'
  ]
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 26214400,
  allowed_mime_types = ARRAY[
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/svg+xml',
    'image/gif',
    'video/mp4',
    'video/quicktime',
    'application/pdf'
  ];

DROP POLICY IF EXISTS "Public can view website assets" ON storage.objects;
CREATE POLICY "Public can view website assets"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'website-assets');

DROP POLICY IF EXISTS "Admins can upload website assets" ON storage.objects;
CREATE POLICY "Admins can upload website assets"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'website-assets'
    AND public.is_admin()
  );

DROP POLICY IF EXISTS "Admins can update website assets" ON storage.objects;
CREATE POLICY "Admins can update website assets"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'website-assets'
    AND public.is_admin()
  )
  WITH CHECK (
    bucket_id = 'website-assets'
    AND public.is_admin()
  );

DROP POLICY IF EXISTS "Admins can delete website assets" ON storage.objects;
CREATE POLICY "Admins can delete website assets"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'website-assets'
    AND public.is_admin()
  );

-- ==============================================================================
-- INITIAL VERIFIED SEED DATA
-- ==============================================================================

-- 1. Official Profile Seed
INSERT INTO public.profiles (
  id,
  name,
  designation,
  party,
  biography
) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'Ratnesh Patel',
  'Senior State Vice President, Bihar',
  'Hindustani Awam Morcha (Secular)',
  'Senior State Vice President of Hindustani Awam Morcha (Secular) representing organizational leadership and constituent coordination across the State of Bihar.'
)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  designation = EXCLUDED.designation,
  party = EXCLUDED.party,
  biography = EXCLUDED.biography;

-- 2. Social Links Seed
INSERT INTO public.social_links (
  id,
  platform,
  url,
  label,
  display_order,
  is_active
) VALUES
  (
    '00000000-0000-0000-0000-000000000010',
    'facebook',
    'https://www.facebook.com/RatneshPatelHAM/',
    'Facebook',
    1,
    true
  ),
  (
    '00000000-0000-0000-0000-000000000011',
    'instagram',
    'https://www.instagram.com/ratneshpatelham',
    'Instagram',
    2,
    true
  ),
  (
    '00000000-0000-0000-0000-000000000012',
    'x',
    'https://x.com/ratneshpatelham',
    'X (formerly Twitter)',
    3,
    true
  )
ON CONFLICT (id) DO UPDATE SET
  platform = EXCLUDED.platform,
  url = EXCLUDED.url,
  label = EXCLUDED.label,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;

-- 3. Default Site Settings Seed
INSERT INTO public.site_settings (
  id,
  site_title,
  site_description,
  footer_text,
  seo_title,
  seo_description
) VALUES (
  '00000000-0000-0000-0000-000000000020',
  'Ratnesh Patel | Senior State Vice President, Bihar | Hindustani Awam Morcha (Secular)',
  'Official personal profile and public communication portal of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).',
  'Official personal profile portal of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular). Not the official party website.',
  'Ratnesh Patel - Senior State Vice President, Bihar',
  'Official public communication portal and documentation archive of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).'
)
ON CONFLICT (id) DO UPDATE SET
  site_title = EXCLUDED.site_title,
  site_description = EXCLUDED.site_description,
  footer_text = EXCLUDED.footer_text,
  seo_title = EXCLUDED.seo_title,
  seo_description = EXCLUDED.seo_description;
