import { Header } from 'components/Header';

import { CenterLayout } from './Components/CenterLayout';
import { FilterTags } from './FilterTags';
import { AccountCard } from './Components/AccountCard';
import { ShowOffers } from './Components/ShowOffers';
import { HeroSection } from './HeroSection';
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
      <HeroSection />
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
