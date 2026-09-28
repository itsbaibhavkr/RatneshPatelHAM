import * as React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  User,
  Milestone,
  Briefcase,
  Image as ImageIcon,
  Video,
  Share2,
  Mail,
  Settings,
  ArrowLeft,
  Lock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ADMIN_NAV = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Profile", href: "/admin/profile", icon: User },
  { label: "Political Journey", href: "/admin/political-journey", icon: Milestone },
  { label: "Public Work", href: "/admin/public-work", icon: Briefcase },
  { label: "Gallery", href: "/admin/gallery", icon: ImageIcon },
  { label: "Videos", href: "/admin/videos", icon: Video },
  { label: "Social Links", href: "/admin/social-links", icon: Share2 },
  { label: "Contact Messages", href: "/admin/contact-messages", icon: Mail },
  { label: "Site Settings", href: "/admin/site-settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--color-off-white)] flex flex-col">
      {/* Admin Top Header */}
      <header className="sticky top-0 z-40 border-b border-[var(--color-border-gray)] bg-[var(--color-white)]">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--color-muted-text)] hover:text-[var(--color-primary)] transition-colors mr-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Public Site</span>
            </Link>
            <div className="h-5 w-px bg-[var(--color-border-gray)] hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--color-primary)] text-white font-bold text-xs">
                RP
              </div>
              <span className="font-bold text-sm text-[var(--color-dark-text)]">
                Admin Console
              </span>
              <Badge variant="subtle" className="text-[10px]">
                Architecture Phase
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="hidden sm:flex items-center gap-1.5 text-[var(--color-muted-text)]">
              <Lock className="h-3.5 w-3.5 text-[var(--color-primary)]" />
              <span>Supabase Auth Protected</span>
            </div>
            <Link href="/admin/login">
              <Button size="sm" variant="outline" className="text-xs h-8">
                Login / Session
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Admin Body with Sidebar */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-[var(--color-border-gray)] bg-[var(--color-white)] p-4 shrink-0">
          <div className="text-[11px] font-semibold text-[var(--color-muted-text)] uppercase tracking-wider px-3 mb-2">
            CMS Modules
          </div>
          <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {ADMIN_NAV.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2.5 rounded-md px-3 py-2 text-xs font-medium text-[var(--color-dark-text)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-primary)] transition-colors whitespace-nowrap"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[var(--color-muted-text)]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
