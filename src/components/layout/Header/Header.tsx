import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

const Header = memo(({ className = '' }: HeaderProps) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <h1>Football Trials</h1>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/trials" className={styles.navLink}>
                Trials
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
