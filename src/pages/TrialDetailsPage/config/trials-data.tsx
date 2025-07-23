import { TrialData } from '../model/types';

// Mock data - in a real app this would come from an API
export const trialsData: Record<string, TrialData> = {
  'manchester-united-academy': {
    id: 'manchester-united-academy',
    title: 'Manchester United Academy Trial',
    level: 'Academy',
    date: 'Saturday, 15th February 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Carrington Training Ground, Manchester',
    ageGroup: 'Under 18',
    cost: '£50',
    description:
      'Join the Manchester United Academy trial and showcase your talent to professional scouts.',
    fullDescription: `
      This is an exceptional opportunity for talented young players to be assessed by Manchester United's 
      professional academy scouts and coaching staff. The trial will consist of multiple assessment sessions 
      including technical skills, small-sided games, and full matches.
      
      Players will be evaluated on technical ability, tactical awareness, physical attributes, and mental 
      strength. Successful candidates may be invited to join the academy system or be recommended to 
      partner clubs within the Manchester United network.
      
      The trial day includes lunch and refreshments, as well as Manchester United training kit for 
      all participants. Professional video analysis will be provided to help players understand 
      their performance and areas for improvement.
    `,
    requirements: [
      'Players must be under 18 years old',
      'Previous playing experience required',
      'Valid insurance coverage',
      'Completed medical questionnaire',
      'Parent/guardian consent (if under 16)',
    ],
    whatToBring: [
      'Football boots (studs and trainers)',
      'Shin pads',
      'Water bottle',
      'Towel',
      'Change of clothes',
      'Positive attitude and determination',
    ],
    contactInfo: {
      email: 'academy@manutd.com',
      phone: '+44 161 868 8000',
    },
    club: {
      name: 'Manchester United FC',
      founded: '1878',
      league: 'Premier League',
      website: 'www.manutd.com',
    },
  },
  'city-fc-open': {
    id: 'city-fc-open',
    title: 'City FC Open Trial',
    level: 'Semi-Professional',
    date: 'Sunday, 23rd February 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Etihad Campus, Manchester',
    ageGroup: 'Open Age',
    cost: '£30',
    description:
      'Open trial for ambitious players looking to join a competitive semi-professional team.',
    fullDescription: `
      City FC is looking for talented players to join our competitive semi-professional squad. 
      This open trial welcomes players of all ages who are looking to take their game to the next level.
      
      We compete in the Northern Premier League and have a strong track record of developing players 
      who go on to professional football. Our coaching staff includes former professional players 
      and UEFA-qualified coaches.
      
      The trial will focus on match situations and tactical awareness, with opportunities to 
      showcase your skills in your preferred position.
    `,
    requirements: [
      'Minimum age 16 years',
      'Good level of fitness required',
      'Previous competitive experience preferred',
      'Valid ID required',
      'Own transport to training sessions',
    ],
    whatToBring: [
      'Football boots',
      'Shin pads',
      'Training kit',
      'Water bottle',
      'CV/playing history',
    ],
    contactInfo: {
      email: 'trials@cityfc.com',
      phone: '+44 161 555 0123',
    },
    club: {
      name: 'City FC',
      founded: '1995',
      league: 'Northern Premier League',
      website: 'www.cityfc.com',
    },
  },
};
