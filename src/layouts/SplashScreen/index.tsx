import { useEffect } from 'react'
import { setCookie } from 'nookies'

import { SPLASH_SCREEN_STORAGE_KEY } from 'constants/storage'

import { SplashscreenProps } from './types'

import * as S from './styles'

export function SplashScreen ({ onRequestSplashScreen }: SplashscreenProps) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRequestSplashScreen()

      setCookie(null, SPLASH_SCREEN_STORAGE_KEY, 'true', {
        path: '/'
      })
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <S.Container>
        <S.Animation data='/images/splash-screen-animation.svg' type='image/svg+xml' />
      </S.Container>
    </>
  )
}
