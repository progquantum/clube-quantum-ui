/* eslint-disable react/no-unescaped-entities */
import Image from 'next/legacy/image';

import { BiTimeFive } from 'react-icons/bi';

import { FaStar } from 'react-icons/fa';

import { useTheme } from 'styled-components';

import AmericanExpressIcon from 'components/Illustrations/AmericanExpress';
import EloIcon from 'components/Illustrations/Elo';
import { MasterCardIcon } from 'components/Illustrations/MasterCard';
import { VISAIcon } from 'components/Illustrations/Visa';

import { InlineCard } from 'layouts/Marketplace/Stores/InlineCard';

import { Map } from '../../Marketplace/Map';

import * as S from './styles';

export function StoreProfile() {
  const { colors } = useTheme();
  return (
    <S.Container>
      <S.Top>
        <S.TopContent>
          <S.Logo>
            <Image
              width={54}
              height={51.78}
              src="/images/dominos_logo.svg"
              alt=""
            />
          </S.Logo>

          <S.ContentColumm>
            <S.StoreName>Domino's Pizzaria</S.StoreName>
            <S.StoreType>Restaurante</S.StoreType>
          </S.ContentColumm>
          <S.ContentCashBack>3% de cashback hoje</S.ContentCashBack>
        </S.TopContent>

        <S.StoreHoursData>
          <S.StoreStatus>Estabelecimento aberto</S.StoreStatus>
          <S.ContentRow>
            <BiTimeFive size={20} color={colors.mediumslateBlue} />
            <S.StoreOpeningHours>Aberto das 10h às 23h</S.StoreOpeningHours>
          </S.ContentRow>
        </S.StoreHoursData>
      </S.Top>
      <S.ContainerEvaluations>
        <S.TitleEvaluations>Avaliações de usuários</S.TitleEvaluations>
        <S.ContentStar>
          <FaStar size={24} color={colors.yellowStar} />
          <FaStar size={24} color={colors.yellowStar} />
          <FaStar size={24} color={colors.yellowStar} />
          <FaStar size={24} color={colors.yellowStar} />
          <FaStar size={24} color={colors.yellowStar} />
          <S.StoreGrade>5,0</S.StoreGrade>
          <S.QuantEvaluations>125 Avaliações</S.QuantEvaluations>
        </S.ContentStar>
      </S.ContainerEvaluations>
      <S.SubTitle>Informações</S.SubTitle>
      <S.ContainerInfo>
        <S.ContentInfo>
          <S.SubTitle>Sobre este estabelecimento</S.SubTitle>
          <S.TextInfo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </S.TextInfo>
        </S.ContentInfo>
        <S.ContentInfo>
          <S.SubTitle>Contato</S.SubTitle>
          <S.TextInfo>Telefone: (11) 9 9999 999</S.TextInfo>
          <S.TextInfo>Telefone: (11) 9 9999 999</S.TextInfo>
          <S.SubTitle>Horário de funcionamento</S.SubTitle>
          <S.TextInfo>Segunda à Sábado</S.TextInfo>
          <S.TextInfo>Das 10h às 23h</S.TextInfo>
        </S.ContentInfo>
        <S.ContentInfo>
          <S.SubTitle>Opções de pagamento</S.SubTitle>
          <div style={{ display: 'flex', gap: '24px' }}>
            {' '}
            <VISAIcon width="75" height="25" />
            <MasterCardIcon width="40" height="25" />
            <EloIcon width="63" height="25" />
            <AmericanExpressIcon width="25" height="25" />
          </div>
        </S.ContentInfo>
      </S.ContainerInfo>
      <S.SubTitle style={{ marginBottom: '24px' }}>Localização</S.SubTitle>
      <S.TextInfo>
        R. Santa Madalena, 31 - Liberdade, São Paulo - SP, 01322-020
      </S.TextInfo>

      <Map />
      <S.SubTitle>Você também pode gostar de</S.SubTitle>
      <S.CommerceContainer>
        {/*
      <InlineCard />
      <InlineCard />
      <InlineCard />
      <InlineCard />
      <InlineCard />
      <InlineCard />
        */}
      </S.CommerceContainer>
    </S.Container>
  );
}
