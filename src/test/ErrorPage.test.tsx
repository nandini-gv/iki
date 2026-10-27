import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorPage } from '../components/common/ErrorPage';

describe('ErrorPage', () => {
  it('renders generic error message without leaking sensitive details', () => {
    const handleReset = vi.fn();
    const sensitiveError = new Error('secret_token_error_detail_do_not_leak');

    render(<ErrorPage error={sensitiveError} onReset={handleReset} />);

    expect(screen.getByRole('heading', { name: /Something went wrong/i })).toBeInTheDocument();
    expect(screen.getByText(/An unexpected error occurred while loading this view/i)).toBeInTheDocument();
    expect(screen.queryByText(/secret_token_error_detail_do_not_leak/i)).not.toBeInTheDocument();

    const reloadBtn = screen.getByRole('button', { name: /Reload page/i });
    expect(reloadBtn).toBeInTheDocument();
    fireEvent.click(reloadBtn);
    expect(handleReset).toHaveBeenCalled();

    const homeLink = screen.getByRole('link', { name: /Go to Homepage/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });
});
