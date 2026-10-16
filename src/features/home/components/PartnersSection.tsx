import { Box, Container, Link, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { partnerContent } from '../data/homeContent';

export function PartnersSection() {
  return (
    <Box
      id="partners"
      component="section"
      aria-label="Innovation Partners"
      sx={{
        backgroundColor: '#0a0d14',
        py: { xs: 7, md: 9 },
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
            mb: 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.45rem', sm: '1.75rem' },
              fontWeight: 600,
              color: '#ffffff',
              letterSpacing: '-0.015em',
            }}
          >
            {partnerContent.title}
          </Typography>
          <Link
            href="#opportunities"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              color: '#47a3ff',
              fontSize: '0.9375rem',
              fontWeight: 500,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {partnerContent.ctaText}
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Link>
        </Box>

        {/* Partner Logos Row */}
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems="center"
          gap={{ xs: 3, sm: 4, md: 5 }}
        >
          {partnerContent.partners.map((partner) => (
            <Box
              key={partner.name}
              sx={{
                px: 2.5,
                py: 1.5,
                borderRadius: 3,
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.07)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                }}
              >
                {partner.name}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default PartnersSection;
