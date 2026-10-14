import { Container, Typography } from '@mui/material';

export function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
        404 — Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary">
        The requested page could not be located.
      </Typography>
    </Container>
  );
}

export default NotFound;
