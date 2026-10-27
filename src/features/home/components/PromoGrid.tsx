import { useRef, useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

interface PromoCard {
  id: string;
  tag?: string;
  tagColor?: string;
  title: string;
  subtitle: string;
  cta: string;
  secondaryCta?: string;
  href: string;
  bg: string;
  textDark?: boolean;
  titleSize?: string;
}

// Using asset images from /images/ matching the approved 2x2 mockup layout
const PROMO_CARDS: PromoCard[] = [
  {
    id: 'global-talent',
    title: 'Global Talent',
    subtitle: 'Curated leadership and specialized engineering roles across leading tech companies.',
    cta: 'Explore roles',
    href: '#opportunities',
    bg: '/images/grid1.jpg',
    textDark: false,
    titleSize: '1.75rem',
  },
  {
    id: 'enterprise-hiring',
    title: 'Enterprise Hiring',
    subtitle: 'Scale high-performing engineering and product teams with vetted talent.',
    cta: 'Hire talent',
    secondaryCta: 'Request demo',
    href: '#opportunities',
    bg: '/images/grid13.jpg',
    textDark: false,
    titleSize: '1.75rem',
  },
  {
    id: 'direct-access',
    title: 'Direct Access',
    subtitle: 'Direct conversations with verified hiring managers. No gatekeepers.',
    cta: 'Get matched',
    secondaryCta: 'Learn more',
    href: '#opportunities',
    bg: '/images/grid11.jpg',
    textDark: false,
    titleSize: '1.75rem',
  },
  {
    id: 'career-advisory',
    title: 'Career Advisory',
    subtitle: 'Personalized mentorship, industry insights, and career path coaching.',
    cta: 'Start consulting',
    href: '#partners',
    bg: '/images/grid5.jpg',
    textDark: false,
    titleSize: '1.75rem',
  },
];

function useIntersection(ref: React.RefObject<Element | null>, threshold = 0.1) {
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

function PromoCard({ card, delay = 0 }: { card: PromoCard; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIntersection(ref as React.RefObject<Element | null>);
  const [hovered, setHovered] = useState(false);
  const isDark = !card.textDark;

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: { xs: '4 / 3', md: '16 / 11' },
        overflow: 'hidden',
        borderRadius: '3px',
        cursor: 'pointer',
        boxShadow: isDark
          ? (hovered
            ? 'inset 0 0 0 1px rgba(255, 255, 255, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 20px 48px rgba(0, 0, 0, 0.35)'
            : 'inset 0 0 0 1px rgba(255, 255, 255, 0.14), 0 8px 30px rgba(0, 0, 0, 0.18)')
          : (hovered
            ? 'inset 0 0 0 1px rgba(0, 0, 0, 0.12), 0 16px 36px rgba(0, 0, 0, 0.1)'
            : 'inset 0 0 0 1px rgba(0, 0, 0, 0.08), 0 8px 30px rgba(0, 0, 0, 0.06)'),
        opacity: visible ? 1 : 0,
        transform: visible
          ? (hovered ? 'translateY(-3px)' : 'translateY(0)')
          : 'translateY(28px) scale(0.97)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(600px circle at 50% 0%, rgba(255, 255, 255, 0.09), transparent 50%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          zIndex: 2,
          pointerEvents: 'none',
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => { window.location.href = card.href; }}
    >
      {/* Background image with smooth cubic-bezier scale */}
      <Box
        component="img"
        src={card.bg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? (hovered
              ? 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.42) 55%, rgba(0,0,0,0.1) 100%)'
              : 'linear-gradient(to top, rgba(0,0,0,0.74) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.04) 100%)')
            : (hovered
              ? 'linear-gradient(to top, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.06) 100%)'
              : 'linear-gradient(to top, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)'),
          transition: 'background 0.4s ease',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          p: { xs: 3, sm: 3.5, md: 4.5 },
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontSize: { xs: '1.35rem', sm: card.titleSize ?? '1.5rem', md: card.titleSize ?? '1.75rem' },
            fontWeight: 700,
            color: isDark ? '#ffffff' : '#111111',
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
            mb: 1,
            whiteSpace: 'pre-line',
            textShadow: isDark ? '0 2px 12px rgba(0,0,0,0.5)' : 'none',
          }}
        >
          {card.title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '0.825rem', sm: '0.875rem' },
            color: isDark ? 'rgba(255,255,255,0.72)' : 'rgba(0,0,0,0.65)',
            lineHeight: 1.5,
            mb: 2.5,
            maxWidth: 360,
            transform: hovered ? 'translateY(0)' : 'translateY(3px)',
            opacity: hovered ? 1 : 0.88,
            transition: 'transform 0.35s ease, opacity 0.35s ease',
          }}
        >
          {card.subtitle}
        </Typography>

        {/* CTA row */}
        <Box sx={{ display: 'flex', gap: 1.25, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button
            href={card.href}
            variant="text"
            sx={{
              p: 0,
              minWidth: 0,
              color: isDark ? '#ffffff' : '#111111',
              fontWeight: 600,
              fontSize: '0.875rem',
              textDecoration: 'underline',
              textUnderlineOffset: 4,
              '&:hover': { backgroundColor: 'transparent', opacity: 0.85 },
              transform: hovered ? 'translateX(3px)' : 'translateX(0)',
              transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {card.cta}
          </Button>
          {card.secondaryCta && (
            <>
              <Typography sx={{ color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.25)', fontSize: '0.85rem' }}>·</Typography>
              <Button
                href={card.href}
                variant="text"
                sx={{
                  p: 0,
                  minWidth: 0,
                  color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.55)',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  textDecoration: 'underline',
                  textUnderlineOffset: 3,
                  '&:hover': { backgroundColor: 'transparent', opacity: 0.75 },
                }}
              >
                {card.secondaryCta}
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export function PromoGrid() {
  return (
    <Box
      id="promotions"
      component="section"
      aria-label="IKI Platform Features"
      sx={{
        backgroundColor: '#000000',
        pt: 0,
        pb: 0,
      }}
    >
      {/* Grid — with 10px white spacing */}
      <Box sx={{ width: '100%', backgroundColor: '#ffffff', p: '10px' }}>
        <Grid container spacing={'10px'}>
          {PROMO_CARDS.map((card, i) => (
            <Grid item xs={12} md={6} key={card.id}>
              <PromoCard card={card} delay={i * 70} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default PromoGrid;
