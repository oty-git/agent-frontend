export interface TrialData {
  id: string;
  title: string;
  level: string;
  date: string;
  time: string;
  location: string;
  ageGroup: string;
  cost: string;
  description: string;
  fullDescription: string;
  requirements: string[];
  whatToBring: string[];
  contactInfo: {
    email: string;
    phone: string;
  };
  club: {
    name: string;
    founded: string;
    league: string;
    website: string;
  };
}
