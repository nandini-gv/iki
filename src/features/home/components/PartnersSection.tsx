import { Box, Container, Link, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { Reveal } from '../../../components/common/Reveal';
import { partnerContent } from '../data/homeContent';

function MicrosoftLogo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
      <svg width="24" height="24" viewBox="0 0 21 21">
        <rect x="1" y="1" width="9" height="9" fill="#f25022" />
        <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
        <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
        <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
      </svg>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: { xs: '1.2rem', md: '1.4rem' },
          color: '#5e5e5e',
          letterSpacing: '-0.02em',
          fontFamily: 'Segoe UI, system-ui, sans-serif',
        }}
      >
        Microsoft
      </Typography>
    </Box>
  );
}

function GoogleCloudLogo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
      </svg>
      <Typography
        sx={{
          fontSize: { xs: '1.2rem', md: '1.4rem' },
          letterSpacing: '-0.01em',
          fontFamily: 'Google Sans, Roboto, sans-serif',
        }}
      >
        <Box component="span" sx={{ color: '#4285F4', fontWeight: 600 }}>G</Box>
        <Box component="span" sx={{ color: '#EA4335', fontWeight: 600 }}>o</Box>
        <Box component="span" sx={{ color: '#FBBC05', fontWeight: 600 }}>o</Box>
        <Box component="span" sx={{ color: '#4285F4', fontWeight: 600 }}>g</Box>
        <Box component="span" sx={{ color: '#34A853', fontWeight: 600 }}>l</Box>
        <Box component="span" sx={{ color: '#EA4335', fontWeight: 600 }}>e</Box>
        <Box component="span" sx={{ ml: 0.6, color: '#5f6368', fontWeight: 500 }}>Cloud</Box>
      </Typography>
    </Box>
  );
}

function AwsLogo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <svg width="68" height="38" viewBox="0 0 100 60" fill="none">
        <path d="M26.2 31.8c-2.4 0-4.3-.8-5.8-2.3-1.5-1.5-2.2-3.5-2.2-6s.7-4.5 2.2-6c1.5-1.5 3.4-2.3 5.8-2.3 2.4 0 4.3.8 5.8 2.3 1.5 1.5 2.2 3.5 2.2 6s-.7 4.5-2.2 6c-1.5 1.5-3.4 2.3-5.8 2.3zm0-3.3c1.4 0 2.5-.5 3.4-1.6.9-1.1 1.3-2.5 1.3-4.4s-.4-3.3-1.3-4.4c-.9-1.1-2-1.6-3.4-1.6s-2.5.5-3.4 1.6c-.9 1.1-1.3 2.5-1.3 4.4s.4 3.3 1.3 4.4c.9 1.1 2 1.6 3.4 1.6zM46.7 31.2h-3.4l-5.6-15.4h3.7l3.7 11.2 3.5-11.2h3.7l-5.6 15.4zm16.5.6c-2.6 0-4.7-.7-6.3-2.1l1.8-2.7c1.3 1 2.8 1.6 4.5 1.6 1.2 0 2.1-.3 2.7-.8.6-.5.9-1.1.9-1.9 0-.6-.2-1.1-.6-1.5-.4-.4-1.2-.8-2.3-1.1l-2.4-.7c-1.8-.5-3.1-1.2-4-2.2-.9-1-1.3-2.2-1.3-3.7 0-1.8.7-3.3 2-4.4 1.4-1.1 3.2-1.7 5.4-1.7 2.2 0 4.1.6 5.6 1.7l-1.6 2.7c-1.2-.8-2.6-1.3-4-1.3-1.1 0-1.9.3-2.5.8-.6.5-.9 1.1-.9 1.8 0 .6.2 1.1.6 1.5.4.4 1.1.7 2.1 1l2.4.7c2 .6 3.4 1.3 4.3 2.3.9 1 1.3 2.2 1.3 3.8 0 1.9-.7 3.4-2 4.5-1.3 1.1-3.2 1.7-5.7 1.7z" fill="#232F3E"/>
        <path d="M78.6 44.8C65.5 53.6 47.2 56 30.6 51.2c-7.4-2.1-14.2-5.7-20-10.4-.6-.5-.1-1.2.6-.8 16.4 9.4 36.9 11.3 55.4 3.2 1.2-.5 2.4-1.1 3.5-1.8.8-.5 1.6.3 1 1z" fill="#FF9900"/>
        <path d="M82.8 41.3c-.8-.9-5.1-.4-7.5.3-.4.1-.4-.3-.1-.5 2.1-1.5 5.6-1.1 6.3-.3.8.9.2 4.4-1.6 6.3-.3.3-.6.1-.5-.2.5-1.3 1.7-4.7.9-5.6z" fill="#FF9900"/>
      </svg>
    </Box>
  );
}

