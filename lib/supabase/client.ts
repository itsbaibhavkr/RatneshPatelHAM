import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

/**
 * Creates a browser-side Supabase client with strict database typing.
 * Includes graceful handling when environment variables are not yet configured.
 */
export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "Supabase credentials missing: Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
      );
    }
  }

  return createBrowserClient<Database>(
    supabaseUrl || "https://placeholder-project.supabase.co",
    supabaseAnonKey || "placeholder-anon-key"
  );
}
