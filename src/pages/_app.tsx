import type { AppProps } from 'next/app'

import { AppProvider } from 'contexts'
import { Splashscreen } from 'layouts/Splashscreen'
import { useSplashScreen } from 'hooks/useSplashScreen'

export default function MyApp ({ Component, pageProps }: AppProps) {
  const { isVisualizedSplashScreen } = useSplashScreen()

  return (
    <AppProvider>
      {isVisualizedSplashScreen
        ? (
          <Component {...pageProps} />
          )
        : (
          <Splashscreen />
          )}
    </AppProvider>
  )
}