function CiscoLogo() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.25 }}>
      <svg width="58" height="22" viewBox="0 0 120 48">
        <rect x="4" y="24" width="6" height="24" rx="3" fill="#00BCEB"/>
        <rect x="18" y="14" width="6" height="34" rx="3" fill="#00BCEB"/>
        <rect x="32" y="24" width="6" height="24" rx="3" fill="#00BCEB"/>
        <rect x="46" y="4" width="6" height="44" rx="3" fill="#00BCEB"/>
        <rect x="60" y="24" width="6" height="24" rx="3" fill="#00BCEB"/>
        <rect x="74" y="4" width="6" height="44" rx="3" fill="#00BCEB"/>
        <rect x="88" y="24" width="6" height="24" rx="3" fill="#00BCEB"/>
        <rect x="102" y="14" width="6" height="34" rx="3" fill="#00BCEB"/>
        <rect x="116" y="24" width="6" height="24" rx="3" fill="#00BCEB"/>
      </svg>
      <Typography sx={{ fontWeight: 800, fontSize: '1.15rem', letterSpacing: '0.12em', color: '#00BCEB', lineHeight: 1 }}>
        CISCO
      </Typography>
    </Box>
  );
}

function AppleLogo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <svg width="30" height="38" viewBox="0 0 170 170" fill="#111111">
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.74 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.7-7.85-12.04-14.34-6.3-9.49-11.24-20.47-14.82-32.96-3.58-12.48-5.37-24.37-5.37-35.67 0-14.42 3.6-26.47 10.8-36.14 7.2-9.67 16.3-14.6 27.31-14.82 5.01 0 10.45 1.25 16.32 3.75 5.87 2.5 9.77 3.81 11.69 3.92 1.93-.11 6.03-1.47 12.31-4.08 6.28-2.61 11.83-3.81 16.65-3.6 12.27.65 22.38 5.16 30.34 13.53-10.74 6.53-15.98 15.54-15.73 27.02.25 9.04 3.75 16.66 10.5 22.86 6.75 6.2 14.54 9.68 23.36 10.44-2.13 6.44-4.82 12.82-8.08 19.14l-2.88 5.67zm-32.98-111.45c0 4.14-1.01 8.28-3.03 12.42-2.02 4.14-4.94 7.68-8.76 10.62-3.71 2.83-7.73 4.54-12.06 5.13-.33-1.3-.49-2.5-.49-3.6 0-4.03 1.09-8.23 3.27-12.6 2.18-4.37 5.1-7.9 8.76-10.59 3.82-2.83 7.89-4.57 12.21-5.23.06 1.25.1 2.54.1 3.85z"/>
      </svg>
    </Box>
  );
}

interface PartnerItem {
  name: string;
  type: 'component' | 'image';
  component?: React.ComponentType;
  src?: string;
  height?: { xs: number; sm: number; md: number };
  maxWidth?: { xs: number; sm: number; md: number };
}

const ALL_PARTNER_LOGOS: PartnerItem[] = [
  {
    name: 'Standard Chartered',
    type: 'image',
    src: '/images/standard-chartered.svg',
    height: { xs: 26, sm: 30, md: 32 },
    maxWidth: { xs: 130, sm: 155, md: 170 },
  },
  { name: 'Microsoft', type: 'component', component: MicrosoftLogo },
  {
    name: 'Bank of America',
    type: 'image',
    src: '/images/bank-of-america.svg',
    height: { xs: 20, sm: 22, md: 24 },
    maxWidth: { xs: 180, sm: 210, md: 230 },
  },
  { name: 'Google Cloud', type: 'component', component: GoogleCloudLogo },
  {
    name: 'Siemens',
    type: 'image',
    src: '/images/siemens.svg',
    height: { xs: 20, sm: 22, md: 24 },
    maxWidth: { xs: 120, sm: 140, md: 150 },
  },
  { name: 'AWS', type: 'component', component: AwsLogo },
  {
    name: 'KPMG',
    type: 'image',
    src: '/images/kpmg.svg',
    height: { xs: 24, sm: 28, md: 30 },
    maxWidth: { xs: 90, sm: 105, md: 115 },
  },
  { name: 'Cisco', type: 'component', component: CiscoLogo },
  {
    name: 'PwC',
    type: 'image',
    src: '/images/pwc-clipped.svg',
    height: { xs: 24, sm: 28, md: 30 },
    maxWidth: { xs: 70, sm: 80, md: 90 },
  },
  {
    name: 'Fidelity International',
    type: 'image',
    src: '/images/fidelity-international.svg',
    height: { xs: 22, sm: 26, md: 28 },
    maxWidth: { xs: 120, sm: 140, md: 150 },
  },
  {
    name: 'CBRE',
    type: 'image',
    src: '/images/cbre.svg',
    height: { xs: 22, sm: 26, md: 28 },
    maxWidth: { xs: 95, sm: 110, md: 120 },
  },
  { name: 'Apple', type: 'component', component: AppleLogo },
];

