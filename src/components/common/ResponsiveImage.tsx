import { useState } from 'react';
import { Box, type SxProps } from '@mui/material';
import type { Theme } from '@mui/material/styles';

export interface ResponsiveImageProps {
  src: string;
  alt?: string;
  eager?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
}

export function ResponsiveImage({
  src,
  alt = '',
  eager = false,
  className,
  sx = [],
}: ResponsiveImageProps) {
  const [result, setResult] = useState<{
    src: string;
    status: 'loaded' | 'error';
  } | null>(null);
  const status = result?.src === src ? result.status : 'loading';

  return (
    <Box
      className={className}
      aria-busy={status === 'loading'}
      sx={[
        {
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          backgroundColor: 'action.hover',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        key={src}
        component="img"
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
        onLoad={() => setResult({ src, status: 'loaded' })}
        onError={() => setResult({ src, status: 'error' })}
        sx={{
          display: status === 'error' ? 'none' : 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: status === 'loaded' ? 1 : 0,
          transition: 'opacity 200ms ease',
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
          },
        }}
      />
      {status === 'error' && (
        <Box
          role={alt ? 'img' : undefined}
          aria-label={alt || undefined}
          aria-hidden={!alt || undefined}
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text.secondary',
            fontSize: '0.75rem',
          }}
        >
          Image unavailable
        </Box>
      )}
    </Box>
  );
}
