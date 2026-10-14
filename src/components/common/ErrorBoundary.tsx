import { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // In production, log to telemetry if configured. Avoid leaking error objects or stack traces to client view.
    if (process.env.NODE_ENV !== 'production') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  private handleReset = (): void => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  public override render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Container maxWidth="sm" sx={{ py: 8 }}>
          <Box
            sx={{
              p: 4,
              textAlign: 'center',
              borderRadius: 3,
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
            }}
            role="alert"
          >
            <Typography variant="h5" component="h1" gutterBottom fontWeight={600}>
              Something went wrong
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              An unexpected error occurred while loading this view. Please try reloading the page.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleReset}
            >
              Reload page
            </Button>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
