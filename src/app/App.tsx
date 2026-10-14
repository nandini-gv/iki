import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import theme from './theme';
import { router } from './router';
import { ErrorBoundary } from '../components/common/ErrorBoundary';

export function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
