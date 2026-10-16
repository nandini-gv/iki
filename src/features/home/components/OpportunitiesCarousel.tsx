import { useState } from 'react';
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
import { opportunitiesContent } from '../data/homeContent';

export function OpportunitiesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = opportunitiesContent.slides;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[activeIndex] ?? slides[0];

  return (
    <Box
      id="opportunities"
      component="section"
      aria-label="Opportunities Showcase"
      sx={{
        backgroundColor: '#050a14',
        backgroundImage:
          'radial-gradient(circle at 50% 0%, rgba(0, 113, 227, 0.12) 0%, transparent 60%)',
        color: '#ffffff',
        py: { xs: 8, md: 12 },
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header with Controls */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            gap: 3,
            mb: 6,
          }}
        >
          <Box sx={{ maxWidth: 700 }}>
            <Typography
              variant="overline"
              sx={{
                color: '#47a3ff',
                fontWeight: 700,
                fontSize: '0.8125rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                mb: 1,
                display: 'block',
              }}
            >
              {opportunitiesContent.eyebrow}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                mb: 1.5,
              }}
            >
              {opportunitiesContent.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: '1.05rem',
                lineHeight: 1.6,
              }}
            >
              {opportunitiesContent.description}
            </Typography>
          </Box>

          {/* Navigation Controls */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            <IconButton
              aria-label="Previous slide"
              onClick={handlePrev}
              sx={{
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                },
              }}
            >
              <ArrowBackIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="Next slide"
              onClick={handleNext}
              sx={{
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                },
              }}
            >
              <ArrowForwardIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>

        {/* Featured Card / Carousel Display */}
        {currentSlide && (
          <Box
            sx={{
              position: 'relative',
              borderRadius: 6,
              overflow: 'hidden',
              minHeight: { xs: 420, md: 520 },
              border: '1px solid rgba(255, 255, 255, 0.12)',
              bgcolor: '#0a0d14',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              p: { xs: 4, sm: 6, md: 8 },
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.6)',
              transition: 'all 0.4s ease',
            }}
          >
            {/* Slide Background Image */}
            <Box
              component="img"
              src={currentSlide.image}
              alt={currentSlide.title}
              sx={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.65,
                zIndex: 0,
              }}
            />

            {/* Gradient Overlay */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(5, 10, 20, 0.2) 0%, rgba(5, 10, 20, 0.7) 50%, rgba(5, 10, 20, 0.95) 100%)',
                zIndex: 1,
              }}
            />

            {/* Slide Content */}
            <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 640 }}>
              <Chip
                label="FEATURED OPPORTUNITY"
                size="small"
                sx={{
                  backgroundColor: '#0071e3',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.6875rem',
                  letterSpacing: '0.08em',
                  borderRadius: 9999,
                  mb: 2.5,
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.85rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  mb: 2,
                }}
              >
                {currentSlide.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                {currentSlide.description}
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: '#ffffff',
                  color: '#111111',
                  borderRadius: 9999,
                  px: 3.5,
                  py: 1.25,
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                {currentSlide.cta}
              </Button>
            </Box>
          </Box>
        )}

        {/* Carousel Pagination Dots */}
        <Stack
          direction="row"
          spacing={1.25}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 4 }}
        >
          {slides.map((slide, idx) => (
            <Box
              key={slide.id}
              onClick={() => setActiveIndex(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              sx={{
                width: activeIndex === idx ? 28 : 8,
                height: 8,
                borderRadius: 9999,
                backgroundColor:
                  activeIndex === idx ? '#0071e3' : 'rgba(255, 255, 255, 0.25)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor:
                    activeIndex === idx ? '#0071e3' : 'rgba(255, 255, 255, 0.5)',
                },
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default OpportunitiesCarousel;
