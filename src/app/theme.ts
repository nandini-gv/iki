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

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0071e3',
      light: '#47a3ff',
      dark: '#0051a8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1d1d1f',
      light: '#424245',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f7',
    },
    text: {
      primary: '#1d1d1f',
      secondary: '#86868b',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: FONT_STACK_SANS,
    h1: {
      fontWeight: 600,
      letterSpacing: '-0.015em',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.005em',
      lineHeight: 1.25,
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '0em',
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
      fontSize: '1.0625rem', // 17px Apple body standard
      lineHeight: 1.47,
      letterSpacing: '-0.022em',
    },
    body2: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.43,
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
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          backgroundColor: '#ffffff',
          color: '#1d1d1f',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 9999, // Pill shape inspired by Apple and mockup buttons
          padding: '8px 20px',
          fontSize: '0.9375rem',
          transition: 'all 0.2s ease-in-out',
        },
        containedPrimary: {
          backgroundColor: '#0071e3',
          '&:hover': {
            backgroundColor: '#0077ed',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
