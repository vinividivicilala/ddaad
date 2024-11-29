import { Variants } from 'framer-motion'

export const copyVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: 'easeInOut',
    },
  },
}
