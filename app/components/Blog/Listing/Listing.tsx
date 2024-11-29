import React from 'react'

import Post from '@/types/Post'
import { Card } from '@/components/Blog'

interface Props {
  posts: Partial<Post>[]
}

const Listing = ({ posts }: Props) => (
  <section className="w-full max-w-screen-lg mx-auto px-8 my-8 text-left">
    {posts.map((item) => (
      <React.Fragment key={item?.slug}>
        <Card post={item} />
      </React.Fragment>
    ))}
  </section>
)

export default Listing
