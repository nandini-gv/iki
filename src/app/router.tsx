import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { ErrorBoundary } from '../components/common/ErrorBoundary';

const HomePage = lazy(() => import('../features/home/pages/HomePage'));
const NotFound = lazy(() => import('../components/common/NotFound'));
const ErrorPage = lazy(() => import('../components/common/ErrorPage'));
const NoNetworkPage = lazy(() => import('../components/common/NoNetworkPage'));

function RouteLoadingFallback() {
  return (
    <Box
      sx={{
        minHeight: '100svh',
        bgcolor: '#08090C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress
        size={36}
        thickness={3}
        sx={{
          color: '#0071E3',
        }}
      />
    </Box>
  );
}

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <ErrorBoundary>
          <Suspense fallback={<RouteLoadingFallback />}>
            <HomePage />
          </Suspense>
        </ErrorBoundary>
      ),
      errorElement: (
        <ErrorBoundary>
          <Suspense fallback={<RouteLoadingFallback />}>
            <ErrorPage />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: '/404',
      element: (
        <ErrorBoundary>
          <Suspense fallback={<RouteLoadingFallback />}>
            <NotFound />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: '/error',
      element: (
        <ErrorBoundary>
          <Suspense fallback={<RouteLoadingFallback />}>
            <ErrorPage />
          </Suspense>
        </ErrorBoundary>
      ),
    },
    {
      path: '/offline',
      element: (
        <ErrorBoundary>
          <Suspense fallback={<RouteLoadingFallback />}>
            <NoNetworkPage />
          </Suspense>
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
