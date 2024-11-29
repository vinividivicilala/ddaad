'use client'

import { motion } from 'framer-motion'
import dayjs from 'dayjs'

import Menu from '@/components/Menu'
import { navigationVariants } from './Footer.animations'

const Footer = () => {
  const currentYear = dayjs().year()

  return (
    <>
      <footer className="footer w-full place-items-center text-center p-6 bg-gray-100 dark:bg-base-300 text-base-content text-xs font-normal mb-16 md:mb-0">
        &copy; {currentYear} Adrian Apan
      </footer>
      <motion.div
        className="btm-nav menu bg-gray-100 dark:bg-base-300 pt-2 pb-4 md:hidden"
        variants={navigationVariants}
        initial="hidden"
        animate="visible"
      >
        <Menu />
      </motion.div>
    </>
  )
}

export default Footer
