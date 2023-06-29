import Image from 'next/legacy/image';

import { useMediaQuery } from '@mui/material';

import { Header } from 'components/Header';

import { CenterLayout } from 'components/CenterLayout';

import { HeroLayout } from 'components/HeroLayout';

import { Footer } from 'components/Footer';

import { ShowOffers } from 'components/ShowOffers';

import { AccountCard } from 'components/AccountCard';

import { AccountDropdown } from 'components/Header/HeaderAuth/AccountDropdown';

import { Services } from './Services';
import { Stores } from './Stores';
import * as S from './styles';

export function Marketplace() {
  const isMobile = useMediaQuery('@media (max-width: 600px)');

  return (
    <>
      <Header>
        <ShowOffers key="showOffers" />
        {isMobile ? <AccountDropdown /> : <AccountCard />}
      </Header>
      {isMobile ? (
        <S.HeroLayoutMobile>
          <Image
            src="/images/banner_marketplace_mobile_2.svg"
            alt="Quantum marketplace logo"
            width={396}
            height={300}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority
          />
        </S.HeroLayoutMobile>
      ) : (
        <HeroLayout
          imgSrc="/images/Casal_Quantum.png"
          imgAlt="Two people smiling while working with a computer"
          backgroundImageUrl="/images/Background_blue_01.svg"
        >
          <Image
            src="/images/marketplace-hero-title.svg"
            alt="Quantum marketplace logo"
            width={380}
            height={150}
            priority
          />
          <p>
            Aproveite as melhores ofertas e estabelecimentos da cidade e receba
            dinheiro de volta a cada compra para usar como quiser.
          </p>
        </HeroLayout>
      )}
      <CenterLayout>
        <Services />
        <Stores />
      </CenterLayout>
      <Footer />
    </>
  );
}
