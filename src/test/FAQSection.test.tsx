import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/theme';
import FAQSection from '../features/home/components/FAQSection';

describe('FAQSection', () => {
  it('renders initial Job Seekers questions', () => {
    render(
      <ThemeProvider theme={theme}>
        <FAQSection />
      </ThemeProvider>
    );

    expect(screen.getByRole('heading', { name: /Answers to questions about/i })).toBeInTheDocument();
    expect(screen.getByText(/How does the job search work\?/i)).toBeInTheDocument();
  });

  it('switches category when chip is clicked', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={theme}>
        <FAQSection />
      </ThemeProvider>
    );

    const recruitersChip = screen.getByText('Recruiters');
    await user.click(recruitersChip);

    expect(screen.getByText(/How can recruiters post jobs\?/i)).toBeInTheDocument();
  });
});
