import Image from 'next/legacy/image';
import Link from 'next/link';

import { usePartnersList } from 'hooks/partners/usePartnersList';

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
    <>
      <div style={{ marginTop: '3rem' }}>
        <SectionTitle>Serviços</SectionTitle>
      </div>
      <S.ServiceContainer>
        {data?.partnerList.map(service => (
          <Link
            key={service.id}
            href={link[service.name]}
            onClick={event =>
              service.name === 'Tim' ? event.preventDefault() : null
            }
          >
            <ServiceCard
              {...(service.name === 'Tim'
                ? {
                    isDisabled: true,
                    innerText: 'Em Breve',
                  }
                : { isDisabled: false })}
            >
              <Image
                src={image[service.name]}
                alt={service.name}
                width={100}
                height={30}
                objectFit="contain"
              />
            </ServiceCard>
          </Link>
        ))}
      </S.ServiceContainer>
    </>
  );
}
