'use client'

import { useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'

const ProgressIndicator = () => {
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
}

export default ProgressIndicator
