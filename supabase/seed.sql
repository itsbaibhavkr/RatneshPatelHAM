-- ==============================================================================
-- Seed: seed.sql
-- Project: RatneshPatelHAM
-- Purpose: Initial verified seed data for Ratnesh Patel's profile and social links.
-- Constraints: No fake gallery, public work, videos, DOB, or education.
-- ==============================================================================

-- 1. SEED PROFILES
-- Wipe existing records to ensure clean initial state
DELETE FROM public.profiles;

INSERT INTO public.profiles (
  id,
  name,
  designation,
  party,
  biography,
  profile_image_url,
  hero_image_url,
  public_email,
  public_phone
) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'Ratnesh Patel',
  'Senior State Vice President, Bihar',
  'Hindustani Awam Morcha (Secular)',
  'Senior State Vice President of Hindustani Awam Morcha (Secular) representing organizational leadership and constituent coordination across the State of Bihar.',
  NULL, - - To be populated with supplied photography
  NULL, - - To be populated with supplied photography
  NULL, - - Official contact email
  NULL  - - Official contact phone
);

-- 2. SEED SOCIAL LINKS
DELETE FROM public.social_links;

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
  );

-- 3. SEED SITE SETTINGS (Singleton Configuration Row)
DELETE FROM public.site_settings;

INSERT INTO public.site_settings (
  id,
  site_title,
  site_description,
  logo_url,
  favicon_url,
  og_image_url,
  contact_email,
  contact_phone,
  footer_text,
  seo_title,
  seo_description
) VALUES (
  '00000000-0000-0000-0000-000000000020',
  'Ratnesh Patel | Senior State Vice President, Bihar | Hindustani Awam Morcha (Secular)',
  'Official personal profile and public communication portal of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  'Official personal profile portal of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular). Not the official party website.',
  'Ratnesh Patel -  Senior State Vice President, Bihar',
  'Official public communication portal and documentation archive of Ratnesh Patel, Senior State Vice President, Bihar, Hindustani Awam Morcha (Secular).'
);
