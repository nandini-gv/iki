import { Box, Button, Container, Link, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Reveal } from '../../../components/common/Reveal';
import { conversationContent } from '../data/homeContent';

export function ConversationSection() {
  return (
    <Box
      id="conversations"
      component="section"
      aria-label="Start a Conversation"
      sx={{
        bgcolor: 'common.white',
        color: 'text.primary',
        py: { xs: 4.5, md: 6 },
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 2fr) minmax(0, 3fr)' },
            gap: { xs: 2.5, md: 4, lg: 6 },
            alignItems: 'stretch',
          }}
        >
          <Reveal sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography
              sx={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'text.secondary',
                letterSpacing: '0.08em',
                mb: 1,
              }}
            >
              {conversationContent.eyebrow}
            </Typography>
            <Typography
              component="h2"
              sx={{
                maxWidth: 420,
                fontSize: 'clamp(1.625rem, 2.7vw, 2.25rem)',
                fontWeight: 600,
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
              }}
            >
              {conversationContent.heading}
            </Typography>
          </Reveal>
          <Reveal
            delay={0.08}
            sx={{
              minWidth: 0,
              pl: { md: 4, lg: 6 },
              borderLeft: { md: '1px solid' },
              borderColor: { md: 'divider' },
            }}
          >
            <Typography sx={{ fontSize: '1rem', lineHeight: 1.6, mb: 1.25 }}>
              {conversationContent.bodyText}
            </Typography>
            <Typography sx={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'text.secondary', mb: 2 }}>
              {conversationContent.subText}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.25, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                href={`mailto:${conversationContent.email}`}
                startIcon={<EmailOutlinedIcon sx={{ fontSize: 18 }} />}
                sx={{
                  minHeight: 44,
                  borderRadius: 0,
                  px: 2.5,
                  py: 1,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  boxShadow: 'none',
                  '&:hover': { boxShadow: 'none', transform: 'none' },
                }}
              >
                {conversationContent.ctaText}
              </Button>
              <Button
                variant="outlined"
                href="#"
                endIcon={<ArrowOutwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  minHeight: 44,
                  color: 'text.primary',
                  borderColor: 'divider',
                  borderRadius: 0,
                  px: 2.5,
                  py: 1,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  '&:hover': { borderColor: 'text.secondary', bgcolor: 'action.hover', transform: 'none' },
                }}
              >
                Book a Demo
              </Button>
            </Box>
            <Box
              component="dl"
              sx={{ m: 0, mt: 2, display: 'flex', columnGap: { xs: 3, sm: 4 }, rowGap: 1.5, flexWrap: 'wrap' }}
            >
              <Box sx={{ minWidth: 0 }}>
                <Typography component="dt" sx={{ fontSize: '0.75rem', color: 'text.secondary', mb: 0.25 }}>
                  Email
                </Typography>
                <Box component="dd" sx={{ m: 0 }}>
                  <Link
                    href={`mailto:${conversationContent.email}`}
                    underline="hover"
                    sx={{ fontSize: '0.875rem', color: 'text.primary', overflowWrap: 'anywhere' }}
                  >
                    {conversationContent.email}
                  </Link>
                </Box>
              </Box>
              <Box>
                <Typography component="dt" sx={{ fontSize: '0.75rem', color: 'text.secondary', mb: 0.25 }}>
                  Response Time
                </Typography>
                <Typography component="dd" sx={{ m: 0, fontSize: '0.875rem' }}>
                  Within 2 hours
                </Typography>
              </Box>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}

export default ConversationSection;
