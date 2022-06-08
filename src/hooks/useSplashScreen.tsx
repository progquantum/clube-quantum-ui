import { useState, useEffect } from 'react'

export function useSplashScreen () {
  const [isVisualizedSplashScreen, setIsVisualizedSplashScreen] = useState('')

  useEffect(() => {
    const storage = localStorage.getItem('@Quantum:isVisualizedSplashScreen')
    setIsVisualizedSplashScreen(storage)
  }, [])

  function setVisualizedSplashScreen () {
    localStorage.setItem('@Quantum:isVisualizedSplashScreen', 'true')
    setIsVisualizedSplashScreen('true')
  }

  return { isVisualizedSplashScreen, setVisualizedSplashScreen }
}
