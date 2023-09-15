/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { Loader } from '@googlemaps/js-api-loader';

import { BiTimeFive } from 'react-icons/bi';

import { FaStar } from 'react-icons/fa';

import { useTheme } from 'styled-components';

import { getHours } from 'date-fns';

import { PulseLoader } from 'react-spinners';

import { useState } from 'react';

import AmericanExpressIcon from 'components/Illustrations/AmericanExpress';
import EloIcon from 'components/Illustrations/Elo';
import { MasterCardIcon } from 'components/Illustrations/MasterCard';
import { VISAIcon } from 'components/Illustrations/Visa';

import {
  Establishment,
  EstablishmentPosWorkingHour,
} from 'hooks/establishment/useGetEstablishmentProfile/types';

import { useGetEstablishments } from 'hooks/establishment/useGetEstablishments';

import { Loading } from 'components/Loading';

import { InlineCard } from 'layouts/Marketplace/Stores/InlineCard';

import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber';

import { DaysOfWeek } from './types';
import { StoreMap } from '../GoogleMap';
import * as S from './styles';

export function StoreProfile({
  establishment,
}: {
  establishment: Establishment;
}) {
  const [address, setAddress] = useState('');
  const { colors } = useTheme();
  const { data: recommendedEstablishments, isLoading } = useGetEstablishments({
    itemsPerPage: 6,
    page: 1,
    category_id: establishment.category.id,
  });
  const currentTime = getHours(new Date());

  const isEstablishmentOpen =
    currentTime <
      Number(
        establishment.establishment_pos_working_hours_today.closing_time.slice(
          0,
          2,
        ),
      ) &&
    currentTime >=
      Number(
        establishment.establishment_pos_working_hours_today.opening_time.slice(
          0,
          2,
        ),
      );

  function groupOpeningHours(workingHours: EstablishmentPosWorkingHour[]) {
    const groups = {};

    workingHours.forEach(obj => {
      const key = `${obj.opening_time}-${obj.closing_time}`;

      if (!groups[key]) {
        groups[key] = [];
      }

      groups[key].push(obj);
    });

    const result = Object.keys(groups).map(key => {
      const firstDay = groups[key][0];
      const lastDay = groups[key][groups[key].length - 1];

      const openingTime = groups[key][0].opening_time;
      const closingTime = groups[key][0].closing_time;
      return {
        opening_time: openingTime,
        closing_time: closingTime,
        first_day: firstDay.day_of_week,
        last_day: lastDay.day_of_week,
      };
    });

    return result;
  }

  const groupedOpeningHours = groupOpeningHours(
    establishment.establishment_pos_working_hours,
  );

  return (
    <S.Container>
      <S.Top>
        <S.TopContent>
          <S.Logo>
            <Image
              fill
              src={establishment.MarketplaceImages[0]?.url}
              alt={establishment.corporate_name}
              title={establishment.corporate_name}
            />
          </S.Logo>
          <S.TopInfo>
            <S.StoreName>{establishment.corporate_name}</S.StoreName>
            <S.ContentCashBack>
              {establishment.cashback_split.client_cashback}% de cashback hoje
            </S.ContentCashBack>
            <S.StoreType>{establishment.category.name}</S.StoreType>
          </S.TopInfo>
        </S.TopContent>

        <S.StoreHoursData>
          <S.StoreStatus>
            {isEstablishmentOpen
              ? 'Estabelecimento aberto'
              : 'Estabelecimento fechado'}
          </S.StoreStatus>
          <S.ContentRow>
            <BiTimeFive size={20} color={colors.mediumslateBlue} />
            <S.StoreOpeningHours>
              Aberto das{' '}
              {establishment.establishment_pos_working_hours_today.opening_time}{' '}
              às{' '}
              {establishment.establishment_pos_working_hours_today.closing_time}
            </S.StoreOpeningHours>
          </S.ContentRow>
        </S.StoreHoursData>
      </S.Top>
      <S.ContainerEvaluations>
        <S.TitleEvaluations>Avaliações de usuários</S.TitleEvaluations>
        <S.ContentStar>
          <FaStar size={24} color={colors.yellowStar} />
          <S.StoreGrade>0,0</S.StoreGrade>
          <S.QuantEvaluations>0 Avaliações</S.QuantEvaluations>
        </S.ContentStar>
      </S.ContainerEvaluations>
      <S.SubTitle>Informações</S.SubTitle>
      <S.ContainerInfo>
        <S.ContentInfo>
          <S.SubTitle>Sobre este estabelecimento</S.SubTitle>
          <S.TextInfo>{establishment.about}</S.TextInfo>
        </S.ContentInfo>
        <S.ContentInfo>
          <S.SubTitle>Contato</S.SubTitle>
          <S.TextInfo>
            <span>{formatPhoneNumber(establishment.user.main_phone)}</span>
            {establishment.contacts.main_phone_has_whatsapp && (
              <Image
                src="/images/whatsapp.svg"
                width={24}
                height={24}
                alt="Ícone do WhatsApp"
              />
            )}
          </S.TextInfo>
          {Object.hasOwn(establishment.contacts, 'cel_phone') && (
            <S.TextInfo>
              <span>{establishment.contacts.cel_phone}</span>
              {establishment.contacts.cel_phone_has_whatsapp && (
                <Image
                  src="/images/whatsapp.svg"
                  width={24}
                  height={24}
                  alt="Ícone do WhatsApp"
                />
              )}
            </S.TextInfo>
          )}
          {Object.hasOwn(establishment.contacts, 'whatsapp_phone') && (
            <S.TextInfo>
              <span>{establishment.contacts.whatsapp_phone}</span>
              {establishment.contacts.cel_phone_has_whatsapp && (
                <Image
                  src="/images/whatsapp.svg"
                  width={24}
                  height={24}
                  alt="Ícone do WhatsApp"
                />
              )}
            </S.TextInfo>
          )}
          <S.SubTitle>Horário de funcionamento</S.SubTitle>
          {groupedOpeningHours.map(openingHours => (
            <div key={`openingHours-${Math.random() * 1000}`}>
              <S.TextInfo>
                {DaysOfWeek[openingHours.first_day]} à{' '}
                {DaysOfWeek[openingHours.last_day]}
              </S.TextInfo>
              <S.TextInfo>
                Das {openingHours.opening_time} às {openingHours.closing_time}
              </S.TextInfo>
            </div>
          ))}
        </S.ContentInfo>
        <S.ContentInfo>
          <S.SubTitle>Opções de pagamento</S.SubTitle>
          <div style={{ display: 'flex', gap: '24px' }}>
            <VISAIcon width="75" height="25" />
            <MasterCardIcon width="40" height="25" />
            <EloIcon width="63" height="25" />
            <AmericanExpressIcon width="25" height="25" />
          </div>
        </S.ContentInfo>
      </S.ContainerInfo>
      <S.SubTitle style={{ marginBottom: '24px' }}>Localização</S.SubTitle>
      <S.TextInfo>{address}</S.TextInfo>
      <StoreMap
        corporateName={establishment.corporate_name}
        lat={Number(establishment.lat_location)}
        lng={Number(establishment.long_location)}
      />
      <S.SubTitle>Você também pode gostar de</S.SubTitle>
      <S.ContainerInlineCard style={{ display: 'flex' }}>
        {!isLoading && !recommendedEstablishments ? (
          <S.LoadingContainer>
            <Loading
              icon={PulseLoader}
              color={colors.mediumslateBlue}
              size={20}
            />
            <h4>Carregando</h4>
          </S.LoadingContainer>
        ) : (
          recommendedEstablishments?.establishment.map(
            recommendedEstablishment => {
              if (
                recommendedEstablishment.id === establishment.id &&
                recommendedEstablishments.info.totalEstablishment === 1
              )
                return (
                  <S.FallbackText key={`fallbacktext${Math.random() * 1000}`}>
                    Nenhum estabelecimento para recomendar
                  </S.FallbackText>
                );

              return (
                <InlineCard
                  key={recommendedEstablishment.id}
                  establishment={recommendedEstablishment}
                />
              );
            },
          )
        )}
      </S.ContainerInlineCard>

      <S.CommerceContainer />
    </S.Container>
  );
}
