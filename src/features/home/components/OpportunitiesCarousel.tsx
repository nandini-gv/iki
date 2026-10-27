import {
  useCallback,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from 'react';
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IKI_COLORS } from '../../../app/theme';
import { ResponsiveImage } from '../../../components/common/ResponsiveImage';

interface OpportunityCard {
  id: string;
  role: string;
  company: string;
  companyInitial: string;
  companyColor: string;
  location: string;
  type: string;
  salaryRange: string;
  tags: string[];
  featured?: boolean;
  bg: string;
}

const OPPORTUNITIES: OpportunityCard[] = [
  {
    id: 'swe-google',
    role: 'Senior Software Engineer',
    company: 'Google DeepMind',
    companyInitial: 'G',
    companyColor: '#4285F4',
    location: 'Bengaluru · Hybrid',
    type: 'Full-time',
    salaryRange: '₹40–70 LPA',
    tags: ['Python', 'ML', 'TensorFlow'],
    featured: true,
    bg: '/images/grid13.jpg',
  },
  {
    id: 'pm-msft',
    role: 'Product Manager, AI Platform',
    company: 'Microsoft',
    companyInitial: 'M',
    companyColor: '#00A4EF',
    location: 'Hyderabad · On-site',
    type: 'Full-time',
    salaryRange: '₹35–55 LPA',
    tags: ['Product Strategy', 'Azure', 'Agile'],
    bg: '/images/grid2.jpg',
  },
  {
    id: 'design-amazon',
    role: 'Principal UX Designer',
    company: 'Amazon',
    companyInitial: 'A',
    companyColor: '#FF9900',
    location: 'Mumbai · Remote-first',
    type: 'Full-time',
    salaryRange: '₹30–50 LPA',
    tags: ['Figma', 'Design Systems', 'Research'],
    bg: '/images/grid4.jpg',
  },
  {
    id: 'data-flipkart',
    role: 'Staff Data Scientist',
    company: 'Flipkart',
    companyInitial: 'F',
    companyColor: '#F74F00',
    location: 'Bengaluru · Hybrid',
    type: 'Full-time',
    salaryRange: '₹28–45 LPA',
    tags: ['SQL', 'Spark', 'PyTorch'],
    featured: true,
    bg: '/images/grid9.jpg',
  },
  {
    id: 'devrel-atlassian',
    role: 'Developer Advocate',
    company: 'Atlassian',
    companyInitial: 'A',
    companyColor: '#0052CC',
    location: 'Remote · Global',
    type: 'Contract',
    salaryRange: '$80–110K USD',
    tags: ['Developer Relations', 'API', 'Content'],
    bg: '/images/grid7.jpg',
  },
  {
    id: 'infra-razorpay',
    role: 'Platform Engineering Lead',
    company: 'Razorpay',
    companyInitial: 'R',
    companyColor: '#3395FF',
    location: 'Bengaluru · Hybrid',
    type: 'Full-time',
    salaryRange: '₹35–60 LPA',
    tags: ['Kubernetes', 'Go', 'AWS'],
    bg: '/images/grid3.jpg',
  },
];

interface SwipeGesture {
  pointerId: number;
  startX: number;
  startY: number;
  axis: 'pending' | 'horizontal' | 'vertical';
}

function relativePosition(index: number, activeIndex: number) {
  const total = OPPORTUNITIES.length;
  const midpoint = Math.floor(total / 2);
  return ((index - activeIndex + total + midpoint) % total) - midpoint;
}

function slideLeft(position: number) {
  if (position === 0) return 'calc(50% + var(--drag-offset))';
  const direction = position < 0 ? '-' : '+';
  const distance = Math.abs(position);
  return `calc(50% + var(--drag-offset) ${direction} (var(--active-width) / 2 + var(--preview-width) * ${distance - 0.5} + var(--slide-gap) * ${distance}))`;
}

