import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { navItems } from '../../features/home/data/homeContent';
import { IKI_COLORS } from '../../app/theme';

const announcementMessages = [
  '🎯 10,000+ verified jobs available now',
  '🚀 New: AI-powered skill matching for faster hiring',
  '🏆 IKI rated #1 career platform in India 2026',
  '💼 Employers: Post your first job free this month',
  '📈 Join 50,000+ professionals growing their careers',
];

function AnnouncementBar() {
  const doubled = [...announcementMessages, ...announcementMessages];
  return (
    <Box
      sx={{
        backgroundColor: IKI_COLORS.ink,
        height: 28,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          animation: 'ticker 32s linear infinite',
          willChange: 'transform',
          gap: 0,
        }}
      >
        {doubled.map((msg, i) => (
          <Box
            key={i}
            component="span"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 4,
              fontSize: '0.8rem',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '0.01em',
              '&::after': {
                content: '"·"',
                ml: 4,
                color: 'rgba(255,255,255,0.25)',
              },
            }}
          >
            {msg}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  return (
    <>
      <AnnouncementBar />
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0,
          backgroundColor: scrolled
            ? 'rgba(10, 10, 11, 0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          boxShadow: scrolled
            ? '0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.4)'
            : 'none',
          borderBottom: 'none',
          transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
          zIndex: 1200,
          color: '#ffffff',
        }}
        component="header"
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 56, md: 60 },
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {/* Logo */}
            <Typography
              variant="h5"
              component="a"
              href="#"
              aria-label="IKI — Career Platform home"
              sx={{
                fontWeight: 800,
                letterSpacing: '-0.04em',
                fontSize: { xs: '1.4rem', md: '1.6rem' },
                color: '#ffffff',
                textDecoration: 'none',
                flexShrink: 0,
                '&:hover': { opacity: 0.85 },
                transition: 'opacity 0.2s',
              }}
            >
              IKI
            </Typography>

            {/* Desktop Navigation */}
            <Box
              component="nav"
              aria-label="Main Navigation"
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: { md: 3, lg: 4 },
                flex: 1,
                justifyContent: 'center',
              }}
            >
              {navItems.map((item) => (
                <Box
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.25,
                    transition: 'color 0.15s ease',
                    letterSpacing: '-0.01em',
                    '&:hover': {
                      color: '#ffffff',
                    },
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: '1.5px',
                      backgroundColor: 'rgba(255,255,255,0.6)',
                      transform: 'scaleX(0)',
                      transformOrigin: 'center',
                      transition: 'transform 0.2s ease',
                    },
                    '&:hover::after': {
                      transform: 'scaleX(1)',
                    },
                  }}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <KeyboardArrowDownIcon sx={{ fontSize: 14, opacity: 0.6 }} />
                  )}
                </Box>
              ))}
            </Box>

            {/* Desktop Actions */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 1.5,
                flexShrink: 0,
              }}
            >
              <Button
                variant="text"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  textTransform: 'none',
                  px: 1.75,
                  '&:hover': {
                    color: '#ffffff',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                  },
                }}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ffffff',
                  color: '#111111',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  px: 2.5,
                  py: 0.875,
                  borderRadius: 9999,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 16px rgba(255,255,255,0.2)',
                  },
                }}
              >
                Get Started
              </Button>
            </Box>

            {/* Mobile Hamburger */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                onClick={handleDrawerToggle}
                edge="end"
                sx={{ color: '#ffffff' }}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>

        {/* Mobile Drawer */}
        <Drawer
          anchor="top"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              top: 92,
              backgroundColor: 'rgba(10, 10, 11, 0.96)',
              backdropFilter: 'blur(20px)',
              color: '#ffffff',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              px: 2,
              py: 3,
            },
          }}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <List component="nav" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  sx={{ py: 1.5, borderRadius: 2 }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '1.0625rem',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.9)',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ pt: 2.5, flexDirection: 'column', gap: 1.5 }}>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  color: '#ffffff',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  borderRadius: 9999,
                  py: 1.25,
                  '&:hover': { borderColor: 'rgba(255,255,255,0.5)' },
                }}
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#ffffff',
                  color: '#111111',
                  borderRadius: 9999,
                  py: 1.25,
                  fontWeight: 600,
                }}
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </>
  );
}

export default SiteHeader;
