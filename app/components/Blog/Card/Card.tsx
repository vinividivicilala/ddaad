import dayjs from 'dayjs'
import Link from 'next/link'
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline'

import Post from '@/types/Post'

interface Props {
  post: Partial<Post>
}

const Card = ({ post }: Props) => {
  const { title, excerpt, date, slug, readingTime } = post

  return (
    <div className="mb-12 w-full">
      <Link
        className="prose max-w-full flex flex-col rounded-md p-6 border border-base-300 dark:border-zinc-600 w-full text-left group hover:border-primary"
        href={`/blog/${slug}`}
      >
        <h2 className="w-full font-medium text-lg text-black dark:text-white mb-2">
          <span className="group-hover:text-primary">{title}</span>{' '}
          <span className="opacity-0 group-hover:opacity-100 group-hover:text-primary">→</span>
        </h2>
        <p>{excerpt}</p>

        <div className="flex flex-col md:flex-row items-start md:items-center text-xs border-t border-base-300 dark:border-zinc-600 mt-6 pt-6">
          <div className="flex flex-row space-x-1 items-center mb-2 md:mb-0">
            <CalendarDaysIcon className="w-4 h-4" />
            <span>Published on: {dayjs(date).format('DD MMMM, YYYY')}</span>
          </div>
          <div className="flex flex-row space-x-1 md:ml-auto items-center">
            <ClockIcon className="w-4 h-4" />
            <span>{readingTime}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
