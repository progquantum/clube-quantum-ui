import Image from 'next/image';

import { Footer } from 'components/Footer';

import { CenterLayout } from '../Marketplace/Components/CenterLayout';

import { Header } from '../Marketplace/Header';
import { StoreProfile } from './StoreProfile';
import { Container } from './styles';

export function StoreDetails() {
  return (
    <>
      <Header />
      <CenterLayout>
        <Container>
          <Image
            width={1200}
            height={320}
            src="/images/dominos_pizza.svg"
            alt=""
          />
        </Container>
        <StoreProfile />
      </CenterLayout>
      <Footer />
    </>
  );
}
