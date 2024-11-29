'use client'

import useWordRevealAnimation from '@/hooks/useWordRevealAnimation'

const HomeHero = () => {
  const animatedContent = useWordRevealAnimation(
    'I am a software engineer who enjoys crafting high-quality experiences through creative engineering.',
    ['software', 'engineer'],
  )

  return (
    <div className="hero">
      <div className="hero-content h-full md:h-[calc(100vh-140px)] max-w-screen-lg p-8 py-12">
        <div className="max-w-full">
          <div className="text-center text-4xl font-semibold md:text-5xl text-black dark:text-white mb-2 leading-12 md:leading-14">
            {animatedContent}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
