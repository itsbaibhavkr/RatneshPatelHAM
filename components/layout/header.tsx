"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/social-links";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { MAIN_NAV_ITEMS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border-gray)] bg-[var(--color-white)]/95 backdrop-blur-xs shadow-2xs">
      {/* Top Utility & Branding Strip (Desktop & Tablet) */}
      <div className="border-b border-[var(--color-border-gray)] bg-[var(--color-off-white)] py-1.5 text-xs text-[var(--color-muted-text)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* HAM(S) Official Affiliation Context */}
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]" />
            <span className="font-semibold text-[var(--color-dark-text)] text-[11px] sm:text-xs">
              Hindustani Awam Morcha (Secular)
            </span>
            <span className="hidden sm:inline text-[var(--color-border-dark)]">|</span>
            <span className="hidden sm:inline text-[11px] text-[var(--color-muted-text)]">
              Senior State Vice President, Bihar
            </span>
          </div>

          {/* Social Icons & External Link */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <span className="text-[11px] text-[var(--color-muted-text)]">
                Official Channels:
              </span>
              <SocialLinks variant="minimal" size="sm" />
            </div>
            <span className="hidden md:inline text-[var(--color-border-dark)]">|</span>
            <a
              href="https://ham.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium text-[var(--color-muted-text)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1"
            >
              <span>ham.org.in</span>
              <span className="text-[9px] text-[var(--color-primary)] font-semibold uppercase">Party Site &rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand & Identity Area */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-primary)] text-white font-bold text-base tracking-wider shadow-xs group-hover:bg-[var(--color-primary-dark)] transition-colors">
            RP
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-[var(--color-dark-text)] leading-tight group-hover:text-[var(--color-primary)] transition-colors">
              Ratnesh Patel
            </span>
            <span className="text-[11px] text-[var(--color-muted-text)] leading-tight hidden xs:inline">
              Senior State Vice President, Bihar &bull; HAM(S)
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Main Navigation"
        >
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all",
                  isActive
                    ? "text-[var(--color-primary)] font-semibold bg-[var(--color-primary-subtle)]"
                    : "text-[var(--color-dark-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-light-gray)]"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--color-primary)] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Area: Social Icons & Contact CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <SocialLinks variant="header" size="sm" />
          <Link href="/contact">
            <Button size="sm" variant="default" className="text-xs h-8 px-3">
              <span>Contact Office</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </Link>
        </div>

        {/* Mobile Header Controls: Quick Social + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <div className="sm:flex hidden items-center mr-1">
            <SocialLinks variant="minimal" size="sm" />
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-dark-text)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-primary)] focus:outline-none cursor-pointer transition-colors"
            aria-label="Open mobile navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
