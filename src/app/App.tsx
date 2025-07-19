import React from 'react';
import { useTheme } from '../hooks/useTheme/useTheme';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return <div className={`app ${theme}`} />;
};

export default App;
