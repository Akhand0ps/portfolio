import type { Variant } from 'framer-motion';

/**
 * Conservative motion variants following strict guidelines:
 * - Duration: 0.4–0.6s
 * - Easing: easeOut / easeInOut
 * - Only opacity, y, and minimal scale
 * - No spring physics or parallax
 */

type MotionVariants = {
  [key: string]: Variant;
};

export const fadeInUp: MotionVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export const fadeIn: MotionVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
};

export const staggerContainer: MotionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const scaleOnHover: MotionVariants = {
  rest: { 
    scale: 1 
  },
  hover: { 
    scale: 1.01,
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  }
};
