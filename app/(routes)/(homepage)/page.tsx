import { HomeHero } from '@/components/Hero'

import { getAllPosts } from '@/lib/api'

import Overview from '@/(routes)/(homepage)/components/Overview'
import Projects from '@/(routes)/(homepage)/components/Projects'
import Connect from '@/(routes)/(homepage)/components/Connect'
import LatestPost from '@/(routes)/(homepage)/components/LatestPost'

const getPosts = async () => getAllPosts(['title', 'excerpt', 'date', 'slug', 'readingTime'])

const Homepage = async () => {
  const posts = await getPosts()

  return (
    <>
      <HomeHero />
      <Overview />
      <Projects />
      <LatestPost post={posts[0]} />
      <Connect />
    </>
  )
}

export default Homepage
