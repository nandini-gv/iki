import { Box, Container, Typography } from '@mui/material';

/**
 * Phase 1 placeholder view.
 * The homepage and its sections will be implemented in Phase 3.
 */
export function FoundationPlaceholder() {
  return (
    <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
      <Box
        sx={{
          p: 6,
          borderRadius: 4,
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="overline" color="primary" fontWeight={600} letterSpacing="0.1em">
          IKI Career Platform
        </Typography>
        <Typography variant="h3" component="h1" sx={{ mt: 1, mb: 2, fontWeight: 700 }}>
          Phase 1 Foundation Ready
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Production application scaffolded with React, TypeScript, Material UI, Vite, Vitest,
          and Cloudflare Workers Static Assets configuration.
        </Typography>
      </Box>
    </Container>
  );
}

export default FoundationPlaceholder;
