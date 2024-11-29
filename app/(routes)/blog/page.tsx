import React from 'react'

import { getAllPosts } from '@/lib/api'
import { BlogHero } from '@/components/Hero'
import { Listing } from '@/components/Blog'

const getPosts = async () => getAllPosts(['title', 'excerpt', 'date', 'slug', 'readingTime'])

const Blog = async () => {
  const posts = await getPosts()

  return (
    <>
      <BlogHero />
      <Listing posts={posts} />
    </>
  )
}

export default Blog
