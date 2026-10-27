import { Box, Button, Container, Stack, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { FONT_STACK_SERIF } from '../../app/theme';

export function NotFound() {
  return (
    <Box
      component="main"
      role="main"
      sx={{
        minHeight: '100svh',
        bgcolor: '#08090C',
        color: 'common.white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
        px: 3,
      }}
    >
      {/* Background ambient lighting */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 320, md: 540 },
          height: { xs: 320, md: 540 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 113, 227, 0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Giant subtle 404 typographic background */}
      <Typography
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -55%)',
          fontSize: { xs: '8rem', sm: '14rem', md: '20rem' },
          fontWeight: 900,
          letterSpacing: '-0.05em',
          lineHeight: 1,
          color: 'rgba(255, 255, 255, 0.03)',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        404
      </Typography>

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* IKI Brand Logo */}
        <Box
          component="a"
          href="/"
          aria-label="IKI Home"
          sx={{
            display: 'inline-block',
            mb: 4,
            transition: 'opacity 0.2s ease',
            '&:hover': { opacity: 0.85 },
          }}
        >
          <Box
            component="img"
            src="/images/iki-serif-white.png"
            alt="IKI"
            sx={{ height: 38, width: 'auto', display: 'block' }}
          />
        </Box>

        {/* Status Pill */}
        <Box sx={{ mb: 2.5 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 0.6,
              borderRadius: 9999,
              bgcolor: 'rgba(0, 113, 227, 0.12)',
              border: '1px solid rgba(59, 158, 255, 0.3)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                bgcolor: '#3B9EFF',
                boxShadow: '0 0 8px #3B9EFF',
              }}
            />
            <Typography
              sx={{
                color: '#79BAFF',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Error 404
            </Typography>
          </Box>
        </Box>

        {/* Heading matching test regex /404 — Page Not Found/i */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: FONT_STACK_SERIF,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            mb: 2,
          }}
        >
          404 — Page Not Found
        </Typography>

        {/* Descriptive copy matching test regex /The requested page could not be located/i */}
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.65)',
            fontSize: { xs: '0.95rem', md: '1.05rem' },
            lineHeight: 1.6,
            maxWidth: 440,
            mx: 'auto',
            mb: 4,
          }}
        >
          The requested page could not be located. The link may be broken, or the page may have been relocated or removed.
        </Typography>

        {/* Navigation Action Buttons */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center">
          <Button
            variant="contained"
            href="/"
            startIcon={<HomeIcon />}
            sx={{
              background: 'linear-gradient(135deg, #0071e3 0%, #005bb5 100%)',
              color: '#ffffff',
              px: 3.5,
              py: 1.2,
              borderRadius: 9999,
              fontWeight: 600,
              fontSize: '0.9rem',
              textTransform: 'none',
              boxShadow: '0 4px 18px rgba(0, 113, 227, 0.45)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              '&:hover': {
                background: 'linear-gradient(135deg, #0077ed 0%, #0066cc 100%)',
                boxShadow: '0 8px 24px rgba(0, 113, 227, 0.65)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Return to Home
          </Button>
          <Button
            variant="outlined"
            href="/#opportunities"
            startIcon={<WorkOutlineIcon />}
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              px: 3,
              py: 1.2,
              borderRadius: 9999,
              fontWeight: 500,
              fontSize: '0.9rem',
              textTransform: 'none',
              bgcolor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.45)',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Explore Roles
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default NotFound;
