import { useState } from 'react'

export function useDisclosure () {
  const [isShow, setIsShow] = useState(false)
  const toggle = () => setIsShow((prevState) => !prevState)

  return {
    isShow,
    toggle
  }
}
