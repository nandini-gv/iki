import { Box, Button, Container, Stack, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import HomeIcon from '@mui/icons-material/Home';
import { FONT_STACK_SERIF } from '../../app/theme';

export function ErrorPage({
  error: _error,
  onReset,
}: {
  error?: Error | null;
  onReset?: () => void;
}) {
  const handleReload = () => {
    if (onReset) {
      onReset();
    } else {
      window.location.reload();
    }
  };

  return (
    <Box
      component="main"
      role="alert"
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
      {/* Background ambient red/blue glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.14) 0%, rgba(0, 113, 227, 0.08) 50%, transparent 70%)',
          filter: 'blur(55px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

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
              bgcolor: 'rgba(239, 68, 68, 0.12)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                bgcolor: '#ef4444',
                boxShadow: '0 0 8px #ef4444',
              }}
            />
            <Typography
              sx={{
                color: '#fca5a5',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              System Notice
            </Typography>
          </Box>
        </Box>

        {/* Headline matching test regex /something went wrong/i */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: FONT_STACK_SERIF,
            fontSize: { xs: '1.85rem', sm: '2.4rem', md: '2.8rem' },
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            mb: 2,
          }}
        >
          Something went wrong
        </Typography>

        {/* Descriptive copy matching test expectations */}
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.65)',
            fontSize: { xs: '0.95rem', md: '1.025rem' },
            lineHeight: 1.6,
            maxWidth: 440,
            mx: 'auto',
            mb: 4,
          }}
        >
          An unexpected error occurred while loading this view. Please try reloading the page.
        </Typography>

        {/* Action Buttons */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleReload}
            startIcon={<RefreshIcon />}
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
            Reload page
          </Button>
          <Button
            variant="outlined"
            href="/"
            startIcon={<HomeIcon />}
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
            Go to Homepage
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default ErrorPage;