function PartnerLogoItem({ partner }: { partner: PartnerItem }) {
  const LogoComp = partner.component;
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        px: { xs: 1.5, sm: 2.5, md: 3 },
        py: 1,
        opacity: 0.88,
        transition: 'opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
          opacity: 1,
          transform: 'scale(1.05)',
        },
      }}
    >
      {partner.type === 'component' && LogoComp ? (
        <LogoComp />
      ) : (
        <Box
          component="img"
          src={partner.src}
          alt={partner.name}
          loading="eager"
          decoding="async"
          sx={{
            height: partner.height,
            maxWidth: partner.maxWidth,
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      )}
    </Box>
  );
}

export function PartnersSection() {
  return (
    <Box
      id="partners"
      component="section"
      aria-label="Innovation Partners"
      sx={{
        bgcolor: 'common.white',
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(0, 113, 227, 0.03) 0%, transparent 70%)',
        color: 'text.primary',
        py: { xs: 5.5, md: 7.5 },
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        {/* Header row: Title on left, Link on right */}
        <Reveal
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
            mb: { xs: 4, md: 5.5 },
          }}
        >
          <Typography
            component="h2"
            sx={{
              maxWidth: 500,
              fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
              fontWeight: 600,
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              color: '#1a1a1a',
            }}
          >
            {partnerContent.title}
          </Typography>
          <Link
            href="#partners"
            underline="none"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.85,
              color: '#0071e3',
              fontSize: '0.925rem',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              py: 0.5,
              transition: 'color 0.2s ease, opacity 0.2s ease',
              '& .partner-arrow': {
                transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              },
              '&:hover': {
                color: '#005bb5',
                '& .partner-arrow': {
                  transform: 'translateX(4px)',
                },
              },
            }}
          >
            Learn more about our partners
            <EastIcon className="partner-arrow" sx={{ fontSize: 16 }} />
          </Link>
        </Reveal>

        {/* Brand icons continuous seamless auto-scrolling slider */}
        <Reveal delay={0.08}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden',
              py: 2,
              maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              touchAction: 'pan-y',
              '&:hover .partner-slider-track': {
                animationPlayState: 'paused',
              },
            }}
          >
            <Box
              className="partner-slider-track"
              sx={{
                display: 'flex',
                width: 'max-content',
                animation: 'partnerInfiniteMarquee 38s linear infinite',
                willChange: 'transform',
                '@keyframes partnerInfiniteMarquee': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-50%)' },
                },
                '@media (prefers-reduced-motion: reduce)': {
                  animation: 'none',
                },
              }}
            >
              {/* Set A */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 4, sm: 6, md: 8 },
                  pr: { xs: 4, sm: 6, md: 8 },
                  flexShrink: 0,
                }}
              >
                {ALL_PARTNER_LOGOS.map((partner, index) => (
                  <PartnerLogoItem key={`set-a-${partner.name}-${index}`} partner={partner} />
                ))}
              </Box>

              {/* Set B (Identical replica for seamless infinite loop) */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 4, sm: 6, md: 8 },
                  pr: { xs: 4, sm: 6, md: 8 },
                  flexShrink: 0,
                }}
              >
                {ALL_PARTNER_LOGOS.map((partner, index) => (
                  <PartnerLogoItem key={`set-b-${partner.name}-${index}`} partner={partner} />
                ))}
              </Box>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}

export default PartnersSection;
