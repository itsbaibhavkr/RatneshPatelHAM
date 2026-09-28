# Supabase Database Architecture & Security Layer
**Project:** RatneshPatelHAM  
**Subject:** Ratnesh Patel — Senior State Vice President, Bihar | Hindustani Awam Morcha (Secular)

This directory contains the complete database schema, security layer (Row Level Security), storage bucket configuration, and initial seed data for the official personal website of Ratnesh Patel.

---

## 1. Database Tables (10 Tables)

> **Strict Rule:** NEWS and EVENTS tables are strictly excluded per project constraints.

| # | Table Name | Purpose | RLS Policy |
|---|---|---|---|
| 1 | `profiles` | Ratnesh Patel's official persona, leadership designation, party, bio, portrait URLs, public contact info. | Public: `SELECT` only. Admin: `ALL`. |
| 2 | `political_journey` | Chronological service milestones, titles, dates, descriptions, display order. | Public: `SELECT` (published only). Admin: `ALL`. |
| 3 | `public_work` | Constituent initiatives, community visits, categories, descriptions, media URLs. | Public: `SELECT` (published only). Admin: `ALL`. |
| 4 | `gallery_categories` | Category taxonomy for media and photographic archives. | Public: `SELECT`. Admin: `ALL`. |
| 5 | `gallery` | High-res event photography, captions, thumbnails, alt-text, category references. | Public: `SELECT` (published only). Admin: `ALL`. |
| 6 | `videos` | Addresses, speeches, video links, thumbnails, platform indicators. | Public: `SELECT` (published only). Admin: `ALL`. |
| 7 | `social_links` | Verified official public social media handles (Facebook, Instagram, X). | Public: `SELECT` (active only). Admin: `ALL`. |
| 8 | `contact_messages` | Constituent representations, grievances, inquiries. Status: `new`, `read`, `in_progress`, `resolved`, `archived`. | Public: `INSERT` only. **Public read is strictly forbidden.** Admin: `SELECT`, `UPDATE`, `DELETE`. |
| 9 | `site_settings` | Global branding configuration (site title, SEO meta, OG images, contact info, footer text). | Public: `SELECT`. Admin: `ALL`. |
| 10 | `admin_profiles` | Administrator identities linked to Supabase Auth (`auth.users`), roles, and active status. | Admin only. |

---

## 2. Row Level Security (RLS) Specification

All tables have RLS explicitly enabled:
```sql
ALTER TABLE public.<table_name> ENABLE ROW LEVEL SECURITY;
```

### Security Highlights:
- **Constituent Privacy Guard:** `contact_messages` can only be **inserted** by the public. Public queries (`SELECT`), modifications (`UPDATE`), or deletions (`DELETE`) will return empty sets or fail. Only verified administrators can read and update message statuses.
- **Publication Gate:** Items in `political_journey`, `public_work`, `gallery`, and `videos` require `is_published = true` for public visibility, whereas active administrators can view unpublished drafts.
- **Admin Authentication:** The `public.is_admin()` Security Definer function validates whether `auth.uid()` corresponds to an active account in `public.admin_profiles`.

---

## 3. Supabase Storage: `website-assets`

A public storage bucket named `website-assets` is created and configured with a 25MB file size limit and strict MIME-type validation.

### Directory Organization:
- `branding/` — Official emblems, party references, transparent logos
- `profile/` — Official portrait and high-resolution headshots of Ratnesh Patel
- `gallery/` — Meeting, event, and convention photo archives
- `public-work/` — Constituent outreach and civic initiative photography
- `videos/` — Video preview stills and media assets
- `site/` — OpenGraph banners, favicons, header illustrations

### Storage Policies:
- Public: `SELECT` (view/download assets)
- Admin: `INSERT`, `UPDATE`, `DELETE` (upload and manage assets)

---

## 4. How to Deploy to Supabase

### Option A: Using the Supabase Dashboard SQL Editor (Recommended)
1. Open your Supabase project dashboard at [supabase.com/dashboard](https://supabase.com/dashboard).
2. Go to the **SQL Editor** from the left sidebar.
3. Open `supabase/schema.sql` from this repository.
4. Copy the entire contents, paste into the SQL Editor, and click **Run**.
5. All 10 tables, triggers, helper functions, storage bucket, RLS policies, and initial seed data will be created idempotently.

### Option B: Using Supabase CLI
```bash
supabase db push
# or
supabase migration up
supabase db seed
```

---

## 5. Environment Variables

Create `.env.local` in the project root based on `.env.example`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```
> **Security Note:** Service-role keys are never exposed in frontend code or client bundles.
