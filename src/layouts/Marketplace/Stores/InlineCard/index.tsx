import Image from 'next/image';

import { RiStarFill } from 'react-icons/ri';

import { useTheme } from 'styled-components';

import { ServiceCard } from 'layouts/Marketplace/Components/ServiceCard';

import * as S from './styles';

export function InlineCard() {
  const { colors } = useTheme();

  return (
    <S.CardContainer>
      <ServiceCard>
        <Image
          src="/images/dominos_logo.svg"
          alt="TIM logo"
          width="80%"
          height="80%"
          objectFit="contain"
        />
      </ServiceCard>

      <S.Content>
        <S.Title>Domino&apos;s Pizzaria</S.Title>
        <S.Rate>
          <RiStarFill size={13} color={colors.yellow} />
          5,0
        </S.Rate>
        <S.Distance>3,4 km</S.Distance>
        <S.Discount>3%</S.Discount>
        <S.Commerce>Restaurante</S.Commerce>
      </S.Content>
    </S.CardContainer>
  );
}
