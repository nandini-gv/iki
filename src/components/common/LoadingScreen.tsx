import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const SESSION_KEY = 'iki_initial_loader_shown';

export function LoadingScreen() {
  const [mounted, setMounted] = useState(() => {
    // In automated testing or SSR, don't display overlay
    if (typeof window === 'undefined') return false;
    if (typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')) return false;

    // Show only during genuine initial application loading, not on subsequent in-session navigations
    try {
      return !sessionStorage.getItem(SESSION_KEY);
    } catch {
      return true;
    }
  });

  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!mounted) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const displayDuration = prefersReducedMotion ? 100 : 700;
    const fadeDuration = prefersReducedMotion ? 50 : 450;

    const timer = setTimeout(() => {
      setFading(true);
      try {
        sessionStorage.setItem(SESSION_KEY, 'true');
      } catch {
        // Ignore storage errors in private/sandboxed modes
      }

      const unmountTimer = setTimeout(() => {
        setMounted(false);
      }, fadeDuration);

      return () => clearTimeout(unmountTimer);
    }, displayDuration);

    // Hard safety failsafe: never remain stuck on screen
    const failsafeTimer = setTimeout(() => {
      setFading(true);
      setMounted(false);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearTimeout(failsafeTimer);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#08090C',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transform: fading ? 'scale(1.02)' : 'scale(1)',
        pointerEvents: fading ? 'none' : 'auto',
        transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        userSelect: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Ambient electric-blue breathing glow */}
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 260, md: 360 },
          height: { xs: 260, md: 360 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 113, 227, 0.32) 0%, rgba(0, 113, 227, 0.05) 50%, transparent 70%)',
          filter: 'blur(45px)',
          animation: 'loaderGlowPulse 2.8s ease-in-out infinite',
          '@keyframes loaderGlowPulse': {
            '0%, 100%': { transform: 'scale(0.92)', opacity: 0.7 },
            '50%': { transform: 'scale(1.1)', opacity: 1 },
          },
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      />

      {/* Centered IKI Brand Container */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'loaderReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          '@keyframes loaderReveal': {
            '0%': { opacity: 0, transform: 'translateY(8px) scale(0.96)' },
            '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
          },
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      >
        {/* Official IKI Serif Logo */}
        <Box
          component="img"
          src="/images/iki-serif-white.png"
          alt="IKI"
          sx={{
            height: { xs: 44, sm: 52 },
            width: 'auto',
            display: 'block',
            mb: 2.5,
            filter: 'drop-shadow(0 4px 20px rgba(0, 113, 227, 0.35))',
          }}
        />

        {/* Minimal electric-blue loading accent bar */}
        <Box
          sx={{
            width: 72,
            height: 2,
            borderRadius: 9999,
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '60%',
              borderRadius: 9999,
              background: 'linear-gradient(90deg, transparent, #0071E3 30%, #60A5FA 70%, transparent)',
              animation: 'loaderAccentSweep 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
              '@keyframes loaderAccentSweep': {
                '0%': { left: '-60%' },
                '100%': { left: '100%' },
              },
              '@media (prefers-reduced-motion: reduce)': {
                left: '20%',
                animation: 'none',
              },
            }}
          />
        </Box>

        {/* Minimalist Subtext */}
        <Typography
          sx={{
            mt: 2,
            fontSize: '0.65rem',
            color: 'rgba(255, 255, 255, 0.5)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontWeight: 600,
            fontFamily: 'inherit',
          }}
        >
          Career Platform
        </Typography>
      </Box>
    </Box>
  );
}

export default LoadingScreen;
