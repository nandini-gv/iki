import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotFound } from '../components/common/NotFound';

describe('NotFound', () => {
  it('renders 404 heading and descriptive message', () => {
    render(<NotFound />);
    expect(screen.getByRole('heading', { name: /404 — Page Not Found/i })).toBeInTheDocument();
    expect(screen.getByText(/The requested page could not be located/i)).toBeInTheDocument();
  });
});
