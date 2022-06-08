import { useEffect } from 'react'

import { useSplashScreen } from 'hooks/useSplashScreen'

import * as S from './styles'

export function Splashscreen () {
  const { setVisualizedSplashScreen } = useSplashScreen()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisualizedSplashScreen()
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <S.Container />
      <S.AnimationWrapper>
        xxxxxxxxx
      </S.AnimationWrapper>
      {/*       <img src='quantum-logo-splash-screen' alt='' /> */}
    </>
  )
}
