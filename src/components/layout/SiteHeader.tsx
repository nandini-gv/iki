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
        position: 'relative',
        zIndex: 1210,
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

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1200,
        width: '100%',
        backgroundColor: 'transparent',
      }}
    >
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navigation Bar with Glass Effect on Scroll */}
      <AppBar
        component="header"
        position="static"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? 'rgba(10, 10, 11, 0.78)' : 'transparent',
          backgroundImage: 'none',
          backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
          color: '#ffffff',
          transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 60, md: 72 },
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {/* Logo with IKI Serif */}
            <Box
              component="a"
              href="#"
              aria-label="IKI"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                flexShrink: 0,
                transition: 'opacity 0.2s ease',
                '&:hover': { opacity: 0.85 },
              }}
            >
              <Box
                component="img"
                src="/images/iki-serif-white.png"
                alt="IKI"
                sx={{
                  height: { xs: 26, md: 32 },
                  width: 'auto',
                  display: 'block',
                }}
              />
            </Box>

            {/* Desktop Navigation */}
            <Box
              component="nav"
              aria-label="Main Navigation"
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: { md: 3.5, lg: 4.5 },
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
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.4,
                    letterSpacing: '-0.01em',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                    '&:hover': {
                      color: '#ffffff',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: '1.5px',
                      backgroundColor: 'rgba(255,255,255,0.7)',
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
                    <KeyboardArrowDownIcon sx={{ fontSize: 16, opacity: 0.7 }} />
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
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  textTransform: 'none',
                  px: 2,
                  borderRadius: 9999,
                  '&:hover': {
                    color: '#ffffff',
                    backgroundColor: 'rgba(255,255,255,0.08)',
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
                  textTransform: 'none',
                  px: 2.75,
                  py: 0.875,
                  borderRadius: 9999,
                  boxShadow: 'none',
                  transition: 'all 0.2s ease',
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
              top: 88,
              backgroundColor: 'rgba(10, 10, 11, 0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              color: '#ffffff',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              px: 2.5,
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
                      fontSize: '1rem',
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
                  textTransform: 'none',
                  fontWeight: 500,
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
                  textTransform: 'none',
                }}
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </Box>
  );
}

export default SiteHeader;
