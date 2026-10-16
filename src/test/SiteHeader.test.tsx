import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/theme';
import SiteHeader from '../components/layout/SiteHeader';

describe('SiteHeader', () => {
  it('renders navigation links and action buttons', () => {
    render(
      <ThemeProvider theme={theme}>
        <SiteHeader />
      </ThemeProvider>
    );

    expect(screen.getByRole('link', { name: /^IKI$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Jobs$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^For Employers$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Resources$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^About$/i })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Sign In/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Get Started/i })[0]).toBeInTheDocument();
  });

  it('toggles mobile menu drawer on button click', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider theme={theme}>
        <SiteHeader />
      </ThemeProvider>
    );

    const menuButton = screen.getByLabelText(/Open navigation menu/i);
    expect(menuButton).toBeInTheDocument();

    await user.click(menuButton);
    expect(screen.getByLabelText(/Close navigation menu/i)).toBeInTheDocument();
  });
});
