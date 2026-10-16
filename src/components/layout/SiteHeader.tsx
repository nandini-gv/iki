import { useState } from 'react';
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
import { navItems } from '../../features/home/data/homeContent';

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(17, 17, 17, 0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        color: '#ffffff',
      }}
      component="header"
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 58, md: 68 },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Brand Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              variant="h6"
              component="a"
              href="#"
              sx={{
                fontWeight: 800,
                letterSpacing: '-0.03em',
                fontSize: { xs: '1.25rem', md: '1.45rem' },
                color: '#ffffff',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              IKI
            </Typography>
          </Box>

          {/* Desktop Navigation Links */}
          <Box
            component="nav"
            aria-label="Main Navigation"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: { md: 3, lg: 4 },
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item.label}
                component="a"
                href={item.href}
                sx={{
                  color: 'rgba(255, 255, 255, 0.78)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Desktop Action Buttons */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <Button
              variant="text"
              sx={{
                color: 'rgba(255, 255, 255, 0.85)',
                fontWeight: 500,
                fontSize: '0.9375rem',
                '&:hover': {
                  color: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
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
                fontSize: '0.9375rem',
                borderRadius: 9999,
                px: 2.75,
                py: 0.9,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Mobile Hamburger Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              color="inherit"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={handleDrawerToggle}
              edge="end"
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
            top: { xs: 58, md: 68 },
            backgroundColor: '#111111',
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
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    color: '#ffffff',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                borderRadius: 9999,
                py: 1,
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
                py: 1,
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default SiteHeader;
