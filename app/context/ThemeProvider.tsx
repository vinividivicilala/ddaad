'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface InitialStateProps {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = createContext({} as InitialStateProps)

export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState('light')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userColorScheme =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'

      const localTheme = window.localStorage.getItem('theme')
      if (!localTheme) {
        setTheme(userColorScheme)
        window.localStorage.setItem('theme', userColorScheme)
        document.querySelector('html')?.setAttribute('data-theme', userColorScheme)
      } else {
        setTheme(localTheme)
        window.localStorage.setItem('theme', localTheme)
        document.querySelector('html')?.setAttribute('data-theme', localTheme)
      }
      setIsLoading(false)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    window.localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
  }

  const providerValue = {
    theme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={providerValue}>{!isLoading && children}</ThemeContext.Provider>
  )
}

export default ThemeProvider
