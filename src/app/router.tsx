import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { FoundationPlaceholder } from '../components/common/FoundationPlaceholder';
import { NotFound } from '../components/common/NotFound';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <ErrorBoundary>
          <FoundationPlaceholder />
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
