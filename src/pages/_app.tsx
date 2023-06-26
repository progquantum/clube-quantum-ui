import type { AppProps } from 'next/app';

import { Progress } from 'components/NProgress';

import { AppProvider } from 'contexts';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider {...pageProps} dehydratedState={pageProps.dehydratedState}>
      <Component {...pageProps} />
      <Progress />
    </AppProvider>
  );
}
