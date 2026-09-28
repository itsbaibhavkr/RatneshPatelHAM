import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldAlert,
  ArrowRight,
  User,
  Milestone,
  Briefcase,
  Image as ImageIcon,
  Video,
  Share2,
  Mail,
  Settings,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Administrative console architecture for Ratnesh Patel website.",
};

const MODULES = [
  {
    title: "Profile Management",
    href: "/admin/profile",
    description: "Manage official designation, bio details, and portrait assets.",
    icon: User,
  },
  {
    title: "Political Journey",
    href: "/admin/political-journey",
    description: "Manage chronological milestones and party service records.",
    icon: Milestone,
  },
  {
    title: "Public Work & Initiatives",
    href: "/admin/public-work",
    description: "Manage constituency outreach documentation and civic initiatives.",
    icon: Briefcase,
  },
  {
    title: "Media & Gallery",
    href: "/admin/gallery",
    description: "Manage event photographs and public meeting albums via Supabase Storage.",
    icon: ImageIcon,
  },
  {
    title: "Videos",
    href: "/admin/videos",
    description: "Manage official addresses, speeches, and video references.",
    icon: Video,
  },
  {
    title: "Social Links",
    href: "/admin/social-links",
    description: "Manage verified public communication channels and handles.",
    icon: Share2,
  },
  {
    title: "Contact Messages",
    href: "/admin/contact-messages",
    description: "View constituent inquiries and public representations.",
    icon: Mail,
  },
  {
    title: "Site Settings",
    href: "/admin/site-settings",
    description: "Configure site metadata, contact details, and SEO parameters.",
    icon: Settings,
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[var(--color-border-gray)] pb-5">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-dark-text)]">
            Admin CMS Architecture
          </h1>
          <p className="text-xs text-[var(--color-muted-text)] mt-1">
            Foundation architecture prepared for Supabase PostgreSQL &amp; Auth integration.
          </p>
        </div>
        <Badge variant="subtle" className="w-fit text-xs">
          Foundation Phase
        </Badge>
      </div>

      {/* Architecture Notice */}
      <div className="rounded-lg border border-[var(--color-primary-border)] bg-[var(--color-primary-subtle)] p-4 text-xs flex items-start gap-3">
        <ShieldAlert className="h-5 w-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
        <div className="space-y-1 text-[var(--color-dark-text)]">
          <strong className="font-semibold text-[var(--color-primary-dark)]">
            Architecture Status:
          </strong>
          <p className="leading-relaxed">
            All 8 required administrative endpoints are mapped and structured. Full CMS functionality, form handling, and Supabase Auth session guards will be wired in subsequent phases per the milestone plan.
          </p>
        </div>
      </div>

      {/* Grid of CMS Modules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {MODULES.map((mod) => {
          const Icon = mod.icon;
          return (
            <Link key={mod.href} href={mod.href} className="group block">
              <Card className="h-full hover:border-[var(--color-primary)] transition-all">
                <CardHeader className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--color-light-gray)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <CardTitle className="text-sm font-semibold group-hover:text-[var(--color-primary)] transition-colors">
                      {mod.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-xs">
                    {mod.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <span className="text-[11px] font-medium text-[var(--color-primary)] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Configure Module</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
