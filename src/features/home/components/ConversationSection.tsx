import { Box, Container, Link, Typography } from '@mui/material';
import { FONT_STACK_SERIF } from '../../../app/theme';
import { Reveal } from '../../../components/common/Reveal';
import { conversationContent } from '../data/homeContent';

function FloralOrnament() {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#1a1a1a',
        flexShrink: 0,
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
          transform: 'rotate(45deg) scale(1.08)',
        },
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
        // Background color #f9f9f9 with subtle atmospheric light depth
        bgcolor: '#f9f9f9',
        backgroundImage:
          'radial-gradient(circle at 85% 20%, rgba(0, 113, 227, 0.04) 0%, transparent 55%), radial-gradient(circle at 12% 80%, rgba(0, 0, 0, 0.02) 0%, transparent 45%)',
        color: 'text.primary',
        py: { xs: 6.5, md: 8.5, lg: 10 },
        borderTop: '1px solid rgba(0,0,0,0.06)',
        position: 'relative',
        overflow: 'hidden',
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
          <Reveal>
            <Box>
              <Box sx={{ mb: 2.5 }}>
                <Typography
                  component="span"
                  sx={{
                    display: 'inline-block',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#222222',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    borderBottom: '1.5px solid #222222',
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
                  fontSize: { xs: '1.65rem', sm: '2rem', md: '2.35rem', lg: '2.6rem' },
                  fontWeight: 500,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  color: '#111111',
                  maxWidth: 460,
                }}
              >
                We Believe In
                <br />
                Meaningful
                <br />
                Conversations
              </Typography>
            </Box>
          </Reveal>

          {/* Middle Vertical Divider Line with gradient fade */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              height: '100%',
              minHeight: 220,
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.16) 15%, rgba(0, 0, 0, 0.16) 85%, transparent)',
              alignSelf: 'stretch',
            }}
          />

          {/* Right Column: Editorial Body Text + Floral Quote */}
          <Reveal delay={0.08}>
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
                  lineHeight: 1.75,
                  color: '#2d2d2d',
                  maxWidth: 560,
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
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
                      fontSize: { xs: '0.975rem', md: '1.05rem' },
                      lineHeight: 1.6,
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
                        color: '#111111',
                        fontWeight: 600,
                        textDecoration: 'none',
                        borderBottom: '1.5px solid rgba(0, 0, 0, 0.45)',
                        pb: 0.25,
                        transition: 'border-color 0.25s ease, color 0.25s ease',
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
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}

export default ConversationSection;
