import { Box, IconButton } from '@mui/material';

interface SliderDotsProps {
  count: number;
  active: number;
  onChange: (index: number) => void;
  labelPrefix?: string;
  light?: boolean;
}

export function SliderDots({
  count,
  active,
  onChange,
  labelPrefix = 'Go to slide',
  light = false,
}: SliderDotsProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {Array.from({ length: count }, (_, index) => (
        <IconButton
          key={index}
          type="button"
          aria-label={`${labelPrefix} ${index + 1}`}
          aria-current={index === active ? 'true' : undefined}
          onClick={() => onChange(index)}
          disableRipple
          sx={{
            width: 32,
            height: 44,
            p: 0,
            borderRadius: '50%',
            '&:hover': { backgroundColor: 'transparent', '& span': { opacity: 1 } },
            '&:focus-visible': { outlineOffset: -5 },
          }}
        >
          <Box
            component="span"
            sx={{
              display: 'block',
              width: 7,
              height: 7,
              borderRadius: '50%',
              backgroundColor: index === active
                ? 'primary.main'
                : light ? 'rgba(255,255,255,0.65)' : '#c5c5ca',
              boxShadow: light ? '0 0 0 1px rgba(0,0,0,0.12)' : 'none',
              opacity: index === active ? 1 : 0.8,
              transition: 'background-color 200ms ease, opacity 200ms ease',
              '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
            }}
          />
        </IconButton>
      ))}
    </Box>
  );
}
