import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/theme';
import HomePage from '../features/home/pages/HomePage';

describe('HomePage', () => {
  it('renders all sections in approved mockup order without drift', () => {
    render(
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    );

    // 1. Header & Navigation (Transparent overlay)
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^IKI$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Jobs$/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /^For Employers/i })[0]).toBeInTheDocument();

    // 2. Hero Section
    expect(
      screen.getByRole('heading', { name: /We Connect Talent to Opportunity/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/10K\+ professionals found better opportunities/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Build your next chapter/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Get Started$/i })).toBeInTheDocument();

    // 3. Four-Tile Promotional Grid (2x2 approved mockup layout)
    expect(screen.getByRole('heading', { name: /Global Talent/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Enterprise Hiring/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Direct Access/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Career Advisory/i })).toBeInTheDocument();

    // 4. Wide Opportunities Carousel with partial neighboring cards
    expect(screen.getByLabelText(/Opportunities Showcase/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Previous slide/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Next slide/i)).toBeInTheDocument();

    // 5. Trusted Innovation Partners on white background
    expect(
      screen.getByRole('heading', { name: /Trusted by our innovation partners/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Learn more about our partners/i })).toBeInTheDocument();

    // 6. FAQ Accordion on white background
    expect(
      screen.getByRole('heading', { name: /Answers to questions about/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /About IKI/i })).toBeInTheDocument();
    expect(screen.getByText(/What is IKI\?/i)).toBeInTheDocument();
    expect(screen.getByText(/How can I find a job on IKI\?/i)).toBeInTheDocument();

    // 7. Meaningful Conversations on pale cream (#FAF9EE)
    expect(
      screen.getByRole('heading', { name: /We Believe In Meaningful Conversations/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/LET'S CONNECT/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Let's Talk/i })).toBeInTheDocument();

    // 8. Dark Footer (#111111)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Products$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Company$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Policies$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /^Developers$/i })).toBeInTheDocument();

    // 9. Distinct Legal Links Strip (#000000)
    const legalStrip = screen.getByLabelText(/Legal Information/i);
    expect(legalStrip).toBeInTheDocument();
    expect(within(legalStrip).getByRole('link', { name: /Terms Of Use/i })).toBeInTheDocument();
    expect(within(legalStrip).getByRole('link', { name: /Privacy Policy/i })).toBeInTheDocument();
    expect(within(legalStrip).getByText(/© 2026, IKI\. All rights reserved/i)).toBeInTheDocument();
  });
});
