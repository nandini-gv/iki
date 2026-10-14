import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../app/App';

describe('App Root', () => {
  it('renders the application foundation without throwing errors', () => {
    render(<App />);
    expect(screen.getByText(/IKI Career Platform/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Phase 1 Foundation Ready/i })).toBeInTheDocument();
  });
});
