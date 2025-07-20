import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../../../../layouts/MainLayout';
import HomePage from '../../../../pages/HomePage';
import TrialsPage from '../../../../pages/TrialsPage';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="trials" element={<TrialsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
