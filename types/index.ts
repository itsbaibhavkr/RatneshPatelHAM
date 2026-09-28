/**
 * Core Application Types
 * Official Personal Website of Ratnesh Patel
 */

export interface OfficialProfile {
  readonly name: string;
  readonly designation: string;
  readonly partyAffiliation: string;
  readonly state: string;
  readonly disclaimer: string;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}

export interface SectionArchitectureItem {
  title: string;
  slug: string;
  description: string;
  status: "architecture_ready" | "in_development" | "active";
}

export interface ContactMessageInput {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
