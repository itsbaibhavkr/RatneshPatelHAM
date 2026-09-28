import * as React from "react";
import type { Metadata } from "next";
import { Share2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Admin - Social Links",
};

export default function AdminSocialLinksPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--color-border-gray)] pb-4">
        <div>
          <h1 className="text-xl font-bold text-[var(--color-dark-text)]">
            Social Links Administration
          </h1>
          <p className="text-xs text-[var(--color-muted-text)]">
            Manage verified public social handles and communication accounts.
          </p>
        </div>
        <Badge variant="subtle" className="text-xs">
          Schema: social_links
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Share2 className="h-5 w-5 text-[var(--color-primary)]" />
            <CardTitle className="text-base">Social Links Module Architecture</CardTitle>
          </div>
          <CardDescription className="text-xs">
            Linked to PostgreSQL table `social_links` in `types/database.ts`.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-xs text-[var(--color-muted-text)]">
          <p>
            Fields prepared: `platform`, `url`, `display_order`, `is_active`.
          </p>
          <div className="rounded-md border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-4 text-[11px]">
            Ensures only verified official profiles are displayed on the public website.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
