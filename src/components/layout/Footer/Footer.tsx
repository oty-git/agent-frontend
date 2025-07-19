import React, { memo } from 'react';
import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer = memo(({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <h3>Football Trials</h3>
            <p className={styles.description}>
              Connecting aspiring football players with trial opportunities worldwide.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Navigation</h4>
              <ul className={styles.linkList}>
                <li>
                  <button type="button" className={styles.link}>
                    Home
                  </button>
                </li>
                <li>
                  <button type="button" className={styles.link}>
                    About
                  </button>
                </li>
                <li>
                  <button type="button" className={styles.link}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Resources</h4>
              <ul className={styles.linkList}>
                <li>
                  <button type="button" className={styles.link}>
                    Documentation
                  </button>
                </li>
                <li>
                  <button type="button" className={styles.link}>
                    Support
                  </button>
                </li>
                <li>
                  <button type="button" className={styles.link}>
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} Agent Frontend. All rights reserved.</p>
          </div>
          <div className={styles.social}>
            <button
              type="button"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              GitHub
            </button>
            <button
              type="button"
              className={styles.socialLink}
              aria-label="Twitter"
            >
              Twitter
            </button>
            <button
              type="button"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
