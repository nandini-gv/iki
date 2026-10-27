import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import theme from './theme';
import { router } from './router';
import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { NetworkDetector } from '../components/common/NetworkDetector';

export function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NetworkDetector>
          <LoadingScreen />
          <RouterProvider router={router} future={{ v7_startTransition: true }} />
        </NetworkDetector>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
