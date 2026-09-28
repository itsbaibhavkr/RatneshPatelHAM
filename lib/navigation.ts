export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const MAIN_NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Political Journey", href: "/political-journey" },
  { label: "Public Work", href: "/public-work" },
  { label: "Gallery", href: "/gallery" },
  { label: "HAM(S)", href: "/ham" },
  { label: "Contact", href: "/contact" },
] as const;
