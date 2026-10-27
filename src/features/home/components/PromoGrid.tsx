import { useRef, useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { IKI_COLORS } from '../../../app/theme';

interface PromoCard {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  cta: string;
  secondaryCta?: string;
  href: string;
  bg: string;
  textDark?: boolean;
  titleSize?: string;
}

// Using asset images from /images/ (copied from src/assets/images/)
const PROMO_CARDS: PromoCard[] = [
  {
    id: 'find-jobs',
    tag: 'For Job Seekers',
    tagColor: '#222222',
    title: 'Discover 10,000+\nVerified Opportunities',
    subtitle: 'Filter by role, location, salary, and work style.',
    cta: 'Browse Jobs',
    href: '#opportunities',
    bg: '/images/grid1.jpg',
    textDark: false,
    titleSize: '1.75rem',
  },
  {
    id: 'skill-up',
    tag: 'Skills & Growth',
    tagColor: '#ffffff',
    title: 'AI-Powered\nSkill Matching',
    subtitle: 'Match your strengths to live roles instantly.',
    cta: 'Build Your Profile',
    secondaryCta: 'Learn more',
    href: '#opportunities',
    bg: '/images/grid13.jpg',
    textDark: false,
    titleSize: '1.75rem',
  },
  {
    id: 'hire-talent',
    tag: 'For Employers',
    tagColor: '#111111',
    title: 'Source Pre-Vetted\nTalent, Faster',
    subtitle: 'Access a curated candidate pool — all in one place.',
    cta: 'Start Hiring',
    secondaryCta: 'Get estimate',
    href: '#partners',
    bg: '/images/grid11.jpg',
    textDark: false,
    titleSize: '1.75rem',
  },
  {
    id: 'tech-jobs',
    tag: "Featured",
    tagColor: '#ffffff',
    title: "India's Fastest\nGrowing Tech Careers",
    subtitle: 'Cloud engineering to GenAI — explore high-growth positions.',
    cta: 'Explore Tech Roles',
    secondaryCta: 'Buy',
    href: '#opportunities',
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
        borderRadius: 0,
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.97)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => { window.location.href = card.href; }}
    >
      {/* Background image */}
      <Box
        component="img"
        src={card.bg}
        alt=""
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)',
        }}
      />

      {/* Gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? (hovered
              ? 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.08) 100%)'
              : 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.04) 100%)')
            : (hovered
              ? 'linear-gradient(to top, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)'
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
          p: { xs: 3, sm: 3.5, md: 4 },
        }}
      >
        {/* Tag eyebrow */}
        <Typography
          sx={{
            fontSize: '0.72rem',
            fontWeight: 600,
            color: isDark ? 'rgba(255,255,255,0.75)' : card.tagColor,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
          }}
        >
          <Box
            component="span"
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: isDark ? 'rgba(255,255,255,0.5)' : card.tagColor,
              display: 'inline-block',
            }}
          />
          {card.tag}
        </Typography>

        <Typography
          component="h3"
          sx={{
            fontSize: { xs: '1.3rem', sm: card.titleSize ?? '1.5rem', md: card.titleSize ?? '1.65rem' },
            fontWeight: 700,
            color: isDark ? '#ffffff' : '#111111',
            lineHeight: 1.22,
            letterSpacing: '-0.025em',
            mb: 1,
            whiteSpace: 'pre-line',
          }}
        >
          {card.title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.85rem' },
            color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.6)',
            lineHeight: 1.5,
            mb: 2.5,
            maxWidth: 340,
            transform: hovered ? 'translateY(0)' : 'translateY(4px)',
            opacity: hovered ? 1 : 0.85,
            transition: 'transform 0.35s ease, opacity 0.35s ease',
          }}
        >
          {card.subtitle}
        </Typography>

        {/* CTA row */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button
            href={card.href}
            variant="text"
            sx={{
              p: 0,
              minWidth: 0,
              color: isDark ? '#ffffff' : '#111111',
              fontWeight: 600,
              fontSize: '0.85rem',
              textDecoration: 'underline',
              textUnderlineOffset: 3,
              '&:hover': { backgroundColor: 'transparent', opacity: 0.75 },
              transform: hovered ? 'translateX(2px)' : 'translateX(0)',
              transition: 'transform 0.25s ease',
            }}
          >
            {card.cta}
          </Button>
          {card.secondaryCta && (
            <>
              <Typography sx={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.25)', fontSize: '0.85rem' }}>·</Typography>
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
  const sectionRef = useRef<HTMLDivElement>(null);

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

      {/* Section label below the grid */}
      <Container maxWidth="xl">
        <Box
          ref={sectionRef}
          sx={{
            py: { xs: 3, md: 4 },
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.8rem', md: '0.875rem' },
              fontWeight: 500,
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.04em',
            }}
          >
            Everything you need to grow your career
          </Typography>
          <Button
            href="#opportunities"
            variant="text"
            sx={{
              color: IKI_COLORS.blueLight,
              fontWeight: 600,
              fontSize: '0.875rem',
              p: 0,
              minWidth: 0,
              '&:hover': { backgroundColor: 'transparent', opacity: 0.75 },
            }}
          >
            View all opportunities →
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default PromoGrid;
