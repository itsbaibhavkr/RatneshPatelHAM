/**
 * Political Journey TypeScript definitions.
 */
export interface PoliticalJourneyItem {
  id: string;
  year: string;
  period?: string;
  title: string;
  organization: string;
  location?: string | null;
  description: string;
  is_current?: boolean;
}
