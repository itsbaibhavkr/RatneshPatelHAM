import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Lock, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Secure administrator sign-in architecture.",
};

export default function AdminLoginPage() {
  return (
    <div className="py-12 max-w-md mx-auto">
      <Card>
        <CardHeader className="text-center space-y-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-subtle)] text-[var(--color-primary)] mx-auto">
            <Lock className="h-6 w-6" />
          </div>
          <Badge variant="subtle" className="w-fit mx-auto text-[10px]">
            Supabase Auth Architecture
          </Badge>
          <CardTitle className="text-xl">Admin Authentication</CardTitle>
          <CardDescription className="text-xs">
            Portal administration for Ratnesh Patel Official Website
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <label
              htmlFor="admin-email"
              className="block text-xs font-semibold text-[var(--color-dark-text)]"
            >
              Email Address
            </label>
            <input
              id="admin-email"
              type="email"
              placeholder="admin@ratneshpatel.in"
              disabled
              className="w-full rounded-md border border-[var(--color-border-gray)] bg-[var(--color-light-gray)] px-3 py-2 text-sm text-[var(--color-dark-text)] cursor-not-allowed"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="admin-password"
              className="block text-xs font-semibold text-[var(--color-dark-text)]"
            >
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              placeholder="••••••••••••"
              disabled
              className="w-full rounded-md border border-[var(--color-border-gray)] bg-[var(--color-light-gray)] px-3 py-2 text-sm text-[var(--color-dark-text)] cursor-not-allowed"
            />
          </div>

          <div className="rounded-md border border-[var(--color-border-gray)] bg-[var(--color-off-white)] p-3 text-xs text-[var(--color-muted-text)] space-y-1">
            <div className="flex items-center gap-1.5 font-medium text-[var(--color-primary-dark)]">
              <Shield className="h-3.5 w-3.5" />
              <span>Phase 1 Architecture Notice</span>
            </div>
            <p>
              Supabase Auth client bindings are prepared in `lib/supabase/client.ts`. Active authentication handlers will be connected upon Supabase project deployment.
            </p>
          </div>

          <Button type="button" disabled variant="default" className="w-full">
            Sign In (Configuring Auth)
          </Button>
        </CardContent>
        <CardFooter className="justify-center border-t border-[var(--color-border-gray)] pt-4">
          <Link
            href="/admin"
            className="text-xs text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
          >
            <span>Proceed to Admin Dashboard Preview</span>
            &rarr;
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
