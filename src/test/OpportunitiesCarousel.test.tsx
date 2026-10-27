import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/theme';
import OpportunitiesCarousel from '../features/home/components/OpportunitiesCarousel';

const opportunities = [
  {
    role: 'Senior Software Engineer',
    company: 'Google DeepMind',
    location: 'Bengaluru · Hybrid',
    type: 'Full-time',
    salary: '₹40–70 LPA',
    tags: ['Python', 'ML', 'TensorFlow'],
    featured: true,
  },
  {
    role: 'Product Manager, AI Platform',
    company: 'Microsoft',
    location: 'Hyderabad · On-site',
    type: 'Full-time',
    salary: '₹35–55 LPA',
    tags: ['Product Strategy', 'Azure', 'Agile'],
    featured: false,
  },
  {
    role: 'Principal UX Designer',
    company: 'Amazon',
    location: 'Mumbai · Remote-first',
    type: 'Full-time',
    salary: '₹30–50 LPA',
    tags: ['Figma', 'Design Systems', 'Research'],
    featured: false,
  },
  {
    role: 'Staff Data Scientist',
    company: 'Flipkart',
    location: 'Bengaluru · Hybrid',
    type: 'Full-time',
    salary: '₹28–45 LPA',
    tags: ['SQL', 'Spark', 'PyTorch'],
    featured: true,
  },
  {
    role: 'Developer Advocate',
    company: 'Atlassian',
    location: 'Remote · Global',
    type: 'Contract',
    salary: '$80–110K USD',
    tags: ['Developer Relations', 'API', 'Content'],
    featured: false,
  },
  {
    role: 'Platform Engineering Lead',
    company: 'Razorpay',
    location: 'Bengaluru · Hybrid',
    type: 'Full-time',
    salary: '₹35–60 LPA',
    tags: ['Kubernetes', 'Go', 'AWS'],
    featured: false,
  },
];

class TestIntersectionObserver implements IntersectionObserver {
  static instances: TestIntersectionObserver[] = [];
  readonly root: Element | Document | null;
  readonly rootMargin: string;
  readonly thresholds: ReadonlyArray<number>;
  readonly targets = new Set<Element>();

  constructor(private readonly callback: IntersectionObserverCallback, options: IntersectionObserverInit = {}) {
    this.root = options.root ?? null;
    this.rootMargin = options.rootMargin ?? '';
    this.thresholds = typeof options.threshold === 'number' ? [options.threshold] : options.threshold ?? [0];
    TestIntersectionObserver.instances.push(this);
  }

  observe = vi.fn((target: Element) => { this.targets.add(target); });
  unobserve = vi.fn((target: Element) => { this.targets.delete(target); });
  disconnect = vi.fn(() => { this.targets.clear(); });
  takeRecords = vi.fn((): IntersectionObserverEntry[] => []);

  notify(target: Element, isIntersecting: boolean) {
    const bounds = target.getBoundingClientRect();
    this.callback([{
      target,
      isIntersecting,
      intersectionRatio: isIntersecting ? 1 : 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: null,
      time: performance.now(),
    }], this);
  }
}

class TestPointerEvent extends MouseEvent {
  readonly pointerId: number;
  readonly pointerType: string;
  readonly isPrimary: boolean;

  constructor(type: string, init: PointerEventInit = {}) {
    super(type, init);
    this.pointerId = init.pointerId ?? 1;
    this.pointerType = init.pointerType ?? 'touch';
    this.isPrimary = init.isPrimary ?? true;
  }
}

let visibility: DocumentVisibilityState = 'visible';

function setReducedMotion(reducedMotion = false) {
  vi.stubGlobal('matchMedia', (query: string): MediaQueryList => ({
    matches: query.includes('prefers-reduced-motion') && reducedMotion,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(() => true),
  }));
}

function renderCarousel() {
  return render(
    <ThemeProvider theme={theme}>
      <OpportunitiesCarousel />
    </ThemeProvider>
  );
}

