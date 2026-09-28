/**
 * Political Journey TypeScript definitions.
 */
export interface PoliticalJourneyItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  location?: string | null;
  description: string;
  is_current?: boolean;
}
