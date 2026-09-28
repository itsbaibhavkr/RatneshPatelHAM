import * as React from "react";
import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Admin - Public Work",
};

export default function AdminPublicWorkPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--color-border-gray)] pb-4">
        <div>
          <h1 className="text-xl font-bold text-[var(--color-dark-text)]">
            Public Work Administration
          </h1>
          <p className="text-xs text-[var(--color-muted-text)]">
            Manage public initiatives, citizen grievances, and constituent outreach.
          </p>
        </div>
        <Badge variant="subtle" className="text-xs">
          Schema: public_work
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-[var(--color-primary)]" />
            <CardTitle className="text-base">Public Work Module Architecture</CardTitle>
          </div>
          <CardDescription className="text-xs">
            Linked to PostgreSQL table `public_work` in `types/database.ts`.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-xs text-[var(--color-muted-text)]">
          <p>
            Fields prepared: `title`, `category`, `description`, `image_url`, `date`.
          </p>
          <div className="rounded-md border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-4 text-[11px]">
            Supports categorizing constituent representations and civic projects.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
