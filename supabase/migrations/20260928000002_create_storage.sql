-- ==============================================================================
-- Migration: 20260928000002_create_storage.sql
-- Project: RatneshPatelHAM
-- Purpose: Setup Supabase Storage bucket 'website-assets' and access control policies
-- Folder Structure:
--   - branding/    (Logos, party symbols, official stamps)
--   - profile/     (High-res portraits and official headshots)
--   - gallery/     (Event, meeting, and conclave albums)
--   - public-work/ (Civic initiative documentation and photos)
--   - videos/      (Video thumbnails and media clips)
--   - site/        (Favicons, OG banners, background assets)
-- ==============================================================================

-- 1. Create or update website-assets public storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'website-assets',
  'website-assets',
  true,
  26214400, -- 25MB max file size
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

-- 2. Storage RLS Policies for website-assets
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
