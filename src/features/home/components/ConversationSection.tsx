import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { FONT_STACK_SERIF } from '../../../app/theme';
import { conversationContent } from '../data/homeContent';

export function ConversationSection() {
  return (
    <Box
      id="conversations"
      component="section"
      aria-label="Meaningful Conversations"
      sx={{
        backgroundColor: '#FAF9EE', // Pale cream accent as approved in mockup image (9).png
        color: '#1d1d1f',
        py: { xs: 9, md: 13 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          {/* Left Column: Heading and Eyebrow */}
          <Grid item xs={12} md={5}>
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: '#5c4d37',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  borderBottom: '2px solid #5c4d37',
                  display: 'inline-block',
                  pb: 0.25,
                  mb: 2.5,
                }}
              >
                {conversationContent.eyebrow}
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontFamily: FONT_STACK_SERIF,
                  fontSize: { xs: '2.25rem', sm: '2.85rem', md: '3.4rem' },
                  fontWeight: 500,
                  lineHeight: 1.15,
                  letterSpacing: '-0.015em',
                  color: '#2a1e12',
                }}
              >
                {conversationContent.heading}
              </Typography>
            </Box>
          </Grid>

          {/* Vertical Divider for Desktop */}
          <Grid
            item
            xs={12}
            md={1}
            sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: 'rgba(42, 30, 18, 0.2)', height: 180 }}
            />
          </Grid>

          {/* Right Column: Message, Subtext, and CTA */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 540 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.05rem', md: '1.1875rem' },
                  lineHeight: 1.65,
                  color: '#3d3023',
                  mb: 3.5,
                  fontWeight: 400,
                }}
              >
                {conversationContent.bodyText}
              </Typography>

              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    bgcolor: 'rgba(92, 77, 55, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3d3023',
                    flexShrink: 0,
                  }}
                >
                  <ForumOutlinedIcon />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '1rem',
                    color: '#3d3023',
                    fontWeight: 500,
                  }}
                >
                  {conversationContent.subText}
                </Typography>
              </Stack>

              <Button
                variant="contained"
                href={`mailto:${conversationContent.email}`}
                startIcon={<MailOutlineIcon />}
                sx={{
                  backgroundColor: '#1d1d1f',
                  color: '#ffffff',
                  borderRadius: 9999,
                  px: 4,
                  py: 1.25,
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#000000',
                  },
                }}
              >
                {conversationContent.cta}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ConversationSection;
