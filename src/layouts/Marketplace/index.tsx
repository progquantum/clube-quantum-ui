import Image from 'next/legacy/image';

import { Header } from 'components/Header';

import { CenterLayout } from 'components/CenterLayout';

import { HeroLayout } from 'components/HeroLayout';

import { FilterTags } from './FilterTags';
import { AccountCard } from './Components/AccountCard';
import { ShowOffers } from './Components/ShowOffers';
import { LastVisitedStores } from './LastVisitedStores';
import { Map } from './Map';
import { Services } from './Services';
import { Stores } from './Stores';

export function Marketplace() {
  return (
    <>
      <Header>
        <ShowOffers />
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
          width={480}
          height={207}
        />
        <p>
          Aproveite as melhores ofertas e estabelecimentos da cidade e receba
          dinheiro de volta a cada compra para usar como quiser.
        </p>
      </HeroLayout>
      <CenterLayout>
        <Services />
        <Stores />
        <LastVisitedStores />
        <FilterTags />
        <Map />
      </CenterLayout>
    </>
  );
}
