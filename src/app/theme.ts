import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const FONT_STACK_SANS = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"SF Pro Text"',
  '"SF Pro Display"',
  '"Helvetica Neue"',
  'Helvetica',
  'Arial',
  'sans-serif',
].join(', ');

export const FONT_STACK_SERIF = [
  '"New York"',
  'Georgia',
  '"Times New Roman"',
  'serif',
].join(', ');

// Design tokens
export const IKI_COLORS = {
  ink: '#0A0A0B',
  inkLight: '#1A1A1C',
  inkMid: '#2C2C2E',
  slate: '#3A3A3C',
  mist: '#636366',
  silver: '#8E8E93',
  cloud: '#C7C7CC',
  smoke: '#E5E5EA',
  snow: '#F2F2F7',
  white: '#FFFFFF',
  blue: '#0066CC',
  blueDark: '#004FA3',
  blueLight: '#3B9EFF',
  accent: '#0071e3',
  accentHover: '#0077ED',
  cream: '#FAF9EE',
  creamDark: '#F0EDD8',
  navy: '#0D1B2A',
  navyLight: '#1A2F45',
};

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: IKI_COLORS.accent,
      light: IKI_COLORS.blueLight,
      dark: IKI_COLORS.blueDark,
      contrastText: IKI_COLORS.white,
    },
    secondary: {
      main: IKI_COLORS.inkLight,
      light: IKI_COLORS.slate,
      dark: IKI_COLORS.ink,
      contrastText: IKI_COLORS.white,
    },
    background: {
      default: IKI_COLORS.white,
      paper: IKI_COLORS.snow,
    },
    text: {
      primary: IKI_COLORS.inkLight,
      secondary: IKI_COLORS.mist,
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: FONT_STACK_SANS,
    h1: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.08,
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.015em',
      lineHeight: 1.15,
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.22,
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.005em',
      lineHeight: 1.3,
    },
    h5: {
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.55,
      letterSpacing: '-0.01em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '-0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@keyframes ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        '@keyframes fadeInUp': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        '@keyframes scaleIn': {
          '0%': { opacity: 0, transform: 'scale(0.92)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        '@keyframes slideInLeft': {
          '0%': { opacity: 0, transform: 'translateX(-32px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        '@keyframes slideInRight': {
          '0%': { opacity: 0, transform: 'translateX(32px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        '@keyframes pulseGlow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 113, 227, 0)' },
          '50%': { boxShadow: '0 0 0 8px rgba(0, 113, 227, 0.12)' },
        },
        '@keyframes pulseRadar': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(59, 158, 255, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 6px rgba(59, 158, 255, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(59, 158, 255, 0)' },
        },
        '@keyframes floatSubtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        '@keyframes ambientBreathe': {
          '0%, 100%': { opacity: 0.18, transform: 'scale(1)' },
          '50%': { opacity: 0.28, transform: 'scale(1.08)' },
        },
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        html: {
          scrollBehavior: 'smooth',
        },
        /* Sleek 2026 tech-startup dark scrollbar */
        '::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: '#0a0a0c',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255, 255, 255, 0.18)',
          borderRadius: '9999px',
          border: '2px solid #0a0a0c',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.35)',
          },
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          backgroundColor: IKI_COLORS.ink,
          color: IKI_COLORS.inkLight,
          overflowX: 'hidden',
          textRendering: 'optimizeLegibility',
        },
        '::selection': {
          backgroundColor: 'rgba(0, 113, 227, 0.2)',
          color: IKI_COLORS.inkLight,
        },
        ':focus-visible': {
          outline: `2px solid ${IKI_COLORS.accent}`,
          outlineOffset: '3px',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 9999,
          padding: '10px 24px',
          fontSize: '0.9375rem',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          fontWeight: 500,
          '&:active': {
            transform: 'scale(0.97)',
          },
        },
        containedPrimary: {
          backgroundColor: IKI_COLORS.accent,
          boxShadow: '0 4px 16px rgba(0, 113, 227, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
          '&:hover': {
            backgroundColor: IKI_COLORS.accentHover,
            transform: 'translateY(-1.5px)',
            boxShadow: '0 8px 24px rgba(0, 113, 227, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          },
          '&:active': {
            transform: 'scale(0.97) translateY(0)',
          },
        },
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.25)',
          '&:hover': {
            borderColor: 'rgba(255, 255, 255, 0.55)',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            transform: 'translateY(-1.5px)',
          },
          '&:active': {
            transform: 'scale(0.97) translateY(0)',
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&:before': {
            display: 'none',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
