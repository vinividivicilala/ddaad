import { Variants } from 'framer-motion'

export const iconVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: () => ({
    opacity: 1,
    transition: { type: 'easeInOut' },
  }),
}
