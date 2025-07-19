import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme/useTheme';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import TrialsPage from '../pages/TrialsPage';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="trials" element={<TrialsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
