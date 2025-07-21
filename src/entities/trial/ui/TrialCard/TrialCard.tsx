import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TrialCard.module.scss';

export interface TrialCardProps {
  id?: string;
  title: string;
  level: string;
  date: string;
  time: string;
  location: string;
  ageGroup: string;
  cost: string;
  description: string;
  onApply?: () => void;
  hasDetailsPage?: boolean;
}

const TrialCard: React.FC<TrialCardProps> = ({
  id,
  title,
  level,
  date,
  time,
  location,
  ageGroup,
  cost,
  description,
  onApply,
  hasDetailsPage = false,
}) => {
  const handleApply = () => {
    if (onApply) {
      onApply();
    } else {
      alert(`Applied for ${title}`);
    }
  };

  return (
    <div className={styles.trialCard}>
      <div className={styles.trialHeader}>
        <h3>
          {hasDetailsPage && id ? (
            <Link to={`/trials/${id}`} className={styles.trialTitle}>
              {title}
            </Link>
          ) : (
            <span className={styles.trialTitle}>{title}</span>
          )}
        </h3>
        <span
          className={`${styles.level} ${styles[level.toLowerCase().replace('-', '')]}`}
        >
          {level}
        </span>
      </div>
      <div className={styles.trialInfo}>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Time:</strong> {time}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Age Group:</strong> {ageGroup}
        </p>
        <p>
          <strong>Cost:</strong> {cost}
        </p>
      </div>
      <p className={styles.description}>{description}</p>
      {hasDetailsPage && id ? (
        <div className={styles.buttonGroup}>
          <Link to={`/trials/${id}`} className={styles.viewButton}>
            View Details
          </Link>
          <button
            className={styles.applyButton}
            onClick={handleApply}
            aria-label={`Apply for ${title}`}
          >
            Apply Now
          </button>
        </div>
      ) : (
        <button
          className={styles.applyButton}
          onClick={handleApply}
          aria-label={`Apply for ${title}`}
        >
          Apply Now
        </button>
      )}
    </div>
  );
};

export default TrialCard;
