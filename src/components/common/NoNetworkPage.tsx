import { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Container, Typography } from '@mui/material';
import WifiOffOutlinedIcon from '@mui/icons-material/WifiOffOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import { FONT_STACK_SERIF } from '../../app/theme';

export function NoNetworkPage({ onRetry }: { onRetry?: () => void }) {
  const [retrying, setRetrying] = useState(false);
  const [, setIsOnline] = useState(() => (typeof navigator !== 'undefined' ? navigator.onLine : true));

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
      if (onRetry) {
        onRetry();
      } else {
        window.location.reload();
      }
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [onRetry]);

  const handleManualRetry = () => {
    setRetrying(true);
    if (typeof navigator !== 'undefined' && navigator.onLine) {
      if (onRetry) {
        onRetry();
      } else {
        window.location.reload();
      }
      return;
    }

    // Ping check
    fetch('/', { method: 'HEAD', cache: 'no-store' })
      .then(() => {
        setIsOnline(true);
        if (onRetry) onRetry();
        else window.location.reload();
      })
      .catch(() => {
        setIsOnline(false);
        setTimeout(() => setRetrying(false), 600);
      });
  };

  return (
    <Box
      component="main"
      role="alert"
      aria-live="assertive"
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
      {/* Background ambient amber glow */}
      <Box
        sx={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 280, md: 460 },
          height: { xs: 280, md: 460 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, transparent 70%)',
          filter: 'blur(50px)',
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

        {/* Wifi Off Icon Dock */}
        <Box
          sx={{
            width: 76,
            height: 76,
            borderRadius: '50%',
            bgcolor: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 3,
            boxShadow: '0 8px 32px rgba(245, 158, 11, 0.2)',
          }}
        >
          <WifiOffOutlinedIcon sx={{ fontSize: 36, color: '#f59e0b' }} />
        </Box>

        {/* Status indicator */}
        <Box sx={{ mb: 2 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 0.5,
              borderRadius: 9999,
              bgcolor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                bgcolor: '#f59e0b',
                boxShadow: '0 0 8px #f59e0b',
                animation: 'pulseOffline 2s infinite',
                '@keyframes pulseOffline': {
                  '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(245, 158, 11, 0.7)' },
                  '70%': { transform: 'scale(1)', boxShadow: '0 0 0 6px rgba(245, 158, 11, 0)' },
                  '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(245, 158, 11, 0)' },
                },
              }}
            />
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.75)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Offline Mode
            </Typography>
          </Box>
        </Box>

        {/* Heading */}
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
          No Internet Connection
        </Typography>

        {/* Descriptive copy */}
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.65)',
            fontSize: { xs: '0.95rem', md: '1.025rem' },
            lineHeight: 1.6,
            maxWidth: 420,
            mx: 'auto',
            mb: 4,
          }}
        >
          You appear to be offline. Check your network cables, Wi-Fi, or cellular connection. The application will automatically reconnect when online.
        </Typography>

        {/* Retry Button */}
        <Button
          variant="contained"
          onClick={handleManualRetry}
          disabled={retrying}
          startIcon={retrying ? <CircularProgress size={16} color="inherit" /> : <RefreshIcon />}
          sx={{
            background: 'linear-gradient(135deg, #0071e3 0%, #005bb5 100%)',
            color: '#ffffff',
            px: 4,
            py: 1.25,
            borderRadius: 9999,
            fontWeight: 600,
            fontSize: '0.925rem',
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
          {retrying ? 'Checking connection...' : 'Try Again'}
        </Button>
      </Container>
    </Box>
  );
}

export default NoNetworkPage;
