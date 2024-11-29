import Link from 'next/link'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

import { useTheme } from '@/context/ThemeProvider'
import ActiveLink from '@/components/ActiveLink'
import { BlogIcon, GithubIcon, LinkedinIcon } from '@/icons'

const Menu = () => {
  const { theme, toggleTheme } = useTheme()
  const isDarkTheme = theme === 'dark'

  return (
    <>
      <li>
        <ActiveLink className="font-medium" href="/blog" activeClassName="active">
          <BlogIcon />
        </ActiveLink>
      </li>
      <li>
        <Link
          className="font-medium"
          href="https://www.linkedin.com/in/adrianapan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </Link>
      </li>
      <li>
        <Link
          className="font-medium"
          href="https://github.com/AdrianApan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </Link>
      </li>
      <li>
        <button className="py-2 px-4" onClick={toggleTheme}>
          {isDarkTheme ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </button>
      </li>
    </>
  )
}

export default Menu
