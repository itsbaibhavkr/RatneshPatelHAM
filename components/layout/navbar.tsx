"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Political Journey", href: "/political-journey" },
  { label: "Public Work", href: "/public-work" },
  { label: "Gallery", href: "/gallery" },
  { label: "HAM (Secular)", href: "/ham" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border-gray)] bg-[var(--color-white)]/95 backdrop-blur-xs">
      {/* Top Notice Bar */}
      <div className="border-b border-[var(--color-border-gray)] bg-[var(--color-off-white)] py-1.5 text-xs text-[var(--color-muted-text)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-primary)]"></span>
            <span>Official Personal &amp; Public Profile Portal</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px]">
            <span>Senior State Vice President, Bihar &bull; Hindustani Awam Morcha (Secular)</span>
            <Link
              href="/admin/login"
              className="text-[var(--color-muted-text)] hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-0.5"
            >
              <span>Admin Portal</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group" onClick={handleLinkClick}>
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--color-primary)] text-white font-bold text-lg tracking-wider shadow-xs group-hover:bg-[var(--color-primary-dark)] transition-colors">
            RP
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-[var(--color-dark-text)] leading-none group-hover:text-[var(--color-primary)] transition-colors">
              Ratnesh Patel
            </span>
            <span className="mt-1 text-xs text-[var(--color-muted-text)] leading-tight">
              Senior State Vice President, Bihar
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-[var(--color-primary)] bg-[var(--color-primary-subtle)] font-semibold"
                    : "text-[var(--color-dark-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-light-gray)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact">
            <Button size="sm" variant="default">
              Contact Office
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[var(--color-dark-text)] hover:bg-[var(--color-light-gray)] focus:outline-none cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden border-b border-[var(--color-border-gray)] bg-[var(--color-white)] px-4 pt-2 pb-6">
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "text-[var(--color-primary)] bg-[var(--color-primary-subtle)] font-semibold"
                      : "text-[var(--color-dark-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-light-gray)]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-[var(--color-border-gray)] flex flex-col gap-2">
            <Link href="/contact" onClick={handleLinkClick} className="w-full">
              <Button size="sm" variant="default" className="w-full">
                Contact Office
              </Button>
            </Link>
            <Link href="/admin/login" onClick={handleLinkClick} className="w-full">
              <Button size="sm" variant="outline" className="w-full text-xs">
                Admin Portal Access
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
