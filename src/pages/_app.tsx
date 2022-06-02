import type { AppProps } from 'next/app'

import { makeServer } from 'services/mirage'
import { AppProvider } from 'contexts'

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' })
}

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
