import * as React from "react";
import type { Metadata } from "next";
import { Image as ImageIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Admin - Gallery",
};

export default function AdminGalleryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--color-border-gray)] pb-4">
        <div>
          <h1 className="text-xl font-bold text-[var(--color-dark-text)]">
            Gallery &amp; Media Administration
          </h1>
          <p className="text-xs text-[var(--color-muted-text)]">
            Manage official photographs and albums via Supabase Storage.
          </p>
        </div>
        <Badge variant="subtle" className="text-xs">
          Schema: gallery
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-[var(--color-primary)]" />
            <CardTitle className="text-base">Gallery Module Architecture</CardTitle>
          </div>
          <CardDescription className="text-xs">
            Linked to PostgreSQL table `gallery` and Supabase Storage bucket.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-xs text-[var(--color-muted-text)]">
          <p>
            Fields prepared: `title`, `caption`, `image_url`, `display_order`.
          </p>
          <div className="rounded-md border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-4 text-[11px]">
            Ready for multi-file image uploads to Supabase Storage in subsequent phase.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
