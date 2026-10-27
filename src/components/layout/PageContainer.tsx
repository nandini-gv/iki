import { ReactNode } from 'react';
import { Box } from '@mui/material';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#0A0A0B',
        // The header is now sticky (position: sticky), so it does NOT
        // overlay the hero. No extra padding-top is needed here.
      }}
    >
      <SiteHeader />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <SiteFooter />
    </Box>
  );
}

export default PageContainer;
