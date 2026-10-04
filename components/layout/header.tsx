"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
    <header className="sticky top-0 z-50 w-full border-b border-red-700/60 bg-[var(--color-primary)] text-white shadow-md">
      {/* Main Navigation Header */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand & Identity Area */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          {/* Logo container without circular red border */}
          <div className="relative h-11 w-11 shrink-0 group-hover:scale-105 transition-transform">
            <Image
              src="/HAMLogo.png"
              alt="Hindustani Awam Morcha (Secular) Logo"
              fill
              sizes="44px"
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base tracking-tight text-white leading-tight">
                Ratnesh Patel
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold text-[var(--color-primary)] bg-white px-1.5 py-0.5 rounded shadow-2xs">
                HAM(S)
              </span>
            </div>
            <span className="text-[11px] text-red-100 font-medium leading-tight">
              Senior State Vice President, Bihar
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
                  "relative px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all",
                  isActive
                    ? "text-white bg-white/20 shadow-2xs"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Area: Social Icons & Contact CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <SocialLinks variant="header" size="sm" />
          <Link href="/contact">
            <Button
              size="sm"
              className="text-xs h-9 px-3.5 bg-white hover:bg-red-50 text-[var(--color-primary)] shadow-xs rounded-lg font-bold gap-1.5 transition-all hover:shadow"
            >
              <span>जन संवाद / Connect</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Header Controls: Quick Social + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <div className="sm:flex hidden items-center mr-1">
            <SocialLinks variant="header-minimal" size="sm" />
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none cursor-pointer transition-colors"
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
