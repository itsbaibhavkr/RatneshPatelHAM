export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

/**
 * Main application navigation items.
 * Dedicated pages for Home, Gallery, HAM(S), and Contact.
 * About & Political Journey are integrated directly into the Home page.
 */
export const MAIN_NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "HAM(S)", href: "/ham" },
  { label: "Contact", href: "/contact" },
] as const;
