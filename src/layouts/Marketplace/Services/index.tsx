import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { usePartnersList } from 'hooks/partners/usePartnersList';
import {
  PLAN_TIM_PAGE,
  WAITING_QUEUE_PAGE,
  POS_PAGE,
} from 'constants/routesPath';

import { SectionTitle } from '../Components/SectionTitle';
import { ServiceCard } from '../Components/ServiceCard';
import * as S from './styles';

export function Services() {
  const { data } = usePartnersList();
  const { pathname } = useRouter();

  const image = {
    Quantum: { src: '/images/quantum-smart.svg', width: 158, height: 159 },
    Tim: { src: '/images/tim-logo.svg', width: 100, height: 30 },
    'Banco um': { src: '/images/waiting-queue.svg', width: 150, height: 150 },
  };

  const link = {
    Quantum: POS_PAGE,
    Tim: PLAN_TIM_PAGE,
    'Banco um': WAITING_QUEUE_PAGE,
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
            href={link[service.name] ? link[service.name] : pathname}
            onClick={event =>
              service.inactivated ? event.preventDefault() : null
            }
          >
            <ServiceCard
              {...(service.inactivated
                ? {
                    isDisabled: true,
                    innerText: 'Em Breve',
                  }
                : { isDisabled: false })}
            >
              <Image
                src={image[service.name].src}
                style={{ objectFit: 'contain' }}
                alt={service.name}
                width={image[service.name].width}
                height={image[service.name].height}
              />
            </ServiceCard>
          </Link>
        ))}
      </S.ServiceContainer>
    </>
  );
}
