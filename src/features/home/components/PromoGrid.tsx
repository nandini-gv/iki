import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { promoGrid } from '../data/homeContent';

export function PromoGrid() {
  return (
    <Box
      id="services"
      component="section"
      aria-label="Core Services Grid"
      sx={{
        backgroundColor: '#000000',
        py: { xs: 8, md: 12 },
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {promoGrid.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <Box
                id={item.id}
                sx={{
                  position: 'relative',
                  minHeight: { xs: 380, sm: 440, lg: 480 },
                  borderRadius: 6,
                  overflow: 'hidden',
                  bgcolor: '#0a0d14',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  p: { xs: 4, sm: 6 },
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 20px 48px rgba(0, 0, 0, 0.7)',
                    '& .promo-bg-img': {
                      transform: 'scale(1.04)',
                    },
                  },
                }}
              >
                {/* Background Image */}
                <Box
                  component="img"
                  className="promo-bg-img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.55,
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                    zIndex: 0,
                  }}
                />

                {/* Gradient Overlays for contrast */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(3, 7, 18, 0.15) 0%, rgba(3, 7, 18, 0.6) 45%, rgba(3, 7, 18, 0.95) 100%)',
                    zIndex: 1,
                  }}
                />

                {/* Content Overlay */}
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Chip
                    label={item.category}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      backdropFilter: 'blur(12px)',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.6875rem',
                      letterSpacing: '0.1em',
                      borderRadius: 9999,
                      mb: 2,
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  />

                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      color: '#ffffff',
                      fontSize: { xs: '1.75rem', sm: '2.15rem' },
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2,
                      mb: 1.5,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: { xs: '0.9375rem', sm: '1.05rem' },
                      lineHeight: 1.55,
                      maxWidth: 480,
                      mb: 3.5,
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Button
                      variant="contained"
                      href={item.link}
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        backgroundColor: '#ffffff',
                        color: '#111111',
                        borderRadius: 9999,
                        px: 3,
                        py: 1,
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        },
                      }}
                    >
                      {item.cta}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default PromoGrid;
