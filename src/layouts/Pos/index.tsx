import { useWindowSize } from 'react-use';

import { Footer } from 'components/Footer';

import { HeaderAuth } from 'components/Header/HeaderAuth';

import { Header } from 'components/Header';

import { ShowOffers } from 'components/ShowOffers';

import { AccountCard } from 'components/AccountCard';

import { HeroSection } from './HeroSection';
import { PosFlow } from './PosFlow';
import { CenterContainer } from './styles';

export function Pos() {
  const { width } = useWindowSize();
  const isMobile = width <= 780;

  return (
    <>
      {isMobile ? (
        <HeaderAuth />
      ) : (
        <Header>
          <ShowOffers />
          <AccountCard />
        </Header>
      )}

      <HeroSection />
      <CenterContainer>
        <PosFlow />
      </CenterContainer>
      <Footer />
    </>
  );
}
