import type { AppProps } from 'next/app';

import { Progress } from 'components/NProgress';

import { AppProvider } from 'contexts';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <Progress />
    </AppProvider>
  );
}
