import type { PoliticalJourneyItem } from "@/types/political-journey";

/**
 * Chronological political journey milestones for Ratnesh Patel.
 * Source of truth for Political Journey / History across the website.
 * Derived directly from official leadership service records.
 */
export const politicalJourneyItems: PoliticalJourneyItem[] = [
  {
    id: "journey-001",
    year: "2019 — Present",
    period: "27 May 2019 — Present",
    title: "State Vice President, Bihar",
    organization: "Hindustani Awam Morcha - Secular",
    location: "Muzaffarpur, Bihar",
    description:
      "Experienced political leader with active involvement in election management, organizational leadership, and grassroots mobilization. Served as Election Incharge for NDA in Lok Sabha Elections 2024 (Muzaffarpur & Vaishali) and played key roles in previous election campaigns. Currently serving as State Vice President of Hindustani Awam Morcha (Secular), with responsibilities across Tirhut Division and multiple districts. Actively engaged in organizing mass rallies, public outreach programs, and social upliftment initiatives for weaker sections of society.",
    is_current: true,
  },
  {
    id: "journey-002",
    year: "2015 — 2019",
    period: "27 May 2015 — 26 May 2019",
    title: "Former State Secretary, Bihar",
    organization: "Hindustani Awam Morcha - Secular",
    location: "Muzaffarpur, Bihar",
    description:
      "Served as Block Vice President (Kudhani) and Youth District Vice President, actively involved in grassroots political activities, expanding party membership, and strengthening the foundational cadre of HAM(S) across northern Bihar.",
    is_current: false,
  },
  {
    id: "journey-003",
    year: "2005 — 2015",
    period: "2005 — 2015",
    title: "Former Block Vice President, Kudhani",
    organization: "Janta Dal",
    location: "Muzaffarpur, Bihar",
    description:
      "Served as Block Vice President (Kudhani) and Youth District Vice President, actively involved in grassroots political activities, local governance coordination, and public grievance representation.",
    is_current: false,
  },
  {
    id: "journey-004",
    year: "1995 — 2003",
    period: "1995 — 2003",
    title: "Former Vice President",
    organization: "Samata Party",
    location: "Muzaffarpur, Bihar",
    description:
      "Started political journey as Vice President, gaining early experience in organizational and political activities under the historic banner of the Samata Party, establishing a three-decade foundation in public service.",
    is_current: false,
  },
];
