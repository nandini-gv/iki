import { useRef, useState, useEffect, useCallback } from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { IKI_COLORS } from '../../../app/theme';

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

function useIntersection(ref: React.RefObject<Element | null>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry?.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function OpportunitySlide({ card, isActive }: { card: OpportunityCard; isActive: boolean }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 3,
        flexShrink: 0,
      }}
    >
      {/* BG Image */}
      <Box
        component="img"
        src={card.bg}
        alt=""
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: isActive ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 0.8s ease',
        }}
      />
      {/* Gradient */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.55) 60%, rgba(10,10,11,0.2) 100%)',
        }}
      />

      {/* Card content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          p: { xs: 3, sm: 4, md: 5 },
        }}
      >
        {card.featured && (
          <Chip
            label="Featured"
            size="small"
            sx={{
              alignSelf: 'flex-start',
              mb: 2,
              backgroundColor: 'rgba(0,113,227,0.2)',
              border: '1px solid rgba(0,113,227,0.4)',
              color: IKI_COLORS.blueLight,
              fontWeight: 600,
              fontSize: '0.7rem',
              letterSpacing: '0.06em',
              height: 24,
            }}
          />
        )}

        {/* Company */}
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              backgroundColor: card.companyColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: '#ffffff',
              flexShrink: 0,
              boxShadow: `0 4px 12px ${card.companyColor}55`,
            }}
          >
            {card.companyInitial}
          </Box>
          <Typography
            sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', fontWeight: 500 }}
          >
            {card.company}
          </Typography>
        </Stack>

        <Typography
          component="h3"
          sx={{
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.1rem' },
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
            mb: 1.5,
          }}
        >
          {card.role}
        </Typography>

        {/* Meta */}
        <Stack direction="row" spacing={2.5} sx={{ mb: 2.5, flexWrap: 'wrap', gap: '8px' }}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <LocationOnOutlinedIcon sx={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }} />
            <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>
              {card.location}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <WorkOutlineIcon sx={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }} />
            <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>
              {card.type}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <AttachMoneyIcon sx={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }} />
            <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}>
              {card.salaryRange}
            </Typography>
          </Stack>
        </Stack>

        {/* Tags */}
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3, gap: '8px' }}>
          {card.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.75rem',
                fontWeight: 500,
                height: 24,
              }}
            />
          ))}
        </Stack>

        <Button
          variant="contained"
          href="#opportunities"
          sx={{
            alignSelf: 'flex-start',
            backgroundColor: IKI_COLORS.accent,
            color: '#ffffff',
            fontWeight: 600,
            px: 3,
            py: 1,
            borderRadius: 9999,
            boxShadow: '0 4px 16px rgba(0,113,227,0.4)',
            '&:hover': {
              backgroundColor: IKI_COLORS.accentHover,
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0,113,227,0.5)',
            },
          }}
        >
          Apply Now
        </Button>
      </Box>
    </Box>
  );
}

