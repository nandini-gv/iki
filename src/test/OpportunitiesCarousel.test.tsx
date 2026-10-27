import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/theme';
import OpportunitiesCarousel from '../features/home/components/OpportunitiesCarousel';

describe('OpportunitiesCarousel', () => {
  it('renders carousel with navigation controls and pagination dots', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={theme}>
        <OpportunitiesCarousel />
      </ThemeProvider>
    );

    expect(screen.getByLabelText(/Opportunities Showcase/i)).toBeInTheDocument();

    const prevButton = screen.getByLabelText(/Previous slide/i);
    const nextButton = screen.getByLabelText(/Next slide/i);
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    // Verify pagination dots
    const dot1 = screen.getByLabelText(/Go to slide 1/i);
    const dot2 = screen.getByLabelText(/Go to slide 2/i);
    expect(dot1).toBeInTheDocument();
    expect(dot2).toBeInTheDocument();

    await user.click(nextButton);
    await user.click(dot1);
  });
});
