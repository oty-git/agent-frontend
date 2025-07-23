import React, { useState, useEffect } from 'react';
import { getTrials } from '../../../shared/api/trials';
import { TrialCard, Trial } from '../../../entities/trial';
import styles from './TrialsPage.module.scss';

const TrialsPage: React.FC = () => {
  const [trials, setTrials] = useState<Trial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrials = async () => {
      try {
        setLoading(true);
        const trialsData = await getTrials();
        setTrials(trialsData);
      } catch (error) {
        console.error('Failed to load trials:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTrials();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Football Trials</h1>
        <p>Find and join football trials in your area</p>
      </div>

      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label htmlFor="location">Location</label>
          <select
            id="location"
            className={styles.select}
            value={'location'}
            onChange={() => {}}
          >
            <option value="">All locations</option>
            <option value="london">London</option>
            <option value="manchester">Manchester</option>
            <option value="birmingham">Birmingham</option>
            <option value="liverpool">Liverpool</option>
            <option value="bristol">Bristol</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="level">Level</label>
          <select id="level" className={styles.select}>
            <option value="">All levels</option>
            <option value="amateur">Amateur</option>
            <option value="semi-professional">Semi-Professional</option>
            <option value="professional">Professional</option>
            <option value="academy">Academy</option>
          </select>
        </div>

        <div className={styles.filterGroup}>
          <label htmlFor="age">Age Group</label>
          <select id="age" className={styles.select}>
            <option value="">All ages</option>
            <option value="u16">Under 16</option>
            <option value="u18">Under 18</option>
            <option value="u21">Under 21</option>
            <option value="open">Open Age</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className={styles.loading}>
          <p>Loading trials...</p>
        </div>
      ) : (
        <div className={styles.trials}>
          {trials.map((trial, index) => (
            <TrialCard
              key={trial.id || index}
              id={trial.id}
              title={trial.title}
              level={trial.level}
              date={trial.date}
              time={trial.time}
              location={trial.location}
              ageGroup={trial.ageGroup}
              cost={trial.cost}
              description={trial.description}
              hasDetailsPage={trial.hasDetailsPage}
              onApply={trial.onApply}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TrialsPage;
