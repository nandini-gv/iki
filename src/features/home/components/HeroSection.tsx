import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FONT_STACK_SERIF } from '../../../app/theme';
import { heroContent } from '../data/homeContent';

export function HeroSection() {
  return (
    <Box
      id="hero"
      component="section"
      aria-label="Hero Section"
      sx={{
        position: 'relative',
        backgroundColor: '#0a0d14',
        backgroundImage:
          'radial-gradient(circle at 80% 20%, rgba(0, 113, 227, 0.18) 0%, transparent 50%), radial-gradient(circle at 10% 80%, rgba(14, 165, 233, 0.12) 0%, transparent 40%)',
        color: '#ffffff',
        pt: { xs: 8, md: 12, lg: 14 },
        pb: { xs: 8, md: 12, lg: 14 },
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, lg: 8 }} alignItems="center">
          {/* Left Text Column */}
          <Grid item xs={12} lg={7}>
            <Box sx={{ maxWidth: 640 }}>
              {/* Eyebrow */}
              <Typography
                variant="overline"
                sx={{
                  display: 'inline-block',
                  color: '#47a3ff',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  mb: 1.5,
                }}
              >
                {heroContent.eyebrow}
              </Typography>

              {/* Main Headline */}
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.25rem', lg: '4.75rem' },
                  fontWeight: 600,
                  fontFamily: FONT_STACK_SERIF,
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  mb: 3,
                }}
              >
                {heroContent.titleLine1} <br />
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(180deg, #ffffff 30%, rgba(255, 255, 255, 0.75) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {heroContent.titleLine2}
                </Box>
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: { xs: '1.05rem', md: '1.1875rem' },
                  lineHeight: 1.6,
                  maxWidth: 540,
                  mb: 4.5,
                }}
              >
                Find meaningful jobs, build your career, and grow with companies that care.
              </Typography>

              {/* Action Buttons */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 6 }}>
                <Button
                  variant="contained"
                  size="large"
                  href="#opportunities"
                  sx={{
                    backgroundColor: '#0071e3',
                    color: '#ffffff',
                    px: 3.5,
                    py: 1.25,
                    borderRadius: 9999,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 8px 24px rgba(0, 113, 227, 0.35)',
                    '&:hover': {
                      backgroundColor: '#0077ed',
                    },
                  }}
                >
                  {heroContent.primaryCta}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#hiring"
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    color: '#ffffff',
                    px: 3.5,
                    py: 1.25,
                    borderRadius: 9999,
                    fontSize: '1rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(8px)',
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {heroContent.secondaryCta}
                </Button>
              </Stack>

              {/* Stats Bar */}
              <Grid
                container
                spacing={2}
                sx={{
                  pt: 3.5,
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {heroContent.stats.map((stat) => (
                  <Grid item xs={6} sm={3} key={stat.label}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        color: '#ffffff',
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.65)',
                        fontSize: '0.8125rem',
                        lineHeight: 1.3,
                        display: 'block',
                        mt: 0.5,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Right Imagery Column */}
          <Grid item xs={12} lg={5}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Main Portrait Card */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: { xs: 400, lg: 480 },
                  aspectRatio: '4 / 5',
                  borderRadius: 6,
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 24px 64px rgba(0, 0, 0, 0.6)',
                  bgcolor: '#161922',
                }}
              >
                <Box
                  component="img"
                  src={heroContent.image}
                  alt="Professional talent smiling"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(10, 13, 20, 0.85) 100%)',
                  }}
                />
              </Box>

              {/* Floating Callout badge: "Build your next chapter" */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 16, sm: 28 },
                  right: { xs: -8, sm: -16, md: 0 },
                  bgcolor: 'rgba(17, 24, 39, 0.85)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 4,
                  px: 2.5,
                  py: 1.5,
                  boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: FONT_STACK_SERIF,
                    fontStyle: 'italic',
                    fontSize: '1rem',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  {heroContent.callout} <ArrowForwardIcon sx={{ fontSize: 16, color: '#47a3ff' }} />
                </Typography>
              </Box>

              {/* Floating Social Proof Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: 16, sm: 28 },
                  left: { xs: 12, sm: -20, md: -10 },
                  bgcolor: 'rgba(17, 24, 39, 0.9)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: 9999,
                  px: 2.5,
                  py: 1.25,
                  boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 30, height: 30, fontSize: '0.75rem' } }}>
                  <Avatar alt="User 1" src="/images/hero-portrait.jpg" />
                  <Avatar alt="User 2" sx={{ bgcolor: '#0071e3' }}>AJ</Avatar>
                  <Avatar alt="User 3" sx={{ bgcolor: '#10b981' }}>SM</Avatar>
                </AvatarGroup>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 600,
                    fontSize: '0.8125rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {heroContent.socialProof}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
