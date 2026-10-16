import { Box, Container, Grid, IconButton, Link, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { footerContent } from '../../features/home/data/homeContent';

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#111111',
        color: '#ffffff',
        pt: { xs: 8, md: 10 },
        pb: 5,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 5, md: 6 }}>
          {/* Brand & Socials Column */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                mb: 2,
              }}
            >
              IKI
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.65)',
                maxWidth: 340,
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              {footerContent.brandStatement}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, color: 'rgba(255, 255, 255, 0.75)' }}>
              <IconButton
                aria-label="LinkedIn"
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'inherit',
                  '&:hover': { color: '#0071e3', bgcolor: 'rgba(255, 255, 255, 0.05)' },
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
                sx={{
                  color: 'inherit',
                  '&:hover': { color: '#ff0000', bgcolor: 'rgba(255, 255, 255, 0.05)' },
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
                sx={{
                  color: 'inherit',
                  '&:hover': { color: '#ffffff', bgcolor: 'rgba(255, 255, 255, 0.05)' },
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
                sx={{
                  color: 'inherit',
                  '&:hover': { color: '#e1306c', bgcolor: 'rgba(255, 255, 255, 0.05)' },
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Navigation Columns */}
          {footerContent.columns.map((col) => (
            <Grid item xs={6} sm={4} md={2.6} key={col.title}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  fontSize: '0.8125rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'rgba(255, 255, 255, 0.95)',
                  mb: 2.5,
                }}
              >
                {col.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {col.items.map((item) => (
                  <Box component="li" key={item.label} sx={{ mb: 1.5 }}>
                    <Link
                      href={item.href}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.65)',
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        transition: 'color 0.15s ease',
                        '&:hover': {
                          color: '#ffffff',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {item.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Legal Strip */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            pt: 3.5,
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, sm: 3 } }}>
            {footerContent.legalStrip.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                sx={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontSize: '0.8125rem',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#ffffff',
                    textDecoration: 'underline',
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.45)',
              fontSize: '0.8125rem',
            }}
          >
            {footerContent.legalStrip.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default SiteFooter;
