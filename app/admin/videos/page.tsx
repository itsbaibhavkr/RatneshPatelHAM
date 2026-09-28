import * as React from "react";
import type { Metadata } from "next";
import { Video } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Admin - Videos",
};

export default function AdminVideosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--color-border-gray)] pb-4">
        <div>
          <h1 className="text-xl font-bold text-[var(--color-dark-text)]">
            Videos Administration
          </h1>
          <p className="text-xs text-[var(--color-muted-text)]">
            Manage public addresses, speeches, and video references.
          </p>
        </div>
        <Badge variant="subtle" className="text-xs">
          Schema: videos
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Video className="h-5 w-5 text-[var(--color-primary)]" />
            <CardTitle className="text-base">Videos Module Architecture</CardTitle>
          </div>
          <CardDescription className="text-xs">
            Linked to PostgreSQL table `videos` in `types/database.ts`.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-xs text-[var(--color-muted-text)]">
          <p>
            Fields prepared: `title`, `video_url`, `thumbnail_url`.
          </p>
          <div className="rounded-md border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-4 text-[11px]">
            Supports embedding verified YouTube or video references.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
