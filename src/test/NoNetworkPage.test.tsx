import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { NoNetworkPage } from '../components/common/NoNetworkPage';

describe('NoNetworkPage', () => {
  it('renders offline message, status, and retry button', () => {
    const handleRetry = vi.fn();
    render(<NoNetworkPage onRetry={handleRetry} />);

    expect(screen.getByRole('heading', { name: /No Internet Connection/i })).toBeInTheDocument();
    expect(screen.getByText(/You appear to be offline/i)).toBeInTheDocument();
    expect(screen.getByText(/Offline Mode/i)).toBeInTheDocument();

    const retryBtn = screen.getByRole('button', { name: /Try Again/i });
    expect(retryBtn).toBeInTheDocument();
    fireEvent.click(retryBtn);
    expect(handleRetry).toHaveBeenCalled();
  });
});
