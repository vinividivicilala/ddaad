'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import Post from '@/types/Post'
import { Card } from '@/components/Blog'
import { subtitleVariants, articleVariants } from './LatestPost.animations'

interface Props {
  post: Partial<Post>
}

const LatestPost = ({ post }: Props) => (
  <section className="w-full py-2">
    <div className="max-w-screen-lg px-8 py-6 mx-auto">
      <div className="mb-12 md:mb-8">
        <h2 className="text-3xl font-medium md:text-4xl text-black dark:text-white leading-10 md:leading-12">
          Latest from the Blog
        </h2>
        <motion.h3
          className="text-md font-normal md:text-lg text-gray-400 dark:text-zinc-500"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          For more articles{' '}
          <Link
            href="/blog"
            className="inline-flex space-x-1 items-center mx-auto text-primary hover:opacity-80"
          >
            visit the Blog section
          </Link>
        </motion.h3>
      </div>

      <motion.div variants={articleVariants} initial="hidden" animate="visible">
        <Card post={post} />
      </motion.div>
    </div>
  </section>
)

export default LatestPost
