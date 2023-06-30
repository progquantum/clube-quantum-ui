import Image from 'next/image';

import { PulseLoader } from 'react-spinners';

import { useTheme } from 'styled-components';

import { Footer } from 'components/Footer';

import { CenterLayout } from 'components/CenterLayout';

import { HeaderAuth } from 'components/Header/HeaderAuth';

import { Establishment } from 'hooks/establishment/useGetEstablishmentProfile/types';

import { Loading } from 'components/Loading';

import * as S from './styles';
import { StoreProfile } from './StoreProfile';

export function StoreDetails({
  establishment,
}: {
  establishment: Establishment;
}) {
  const { colors } = useTheme();
  return (
    <>
      <HeaderAuth />
      <CenterLayout>
        {!establishment ? (
          <S.LoadingContainer>
            <Loading
              icon={PulseLoader}
              color={colors.mediumslateBlue}
              size={20}
            />
            <h1>Carregando</h1>
          </S.LoadingContainer>
        ) : (
          <>
            <S.Container>
              <Image
                fill
                src={establishment.MarketplaceImages[1].url}
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
