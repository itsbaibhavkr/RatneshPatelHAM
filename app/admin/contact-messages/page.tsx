import * as React from "react";
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Admin - Contact Messages",
};

export default function AdminContactMessagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--color-border-gray)] pb-4">
        <div>
          <h1 className="text-xl font-bold text-[var(--color-dark-text)]">
            Contact Messages Administration
          </h1>
          <p className="text-xs text-[var(--color-muted-text)]">
            Manage constituent representations and inquiries received through the portal.
          </p>
        </div>
        <Badge variant="subtle" className="text-xs">
          Schema: contact_messages
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-[var(--color-primary)]" />
            <CardTitle className="text-base">Contact Messages Module Architecture</CardTitle>
          </div>
          <CardDescription className="text-xs">
            Linked to PostgreSQL table `contact_messages` in `types/database.ts`.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-xs text-[var(--color-muted-text)]">
          <p>
            Fields prepared: `name`, `email`, `phone`, `subject`, `message`, `is_read`, `created_at`.
          </p>
          <div className="rounded-md border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-4 text-[11px]">
            Ready for real-time inbox review and status toggles (read/unread) in Phase 2.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
