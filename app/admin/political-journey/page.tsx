import * as React from "react";
import type { Metadata } from "next";
import { Milestone } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Admin - Political Journey",
};

export default function AdminPoliticalJourneyPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--color-border-gray)] pb-4">
        <div>
          <h1 className="text-xl font-bold text-[var(--color-dark-text)]">
            Political Journey Administration
          </h1>
          <p className="text-xs text-[var(--color-muted-text)]">
            Manage chronological leadership milestones and service records.
          </p>
        </div>
        <Badge variant="subtle" className="text-xs">
          Schema: political_journey
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Milestone className="h-5 w-5 text-[var(--color-primary)]" />
            <CardTitle className="text-base">Political Journey Module Architecture</CardTitle>
          </div>
          <CardDescription className="text-xs">
            Linked to PostgreSQL table `political_journey` in `types/database.ts`.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-xs text-[var(--color-muted-text)]">
          <p>
            Fields prepared: `year`, `title`, `description`, `display_order`.
          </p>
          <div className="rounded-md border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-4 text-[11px]">
            Ready for CRUD operations via Supabase Server client in the next phase.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
