import { ReactNode } from 'react';
import { Box } from '@mui/material';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#000000' }}>
      <SiteHeader />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <SiteFooter />
    </Box>
  );
}

export default PageContainer;
