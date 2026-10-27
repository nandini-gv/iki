import type { ReactNode } from 'react';
import { Box, type BoxProps } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';

export interface RevealProps extends BoxProps {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  sx,
  ...rest
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Box
      component={motion.div}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: shouldReduceMotion ? 0 : duration, delay }}
      sx={sx}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default Reveal;
