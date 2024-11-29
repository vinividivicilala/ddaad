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

export const listItemsVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, type: 'spring' },
  },
}
