import Image from 'next/image';
import Link from 'next/link';

import { usePartnersList } from 'hooks/partners/usePartnersList';
import { WAITING_QUEUE_PAGE } from 'constants/routesPath';

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
        <SectionTitle>Produtos e Serviços</SectionTitle>
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
              />
            </ServiceCard>
          </Link>
        ))}
        <Link href={WAITING_QUEUE_PAGE}>
          <ServiceCard definedTheme="darkBlue">
            <Image
              src="/images/waiting-queue.svg"
              alt="Cartão de Crédito"
              fill
              style={{ objectFit: 'cover', borderRadius: '25px' }}
              quality={100}
            />
          </ServiceCard>
        </Link>
      </S.ServiceContainer>
    </>
  );
}
