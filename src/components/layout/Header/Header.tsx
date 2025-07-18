import React, { memo } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

const Header = memo(({ className = '' }: HeaderProps) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Agent Frontend</h1>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <button type="button" className={styles.navLink}>
                Home
              </button>
            </li>
            <li>
              <button type="button" className={styles.navLink}>
                About
              </button>
            </li>
            <li>
              <button type="button" className={styles.navLink}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
