/**
 * Supabase Database Schema Definitions
 * Strict TypeScript types for the 10 official database tables.
 *
 * NOTE: NEWS and EVENTS tables are strictly excluded per project constraints.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type ContactMessageStatus =
  | "new"
  | "read"
  | "in_progress"
  | "resolved"
  | "archived";

export type AdminRole = "superadmin" | "admin" | "editor";

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string;
          designation: string;
          party: string;
          biography: string | null;
          profile_image_url: string | null;
          hero_image_url: string | null;
          public_email: string | null;
          public_phone: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          designation: string;
          party: string;
          biography?: string | null;
          profile_image_url?: string | null;
          hero_image_url?: string | null;
          public_email?: string | null;
          public_phone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          designation?: string;
          party?: string;
          biography?: string | null;
          profile_image_url?: string | null;
          hero_image_url?: string | null;
          public_email?: string | null;
          public_phone?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };

      political_journey: {
        Row: {
          id: string;
          year: string;
          start_date: string | null;
          end_date: string | null;
          title: string;
          organization: string;
          location: string | null;
          description: string;
          image_url: string | null;
          display_order: number;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          year: string;
          start_date?: string | null;
          end_date?: string | null;
          title: string;
          organization: string;
          location?: string | null;
          description: string;
          image_url?: string | null;
          display_order?: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          year?: string;
          start_date?: string | null;
          end_date?: string | null;
          title?: string;
          organization?: string;
          location?: string | null;
          description?: string;
          image_url?: string | null;
          display_order?: number;
          is_published?: boolean;
          updated_at?: string;
        };
        Relationships: [];
      };

      public_work: {
        Row: {
          id: string;
          title: string;
          slug: string;
          category: string;
          date: string | null;
          location: string | null;
          short_description: string | null;
          description: string;
          featured_image_url: string | null;
          video_url: string | null;
          is_published: boolean;
          display_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          category: string;
          date?: string | null;
          location?: string | null;
          short_description?: string | null;
          description: string;
          featured_image_url?: string | null;
          video_url?: string | null;
          is_published?: boolean;
          display_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          category?: string;
          date?: string | null;
          location?: string | null;
          short_description?: string | null;
          description?: string;
          featured_image_url?: string | null;
          video_url?: string | null;
          is_published?: boolean;
          display_order?: number;
          updated_at?: string;
        };
        Relationships: [];
      };

      gallery_categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          display_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          display_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          display_order?: number;
          updated_at?: string;
        };
        Relationships: [];
      };

      gallery: {
        Row: {
          id: string;
          title: string;
          caption: string | null;
          image_url: string;
          thumbnail_url: string | null;
          alt_text: string | null;
          category_id: string | null;
          display_order: number;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          caption?: string | null;
          image_url: string;
          thumbnail_url?: string | null;
          alt_text?: string | null;
          category_id?: string | null;
          display_order?: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          caption?: string | null;
          image_url?: string;
          thumbnail_url?: string | null;
          alt_text?: string | null;
          category_id?: string | null;
          display_order?: number;
          is_published?: boolean;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "gallery_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "gallery_categories";
            referencedColumns: ["id"];
          }
        ];
      };

      videos: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          video_url: string;
          thumbnail_url: string | null;
          platform: string;
          display_order: number;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          video_url: string;
          thumbnail_url?: string | null;
          platform?: string;
          display_order?: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string | null;
          video_url?: string;
          thumbnail_url?: string | null;
          platform?: string;
          display_order?: number;
          is_published?: boolean;
          updated_at?: string;
        };
        Relationships: [];
      };

      social_links: {
        Row: {
          id: string;
          platform: string;
          url: string;
          label: string;
          display_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          platform: string;
          url: string;
          label: string;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          platform?: string;
          url?: string;
          label?: string;
          display_order?: number;
          is_active?: boolean;
          updated_at?: string;
        };
        Relationships: [];
      };

      contact_messages: {
        Row: {
          id: string;
          name: string;
          phone: string | null;
          email: string;
          district: string | null;
          subject: string;
          message: string;
          status: ContactMessageStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          phone?: string | null;
          email: string;
          district?: string | null;
          subject: string;
          message: string;
          status?: ContactMessageStatus;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          phone?: string | null;
          email?: string;
          district?: string | null;
          subject?: string;
          message?: string;
          status?: ContactMessageStatus;
          updated_at?: string;
        };
        Relationships: [];
      };

      site_settings: {
        Row: {
          id: string;
          site_title: string;
          site_description: string;
          logo_url: string | null;
          favicon_url: string | null;
          og_image_url: string | null;
          contact_email: string | null;
          contact_phone: string | null;
          footer_text: string | null;
          seo_title: string | null;
          seo_description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          site_title: string;
          site_description: string;
          logo_url?: string | null;
          favicon_url?: string | null;
          og_image_url?: string | null;
          contact_email?: string | null;
          contact_phone?: string | null;
          footer_text?: string | null;
          seo_title?: string | null;
          seo_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          site_title?: string;
          site_description?: string;
          logo_url?: string | null;
          favicon_url?: string | null;
          og_image_url?: string | null;
          contact_email?: string | null;
          contact_phone?: string | null;
          footer_text?: string | null;
          seo_title?: string | null;
          seo_description?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };

      admin_profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          role: AdminRole;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          role?: AdminRole;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          email?: string;
          full_name?: string | null;
          role?: AdminRole;
          is_active?: boolean;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      is_admin: {
        Args: Record<string, never>;
        Returns: boolean;
      };
    };
    Enums: {
      contact_message_status: ContactMessageStatus;
      admin_role: AdminRole;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