function expectActiveOpportunity(index: number) {
  const opportunity = opportunities[index];
  if (!opportunity) throw new Error('Unknown opportunity expectation');
  const slide = screen.getByRole('group', {
    name: `${index + 1} of 6: ${opportunity.role} at ${opportunity.company}`,
  });
  expect(within(slide).getByRole('heading', { level: 3, name: opportunity.role })).toBeInTheDocument();
  expect(within(slide).getByText(opportunity.company)).toBeInTheDocument();
  expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1);
  return slide;
}

function setStageInView(isInView: boolean) {
  const stage = screen.getByRole('group', { name: 'Browse opportunities' });
  const observer = TestIntersectionObserver.instances.find((instance) => instance.targets.has(stage));
  if (!observer) throw new Error('Carousel stage is not observed');
  act(() => observer.notify(stage, isInView));
}

function advanceAutoplay(milliseconds = 6000) {
  act(() => { vi.advanceTimersByTime(milliseconds); });
}

beforeEach(() => {
  visibility = 'visible';
  TestIntersectionObserver.instances = [];
  setReducedMotion();
  vi.stubGlobal('IntersectionObserver', TestIntersectionObserver);
  vi.stubGlobal('PointerEvent', TestPointerEvent);
  vi.spyOn(document, 'visibilityState', 'get').mockImplementation(() => visibility);
});

