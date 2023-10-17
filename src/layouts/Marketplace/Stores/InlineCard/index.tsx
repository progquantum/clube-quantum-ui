import Image from 'next/image';

import { RiStarFill } from 'react-icons/ri';

import { useTheme } from 'styled-components';

import { ServiceCard } from 'layouts/Marketplace/Components/ServiceCard';

import * as S from './styles';
import { InlineCardProps } from './types';

export function InlineCard({ establishment }: InlineCardProps) {
  const { colors } = useTheme();

  return (
    <S.CardContainer
      href={{
        pathname: '/establishment',
        query: {
          id: establishment.id,
        },
      }}
    >
      <ServiceCard height="90px">
        <Image
          src={establishment.logo_url}
          alt={establishment.corporate_name}
          title={establishment.corporate_name}
          fill
          style={{ borderRadius: '25px', objectFit: 'cover' }}
        />
      </ServiceCard>

      <S.Content>
        <S.Title>{establishment.corporate_name}</S.Title>
        <S.Rate>
          <RiStarFill size={13} color={colors.yellow} />
          <span>0</span>
        </S.Rate>
        <S.Distance>0 km</S.Distance>
        <S.Discount>{`${establishment.client_cashback}%`}</S.Discount>
        <S.Commerce>{establishment.category_name}</S.Commerce>
      </S.Content>
    </S.CardContainer>
  );
}
