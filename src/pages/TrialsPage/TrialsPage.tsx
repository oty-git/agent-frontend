import React from 'react';
import styles from './TrialsPage.module.scss';

const TrialsPage: React.FC = () => {
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

      <div className={styles.trials}>
        <div className={styles.trialCard}>
          <div className={styles.trialHeader}>
            <h3>Manchester United Academy Trial</h3>
            <span className={styles.level}>Academy</span>
          </div>
          <div className={styles.trialInfo}>
            <p>
              <strong>Date:</strong> Saturday, 15th February 2025
            </p>
            <p>
              <strong>Time:</strong> 10:00 AM - 4:00 PM
            </p>
            <p>
              <strong>Location:</strong> Carrington Training Ground, Manchester
            </p>
            <p>
              <strong>Age Group:</strong> Under 18
            </p>
            <p>
              <strong>Cost:</strong> £50
            </p>
          </div>
          <p className={styles.description}>
            Join the Manchester United Academy trial and showcase your talent to
            professional scouts. This is an excellent opportunity for young
            players to be assessed by one of England's top clubs.
          </p>
          <button
            className={styles.applyButton}
            onClick={() => alert('Applied for Manchester United Academy Trial')}
            aria-label="Apply for Manchester United Academy Trial"
          >
            Apply Now
          </button>
        </div>

        <div className={styles.trialCard}>
          <div className={styles.trialHeader}>
            <h3>City FC Open Trial</h3>
            <span className={styles.level}>Semi-Professional</span>
          </div>
          <div className={styles.trialInfo}>
            <p>
              <strong>Date:</strong> Sunday, 23rd February 2025
            </p>
            <p>
              <strong>Time:</strong> 2:00 PM - 5:00 PM
            </p>
            <p>
              <strong>Location:</strong> Etihad Campus, Manchester
            </p>
            <p>
              <strong>Age Group:</strong> Open Age
            </p>
            <p>
              <strong>Cost:</strong> £30
            </p>
          </div>
          <p className={styles.description}>
            Open trial for ambitious players looking to join a competitive
            semi-professional team. All positions available with immediate
            opportunities for the right candidates.
          </p>
          <button className={styles.applyButton}>Apply Now</button>
        </div>

        <div className={styles.trialCard}>
          <div className={styles.trialHeader}>
            <h3>London Lions FC Trial</h3>
            <span className={styles.level}>Amateur</span>
          </div>
          <div className={styles.trialInfo}>
            <p>
              <strong>Date:</strong> Saturday, 1st March 2025
            </p>
            <p>
              <strong>Time:</strong> 11:00 AM - 2:00 PM
            </p>
            <p>
              <strong>Location:</strong> Hackney Marshes, London
            </p>
            <p>
              <strong>Age Group:</strong> Under 21
            </p>
            <p>
              <strong>Cost:</strong> £20
            </p>
          </div>
          <p className={styles.description}>
            Join one of London's most successful amateur clubs. Great
            opportunity for young players to develop their skills in a
            competitive environment.
          </p>
          <button className={styles.applyButton}>Apply Now</button>
        </div>

        <div className={styles.trialCard}>
          <div className={styles.trialHeader}>
            <h3>Bristol Rovers Youth Trial</h3>
            <span className={styles.level}>Academy</span>
          </div>
          <div className={styles.trialInfo}>
            <p>
              <strong>Date:</strong> Sunday, 8th March 2025
            </p>
            <p>
              <strong>Time:</strong> 9:00 AM - 3:00 PM
            </p>
            <p>
              <strong>Location:</strong> Memorial Stadium, Bristol
            </p>
            <p>
              <strong>Age Group:</strong> Under 16
            </p>
            <p>
              <strong>Cost:</strong> £35
            </p>
          </div>
          <p className={styles.description}>
            Youth trial for talented players under 16. Bristol Rovers are
            looking for the next generation of stars to join their academy
            system.
          </p>
          <button className={styles.applyButton}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default TrialsPage;
