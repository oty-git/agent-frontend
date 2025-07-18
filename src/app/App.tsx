import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../router';
import './styles/index.scss';

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
