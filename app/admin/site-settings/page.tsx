import * as React from "react";
import type { Metadata } from "next";
import { Settings } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Admin - Site Settings",
};

export default function AdminSiteSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--color-border-gray)] pb-4">
        <div>
          <h1 className="text-xl font-bold text-[var(--color-dark-text)]">
            Site Settings Administration
          </h1>
          <p className="text-xs text-[var(--color-muted-text)]">
            Manage global site configurations, metadata, and disclaimer text.
          </p>
        </div>
        <Badge variant="subtle" className="text-xs">
          Schema: site_settings
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-[var(--color-primary)]" />
            <CardTitle className="text-base">Site Settings Architecture</CardTitle>
          </div>
          <CardDescription className="text-xs">
            Linked to PostgreSQL table `site_settings` in `types/database.ts`.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-xs text-[var(--color-muted-text)]">
          <p>
            Key-value configuration store for brand titles, SEO parameters, and party disclaimers.
          </p>
          <div className="rounded-md border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-4 text-[11px]">
            Ensures easy adjustment of organizational statements without code rebuilds.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
