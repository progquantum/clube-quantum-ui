import Image from 'next/legacy/image';

import { Header } from 'components/Header';

import { CenterLayout } from 'components/CenterLayout';

import { HeroLayout } from 'components/HeroLayout';

import { Footer } from 'components/Footer';

import { ShowOffers } from 'components/ShowOffers';

import { AccountCard } from 'components/AccountCard';

import { Services } from './Services';
import { Stores } from './Stores';

export function Marketplace() {
  return (
    <>
      <Header>
        <ShowOffers key="showOffers" />
        <AccountCard />
      </Header>
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
        />
        <p>
          Aproveite as melhores ofertas e estabelecimentos da cidade e receba
          dinheiro de volta a cada compra para usar como quiser.
        </p>
      </HeroLayout>
      <CenterLayout>
        <Services />
        <Stores />
      </CenterLayout>
      <Footer />
    </>
  );
}
