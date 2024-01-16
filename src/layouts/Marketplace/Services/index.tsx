import Image from 'next/legacy/image';
import Link from 'next/link';

import { useRouter } from 'next/router';

import { usePartnersList } from 'hooks/partners/usePartnersList';

import { SectionTitle } from '../Components/SectionTitle';

import { ServiceCard } from '../Components/ServiceCard';
import * as S from './styles';

export function Services() {
  const { data } = usePartnersList();
  const { pathname } = useRouter();

  const image = {
    Quantum: '/images/quantum-smart.svg',
    Tim: '/images/tim-logo.svg',
  };

  const link = {
    Quantum: '/pos',
    Tim: '/plano-tim',
  };

  return (
    <>
      <div style={{ marginTop: '3rem' }}>
        <SectionTitle>Serviços</SectionTitle>
      </div>
      <S.ServiceContainer>
        {data?.partnerList.map(service => (
          <Link
            key={service.id}
            href={link[service.name] ? link[service.name] : pathname}
          >
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
    </>
  );
}
