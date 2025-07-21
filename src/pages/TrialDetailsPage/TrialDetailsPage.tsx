import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './TrialDetailsPage.module.scss';

interface TrialData {
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

// Mock data - in a real app this would come from an API
const trialsData: Record<string, TrialData> = {
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

const TrialDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const trial = id ? trialsData[id] : null;

  if (!trial) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Trial Not Found</h1>
          <p>The trial you're looking for doesn't exist or has been removed.</p>
          <Link to="/trials" className={styles.backButton}>
            ← Back to All Trials
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link to="/trials" className={styles.breadcrumbLink}>
          Trials
        </Link>
        <span className={styles.breadcrumbSeparator}>›</span>
        <span className={styles.breadcrumbCurrent}>{trial.title}</span>
      </div>

      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{trial.title}</h1>
          <span
            className={`${styles.level} ${styles[trial.level.toLowerCase()]}`}
          >
            {trial.level}
          </span>
        </div>
        <p className={styles.subtitle}>{trial.description}</p>
      </div>

      <div className={styles.content}>
        <div className={styles.mainContent}>
          <section className={styles.section}>
            <h2>Trial Details</h2>
            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <strong>📅 Date:</strong>
                <span>{trial.date}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>⏰ Time:</strong>
                <span>{trial.time}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>📍 Location:</strong>
                <span>{trial.location}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>👥 Age Group:</strong>
                <span>{trial.ageGroup}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>💰 Cost:</strong>
                <span>{trial.cost}</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>About This Trial</h2>
            <div className={styles.description}>
              {trial.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Requirements</h2>
            <ul className={styles.list}>
              {trial.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>What to Bring</h2>
            <ul className={styles.list}>
              {trial.whatToBring.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.applyCard}>
            <h3>Apply Now</h3>
            <p>Ready to showcase your talent?</p>
            <button
              className={styles.applyButton}
              onClick={() => alert(`Applied for ${trial.title}`)}
            >
              Apply for Trial
            </button>
            <p className={styles.applyNote}>
              You'll receive confirmation within 48 hours
            </p>
          </div>

          <div className={styles.clubInfo}>
            <h3>Club Information</h3>
            <div className={styles.clubDetails}>
              <div className={styles.clubDetail}>
                <strong>Club:</strong>
                <span>{trial.club.name}</span>
              </div>
              <div className={styles.clubDetail}>
                <strong>Founded:</strong>
                <span>{trial.club.founded}</span>
              </div>
              <div className={styles.clubDetail}>
                <strong>League:</strong>
                <span>{trial.club.league}</span>
              </div>
              <div className={styles.clubDetail}>
                <strong>Website:</strong>
                <a
                  href={`https://${trial.club.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {trial.club.website}
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>
            <div className={styles.contactDetails}>
              <div className={styles.contactDetail}>
                <strong>📧 Email:</strong>
                <a href={`mailto:${trial.contactInfo.email}`}>
                  {trial.contactInfo.email}
                </a>
              </div>
              <div className={styles.contactDetail}>
                <strong>📞 Phone:</strong>
                <a href={`tel:${trial.contactInfo.phone}`}>
                  {trial.contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialDetailsPage;
