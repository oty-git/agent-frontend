import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './TrialDetailsPage.module.scss';
import { trialsData } from '../config/trials-data';

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
