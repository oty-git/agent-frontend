import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import TrialsPage from '../pages/TrialsPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'trials',
          element: <TrialsPage />,
        },
        // More routes will be added here later
      ],
    },
  ],
  {
    basename: '/agent-frontend',
  }
);
