import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../../../../shared/layouts/MainLayout';
import HomePage from '../../../../pages/HomePage';
import TrialsPage from '../../../../pages/TrialsPage';
import TrialDetailsPage from '../../../../pages/TrialDetailsPage';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="trials" element={<TrialsPage />} />
        <Route path="trials/:id" element={<TrialDetailsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
