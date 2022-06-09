import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import { HomePage } from 'layouts/Home'
import { Splashscreen } from 'layouts/Splashscreen'

export default function Home ({ splashScreenState }) {
  const [showSplashScreen, setShowSplashScreen] = useState(!splashScreenState)

  const setSplashScreen = () => {
    setShowSplashScreen(false)
  }

  if (showSplashScreen) {
    return (
      <Splashscreen
        setSplashScreen={setSplashScreen}
      />
    )
  }

  return <HomePage />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)
  const splashScreenState = cookies['@Quantum:isVisualizedSplashScreen']

  return {
    props: {
      splashScreenState: splashScreenState || false
    }
  }
}
