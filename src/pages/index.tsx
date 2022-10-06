import { useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { parseCookies } from 'nookies';

import { HomePage } from 'layouts/Home';
import { SplashScreen } from 'layouts/SplashScreen';
import { withSSRGuest } from 'helpers/auth/withSSRGuest';
import { SPLASH_SCREEN_STORAGE_KEY } from 'constants/storage';

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async ctx => {
    const cookies = parseCookies(ctx);
    const splashScreen = cookies[SPLASH_SCREEN_STORAGE_KEY];
    const splashScreenIsVisible = !!splashScreen;

    return {
      props: {
        splashScreenIsVisible,
      },
    };
  },
);

export default function Home({
  splashScreenIsVisible,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [showSplashScreen, setShowSplashScreen] = useState(
    !splashScreenIsVisible,
  );

  const handleShowSplashScreen = () => {
    setShowSplashScreen(false);
  };

  if (showSplashScreen) {
    return <SplashScreen onRequestSplashScreen={handleShowSplashScreen} />;
  }

  return <HomePage />;
}
