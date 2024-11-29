'use client'

import { motion } from 'framer-motion'
import { ClockIcon } from '@heroicons/react/24/outline'

import Post from '@/types/Post'
import useWordRevealAnimation from '@/hooks/useWordRevealAnimation'
import { iconVariants } from './PostHero.animations'

const PostHero = ({ title, readingTime }: Partial<Post>) => {
  const animatedContent = useWordRevealAnimation(readingTime as string)

  return (
    <div className="hero bg-gray-50 dark:bg-base-200">
      <div className="hero-content max-w-screen-lg p-8">
        <div className="text-center py-6 md:py-12">
          <h1 className="text-3xl font-medium mb-2 md:text-4xl text-black dark:text-white">
            {title}
          </h1>

          <h2 className="flex flex-row space-x-1 items-center justify-center text-md font-normal text-gray-500 dark:text-zinc-400">
            <motion.div variants={iconVariants} initial="hidden" animate="visible">
              <ClockIcon className="w-5 h-5" />
            </motion.div>
            <span>{animatedContent}</span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default PostHero
