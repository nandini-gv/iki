import { Box, Container, IconButton, Link, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { footerContent } from '../../features/home/data/homeContent';

function XIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function BCorpBadge() {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1.5px solid rgba(255,255,255,0.6)',
        borderRadius: '50%',
        width: 48,
        height: 48,
        justifyContent: 'center',
        color: '#ffffff',
        p: 0.5,
      }}
    >
      <Typography sx={{ fontSize: '0.55rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1 }}>
        Certified
      </Typography>
      <Typography sx={{ fontSize: '1.25rem', fontWeight: 800, lineHeight: 1, fontFamily: 'serif' }}>
        B
      </Typography>
      <Typography sx={{ fontSize: '0.45rem', textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1 }}>
        Corporation
      </Typography>
    </Box>
  );
}

export function SiteFooter() {
  return (
    <Box
      component="footer"
      role="contentinfo"
      sx={{
        bgcolor: '#0a0a0b',
        color: 'common.white',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              sm: 'repeat(4, minmax(0, 1fr))',
              md: 'minmax(280px, 1.8fr) repeat(4, minmax(0, 1fr))',
            },
            columnGap: { xs: 3, md: 4, lg: 6 },
            rowGap: 4,
          }}
        >
          {/* Brand Info Column */}
          <Box sx={{ gridColumn: { xs: '1 / -1', md: 'auto' }, pr: { md: 4 } }}>
            <Box
              component="a"
              href="#"
              aria-label="IKI Home"
              sx={{
                display: 'inline-block',
                mb: 2,
                transition: 'opacity 0.2s ease',
                '&:hover': { opacity: 0.85 },
              }}
            >
              <Box
                component="img"
                src="/images/iki-serif-white.png"
                alt="IKI"
                sx={{ height: 34, width: 'auto', display: 'block' }}
              />
            </Box>

            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.65)',
                maxWidth: 320,
                fontSize: '0.85rem',
                lineHeight: 1.6,
                mb: 3,
                letterSpacing: '-0.01em',
              }}
            >
              {footerContent.brandStatement}
            </Typography>

            {/* B-Corp Certified Mark */}
            <Box sx={{ mb: 3 }}>
              <BCorpBadge />
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                aria-label="LinkedIn"
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '50%',
                  p: 1,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#ffffff',
                    bgcolor: 'rgba(0, 113, 227, 0.3)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="YouTube"
                component="a"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '50%',
                  p: 1,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#ffffff',
                    bgcolor: 'rgba(0, 113, 227, 0.3)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="X (formerly Twitter)"
                component="a"
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '50%',
                  p: 1,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#ffffff',
                    bgcolor: 'rgba(0, 113, 227, 0.3)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <XIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '50%',
                  p: 1,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#ffffff',
                    bgcolor: 'rgba(0, 113, 227, 0.3)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          {/* 4 Navigation Columns */}
          {footerContent.columns.map((column) => (
            <Box component="nav" aria-label={column.title} key={column.title} sx={{ minWidth: 0 }}>
              <Typography
                component="h2"
                sx={{
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  lineHeight: 1.5,
                  mb: 2,
                  color: '#ffffff',
                }}
              >
                {column.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {column.items.map((item) => (
                  <Box component="li" key={item.label} sx={{ mb: 1 }}>
                    <Link
                      href={item.href}
                      sx={{
                        display: 'inline-block',
                        py: 0.25,
                        color: 'rgba(255, 255, 255, 0.65)',
                        fontSize: '0.825rem',
                        lineHeight: 1.6,
                        textDecoration: 'none',
                        transition: 'color 0.15s ease, transform 0.15s ease',
                        '&:hover': {
                          color: '#ffffff',
                          transform: 'translateX(2px)',
                        },
                      }}
                    >
                      {item.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Bottom Legal Bar */}
      <Box
        component="aside"
        aria-label="Legal Information"
        sx={{
          bgcolor: '#050506',
          color: 'rgba(255, 255, 255, 0.6)',
          py: 2,
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              columnGap: 3,
              rowGap: 1,
            }}
          >
            {/* Legal Links */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                columnGap: 1.5,
                rowGap: 0.5,
              }}
            >
              {footerContent.legalLinks.map((link, index) => (
                <Box key={link.label} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5 }}>
                  <Link
                    href={link.href}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.65)',
                      fontSize: '0.75rem',
                      lineHeight: 1.5,
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                      '&:hover': { color: '#ffffff' },
                    }}
                  >
                    {link.label}
                  </Link>
                  {index < footerContent.legalLinks.length - 1 && (
                    <Box component="span" aria-hidden="true" sx={{ color: 'rgba(255, 255, 255, 0.3)' }}>
                      ·
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            {/* Copyright Text with Reduced Font per User Request */}
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.45)',
                fontSize: '0.6875rem', // reduced font size (11px)
                letterSpacing: '0.01em',
                lineHeight: 1.5,
              }}
            >
              {footerContent.copyright}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default SiteFooter;
