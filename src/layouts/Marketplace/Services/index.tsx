import Image from 'next/image';
import Link from 'next/link';

import { SectionTitle } from '../Components/SectionTitle';

import { ServiceCard } from '../Components/ServiceCard';
import * as S from './styles';

export function Services() {
  return (
    <S.ServiceContainer>
      <SectionTitle>Serviços</SectionTitle>
      <Link href="https://google.com.br">
        <ServiceCard>
          <Image
            src="/images/tim-logo.svg"
            alt="TIM logo"
            width="80%"
            height="80%"
            objectFit="contain"
          />
        </ServiceCard>
      </Link>
      <Link href="/">
        <ServiceCard>
          <Image
            src="/images/quantum-smart.svg"
            alt="TIM logo"
            width="80%"
            height="80%"
            objectFit="contain"
          />
        </ServiceCard>
      </Link>
      <Link href="/">
        <ServiceCard>
          <Image
            src="/images/menu-fraterno.svg"
            alt="TIM logo"
            width="80%"
            height="80%"
            objectFit="contain"
          />
        </ServiceCard>
      </Link>
    </S.ServiceContainer>
  );
}
