import { motion, Variants } from 'framer-motion'

const parentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
}

const childVariants: Variants = {
  hidden: {
    x: 20,
    opacity: 0,
    transition: {
      type: 'easeInOut',
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'easeInOut',
    },
  },
}

const useWordRevealAnimation = (text: string, highlightedWords?: string[]) => {
  const map = text.split(' ')

  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      {map.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={childVariants}>
          {highlightedWords && highlightedWords.includes(word) ? (
            <span className="text-primary">{word}</span>
          ) : (
            word
          )}{' '}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default useWordRevealAnimation
