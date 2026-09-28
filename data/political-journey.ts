import type { PoliticalJourneyItem } from "@/types/political-journey";

/**
 * Chronological political journey milestones for Ratnesh Patel.
 * Source of truth for Political Journey across the website.
 */
export const politicalJourneyItems: PoliticalJourneyItem[] = [
  {
    id: "journey-001",
    year: "Present",
    title: "Senior State Vice President, Bihar",
    organization: "Hindustani Awam Morcha (Secular)",
    location: "Patna, Bihar",
    description:
      "Leading state-level organizational coordination, district committee mentorship, constituent advocacy, and policy representations across Bihar's 38 districts.",
    is_current: true,
  },
  {
    id: "journey-002",
    year: "2020 — 2024",
    title: "State General Secretary & Regional In-charge",
    organization: "Hindustani Awam Morcha (Secular)",
    location: "Bihar",
    description:
      "Spearheaded grassroots cadre mobilization, organized regional party conventions, and coordinated public outreach drives across central and northern Bihar districts.",
    is_current: false,
  },
  {
    id: "journey-003",
    year: "2016 — 2020",
    title: "District Committee Convener & Senior Functionary",
    organization: "Hindustani Awam Morcha (Secular)",
    location: "Bihar",
    description:
      "Strengthened grassroots booth-level organization, championed farmer and rural worker issues, and built active youth and community volunteer networks.",
    is_current: false,
  },
  {
    id: "journey-004",
    year: "2010 — 2016",
    title: "Grassroots Social Activism & Civic Leadership",
    organization: "Public Social Initiatives",
    location: "Bihar",
    description:
      "Dedicated to educational awareness, public grievance resolution, and community development programs for underprivileged and marginalized communities.",
    is_current: false,
  },
];
