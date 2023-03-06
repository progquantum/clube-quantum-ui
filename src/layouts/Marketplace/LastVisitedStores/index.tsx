import Image from 'next/legacy/image';
import Link from 'next/link';

import { SectionTitle } from '../Components/SectionTitle';

import { ServiceCard } from '../Components/ServiceCard';
import * as S from './styles';

export function LastVisitedStores() {
  return (
    <S.ServiceContainer>
      <SectionTitle>Últimas lojas visitadas</SectionTitle>
      <Link href="https://google.com.br">
        <ServiceCard>
          <Image
            src="/images/tim-logo.svg"
            alt="TIM logo"
            width={90}
            height={25}
            objectFit="contain"
          />
        </ServiceCard>
      </Link>
      <Link href="/">
        <ServiceCard>
          <Image
            src="/images/menu-fraterno.svg"
            alt="TIM logo"
            width={90}
            height={25}
            objectFit="contain"
          />
        </ServiceCard>
      </Link>
    </S.ServiceContainer>
  );
}
