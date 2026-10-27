import { useEffect, useState } from 'react';
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { FONT_STACK_SERIF, IKI_COLORS } from '../../../app/theme';
import { heroContent } from '../data/homeContent';

const SLIDE_IMAGES = [
  '/images/slide2.jpg',
  '/images/grid13.jpg',
  '/images/grid1.jpg',
];

// Animated stat counter
function AnimatedStat({ value, label }: { value: string; label: string }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        sx={{
          fontSize: { xs: '1.35rem', md: '1.75rem' },
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1,
          letterSpacing: '-0.03em',
        }}
      >
        {value}
      </Typography>
      <Typography
        sx={{
          fontSize: '0.72rem',
          color: 'rgba(255,255,255,0.6)',
          fontWeight: 500,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          mt: 0.5,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export function HeroSection() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Entrance animation trigger
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Auto-advance background slides
    const interval = setInterval(() => {
      setSlideIdx((i) => (i + 1) % SLIDE_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="hero"
      component="section"
      aria-label="Hero — We Connect Talent to Opportunity"
      sx={{
        position: 'relative',
        // Reduced height by 35-40px to ensure slick dots are visible at first glance
        minHeight: { xs: 520, sm: 580, md: 620, lg: 680 },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#080C10',
      }}
    >
      {/* ── Crossfading background slides ── */}
      {SLIDE_IMAGES.map((src, i) => (
        <Box
          key={src}
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
            opacity: i === slideIdx ? 1 : 0,
            transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)',
            zIndex: 0,
          }}
        />
      ))}

      {/* ── Gradient vignettes ── */}
      {/* Bottom fade */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(8,12,16,0.96) 0%, rgba(8,12,16,0.55) 45%, rgba(8,12,16,0.2) 100%)',
          zIndex: 1,
        }}
      />
      {/* Left content fade */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'linear-gradient(90deg, rgba(8,12,16,0.95) 0%, rgba(8,12,16,0.65) 100%)',
            md: 'linear-gradient(90deg, rgba(8,12,16,0.92) 0%, rgba(8,12,16,0.5) 55%, rgba(8,12,16,0.05) 100%)',
          },
          zIndex: 1,
        }}
      />

      {/* ── Content ── */}
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 2,
          pt: { xs: 13, md: 15 },
          pb: { xs: 5, md: 6 },
        }}
      >
        <Box sx={{ maxWidth: { xs: '100%', sm: 560, md: 620, lg: 680 } }}>
          {/* Pill badge */}
          <Box
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
              mb: 2,
            }}
          >
            <Chip
              icon={<TrendingUpIcon sx={{ fontSize: '14px !important', color: IKI_COLORS.blueLight + ' !important' }} />}
              label={heroContent.eyebrow}
              size="small"
              sx={{
                backgroundColor: 'rgba(0,113,227,0.15)',
                border: '1px solid rgba(0,113,227,0.3)',
                color: IKI_COLORS.blueLight,
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                backdropFilter: 'blur(8px)',
                height: 28,
                '& .MuiChip-label': { px: 1.25 },
              }}
            />
          </Box>

          {/* Main headline */}
          <Box
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: FONT_STACK_SERIF,
                fontSize: { xs: '2.15rem', sm: '2.6rem', md: '3.1rem', lg: '3.75rem' },
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                mb: 2,
              }}
            >
              {heroContent.titleLine1}
              <br />
              <Box
                component="span"
                sx={{
                  color: 'transparent',
                  backgroundImage: `linear-gradient(135deg, ${IKI_COLORS.blueLight} 0%, #4FC3F7 50%, ${IKI_COLORS.blueLight} 100%)`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                {heroContent.titleLine2}
              </Box>
            </Typography>
          </Box>

          {/* Subtitle */}
          <Box
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease 0.28s, transform 0.7s ease 0.28s',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: { xs: '0.95rem', sm: '1.025rem', md: '1.08rem' },
                lineHeight: 1.6,
                maxWidth: 480,
                mb: 3.5,
                letterSpacing: '-0.005em',
              }}
            >
              {heroContent.subtitle}
            </Typography>
          </Box>

          {/* CTAs */}
          <Box
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
            }}
          >
            <Stack direction="row" spacing={1.5} flexWrap="wrap" sx={{ gap: '12px' }}>
              <Button
                variant="contained"
                href="#opportunities"
                sx={{
                  backgroundColor: IKI_COLORS.accent,
                  color: '#ffffff',
                  px: 3.25,
                  py: 1.15,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  borderRadius: 9999,
                  boxShadow: '0 4px 20px rgba(0,113,227,0.4)',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: IKI_COLORS.accentHover,
                    boxShadow: '0 6px 26px rgba(0,113,227,0.55)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {heroContent.primaryCta}
              </Button>
              <Button
                variant="outlined"
                href="#partners"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: '#ffffff',
                  px: 3,
                  py: 1.15,
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  borderRadius: 9999,
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(8px)',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.6)',
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {heroContent.secondaryCta}
              </Button>
            </Stack>
          </Box>

          {/* Stats row */}
          <Box
            sx={{
              mt: { xs: 4, md: 5 },
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s',
            }}
          >
            <Stack direction="row" spacing={{ xs: 2.5, sm: 3.5 }} alignItems="center">
              <Box
                sx={{
                  width: '1px',
                  height: 36,
                  bgcolor: 'rgba(255,255,255,0.12)',
                  display: { xs: 'none', sm: 'block' },
                }}
              />
              <AnimatedStat value="50K+" label="Professionals" />
              <Box sx={{ width: '1px', height: 36, bgcolor: 'rgba(255,255,255,0.12)' }} />
              <AnimatedStat value="10K+" label="Jobs Live" />
              <Box sx={{ width: '1px', height: 36, bgcolor: 'rgba(255,255,255,0.12)' }} />
              <AnimatedStat value="200+" label="Employers" />
            </Stack>
          </Box>
        </Box>
      </Container>

      {/* ── Callout & Social Proof Badge (Right side, matching mockup) ── */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 20, md: 36 },
          right: { xs: 16, md: 48 },
          zIndex: 3,
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 1.5,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s',
        }}
      >
        {/* Mockup cursive callout */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pr: 1.5 }}>
          <Typography
            sx={{
              fontFamily: "'Caveat', 'Playfair Display', cursive, serif",
              fontStyle: 'italic',
              fontSize: { sm: '1.25rem', md: '1.45rem' },
              color: 'rgba(255, 255, 255, 0.9)',
              letterSpacing: '0.02em',
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            }}
          >
            {heroContent.callout}
          </Typography>
          {/* Curved hand-drawn style arrow */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4c4 8 10 12 14 12" />
            <path d="M14 16l4 0l-1 -4" />
          </svg>
        </Box>

        {/* Social proof avatar pill */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            bgcolor: 'rgba(10,10,11,0.72)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 9999,
            px: 2,
            py: 0.85,
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          <AvatarGroup
            max={4}
            sx={{
              '& .MuiAvatar-root': {
                width: 28,
                height: 28,
                border: '1.5px solid rgba(255,255,255,0.25)',
                fontSize: '0.6875rem',
              },
            }}
          >
            <Avatar sx={{ bgcolor: IKI_COLORS.accent }}>AJ</Avatar>
            <Avatar sx={{ bgcolor: '#f59e0b' }}>RK</Avatar>
            <Avatar sx={{ bgcolor: '#10b981' }}>SM</Avatar>
            <Avatar sx={{ bgcolor: '#8b5cf6' }}>PL</Avatar>
          </AvatarGroup>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 500,
              fontSize: '0.8rem',
              whiteSpace: 'nowrap',
            }}
          >
            {heroContent.socialProof}
          </Typography>
        </Box>
      </Box>

      {/* ── Slick Slide indicators (visible at first glance) ── */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{
          position: 'absolute',
          bottom: { xs: 16, md: 24 },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.7s ease 0.8s',
        }}
      >
        {SLIDE_IMAGES.map((_, i) => (
          <Box
            key={i}
            onClick={() => setSlideIdx(i)}
            role="button"
            tabIndex={0}
            aria-label={`View background ${i + 1}`}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSlideIdx(i); }}
            sx={{
              width: i === slideIdx ? 32 : 8,
              height: 8,
              borderRadius: 9999,
              backgroundColor: i === slideIdx ? '#ffffff' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
              '&:hover': {
                backgroundColor: i === slideIdx ? '#ffffff' : 'rgba(255,255,255,0.85)',
              },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default HeroSection;
