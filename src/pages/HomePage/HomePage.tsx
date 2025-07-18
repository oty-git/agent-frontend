import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Football Trial Events</h1>
          <p className={styles.heroSubtitle}>
            Discover your potential. Join professional football trials across
            the UK.
          </p>
          <Link to="/trials" className={styles.ctaButton}>
            Find Trials
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresContainer}>
          <h2 className={styles.featuresTitle}>Why Choose Our Trials?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>⚽</div>
              <h3>Professional Coaches</h3>
              <p>
                Learn from experienced coaches with professional backgrounds
              </p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🏟️</div>
              <h3>Multiple Locations</h3>
              <p>Trials available across major cities in the UK</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🏆</div>
              <h3>All Skill Levels</h3>
              <p>From beginners to advanced players</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Join thousands of players who have taken their first step towards
            professional football.
          </p>
          <Link to="/trials" className={styles.ctaSecondaryButton}>
            Browse All Trials
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