export function OpportunitiesCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerVisible = useIntersection(sectionRef as React.RefObject<Element | null>, 0.1);
  const total = OPPORTUNITIES.length;

  const prev = useCallback(() => setActiveSlide((s) => (s === 0 ? total - 1 : s - 1)), [total]);
  const next = useCallback(() => setActiveSlide((s) => (s === total - 1 ? 0 : s + 1)), [total]);

  // Keyboard navigation
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [prev, next]);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  // Touch/drag handlers
  const onMouseDown = (e: React.MouseEvent) => { setIsDragging(true); setStartX(e.clientX); };
  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    if (Math.abs(diff) > 50) { diff < 0 ? next() : prev(); }
    setIsDragging(false);
  };
  const onTouchStart = (e: React.TouchEvent) => { const t = e.touches[0]; if (t) setStartX(t.clientX); };
  const onTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    if (!touch) return;
    const diff = touch.clientX - startX;
    if (Math.abs(diff) > 50) { diff < 0 ? next() : prev(); }
  };

  return (
    <Box
      id="opportunities"
      component="section"
      aria-label="Featured Opportunities"
      sx={{
        backgroundColor: IKI_COLORS.ink,
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          ref={sectionRef}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            mb: { xs: 4, md: 5 },
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: IKI_COLORS.blueLight,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                mb: 1,
              }}
            >
              Live Opportunities
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.025em',
              }}
            >
              Your Next Big Move Starts Here
            </Typography>
          </Box>

          {/* Circular nav controls */}
          <Stack direction="row" spacing={1.25}>
            <IconButton
              aria-label="Previous opportunity"
              onClick={prev}
              sx={{
                width: 48,
                height: 48,
                border: '1.5px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.7)',
                backgroundColor: 'rgba(255,255,255,0.04)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: 'rgba(255,255,255,0.35)',
                  color: '#ffffff',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <ArrowBackIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              aria-label="Next opportunity"
              onClick={next}
              sx={{
                width: 48,
                height: 48,
                border: '1.5px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.7)',
                backgroundColor: 'rgba(255,255,255,0.04)',
                '&:hover': {
                  backgroundColor: IKI_COLORS.accent,
                  borderColor: IKI_COLORS.accent,
                  color: '#ffffff',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <ArrowForwardIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Stack>
        </Box>

        {/* Carousel track */}
        <Box
          ref={trackRef}
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label="Opportunities carousel"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          sx={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            borderRadius: 3,
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            outline: 'none',
            '&:focus-visible': {
              boxShadow: `0 0 0 3px ${IKI_COLORS.accent}`,
            },
          }}
        >
          {/* Slide wrapper — translate to active */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.55s cubic-bezier(0.4,0,0.2,1)',
              transform: {
                xs: `translateX(calc(7.5% - ${activeSlide * 85}%))`,
                sm: `translateX(calc(15% - ${activeSlide * 70}%))`,
                md: `translateX(calc(20% - ${activeSlide * 60}%))`,
              },
              height: { xs: 420, sm: 480, md: 540 },
            }}
          >
            {OPPORTUNITIES.map((card, i) => (
              <Box
                key={card.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}: ${card.role} at ${card.company}`}
                aria-hidden={i !== activeSlide}
                sx={{
                  minWidth: { xs: '85%', sm: '70%', md: '60%' },
                  height: '100%',
                  transition: 'transform 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.55s',
                  transform: i === activeSlide ? 'scale(1)' : 'scale(0.85)',
                  opacity: i === activeSlide ? 1 : 0.6,
                  px: { xs: 1, md: 2 },
                }}
              >
                <OpportunitySlide card={card} isActive={i === activeSlide} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Dot indicators + counter */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 3,
          }}
        >
          {/* Dots */}
          <Stack direction="row" spacing={1} alignItems="center">
            {OPPORTUNITIES.map((_, idx) => (
              <Box
                key={idx}
                onClick={() => setActiveSlide(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Go to opportunity ${idx + 1}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveSlide(idx); }}
                sx={{
                  width: idx === activeSlide ? 28 : 8,
                  height: 4,
                  borderRadius: 9999,
                  backgroundColor: idx === activeSlide ? IKI_COLORS.accent : 'rgba(255,255,255,0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                  '&:hover': {
                    backgroundColor: idx === activeSlide ? IKI_COLORS.accentHover : 'rgba(255,255,255,0.45)',
                  },
                }}
              />
            ))}
          </Stack>

          {/* Counter + CTA */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography
              sx={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}
            >
              {String(activeSlide + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </Typography>
            <Button
              variant="outlined"
              href="#opportunities"
              sx={{
                color: 'rgba(255,255,255,0.75)',
                borderColor: 'rgba(255,255,255,0.2)',
                fontSize: '0.8125rem',
                fontWeight: 500,
                px: 2.5,
                py: 0.75,
                borderRadius: 9999,
                display: { xs: 'none', sm: 'inline-flex' },
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.5)',
                  color: '#ffffff',
                },
              }}
            >
              View All Jobs
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default OpportunitiesCarousel;
