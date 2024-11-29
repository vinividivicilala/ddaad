import { useEffect, useState } from 'react'

const useHeader = () => {
  const [showHeaderBorder, setShowHeaderBorder] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowHeaderBorder(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    showHeaderBorder,
  }
}

export default useHeader
