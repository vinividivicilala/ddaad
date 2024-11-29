'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

import { copyVariants } from './Connect.animations'

const Connect = () => (
  <section className="bg-gray-50 dark:bg-base-200 w-full py-8">
    <div className="max-w-screen-lg px-8 py-6 mx-auto text-left">
      <motion.h2
        variants={copyVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl font-medium md:text-4xl text-black dark:text-white leading-10 md:leading-12"
      >
        <p>Looking to discuss a project or a role?</p>
        <Link
          href="https://www.linkedin.com/in/adrianapan/"
          target="_blank"
          className="inline-flex space-x-1 items-center mx-auto text-primary hover:opacity-80"
        >
          <span>Let&apos;s connect</span>
          <ArrowLongRightIcon className="h-8 w-8" />
        </Link>
      </motion.h2>
    </div>
  </section>
)

export default Connect
