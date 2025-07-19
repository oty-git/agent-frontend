import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme/useTheme';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import styles from './MainLayout.module.scss';

const MainLayout: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.layout} ${theme}`}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
