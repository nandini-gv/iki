import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../app/App';

describe('App Root', () => {
  it('renders the application with complete homepage structure', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /We Connect Talent to Opportunity/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Real Opportunities\. Real Growth\./i })).toBeInTheDocument();
  });
});
