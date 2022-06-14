import { useEffect, useState } from 'react'

export function useShowSideBar () {
  const [width, setWidth] = useState(undefined)
  const breakpoint = 1150
  const isShowSideBar = width < breakpoint

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isShowSideBar
}
