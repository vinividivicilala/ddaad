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
      duration: 0.75,
      type: 'easeInOut',
    },
  }),
}

export const listItemsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: 'spring' },
  },
}
