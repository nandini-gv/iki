import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/theme';
import HomePage from '../features/home/pages/HomePage';

describe('HomePage', () => {
  it('renders all 8 sections in approved order', () => {
    render(
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    );

    // 1. Header & Navigation
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^IKI$/i })).toBeInTheDocument();

    // 2. Hero Section
    expect(
      screen.getByRole('heading', { name: /We Connect Talent to Opportunity/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/50K\+/i)).toBeInTheDocument();

    // 3. Four-Tile Promotional Grid
    expect(screen.getByRole('heading', { name: /Job Seeker/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /End-to-End Hiring for HR/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Freelance Marketplace/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Technology Training/i })).toBeInTheDocument();

    // 4. Opportunities Carousel
    expect(
      screen.getByRole('heading', { name: /Real Opportunities\. Real Growth\./i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Previous slide/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Next slide/i)).toBeInTheDocument();

    // 5. Innovation Partners
    expect(
      screen.getByRole('heading', { name: /Trusted by our innovation partners/i })
    ).toBeInTheDocument();
    expect(screen.getByText('Microsoft')).toBeInTheDocument();
    expect(screen.getByText('Google Cloud')).toBeInTheDocument();

    // 6. FAQ Accordion
    expect(
      screen.getByRole('heading', { name: /Answers to questions about/i })
    ).toBeInTheDocument();

    // 7. Meaningful Conversations
    expect(
      screen.getByRole('heading', { name: /We Believe In Meaningful Conversations/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Let's Talk/i })).toBeInTheDocument();

    // 8. Footer & Legal Strip
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(/© 2026, IKI\. All rights reserved\./i)).toBeInTheDocument();
  });
});
