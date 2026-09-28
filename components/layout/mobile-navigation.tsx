"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SocialLinks } from "@/components/shared/social-links";
import { MAIN_NAV_ITEMS, type NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export type { NavItem };

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();

  // Close drawer on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Drawer */}
      <div className="relative ml-auto flex h-full w-full max-w-xs flex-col bg-[var(--color-white)] shadow-xl z-10 overflow-y-auto">
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[var(--color-border-gray)] p-4">
          <div className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-[var(--color-primary)] shadow-xs bg-slate-100 shrink-0">
              <img
                src="/images/ratnesh-patel/profile/ratnesh-patel-portrait.webp"
                alt="Ratnesh Patel"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-[var(--color-dark-text)] leading-tight">
                Ratnesh Patel
              </span>
              <span className="text-[10px] text-[var(--color-muted-text)]">
                Senior State Vice President, Bihar
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-[var(--color-muted-text)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-dark-text)] transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* HAM(S) Party Context Banner */}
        <div className="border-b border-[var(--color-border-gray)] bg-[var(--color-off-white)] px-4 py-2 flex items-center justify-between text-[11px] text-[var(--color-muted-text)]">
          <span className="flex items-center gap-1.5 font-medium text-[var(--color-primary-dark)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
            Hindustani Awam Morcha (S)
          </span>
          <Badge variant="subtle" className="text-[10px] px-2 py-0">
            Bihar
          </Badge>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[var(--color-primary-subtle)] text-[var(--color-primary)] font-semibold border-l-3 border-[var(--color-primary)]"
                    : "text-[var(--color-dark-text)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-primary)]"
                )}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Social Media Links & Footer CTA */}
        <div className="border-t border-[var(--color-border-gray)] p-4 space-y-4 bg-[var(--color-off-white)]">
          <div className="space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted-text)] block">
              Official Social Profiles
            </span>
            <SocialLinks variant="minimal" size="md" />
          </div>

          <div className="pt-2 border-t border-[var(--color-border-gray)]">
            <Link href="/contact" onClick={onClose} className="block w-full">
              <Button size="sm" variant="default" className="w-full justify-between">
                <span>Contact Office</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
