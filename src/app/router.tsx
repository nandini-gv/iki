import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { HomePage } from '../features/home/pages/HomePage';
import { NotFound } from '../components/common/NotFound';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <ErrorBoundary>
          <HomePage />
        </ErrorBoundary>
      ),
      errorElement: (
        <ErrorBoundary>
          <NotFound />
        </ErrorBoundary>
      ),
    },
    {
      path: '/404',
      element: (
        <ErrorBoundary>
          <NotFound />
        </ErrorBoundary>
      ),
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);
