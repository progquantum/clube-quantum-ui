import Image from 'next/image';

import { Footer } from 'components/Footer';

import { CenterLayout } from 'components/CenterLayout';

import { HeaderAuth } from 'components/Header/HeaderAuth';

import { Establishment } from 'hooks/establishment/useGetEstablishmentProfile/types';

import { Loader } from 'components/Loader';

import * as S from './styles';
import { StoreProfile } from './StoreProfile';

export function StoreDetails({
  establishment,
}: {
  establishment: Establishment;
}) {
  return (
    <>
      <HeaderAuth />
      <CenterLayout>
        {!establishment ? (
          <S.LoadingContainer>
            <Loader />
          </S.LoadingContainer>
        ) : (
          <>
            <S.Container>
              <Image
                fill
                src={establishment.MarketplaceImages[1]?.url}
                title={establishment.corporate_name}
                alt=""
                sizes="100vw"
                priority
              />
            </S.Container>
            <StoreProfile establishment={establishment} />
          </>
        )}
      </CenterLayout>
      <Footer />
    </>
  );
}
