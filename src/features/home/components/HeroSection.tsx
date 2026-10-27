import { useEffect, useState } from 'react';
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { FONT_STACK_SERIF, IKI_COLORS } from '../../../app/theme';
import { heroContent } from '../data/homeContent';

// Dynamically discover all available hero slide images without hardcoding specific files
const discoveredSlideModules = import.meta.glob<string>(
  [
    '../../../assets/images/section1-slide*.{jpg,jpeg,png,webp,avif}',
    '../../../assets/images/slide*.{jpg,jpeg,webp,avif}',
    '../../../assets/images/hero-slide*.{jpg,jpeg,png,webp,avif}',
    '../../../assets/images/hero/*.{jpg,jpeg,png,webp,avif}',
    '../../../assets/images/slides/*.{jpg,jpeg,png,webp,avif}',
  ],
  { eager: true, query: '?url', import: 'default' }
);

// Filter out mobile-only screenshots, deduplicate, and sort naturally
const DISCOVERED_SLIDES: string[] = Array.from(
  new Set(
    Object.entries(discoveredSlideModules)
      .filter(([filePath]) => !filePath.toLowerCase().includes('mobile'))
      .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
      .map(([, url]) => url)
  )
);

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
  const [availableSlides, setAvailableSlides] = useState<string[]>(DISCOVERED_SLIDES);

  useEffect(() => {
    // Entrance animation trigger
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Dynamically verify that each candidate slide image successfully loads.
  // If an image was removed, fails to load, or 404s, it is completely excluded so no dark blank space ever appears.
  useEffect(() => {
    if (typeof window === 'undefined' || DISCOVERED_SLIDES.length === 0) return;

    let isMounted = true;
    const verified: string[] = [];

    const checks = DISCOVERED_SLIDES.map((url) => {
      return new Promise<void>((resolve) => {
        const img = new window.Image();
        img.onload = () => {
          verified.push(url);
          resolve();
        };
        img.onerror = () => {
          // If image does not exist or fails to load, omit it
          resolve();
        };
        img.src = url;
      });
    });

    Promise.all(checks).then(() => {
      if (isMounted && verified.length > 0) {
        setAvailableSlides(DISCOVERED_SLIDES.filter((u) => verified.includes(u)));
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // Auto-advance background slides (6-second interval) considering only verified available images
  useEffect(() => {
    if (availableSlides.length <= 1) return;
    const interval = setInterval(() => {
      setSlideIdx((i) => (i + 1) % availableSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [availableSlides.length]);

  const activeIdx = availableSlides.length > 0 ? slideIdx % availableSlides.length : 0;

  return (
    <Box
      id="hero"
      component="section"
      aria-label="Hero — We Connect Talent to Opportunity"
      sx={{
        position: 'relative',
        // Responsive viewport height calculation:
        // Fills the viewport below and behind the transparent sticky announcement bar & navbar.
        // On desktop, the hero occupies the full available viewport (100svh / 100vh) so that Section 2
        // sits exactly below the fold on initial load without peeking, while content is padded below header heights.
        minHeight: {
          xs: 'max(100svh, 540px)',
          md: 'max(100svh, 600px)',
        },
        height: {
          xs: 'auto',
          md: '100svh',
        },
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#080C10',
      }}
    >
      {/* ── Crossfading background slides with crystal-clear rendering ── */}
      {availableSlides.map((src, i) => (
        <Box
          key={src}
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
            opacity: i === activeIdx ? 1 : 0,
            transform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            imageRendering: '-webkit-optimize-contrast',
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 0,
          }}
        />
      ))}

      {/* ── Very light tint overlay on slider: improves typography contrast without washing out image colors ── */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(8, 12, 16, 0.28)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* ── Subtle bottom edge transition into Section 2 ── */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.1) 12%, transparent 24%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* ── Content ── */}
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 3,
          pt: { xs: 'calc(88px + 16px)', md: 'calc(100px + 24px)' },
          pb: { xs: 4, md: 5 },
        }}
      >
        <Box sx={{ maxWidth: { xs: '100%', sm: 560, md: 620, lg: 680 } }}>
          {/* Pill badge with live pulsating radar dot */}
          <Box
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
              mb: 2,
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.25,
                px: 1.75,
                py: 0.65,
                borderRadius: 9999,
                backgroundColor: 'rgba(0, 113, 227, 0.12)',
                border: '1px solid rgba(59, 158, 255, 0.35)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 2px 14px rgba(0, 113, 227, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  bgcolor: '#3B9EFF',
                  boxShadow: '0 0 8px #3B9EFF',
                  animation: 'pulseRadar 2.2s infinite',
                }}
              />
              <Typography
                sx={{
                  color: '#79BAFF',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
              >
                {heroContent.eyebrow}
              </Typography>
            </Box>
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
                textShadow: '0 2px 24px rgba(0, 0, 0, 0.75), 0 1px 4px rgba(0, 0, 0, 0.85)',
                mb: 2,
              }}
            >
              {heroContent.titleLine1}
              <br />
              <Box
                component="span"
                sx={{
                  color: '#ffffff',
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
                color: 'rgba(255, 255, 255, 0.88)',
                fontSize: { xs: '0.95rem', sm: '1.025rem', md: '1.08rem' },
                lineHeight: 1.6,
                maxWidth: 480,
                mb: 3.5,
                letterSpacing: '-0.005em',
                textShadow: '0 1px 12px rgba(0, 0, 0, 0.75)',
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
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #0071e3 0%, #005bb5 100%)',
                  color: '#ffffff',
                  px: 3.5,
                  py: 1.25,
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  borderRadius: 9999,
                  boxShadow: '0 4px 20px rgba(0, 113, 227, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.35)',
                  textTransform: 'none',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '60%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent)',
                    transform: 'skewX(-20deg)',
                    transition: 'left 0.65s ease',
                  },
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0077ed 0%, #0066cc 100%)',
                    boxShadow: '0 8px 30px rgba(0, 113, 227, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.45)',
                    transform: 'translateY(-2px)',
                    '&::after': {
                      left: '160%',
                    },
                  },
                }}
              >
                {heroContent.primaryCta}
              </Button>
              <Button
                variant="outlined"
                href="#partners"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.22)',
                  color: '#ffffff',
                  px: 3.25,
                  py: 1.25,
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  borderRadius: 9999,
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                  textTransform: 'none',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    backgroundColor: 'rgba(255, 255, 255, 0.14)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {heroContent.secondaryCta}
              </Button>
            </Stack>
          </Box>

          {/* Stats row with sleek frosted dock backing */}
          <Box
            sx={{
              mt: { xs: 4, md: 4.5 },
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s',
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                backdropFilter: 'blur(16px)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                px: { xs: 2.5, sm: 3.5 },
                py: { xs: 1.25, sm: 1.5 },
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Stack direction="row" spacing={{ xs: 2.5, sm: 3.5 }} alignItems="center">
                <AnimatedStat value="50K+" label="Professionals" />
                <Box sx={{ width: '1px', height: 32, bgcolor: 'rgba(255,255,255,0.14)' }} />
                <AnimatedStat value="10K+" label="Jobs Live" />
                <Box sx={{ width: '1px', height: 32, bgcolor: 'rgba(255,255,255,0.14)' }} />
                <AnimatedStat value="200+" label="Employers" />
              </Stack>
            </Box>
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

        {/* Social proof avatar pill with subtle float */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            bgcolor: 'rgba(10, 10, 12, 0.78)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            borderRadius: 9999,
            px: 2.25,
            py: 0.9,
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
            animation: 'floatSubtle 5s ease-in-out infinite',
            transition: 'transform 0.25s ease',
            '&:hover': {
              transform: 'scale(1.03)',
            },
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

      {/* ── Slide indicators (only rendered for verified available images) ── */}
      {availableSlides.length > 1 && (
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{
            position: 'absolute',
            bottom: { xs: 16, md: 24 },
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.8s',
          }}
        >
          {availableSlides.map((_, i) => (
            <Box
              key={i}
              onClick={() => setSlideIdx(i)}
              role="button"
              tabIndex={0}
              aria-label={`View background ${i + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSlideIdx(i);
              }}
              sx={{
                width: i === activeIdx ? 32 : 8,
                height: 8,
                borderRadius: 9999,
                backgroundColor: i === activeIdx ? '#ffffff' : 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                '&:hover': {
                  backgroundColor: i === activeIdx ? '#ffffff' : 'rgba(255,255,255,0.85)',
                },
              }}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default HeroSection;
