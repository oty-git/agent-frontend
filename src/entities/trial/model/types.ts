export interface Trial {
  id?: string;
  title: string;
  level: 'Amateur' | 'Semi-Professional' | 'Professional' | 'Academy';
  date: string;
  time: string;
  location: string;
  ageGroup: string;
  cost: string;
  description: string;
  hasDetailsPage?: boolean;
  onApply?: () => void;
}
