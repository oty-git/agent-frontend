import { Trial } from './types';

export const mockTrials: Trial[] = [
  {
    id: 'manchester-united-academy',
    title: 'Manchester United Academy Trial',
    level: 'Academy',
    date: 'Saturday, 15th February 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Carrington Training Ground, Manchester',
    ageGroup: 'Under 18',
    cost: '£50',
    description:
      "Join the Manchester United Academy trial and showcase your talent to professional scouts. This is an excellent opportunity for young players to be assessed by one of England's top clubs.",
    hasDetailsPage: true,
    onApply: () => alert('Applied for Manchester United Academy Trial'),
  },
  {
    id: 'city-fc-open',
    title: 'City FC Open Trial',
    level: 'Semi-Professional',
    date: 'Sunday, 23rd February 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Etihad Campus, Manchester',
    ageGroup: 'Open Age',
    cost: '£30',
    description:
      'Open trial for ambitious players looking to join a competitive semi-professional team. All positions available with immediate opportunities for the right candidates.',
    hasDetailsPage: true,
  },
  {
    id: 'london-lions-fc',
    title: 'London Lions FC Trial',
    level: 'Amateur',
    date: 'Saturday, 1st March 2025',
    time: '11:00 AM - 2:00 PM',
    location: 'Hackney Marshes, London',
    ageGroup: 'Under 21',
    cost: '£20',
    description:
      "Join one of London's most successful amateur clubs. Great opportunity for young players to develop their skills in a competitive environment.",
    hasDetailsPage: false,
  },
  {
    id: 'bristol-rovers-youth',
    title: 'Bristol Rovers Youth Trial',
    level: 'Academy',
    date: 'Sunday, 8th March 2025',
    time: '9:00 AM - 3:00 PM',
    location: 'Memorial Stadium, Bristol',
    ageGroup: 'Under 16',
    cost: '£35',
    description:
      'Youth trial for talented players under 16. Bristol Rovers are looking for the next generation of stars to join their academy system.',
    hasDetailsPage: false,
  },
];
