import { Box, Container, Link, Typography } from '@mui/material';
import { FONT_STACK_SERIF } from '../../../app/theme';
import { conversationContent } from '../data/homeContent';

function FloralOrnament() {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#222222',
        flexShrink: 0,
      }}
    >
      <svg width="34" height="34" viewBox="0 0 100 100" fill="currentColor">
        {/* Central rosette */}
        <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
        {/* 6 Petals */}
        <circle cx="50" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="67" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="67" cy="60" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="50" cy="70" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="33" cy="60" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="33" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
        {/* Swirling tendril curls */}
        <path d="M 32 30 C 24 20, 14 24, 16 32 C 18 36, 24 36, 26 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M 38 24 C 36 14, 46 12, 48 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </Box>
  );
}

export function ConversationSection() {
  return (
    <Box
      id="conversations"
      component="section"
      aria-label="Start a Conversation"
      sx={{
        // Background color #dcdad8 per user request
        bgcolor: '#dcdad8',
        color: 'text.primary',
        py: { xs: 6, md: 8, lg: 9 },
        borderTop: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr 1px 1.4fr' },
            gap: { xs: 4, md: 6, lg: 8 },
            alignItems: 'center',
          }}
        >
          {/* Left Column: Eyebrow + Serif Headline */}
          <Box>
            <Box sx={{ mb: 2.5 }}>
              <Typography
                component="span"
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#222222',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #222222',
                  pb: 0.5,
                }}
              >
                {conversationContent.eyebrow}
              </Typography>
            </Box>
            <Typography
              component="h2"
              sx={{
                fontFamily: FONT_STACK_SERIF,
                // Reduced font size per user request
                fontSize: { xs: '1.6rem', sm: '1.95rem', md: '2.25rem', lg: '2.5rem' },
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#1a1a1a',
                maxWidth: 440,
              }}
            >
              We Believe In
              <br />
              Meaningful
              <br />
              Conversations
            </Typography>
          </Box>

          {/* Middle Vertical Divider Line */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              height: '100%',
              minHeight: 200,
              width: '1px',
              bgcolor: 'rgba(0, 0, 0, 0.18)',
              alignSelf: 'stretch',
            }}
          />

          {/* Right Column: Editorial Body Text + Floral Quote */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 3.5, md: 5 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1.025rem', md: '1.125rem' },
                lineHeight: 1.7,
                color: '#2c2c2c',
                maxWidth: 540,
                fontWeight: 400,
              }}
            >
              {conversationContent.bodyText}
            </Typography>

            {/* Bottom Floral Ornament and Quote */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
              }}
            >
              <FloralOrnament />
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: '0.95rem', md: '1.05rem' },
                    lineHeight: 1.5,
                    color: '#2c2c2c',
                    fontWeight: 400,
                  }}
                >
                  Every great piece begins with a conversation.
                  <br />
                  <Link
                    href={`mailto:${conversationContent.email}`}
                    aria-label="Let's Talk"
                    sx={{
                      color: '#1a1a1a',
                      fontWeight: 500,
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(0,0,0,0.4)',
                      transition: 'border-color 0.2s ease, color 0.2s ease',
                      '&:hover': {
                        color: '#0071e3',
                        borderColor: '#0071e3',
                      },
                    }}
                  >
                    Let&apos;s start yours.
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ConversationSection;
