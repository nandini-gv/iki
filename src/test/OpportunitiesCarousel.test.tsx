import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/theme';
import OpportunitiesCarousel from '../features/home/components/OpportunitiesCarousel';

describe('OpportunitiesCarousel', () => {
  it('renders initial slide and allows advancing to next slide', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={theme}>
        <OpportunitiesCarousel />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: /Build Skills That Matter/i })).toBeInTheDocument();

    const nextButton = screen.getByLabelText(/Next slide/i);
    await user.click(nextButton);

    expect(screen.getByRole('heading', { name: /Find Opportunities That Fit/i })).toBeInTheDocument();

    const prevButton = screen.getByLabelText(/Previous slide/i);
    await user.click(prevButton);

    expect(screen.getByRole('heading', { name: /Build Skills That Matter/i })).toBeInTheDocument();
  });
});