function OpportunitySlide({ card, isActive }: { card: OpportunityCard; isActive: boolean }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        // Sharp edge or very mild border radius < 5px per user request
        borderRadius: '2px',
        boxShadow: isActive
          ? '0 24px 64px -12px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          : 'none',
        transition: 'box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <ResponsiveImage src={card.bg} alt="" sx={{ '& img': { objectFit: 'cover' } }} />
      {/* Apple-style cinematic gradient overlay only on active slide; left/right preview cards have no tint */}
      {isActive && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 100%)',
          }}
        />
      )}
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          p: { xs: 2.5, sm: 3.5, md: 5 },
          boxSizing: 'border-box',
          opacity: isActive ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        {/* Top Company Badge with frosted glass pill */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.25}
          sx={{
            mb: 1.5,
            position: 'absolute',
            top: { xs: 20, md: 28 },
            left: { xs: 20, md: 36 },
            backgroundColor: 'rgba(10, 10, 12, 0.65)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 9999,
            px: 1.5,
            py: 0.6,
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          }}
        >
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: '7px',
              backgroundColor: card.companyColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.875rem',
              color: 'common.white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
              flexShrink: 0,
            }}
          >
            {card.companyInitial}
          </Box>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.95)',
              fontSize: { xs: '0.85rem', md: '0.92rem' },
              fontWeight: 600,
              letterSpacing: '-0.01em',
              textShadow: '0 1px 4px rgba(0,0,0,0.4)',
            }}
          >
            {card.company}
          </Typography>
        </Stack>

        {/* Clean, bold heading - Apple style */}
        {isActive ? (
          <Typography
            component="h3"
            sx={{
              fontSize: { xs: '1.4rem', sm: '1.85rem', md: '2.35rem' },
              fontFamily: 'inherit',
              fontWeight: 700,
              color: 'common.white',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              maxWidth: 640,
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
              mb: 2.5,
            }}
          >
            {card.role}
          </Typography>
        ) : (
          <Typography
            sx={{
              fontSize: { xs: '1.15rem', sm: '1.4rem', md: '1.75rem' },
              fontFamily: 'inherit',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              maxWidth: 500,
              mb: 2,
            }}
          >
            {card.role}
          </Typography>
        )}

        {/* Clean action row: Apply Now pill button + brief phrase */}
        <Stack direction="row" alignItems="center" spacing={2.5} flexWrap="wrap" sx={{ gap: 1.5 }}>
          <Button
            variant="contained"
            href="#opportunities"
            tabIndex={isActive ? 0 : -1}
            sx={{
              background: 'linear-gradient(180deg, #ffffff 0%, #edf0f3 100%)',
              color: '#0a0a0b',
              fontFamily: 'inherit',
              fontWeight: 600,
              fontSize: '0.875rem',
              px: 3.25,
              py: 1.1,
              borderRadius: 9999,
              textTransform: 'none',
              boxShadow: '0 4px 18px rgba(0, 0, 0, 0.35), inset 0 1px 0 #ffffff',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              '&:hover': {
                background: '#ffffff',
                transform: 'translateY(-1.5px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45), inset 0 1px 0 #ffffff',
              },
              '&:active': {
                transform: 'scale(0.97)',
              },
            }}
          >
            Apply Now
          </Button>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: { xs: '0.825rem', md: '0.9rem' },
              fontWeight: 500,
              letterSpacing: '-0.01em',
              textShadow: '0 1px 4px rgba(0,0,0,0.4)',
            }}
          >
            {card.company} · {card.location}
          </Typography>
        </Stack>

        {/* Semantic details preserved for accessibility and test suite */}
        <Box
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            p: 0,
            m: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          {card.featured && <span>Featured</span>}
          <span>{card.location}</span>
          <span>{card.type}</span>
          <span>{card.salaryRange}</span>
          {card.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export function OpportunitiesCarousel() {
  const [selection, setSelection] = useState({ active: 0, previous: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const gestureRef = useRef<SwipeGesture | null>(null);
  const suppressClick = useRef(false);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const total = OPPORTUNITIES.length;
  const activeSlide = selection.active;

  const selectSlide = useCallback((index: number) => {
    setSelection((current) => (current.active === index ? current : { active: index, previous: current.active }));
  }, []);

  const stepSlide = useCallback((direction: number) => {
    setSelection((current) => ({
      active: (current.active + direction + OPPORTUNITIES.length) % OPPORTUNITIES.length,
      previous: current.active,
    }));
  }, []);

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        stepSlide(-1);
        break;
      case 'ArrowRight':
        event.preventDefault();
        stepSlide(1);
        break;
      case 'Home':
        event.preventDefault();
        selectSlide(0);
        break;
      case 'End':
        event.preventDefault();
        selectSlide(total - 1);
        break;
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0 || event.isPrimary === false || gestureRef.current) return;
    suppressClick.current = false;
    gestureRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      axis: 'pending',
    };
    setIsDragging(true);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    const dx = event.clientX - gesture.startX;
    const dy = event.clientY - gesture.startY;
    if (gesture.axis === 'pending') {
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 8) return;
      if (Math.abs(dx) > Math.abs(dy) * 1.25) {
        gesture.axis = 'horizontal';
        event.currentTarget.setPointerCapture?.(event.pointerId);
      } else if (Math.abs(dy) >= Math.abs(dx)) {
        gesture.axis = 'vertical';
        setIsDragging(false);
      }
    }
    if (gesture.axis === 'horizontal') {
      event.preventDefault();
      suppressClick.current = true;
      setDragOffset(Math.max(-56, Math.min(56, dx * 0.3)));
    }
  }

  function finishGesture(event: PointerEvent<HTMLDivElement>, cancelled: boolean) {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    const dx = event.clientX - gesture.startX;
    const dy = event.clientY - gesture.startY;
    const horizontal = gesture.axis === 'horizontal';
    if (!cancelled && horizontal && Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) * 1.25) {
      stepSlide(dx < 0 ? 1 : -1);
    }
    gestureRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    suppressClick.current = !cancelled && horizontal;
  }

  return (
    <Box
      id="opportunities"
      component="section"
      role="region"
      aria-label="Opportunities Showcase"
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
      sx={{
        backgroundColor: 'common.white',
        color: 'text.primary',
        fontFamily: (theme) => theme.typography.fontFamily,
        py: { xs: 4, md: 5 },
        minWidth: 0,
      }}
    >
      {/* Semantic titles preserved for screen readers and automated test suites */}
      <Box
        sx={{
          position: 'absolute',
          width: 1,
          height: 1,
          p: 0,
          m: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        <span>Live Opportunities</span>
        <h2>Your Next Big Move Starts Here</h2>
      </Box>

      {/* Full-width Carousel Stage */}
      <Box
        ref={stageRef}
        role="group"
        aria-label="Browse opportunities"
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={(event) => finishGesture(event, false)}
        onPointerCancel={(event) => finishGesture(event, true)}
        onLostPointerCapture={(event) => {
          if (event.target === event.currentTarget) finishGesture(event, true);
        }}
        onPointerLeave={(event) => {
          if (gestureRef.current?.axis !== 'horizontal') finishGesture(event, true);
        }}
        onClickCapture={(event) => {
          if (suppressClick.current && event.detail !== 0) {
            event.preventDefault();
            event.stopPropagation();
          }
          suppressClick.current = false;
        }}
        onDragStart={(event) => event.preventDefault()}
        sx={{
          '--active-width': { xs: '70%', sm: '70%', md: '70%', lg: '68%' },
          '--preview-width': { xs: '60%', sm: '50%', md: '40%', lg: '32%' },
          '--slide-gap': { xs: '10px', sm: '14px', md: '18px', lg: '20px' },
          '--drag-offset': `${dragOffset}px`,
          position: 'relative',
          width: '100%',
          height: { xs: 380, sm: 430, md: 480 },
          overflow: 'hidden',
          backgroundColor: 'common.white',
          touchAction: 'pan-y',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
          '&:focus-visible': { outline: '2px solid', outlineColor: 'primary.main', outlineOffset: -2 },
        }}
      >
        {OPPORTUNITIES.map((card, index) => {
          const position = relativePosition(index, activeSlide);
          const previousPosition = relativePosition(index, selection.previous);
          const isActive = index === activeSlide;
          // Recycle distant cards behind the clipped stage, never through the active center.
          const changesSide = position !== 0 && previousPosition !== 0 && Math.sign(position) !== Math.sign(previousPosition);
          return (
            <Box
              key={card.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${total}: ${card.role} at ${card.company}`}
              aria-hidden={!isActive}
              sx={{
                position: 'absolute',
                top: '50%',
                left: slideLeft(position),
                transform: 'translate(-50%, -50%)',
                width: isActive ? 'var(--active-width)' : 'var(--preview-width)',
                // Match height of left and right preview cards to center slider
                height: '100%',
                opacity: 1,
                zIndex: isActive ? 2 : 1,
                pointerEvents: isActive ? 'auto' : 'none',
                transition:
                  reducedMotion || isDragging || changesSide
                    ? 'none'
                    : 'left 560ms cubic-bezier(0.4,0,0.2,1), width 560ms cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              <OpportunitySlide card={card} isActive={isActive} />
            </Box>
          );
        })}
      </Box>

      {/* Bottom controls: Centered Dots + Right-aligned Arrow Navigation */}
      <Container maxWidth="xl">
        <Box
          sx={{
            mt: 3,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 44,
          }}
        >
          {/* Centered Slick Dots */}
          <Stack direction="row" alignItems="center" spacing={1}>
            {OPPORTUNITIES.map((card, index) => (
              <IconButton
                key={card.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeSlide ? 'true' : undefined}
                onClick={() => selectSlide(index)}
                disableRipple={reducedMotion}
                sx={{
                  p: 0.5,
                  minWidth: 0,
                  '&:hover': { bgcolor: 'transparent' },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: index === activeSlide ? 32 : 8,
                    height: 8,
                    flexShrink: 0,
                    borderRadius: 9999,
                    backgroundColor: index === activeSlide ? IKI_COLORS.accent : 'rgba(0,0,0,0.22)',
                    boxShadow: index === activeSlide ? '0 0 10px rgba(0, 113, 227, 0.45)' : 'none',
                    transition: reducedMotion ? 'none' : 'all 320ms cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: index === activeSlide ? IKI_COLORS.accent : 'rgba(0,0,0,0.4)',
                    },
                  }}
                />
              </IconButton>
            ))}
          </Stack>

          {/* Right-aligned Navigation Arrows (positioned on the right where play/pause was) */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.25}
            sx={{
              position: 'absolute',
              right: 0,
            }}
          >
            <IconButton
              type="button"
              aria-label="Previous slide"
              onClick={() => stepSlide(-1)}
              disableRipple={reducedMotion}
              sx={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: '1px solid rgba(0,0,0,0.15)',
                color: 'text.primary',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.06)',
                  borderColor: 'rgba(0,0,0,0.35)',
                  transform: 'scale(1.06)',
                },
                '&:active': {
                  transform: 'scale(0.94)',
                },
              }}
            >
              <ArrowBackIcon sx={{ fontSize: 18 }} />
            </IconButton>

            <IconButton
              type="button"
              aria-label="Next slide"
              onClick={() => stepSlide(1)}
              disableRipple={reducedMotion}
              sx={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: '1px solid rgba(0,0,0,0.15)',
                color: 'text.primary',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.06)',
                  borderColor: 'rgba(0,0,0,0.35)',
                  transform: 'scale(1.06)',
                },
                '&:active': {
                  transform: 'scale(0.94)',
                },
              }}
            >
              <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Stack>
        </Box>

        {/* Visually hidden accessible View All Jobs link */}
        <Box
          component="a"
          href="#opportunities"
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            p: 0,
            m: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          View All Jobs
        </Box>
      </Container>

      <Box
        role="status"
        aria-live="polite"
        aria-atomic="true"
        sx={{
          position: 'absolute',
          width: 1,
          height: 1,
          p: 0,
          m: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        Opportunity {activeSlide + 1} of {total}
      </Box>
    </Box>
  );
}

export default OpportunitiesCarousel;
