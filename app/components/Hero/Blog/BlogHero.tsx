'use client'

import useWordRevealAnimation from '@/hooks/useWordRevealAnimation'

const BlogHero = () => {
  const animatedContent = useWordRevealAnimation(
    'A collection of thoughts and various developer resources.',
    ['thoughts', 'developer', 'resources'],
  )

  return (
    <div className="hero bg-gray-50 dark:bg-base-200">
      <div className="hero-content max-w-screen-lg p-8">
        <div className="text-center py-6 md:py-12">
          <h1 className="text-3xl font-medium mb-2 md:text-4xl text-black dark:text-white">Blog</h1>
          <h2 className="text-md font-normal md:text-lg text-gray-500 dark:text-zinc-400">
            {animatedContent}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default BlogHero
