-- ==============================================================================
-- Migration: 20260928000001_create_schema.sql
-- Project: RatneshPatelHAM
-- Purpose: Create core database tables, security helper functions, triggers, and RLS policies
-- Note: NEWS and EVENTS tables are strictly excluded per project constraints.
-- ==============================================================================

-- 1. EXTENSIONS & HELPER FUNCTIONS
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Automatic timestamp updater function
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

-- Trigger for admin_profiles updated_at
CREATE OR REPLACE TRIGGER update_admin_profiles_timestamp
  BEFORE UPDATE ON public.admin_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Security Definer function to check if current user is an active administrator
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

-- 3. PROFILES TABLE (Official Profile of Ratnesh Patel)
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

-- 11. SITE SETTINGS TABLE (Singleton / Configuration row)
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
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS across all tables
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

-- ADMIN_PROFILES POLICIES
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

-- PROFILES POLICIES
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

-- POLITICAL JOURNEY POLICIES
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

-- PUBLIC WORK POLICIES
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

-- GALLERY CATEGORIES POLICIES
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

-- GALLERY POLICIES
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

-- VIDEOS POLICIES
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

-- SOCIAL LINKS POLICIES
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

-- CONTACT MESSAGES POLICIES (Strict Security Layer)
-- 1. Public can insert messages (contact form)
DROP POLICY IF EXISTS "Public can insert contact messages" ON public.contact_messages;
CREATE POLICY "Public can insert contact messages"
  ON public.contact_messages FOR INSERT
  WITH CHECK (true);

-- 2. Only authenticated admins can read contact messages (NO PUBLIC READ)
DROP POLICY IF EXISTS "Only admins can view contact messages" ON public.contact_messages;
CREATE POLICY "Only admins can view contact messages"
  ON public.contact_messages FOR SELECT
  TO authenticated
  USING (public.is_admin());

-- 3. Only authenticated admins can update contact messages (change status, etc.)
DROP POLICY IF EXISTS "Only admins can update contact messages" ON public.contact_messages;
CREATE POLICY "Only admins can update contact messages"
  ON public.contact_messages FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- 4. Only authenticated admins can delete contact messages
DROP POLICY IF EXISTS "Only admins can delete contact messages" ON public.contact_messages;
CREATE POLICY "Only admins can delete contact messages"
  ON public.contact_messages FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- SITE SETTINGS POLICIES
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
