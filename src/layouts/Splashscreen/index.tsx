import { useEffect } from 'react'
import { setCookie } from 'nookies'

import { SplashscreenProps } from './types'
import * as S from './styles'

export function Splashscreen ({ onRequestSplashScreen }: SplashscreenProps) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRequestSplashScreen()

      setCookie(null, '@Quantum:isVisualizedSplashScreen', 'true', {
        path: '/'
      })
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <S.AnimationWrapper>
        <object data='/images/splash-screen-animation.svg' type='image/svg+xml'>
          <img src='/images/splash-screen-animation.svg' alt='' />
        </object>
      </S.AnimationWrapper>
    </>
  )
}
