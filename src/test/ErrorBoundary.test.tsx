import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '../components/common/ErrorBoundary';

function ProblematicComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Sensitive internal database connection failed: secret_token_12345');
  }
  return <div>Healthy content</div>;
}

describe('ErrorBoundary', () => {
  const originalConsoleError = console.error;

  beforeEach(() => {
    console.error = vi.fn();
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });

  it('renders children when no error is thrown', () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Healthy content')).toBeInTheDocument();
  });

  it('renders generic fallback UI when an error occurs and does not leak technical details or stack traces to the user', () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    // Fallback headline and button should be present
    expect(screen.getByRole('heading', { name: /something went wrong/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reload page/i })).toBeInTheDocument();

    // Critical security check: ensure internal secrets/stack traces are NOT in the rendered UI
    expect(screen.queryByText(/secret_token_12345/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/database connection failed/i)).not.toBeInTheDocument();
  });

  it('renders custom fallback when provided', () => {
    render(
      <ErrorBoundary fallback={<div>Custom Error View</div>}>
        <ProblematicComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom Error View')).toBeInTheDocument();
  });
});
