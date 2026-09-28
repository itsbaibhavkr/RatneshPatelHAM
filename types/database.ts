/**
 * Supabase Database Types Definition
 * Note: News and Events tables are strictly excluded per project constraints.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profile: {
        Row: {
          id: string;
          name: string;
          designation: string;
          party_affiliation: string;
          bio: string | null;
          avatar_url: string | null;
          hero_image_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          designation: string;
          party_affiliation: string;
          bio?: string | null;
          avatar_url?: string | null;
          hero_image_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          designation?: string;
          party_affiliation?: string;
          bio?: string | null;
          avatar_url?: string | null;
          hero_image_url?: string | null;
          updated_at?: string;
        };
      };
      political_journey: {
        Row: {
          id: string;
          year: string;
          title: string;
          description: string;
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          year: string;
          title: string;
          description: string;
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          year?: string;
          title?: string;
          description?: string;
          display_order?: number;
        };
      };
      public_work: {
        Row: {
          id: string;
          title: string;
          category: string;
          description: string;
          image_url: string | null;
          date: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          category: string;
          description: string;
          image_url?: string | null;
          date?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          category?: string;
          description?: string;
          image_url?: string | null;
          date?: string | null;
        };
      };
      gallery: {
        Row: {
          id: string;
          title: string;
          caption: string | null;
          image_url: string;
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          caption?: string | null;
          image_url: string;
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          caption?: string | null;
          image_url?: string;
          display_order?: number;
        };
      };
      videos: {
        Row: {
          id: string;
          title: string;
          video_url: string;
          thumbnail_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          video_url: string;
          thumbnail_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          video_url?: string;
          thumbnail_url?: string | null;
        };
      };
      social_links: {
        Row: {
          id: string;
          platform: string;
          url: string;
          display_order: number;
          is_active: boolean;
        };
        Insert: {
          id?: string;
          platform: string;
          url: string;
          display_order?: number;
          is_active?: boolean;
        };
        Update: {
          id?: string;
          platform?: string;
          url?: string;
          display_order?: number;
          is_active?: boolean;
        };
      };
      contact_messages: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          subject: string;
          message: string;
          is_read: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          subject: string;
          message: string;
          is_read?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          is_read?: boolean;
        };
      };
      site_settings: {
        Row: {
          key: string;
          value: Json;
          updated_at: string;
        };
        Insert: {
          key: string;
          value: Json;
          updated_at?: string;
        };
        Update: {
          value?: Json;
          updated_at?: string;
        };
      };
    };
  };
}
