import * as React from "react";
import type { Metadata } from "next";
import { User } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Admin - Profile",
};

export default function AdminProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-[var(--color-border-gray)] pb-4">
        <div>
          <h1 className="text-xl font-bold text-[var(--color-dark-text)]">
            Profile Administration
          </h1>
          <p className="text-xs text-[var(--color-muted-text)]">
            Manage official personal and public information for Ratnesh Patel.
          </p>
        </div>
        <Badge variant="subtle" className="text-xs">
          Schema: profiles
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-[var(--color-primary)]" />
            <CardTitle className="text-base">Profile Architecture Status</CardTitle>
          </div>
          <CardDescription className="text-xs">
            Linked to PostgreSQL table `profiles` in `types/database.ts`.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-xs text-[var(--color-muted-text)]">
          <p>
            Fields prepared: `name`, `designation`, `party`, `biography`, `profile_image_url`, `hero_image_url`, `public_email`, `public_phone`.
          </p>
          <div className="rounded-md border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-4">
            <div className="font-semibold text-[var(--color-dark-text)] mb-1">
              Protected Designation
            </div>
            <div>Senior State Vice President, Bihar | Hindustani Awam Morcha (Secular)</div>
          </div>
          <div className="pt-2 text-[11px] text-[var(--color-primary)] font-medium">
            CMS form interface will be activated in the Admin implementation phase.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
