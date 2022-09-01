import { useEffect, useState } from 'react'

export function useShowSideBar () {
  const [width, setWidth] = useState(0)
  const breakpoint = 900
  const sidebarIsVisible = width < breakpoint

  const handleResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { sidebarIsVisible }
}