afterEach(() => {
  cleanup();
  vi.clearAllTimers();
  vi.useRealTimers();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('OpportunitiesCarousel', () => {
  it('renders the original heading, native controls, six dots, and unchanged destinations on white', () => {
    renderCarousel();

    const region = screen.getByRole('region', { name: 'Opportunities Showcase' });
    expect(region).toHaveStyle({ backgroundColor: '#ffffff' });
    expect(screen.getByText('Live Opportunities')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Your Next Big Move Starts Here' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Previous slide' }).tagName).toBe('BUTTON');
    expect(screen.getByRole('button', { name: 'Next slide' }).tagName).toBe('BUTTON');
    const dots = screen.getAllByRole('button', { name: /^Go to slide \d$/ });
    expect(dots).toHaveLength(6);
    for (const dot of dots) expect(dot.tagName).toBe('BUTTON');
    expect(dots[0]).toHaveAttribute('aria-current', 'true');
    expect(within(expectActiveOpportunity(0)).getByRole('link', { name: 'Apply Now' })).toHaveAttribute('href', '#opportunities');
    expect(screen.getByRole('link', { name: 'View All Jobs' })).toHaveAttribute('href', '#opportunities');
  });

  it('changes the active role and company and wraps in both directions', async () => {
    const user = userEvent.setup();
    renderCarousel();

    await user.click(screen.getByRole('button', { name: 'Next slide' }));
    expectActiveOpportunity(1);
    await user.click(screen.getByRole('button', { name: 'Previous slide' }));
    expectActiveOpportunity(0);
    await user.click(screen.getByRole('button', { name: 'Previous slide' }));
    expectActiveOpportunity(5);
    await user.click(screen.getByRole('button', { name: 'Next slide' }));
    expectActiveOpportunity(0);
  });

  it('preserves every original career detail with exactly six original slide panels', () => {
    renderCarousel();
    const slides = screen.getAllByRole('group', { hidden: true })
      .filter((group) => group.getAttribute('aria-roledescription') === 'slide');
    expect(slides).toHaveLength(6);

    opportunities.forEach((opportunity, index) => {
      fireEvent.click(screen.getByRole('button', { name: `Go to slide ${index + 1}` }));
      const active = within(expectActiveOpportunity(index));
      expect(active.getByText(opportunity.location)).toBeInTheDocument();
      expect(active.getByText(opportunity.type)).toBeInTheDocument();
      expect(active.getByText(opportunity.salary)).toBeInTheDocument();
      for (const tag of opportunity.tags) expect(active.getByText(tag)).toBeInTheDocument();
      expect(Boolean(active.queryByText('Featured'))).toBe(opportunity.featured);
    });
  });

  it('selects dots by click, Enter, and Space and updates aria-current', async () => {
    const user = userEvent.setup();
    renderCarousel();
    const firstDot = screen.getByRole('button', { name: 'Go to slide 1' });
    const fourthDot = screen.getByRole('button', { name: 'Go to slide 4' });

    await user.click(fourthDot);
    expectActiveOpportunity(3);
    expect(fourthDot).toHaveAttribute('aria-current', 'true');
    expect(firstDot).not.toHaveAttribute('aria-current');
    act(() => firstDot.focus());
    await user.keyboard('{Enter}');
    expectActiveOpportunity(0);
    act(() => screen.getByRole('button', { name: 'Go to slide 2' }).focus());
    await user.keyboard(' ');
    expectActiveOpportunity(1);
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute('aria-current', 'true');
  });

  it('supports Left/Right wrapping and Home/End keyboard navigation', async () => {
    const user = userEvent.setup();
    renderCarousel();
    const stage = screen.getByRole('group', { name: 'Browse opportunities' });
    act(() => stage.focus());

    await user.keyboard('{ArrowLeft}');
    expectActiveOpportunity(5);
    await user.keyboard('{ArrowRight}');
    expectActiveOpportunity(0);
    await user.keyboard('{End}');
    expectActiveOpportunity(5);
    await user.keyboard('{Home}');
    expectActiveOpportunity(0);
    expect(fireEvent.keyDown(stage, { key: 'ArrowRight' })).toBe(false);
    expectActiveOpportunity(1);
  });

  it('keeps inactive Apply Now links out of the tab order after selection', async () => {
    const user = userEvent.setup();
    renderCarousel();
    const links = screen.getAllByRole('link', { name: 'Apply Now', hidden: true });
    expect(links).toHaveLength(6);
    links.forEach((link, index) => expect(link).toHaveAttribute('tabindex', index === 0 ? '0' : '-1'));

    await user.click(screen.getByRole('button', { name: 'Go to slide 5' }));
    const activeLink = within(expectActiveOpportunity(4)).getByRole('link', { name: 'Apply Now' });
    links.forEach((link) => expect(link).toHaveAttribute('tabindex', link === activeLink ? '0' : '-1'));
    act(() => screen.getByRole('group', { name: 'Browse opportunities' }).focus());
    await user.tab();
    expect(activeLink).toHaveFocus();
    await user.tab();
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveFocus();
  });

  it('autoplays every 6000ms only while the stage is actually in view', () => {
    vi.useFakeTimers();
    renderCarousel();
    advanceAutoplay(12000);
    expectActiveOpportunity(0);

    setStageInView(true);
    advanceAutoplay(5999);
    expectActiveOpportunity(0);
    advanceAutoplay(1);
    expectActiveOpportunity(1);
    setStageInView(false);
    advanceAutoplay(12000);
    expectActiveOpportunity(1);
    setStageInView(true);
    advanceAutoplay();
    expectActiveOpportunity(2);
  });

  it('explicitly pauses and resumes autoplay', () => {
    vi.useFakeTimers();
    renderCarousel();
    setStageInView(true);

    fireEvent.click(screen.getByRole('button', { name: 'Pause autoplay' }));
    expect(screen.getByRole('button', { name: 'Resume autoplay' })).toHaveAttribute('aria-pressed', 'true');
    advanceAutoplay(12000);
    expectActiveOpportunity(0);
    fireEvent.click(screen.getByRole('button', { name: 'Resume autoplay' }));
    expect(screen.getByRole('button', { name: 'Pause autoplay' })).toHaveAttribute('aria-pressed', 'false');
    advanceAutoplay();
    expectActiveOpportunity(1);
  });

  it('pauses for hover, focus within, hidden documents, and gestures, then cleans up cancellation', () => {
    vi.useFakeTimers();
    renderCarousel();
    setStageInView(true);
    const region = screen.getByRole('region', { name: 'Opportunities Showcase' });
    const stage = screen.getByRole('group', { name: 'Browse opportunities' });

    fireEvent.mouseEnter(region);
    advanceAutoplay();
    expectActiveOpportunity(0);
    fireEvent.mouseLeave(region);
    act(() => stage.focus());
    advanceAutoplay();
    expectActiveOpportunity(0);
    act(() => stage.blur());
    visibility = 'hidden';
    fireEvent(document, new Event('visibilitychange'));
    advanceAutoplay();
    expectActiveOpportunity(0);
    visibility = 'visible';
    fireEvent(document, new Event('visibilitychange'));
    fireEvent.pointerDown(stage, { pointerId: 1, clientX: 200, clientY: 100, button: 0 });
    advanceAutoplay();
    expectActiveOpportunity(0);
    fireEvent.pointerCancel(stage, { pointerId: 1 });
    advanceAutoplay();
    expectActiveOpportunity(1);
  });

  it('disables autoplay and slide motion for reduced motion while keeping manual controls usable', () => {
    vi.useFakeTimers();
    setReducedMotion(true);
    renderCarousel();
    setStageInView(true);
    advanceAutoplay(18000);
    expectActiveOpportunity(0);
    expect(screen.getByRole('button', { name: 'Resume autoplay' })).toBeDisabled();
    expect(expectActiveOpportunity(0)).toHaveStyle({ transition: 'none' });

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }));
    expectActiveOpportunity(1);
  });

  it('swipes horizontally in both directions and suppresses an accidental CTA click', () => {
    renderCarousel();
    const stage = screen.getByRole('group', { name: 'Browse opportunities' });
    const initialLink = within(expectActiveOpportunity(0)).getByRole('link', { name: 'Apply Now' });

    fireEvent.pointerDown(initialLink, { pointerId: 1, clientX: 220, clientY: 100, button: 0 });
    fireEvent.pointerMove(stage, { pointerId: 1, clientX: 150, clientY: 106 });
    fireEvent.lostPointerCapture(initialLink, { pointerId: 1 });
    fireEvent.pointerUp(stage, { pointerId: 1, clientX: 110, clientY: 110 });
    expectActiveOpportunity(1);
    expect(fireEvent.click(initialLink, { detail: 1 })).toBe(false);

    fireEvent.pointerDown(stage, { pointerId: 2, clientX: 100, clientY: 100, button: 0 });
    fireEvent.pointerMove(stage, { pointerId: 2, clientX: 170, clientY: 102 });
    fireEvent.pointerUp(stage, { pointerId: 2, clientX: 200, clientY: 104 });
    expectActiveOpportunity(0);
  });

  it('ignores vertical intent and short swipes and clears cancelled gestures', () => {
    renderCarousel();
    const stage = screen.getByRole('group', { name: 'Browse opportunities' });

    fireEvent.pointerDown(stage, { pointerId: 1, clientX: 220, clientY: 100, button: 0 });
    fireEvent.pointerMove(stage, { pointerId: 1, clientX: 212, clientY: 150 });
    fireEvent.pointerUp(stage, { pointerId: 1, clientX: 100, clientY: 160 });
    expectActiveOpportunity(0);

    fireEvent.pointerDown(stage, { pointerId: 2, clientX: 200, clientY: 100, button: 0 });
    fireEvent.pointerMove(stage, { pointerId: 2, clientX: 180, clientY: 102 });
    fireEvent.pointerUp(stage, { pointerId: 2, clientX: 175, clientY: 104 });
    expectActiveOpportunity(0);

    fireEvent.pointerDown(stage, { pointerId: 3, clientX: 200, clientY: 100, button: 0 });
    fireEvent.pointerMove(stage, { pointerId: 3, clientX: 100, clientY: 102 });
    fireEvent.pointerCancel(stage, { pointerId: 3 });
    expectActiveOpportunity(0);
    fireEvent.pointerDown(stage, { pointerId: 4, clientX: 200, clientY: 100, button: 0 });
    fireEvent.pointerMove(stage, { pointerId: 4, clientX: 100, clientY: 102 });
    fireEvent.pointerUp(stage, { pointerId: 4, clientX: 80, clientY: 104 });
    expectActiveOpportunity(1);
  });
});
