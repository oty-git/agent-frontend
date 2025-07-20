import React from 'react';
import { useTheme } from '../shared/lib/hooks/useTheme/useTheme';
import './styles/index.scss';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <AppRouter />
    </div>
  );
};

export default App;
