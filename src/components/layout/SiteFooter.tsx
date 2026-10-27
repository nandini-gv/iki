import { Box, Container, IconButton, Link, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import VerifiedIcon from '@mui/icons-material/Verified';
import { footerContent } from '../../features/home/data/homeContent';

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <Box component="footer" sx={{ bgcolor: '#111111', color: 'common.white' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 5 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              sm: 'repeat(4, minmax(0, 1fr))',
              md: 'minmax(240px, 1.6fr) repeat(4, minmax(0, 1fr))',
            },
            columnGap: { xs: 2.5, md: 3, lg: 4 },
            rowGap: 3,
          }}
        >
          <Box sx={{ gridColumn: { xs: '1 / -1', md: 'auto' }, minWidth: 0 }}>
            <Typography
              component="p"
              sx={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, mb: 1 }}
            >
              IKI
            </Typography>
            <Typography
              sx={{ color: 'rgba(255, 255, 255, 0.72)', maxWidth: 320, fontSize: '0.875rem', lineHeight: 1.5, mb: 1.5 }}
            >
              {footerContent.brandStatement}
            </Typography>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                px: 1,
                py: 0.75,
                borderRadius: 0,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.75rem',
                lineHeight: 1.4,
              }}
            >
              <VerifiedIcon sx={{ fontSize: 16, color: '#79baff', flexShrink: 0 }} />
              <span>Certified Career Platform · ISO 27001</span>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
              <Typography sx={{ fontWeight: 600, fontSize: '0.6875rem', letterSpacing: '0.08em' }}>
                SOCIAL
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  color: 'rgba(255, 255, 255, 0.8)',
                  '& .MuiIconButton-root': {
                    width: 44,
                    height: 44,
                    color: 'inherit',
                    borderRadius: 0,
                    '&:hover': { color: 'common.white', bgcolor: 'rgba(255, 255, 255, 0.08)' },
                  },
                }}
              >
                <IconButton
                  aria-label="LinkedIn"
                  component="a"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
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
                >
                  <XIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
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
                  mb: 1,
                }}
              >
                {column.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {column.items.map((item) => (
                  <Box component="li" key={item.label}>
                    <Link
                      href={item.href}
                      sx={{
                        display: 'inline-block',
                        py: 0.5,
                        color: 'rgba(255, 255, 255, 0.72)',
                        fontSize: '0.8125rem',
                        lineHeight: 1.5,
                        textDecoration: 'none',
                        '&:hover': { color: 'common.white', textDecoration: 'underline' },
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
      <Box
        component="aside"
        aria-label="Legal Information"
        sx={{
          bgcolor: 'common.black',
          color: 'rgba(255, 255, 255, 0.7)',
          py: 1.25,
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
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
              rowGap: 0.75,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                columnGap: { xs: 1.25, sm: 1.5 },
                rowGap: 0.5,
              }}
            >
              {footerContent.legalLinks.map((link, index) => (
                <Box key={link.label} sx={{ display: 'inline-flex', alignItems: 'center', gap: { xs: 1.25, sm: 1.5 } }}>
                  <Link
                    href={link.href}
                    sx={{
                      color: 'inherit',
                      fontSize: '0.75rem',
                      lineHeight: 1.5,
                      py: 0.25,
                      textDecoration: 'none',
                      '&:hover': { color: 'common.white', textDecoration: 'underline' },
                    }}
                  >
                    {link.label}
                  </Link>
                  {index < footerContent.legalLinks.length - 1 && (
                    <Box component="span" aria-hidden="true" sx={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                      ·
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
            <Typography sx={{ color: 'inherit', fontSize: '0.75rem', lineHeight: 1.5 }}>
              {footerContent.copyright}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default SiteFooter;
