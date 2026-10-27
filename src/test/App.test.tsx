import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../app/App';

describe('App Root', () => {
  it('renders the application with complete homepage structure', async () => {
    render(<App />);
    expect(
      await screen.findByRole('heading', { name: /We Connect Talent to Opportunity/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('heading', { name: /Trusted by our innovation partners/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole('heading', { name: /We Believe In Meaningful Conversations/i })
    ).toBeInTheDocument();
  });
});
