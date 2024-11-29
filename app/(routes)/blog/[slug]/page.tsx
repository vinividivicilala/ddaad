import Link from 'next/link'
import dayjs from 'dayjs'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'

import Post from '@/types/Post'
import { getPostBySlug, getAllPosts } from '@/lib/api'
import Content from '@/components/Blog/Content'
import ProgressIndicator from '@/components/ProgressIndicator'
import { PostHero } from '@/components/Hero'

interface Props {
  params: Partial<Post>
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug'])

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params

  const post = getPostBySlug(slug as string, [
    'title',
    'excerpt',
    'icon',
    'date',
    'slug',
    'content',
  ])

  return {
    title: `${post.title} | Adrian Apan`,
    description: post.excerpt,
  }
}

const Post = async ({ params }: Props) => {
  const { slug } = params

  const post = getPostBySlug(slug as string, [
    'title',
    'excerpt',
    'icon',
    'date',
    'slug',
    'content',
    'readingTime',
  ])

  const content = post.content || ''

  if (post?.content === '') {
    notFound()
  }

  return (
    <>
      <ProgressIndicator />
      <PostHero title={post?.title} readingTime={post?.readingTime} />
      <section className="w-full max-w-screen-lg mx-auto px-8 my-8 text-left">
        <div className="flex flex-col-reverse sm:flex-row justify-between w-full align-center text-xs mb-8 bg-gray-50 dark:bg-base-200 py-4 sm:py-2 px-4 rounded-md">
          <div className="breadcrumbs hidden lg:block">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>{post?.title}</li>
            </ul>
          </div>

          <div className="lg:hidden block">
            <Link href="/blog">← Back to overview</Link>
          </div>

          <div className="flex flex-row space-x-1 items-center mb-2 sm:mb-0">
            <CalendarDaysIcon className="w-4 h-4 md:w-3 md:h-3" />
            <span>Published on: {dayjs(post?.date).format('DD MMMM, YYYY')}</span>
          </div>
        </div>

        <Content content={content} />
      </section>
    </>
  )
}

export default Post
