import fs from 'fs'
import { join } from 'path'
import matter, { Input } from 'gray-matter'
import readingTime from 'reading-time'

import Post from '@/types/Post'

const postsDirectory = join(process.cwd(), '_posts')

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory)
}

export const getPostBySlug = (slug: string, fields: string[] = []): Partial<Post> => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const isRealPost = fs.readdirSync(postsDirectory).includes(`${realSlug}.md`)

  const fileContents = isRealPost ? fs.readFileSync(fullPath, 'utf8') : ''

  const { data, content } = matter(fileContents)

  const post: { [key: string]: any } = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      post[field] = realSlug
    }
    if (field === 'content') {
      post[field] = content
    }
    if (field === 'readingTime') {
      post[field] = readingTime(content).text
    }
    if (data[field]) {
      post[field] = data[field]
    }
  })

  return post
}

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((a, b) => ((a.date as string) > (b.date as string) ? -1 : 1))
  return posts
}
