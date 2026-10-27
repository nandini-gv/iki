import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/theme';
import FAQSection from '../features/home/components/FAQSection';
import { faqDataByTopic, faqTopics } from '../features/home/data/homeContent';

function setMediaQueries({ desktop = true, reducedMotion = false } = {}) {
  vi.stubGlobal('matchMedia', (query: string): MediaQueryList => ({
    matches: query.includes('prefers-reduced-motion')
      ? reducedMotion
      : desktop && query === theme.breakpoints.up('md').replace('@media ', ''),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(() => true),
  }));
}

function renderFAQ() {
  return render(
    <ThemeProvider theme={theme}>
      <FAQSection />
    </ThemeProvider>
  );
}

beforeEach(() => setMediaQueries());
afterEach(() => vi.unstubAllGlobals());

describe('FAQSection', () => {
  it('renders heading, static blue IKI text, and all initial IKI questions collapsed on white', () => {
    renderFAQ();

    const section = screen.getByRole('region', { name: 'Frequently Asked Questions' });
    expect(section).toHaveStyle({ backgroundColor: '#ffffff' });
    expect(screen.getByRole('heading', { level: 2, name: 'Answers to questions about' })).toBeInTheDocument();
    expect(screen.getByText('IKI')).toBeInTheDocument();

    for (const item of faqDataByTopic.IKI) {
      expect(screen.getByRole('button', { name: item.q })).toHaveAttribute('aria-expanded', 'false');
      expect(screen.getByText(item.a)).not.toBeVisible();
    }
    expect(within(section).queryAllByRole('region')).toHaveLength(0);
  });

  it('expands and collapses answers while allowing only one open question', async () => {
    const user = userEvent.setup();
    renderFAQ();
    const firstQuestion = screen.getByRole('button', { name: 'What is IKI?' });
    const secondQuestion = screen.getByRole('button', { name: 'How can I find a job on IKI?' });

    await user.click(firstQuestion);
    const firstPanel = await screen.findByRole('region', { name: 'What is IKI?' });
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');
    expect(firstQuestion).toHaveAttribute('aria-controls', firstPanel.id);
    expect(firstPanel).toHaveAttribute('aria-labelledby', firstQuestion.id);
    expect(firstPanel).toHaveTextContent(faqDataByTopic.IKI[0]!.a);

    await user.click(secondQuestion);
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('region', { name: 'What is IKI?' })).not.toBeInTheDocument();
    expect(secondQuestion).toHaveAttribute('aria-expanded', 'true');
    expect(await screen.findByRole('region', { name: 'How can I find a job on IKI?' }))
      .toHaveTextContent(faqDataByTopic.IKI[1]!.a);

    await user.click(secondQuestion);
    expect(secondQuestion).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('region', { name: 'How can I find a job on IKI?' })).not.toBeInTheDocument();
  });

  it('switches category, resets expansion, and keeps stable topic-specific panel IDs', async () => {
    const user = userEvent.setup();
    renderFAQ();
    await user.click(screen.getByRole('button', { name: 'Toggle FAQ categories' }));
    const categories = screen.getByRole('group', { name: 'FAQ topics' });
    const firstQuestion = screen.getByRole('button', { name: 'What is IKI?' });
    const initialPanelId = firstQuestion.getAttribute('aria-controls');
    await user.click(firstQuestion);

    const jobSeekersBtn = within(categories).getByRole('button', { name: 'Job Seekers' });
    await user.click(jobSeekersBtn);

    expect(screen.queryByRole('button', { name: 'What is IKI?' })).not.toBeInTheDocument();
    for (const item of faqDataByTopic['Job Seekers']) {
      expect(screen.getByRole('button', { name: item.q })).toHaveAttribute('aria-expanded', 'false');
    }
    const jobQuestion = screen.getByRole('button', { name: 'How do I create and optimize my IKI profile?' });
    expect(jobQuestion.getAttribute('aria-controls')).not.toBe(initialPanelId);
    expect(jobQuestion.getAttribute('aria-controls')).toContain('job-seekers');

    await user.click(jobQuestion);
    const aboutBtn = within(categories).getByRole('button', { name: 'About IKI' });
    await user.click(aboutBtn);

    const restoredQuestion = screen.getByRole('button', { name: 'What is IKI?' });
    expect(restoredQuestion).toHaveAttribute('aria-expanded', 'false');
    expect(restoredQuestion).toHaveAttribute('aria-controls', initialPanelId);
  });

  it('keeps category accordion closed by default and opens only on click', async () => {
    const user = userEvent.setup();
    renderFAQ();
    const toggleBtn = screen.getByRole('button', { name: 'Toggle FAQ categories' });
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggleBtn);
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');

    const categories = screen.getByRole('group', { name: 'FAQ topics' });
    const aboutButton = within(categories).getByRole('button', { name: 'About IKI' });
    const employersButton = within(categories).getByRole('button', { name: 'Employers' });
    expect(within(categories).getAllByRole('button')).toHaveLength(faqTopics.length);
    expect(aboutButton).toHaveAttribute('aria-pressed', 'true');

    await user.click(screen.getByRole('button', { name: 'What is IKI?' }));
    await user.click(employersButton);
    expect(aboutButton).toHaveAttribute('aria-pressed', 'false');
    expect(employersButton).toHaveAttribute('aria-pressed', 'true');

    for (const item of faqDataByTopic.Employers) {
      expect(screen.getByRole('button', { name: item.q })).toHaveAttribute('aria-expanded', 'false');
    }
    expect(screen.queryByRole('region', { name: 'What is IKI?' })).not.toBeInTheDocument();
  });

  it('supports Tab, Enter, and Space on category buttons and accordion questions', async () => {
    const user = userEvent.setup();
    renderFAQ();
    await user.tab();
    const toggleBtn = screen.getByRole('button', { name: 'Toggle FAQ categories' });
    expect(toggleBtn).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
    await user.tab();
    expect(screen.getByRole('button', { name: 'About IKI' })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole('button', { name: 'Job Seekers' })).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('button', { name: 'Job Seekers' })).toHaveAttribute('aria-pressed', 'true');

    await user.tab();
    expect(screen.getByRole('button', { name: 'Employers' })).toHaveFocus();
    await user.keyboard(' ');
    expect(screen.getByRole('button', { name: 'Employers' })).toHaveAttribute('aria-pressed', 'true');
    await user.tab();
    const question = screen.getByRole('button', { name: 'How does IKI help companies source qualified talent?' });
    expect(question).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(question).toHaveAttribute('aria-expanded', 'true');
    await user.keyboard(' ');
    expect(question).toHaveAttribute('aria-expanded', 'false');
  });

  it('keeps category navigation accessible and usable on mobile', async () => {
    setMediaQueries({ desktop: false });
    const user = userEvent.setup();
    renderFAQ();
    await user.click(screen.getByRole('button', { name: 'Toggle FAQ categories' }));
    const categories = screen.getByRole('group', { name: 'FAQ topics' });
    expect(categories).toBeInTheDocument();
    expect(within(categories).getAllByRole('button')).toHaveLength(faqTopics.length);

    const employersBtn = within(categories).getByRole('button', { name: 'Employers' });
    await user.click(employersBtn);
    expect(employersBtn).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'What hiring plans are available?' })).toHaveAttribute('aria-expanded', 'false');
  });

  it('repeatedly handles category switching and accordion expansion/collapse cycles', async () => {
    const user = userEvent.setup();
    renderFAQ();
    await user.click(screen.getByRole('button', { name: 'Toggle FAQ categories' }));
    const categories = screen.getByRole('group', { name: 'FAQ topics' });
    const aboutBtn = within(categories).getByRole('button', { name: 'About IKI' });
    const jobSeekersBtn = within(categories).getByRole('button', { name: 'Job Seekers' });
    const employersBtn = within(categories).getByRole('button', { name: 'Employers' });

    // Cycle 1: Open first question in IKI, switch to Job Seekers -> resets
    const q1 = screen.getByRole('button', { name: 'What is IKI?' });
    await user.click(q1);
    expect(q1).toHaveAttribute('aria-expanded', 'true');
    expect(await screen.findByRole('region', { name: 'What is IKI?' })).toBeInTheDocument();

    await user.click(jobSeekersBtn);
    expect(jobSeekersBtn).toHaveAttribute('aria-pressed', 'true');
    expect(aboutBtn).toHaveAttribute('aria-pressed', 'false');
    // Ensure IKI panel is gone
    expect(screen.queryByRole('region', { name: 'What is IKI?' })).not.toBeInTheDocument();

    // In Job Seekers, toggle first question twice (open then close)
    const jq1 = screen.getByRole('button', { name: 'How do I create and optimize my IKI profile?' });
    expect(jq1).toHaveAttribute('aria-expanded', 'false');
    await user.click(jq1);
    expect(jq1).toHaveAttribute('aria-expanded', 'true');
    expect(await screen.findByRole('region', { name: 'How do I create and optimize my IKI profile?' })).toBeInTheDocument();
    await user.click(jq1);
    expect(jq1).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('region', { name: 'How do I create and optimize my IKI profile?' })).not.toBeInTheDocument();

    // Cycle 2: Switch to Employers, open second question, then open third question (auto collapses second)
    await user.click(employersBtn);
    expect(employersBtn).toHaveAttribute('aria-pressed', 'true');
    const eq2 = screen.getByRole('button', { name: 'Can I integrate IKI with our existing ATS?' });
    const eq3 = screen.getByRole('button', { name: 'What hiring plans are available?' });
    await user.click(eq2);
    expect(eq2).toHaveAttribute('aria-expanded', 'true');
    expect(await screen.findByRole('region', { name: 'Can I integrate IKI with our existing ATS?' })).toBeInTheDocument();

    await user.click(eq3);
    expect(eq2).toHaveAttribute('aria-expanded', 'false');
    expect(eq3).toHaveAttribute('aria-expanded', 'true');
    expect(screen.queryByRole('region', { name: 'Can I integrate IKI with our existing ATS?' })).not.toBeInTheDocument();
    expect(await screen.findByRole('region', { name: 'What hiring plans are available?' })).toBeInTheDocument();

    // Cycle 3: Switch back to About IKI -> verify all collapsed
    await user.click(aboutBtn);
    expect(aboutBtn).toHaveAttribute('aria-pressed', 'true');
    for (const item of faqDataByTopic.IKI) {
      expect(screen.getByRole('button', { name: item.q })).toHaveAttribute('aria-expanded', 'false');
    }
  });

  it.each(faqTopics)('preserves every question and answer for %s', async (topic) => {
    setMediaQueries({ reducedMotion: true });
    const user = userEvent.setup();
    renderFAQ();
    await user.click(screen.getByRole('button', { name: 'Toggle FAQ categories' }));
    const categories = screen.getByRole('group', { name: 'FAQ topics' });
    const label = topic === 'IKI' ? 'About IKI' : topic;
    await user.click(within(categories).getByRole('button', { name: label }));

    const panelIds = new Set<string | null>();
    for (const item of faqDataByTopic[topic]) {
      const question = screen.getByRole('button', { name: item.q });
      panelIds.add(question.getAttribute('aria-controls'));
      await user.click(question);
      const panel = await screen.findByRole('region', { name: item.q });
      expect(panel).toHaveTextContent(item.a);
      expect(panel).toHaveAttribute('aria-labelledby', question.id);
      expect(question).toHaveAttribute('aria-controls', panel.id);
    }
    expect(panelIds.size).toBe(faqDataByTopic[topic].length);
  });
});
