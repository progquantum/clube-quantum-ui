import Image from 'next/legacy/image';
import Link from 'next/link';

import { usePartnersList } from 'hooks/usePartnersList';

import { SectionTitle } from '../Components/SectionTitle';

import { ServiceCard } from '../Components/ServiceCard';
import * as S from './styles';

export function Services() {
  const { data } = usePartnersList();

  const image = {
    Quantum: '/images/quantum-smart.svg',
    Tim: '/images/tim-logo.svg',
  };

  const link = {
    Quantum: '/pos',
    Tim: '/plano-tim',
  };

  return (
    <S.ServiceContainer>
      <SectionTitle>Serviços</SectionTitle>
      {data?.partnerList.map(service => (
        <Link key={service.id} href={link[service.name]}>
          <ServiceCard>
            <Image
              src={image[service.name]}
              alt={service.name}
              width={90}
              height={25}
              objectFit="contain"
            />
          </ServiceCard>
        </Link>
      ))}
    </S.ServiceContainer>
  );
}
