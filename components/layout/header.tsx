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
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
      {/* Main Navigation Header */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand & Identity Area */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[var(--color-primary)] shadow-xs bg-slate-100 group-hover:scale-105 transition-transform">
            <Image
              src="/images/ratnesh-patel/profile/ratnesh-patel-portrait.webp"
              alt="Ratnesh Patel"
              fill
              sizes="40px"
              priority
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base tracking-tight text-slate-900 leading-tight group-hover:text-[var(--color-primary)] transition-colors">
                Ratnesh Patel
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold text-white bg-[var(--color-primary)] px-1.5 py-0.5 rounded">
                HAM(S)
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium leading-tight">
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
                  "relative px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-all",
                  isActive
                    ? "text-[var(--color-primary)] font-semibold bg-[var(--color-primary-subtle)]"
                    : "text-slate-700 hover:text-[var(--color-primary)] hover:bg-slate-100/70"
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
            <Button size="sm" variant="default" className="text-xs h-9 px-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white shadow-xs rounded-lg font-semibold gap-1.5">
              <span>जन संवाद / Connect</span>
              <ArrowRight className="h-3.5 w-3.5" />
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
