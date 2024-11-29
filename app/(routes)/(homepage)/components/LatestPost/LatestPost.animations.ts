import { Variants } from 'framer-motion'

export const subtitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25 * i,
      duration: 0.5,
      type: 'easeInOut',
    },
  }),
}

export const articleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'easeInOut',
    },
  },
}
