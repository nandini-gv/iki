import { useId, useState } from 'react';
import { Box, Container, IconButton, Link, Typography, useMediaQuery } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Reveal } from '../../../components/common/Reveal';
import { partnerContent } from '../data/homeContent';

const PARTNERS = ['Microsoft', 'Google', 'AWS', 'Cisco', 'IBM', 'Infosys', 'Wipro', 'TCS'];

const STATS = [
  { value: '200+', label: 'Partner Companies' },
  { value: '48h', label: 'Avg. Response Time' },
  { value: '93%', label: 'Placement Rate' },
];

export function PartnersSection() {
  const [paused, setPaused] = useState(false);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const tickerId = useId();

  return (
    <Box
      id="partners"
      component="section"
      aria-label="Innovation Partners"
      sx={{
        bgcolor: 'common.white',
        color: 'text.primary',
        py: { xs: 4, md: 5 },
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Reveal
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 1fr) auto' },
            alignItems: 'center',
            gap: { xs: 1.5, md: 4 },
          }}
        >
          <Box>
            <Typography
              component="h2"
              sx={{
                maxWidth: 480,
                fontSize: 'clamp(1.5rem, 2.2vw, 1.875rem)',
                fontWeight: 600,
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
              }}
            >
              {partnerContent.title}
            </Typography>
            <Link
              href="#"
              underline="hover"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: 44,
                gap: 0.75,
                color: 'primary.main',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              Become a Partner
              <EastIcon sx={{ fontSize: 16 }} />
            </Link>
          </Box>
          <Box
            component="dl"
            sx={{
              m: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: { xs: 1.5, sm: 3, lg: 4 },
            }}
          >
            {STATS.map((stat) => (
              <Box key={stat.label} sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Typography
                  component="dt"
                  sx={{ fontSize: '0.75rem', color: 'text.secondary', lineHeight: 1.4 }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  component="dd"
                  sx={{
                    order: -1,
                    m: 0,
                    fontSize: { xs: '1.5rem', md: '1.625rem' },
                    fontWeight: 600,
                    letterSpacing: '-0.025em',
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Reveal>
        <Reveal
          delay={0.08}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mt: { xs: 2, md: 1.5 },
            '&:hover .partner-ticker-track, &:focus-within .partner-ticker-track': {
              animationPlayState: 'paused',
            },
          }}
        >
          <Box
            id={tickerId}
            role="region"
            aria-label="Partner companies"
            tabIndex={0}
            sx={{
              minWidth: 0,
              flex: 1,
              overflowX: reducedMotion ? 'auto' : 'hidden',
              '&:focus-visible': {
                outline: '2px solid',
                outlineColor: 'primary.main',
                outlineOffset: 2,
              },
              '@media (prefers-reduced-motion: reduce)': { overflowX: 'auto' },
            }}
          >
            <Box
              className="partner-ticker-track"
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: 'max-content',
                animation: reducedMotion ? 'none' : 'partnersTicker 32s linear infinite',
                animationPlayState: paused ? 'paused' : 'running',
                '@keyframes partnersTicker': {
                  from: { transform: 'translateX(0)' },
                  to: { transform: 'translateX(-50%)' },
                },
                '@media (prefers-reduced-motion: reduce)': {
                  animation: 'none',
                  transform: 'none',
                },
              }}
            >
              {[0, 1].map((copy) => (
                <Box
                  key={copy}
                  component="ul"
                  role="list"
                  aria-label={copy === 0 ? 'Innovation partner companies' : undefined}
                  aria-hidden={copy === 1 ? true : undefined}
                  sx={{
                    display: copy === 1 && reducedMotion ? 'none' : 'flex',
                    alignItems: 'center',
                    flexShrink: 0,
                    listStyle: 'none',
                    m: 0,
                    p: 0,
                    '@media (prefers-reduced-motion: reduce)': {
                      display: copy === 1 ? 'none' : 'flex',
                    },
                  }}
                >
                  {PARTNERS.map((partner) => (
                    <Typography
                      key={partner}
                      component="li"
                      sx={{
                        minWidth: { xs: 136, md: 176 },
                        px: 2,
                        py: 1,
                        textAlign: 'center',
                        color: 'text.secondary',
                        fontSize: { xs: '1.25rem', md: '1.375rem' },
                        fontWeight: 600,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.3,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {partner}
                    </Typography>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
          {!reducedMotion && (
            <IconButton
              type="button"
              aria-label={paused ? 'Resume partner ticker' : 'Pause partner ticker'}
              aria-pressed={paused}
              aria-controls={tickerId}
              onClick={() => setPaused((current) => !current)}
              sx={{
                width: 44,
                height: 44,
                flexShrink: 0,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 0,
                color: 'text.secondary',
                '@media (prefers-reduced-motion: reduce)': { display: 'none' },
              }}
            >
              {paused ? <PlayArrowIcon fontSize="small" /> : <PauseIcon fontSize="small" />}
            </IconButton>
          )}
        </Reveal>
      </Container>
    </Box>
  );
}

export default PartnersSection;
