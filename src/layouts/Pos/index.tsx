import { Footer } from 'components/Footer';

import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { PosFlow } from './PosFlow';
import { CenterContainer } from './styles';

export function Pos() {
  return (
    <>
      <Header />
      <HeroSection />
      <CenterContainer>
        <PosFlow />
      </CenterContainer>
      <Footer />
    </>
  );
}
