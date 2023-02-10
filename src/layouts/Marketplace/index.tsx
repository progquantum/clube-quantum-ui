import { CenterLayout } from './Components/CenterLayout';
import { FilterTags } from './FilterTags';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { LastVisitedStores } from './LastVisitedStores';
import { Map } from './Map';
import { Services } from './Services';
import { Stores } from './Stores';

export function Marketplace() {
  return (
    <>
      <Header />
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
