import { MdAssignmentInd } from 'react-icons/md';
import dayjs from 'dayjs';

import { useTheme } from 'styled-components';

import { Button } from 'components/Button';

import { useMeOrderingData } from 'hooks/user/useOrderingData';

import { useGetProductsOfPartnerById } from 'hooks/usePartners';

import { formatPrice } from 'utils/formatters/formatPrice';

import { Props } from './types';
import * as S from './styles';

export function ConfirmRegistration({ onNextStep, onPreviousStep }: Props) {
  const { colors } = useTheme();

  const { data: smart } = useGetProductsOfPartnerById(
    'da1cee85-714a-4842-a1ec-c3506fbf8e2f',
  );

  const { data: OrderingData } = useMeOrderingData();

  return (
    <S.Container>
      <S.ContentTitle>
        <S.LeftStyle />
        <S.Title>Confirmar dados de cadastro</S.Title>
      </S.ContentTitle>
      <S.ContentCards>
        <S.ContentColumn>
          <S.Card>
            <S.Text>
              <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
              Seu plano escolhido
            </S.Text>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                margin: '24px 0',
                justifyContent: 'center',
              }}
            >
              <S.PlanType>
                {smart?.productList[0].name.split(' ')[0]}
              </S.PlanType>
              <S.PlanTypeWeight>
                {smart?.productList[0].name.split(' ')[1]}
              </S.PlanTypeWeight>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '12px',
                justifyContent: 'center',
              }}
            >
              <S.PlanPrice>
                {' '}
                {formatPrice(smart?.productList[0].price)}
              </S.PlanPrice>
              <S.TypeCharge>/Mês</S.TypeCharge>
            </div>
            <S.Info>{smart?.productList[0].description}</S.Info>
          </S.Card>
          <S.Card>
            <S.Text>
              <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
              Informações pessoais
            </S.Text>
            <div
              style={{
                display: 'flex',
                marginTop: '26.44px',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <S.ContentRow>
                <S.TextStrong>Nome</S.TextStrong>
                <S.TextData>{OrderingData?.name}</S.TextData>
              </S.ContentRow>
              <S.ContentRow>
                <S.TextStrong>CPF</S.TextStrong>
                <S.TextData>{OrderingData?.document}</S.TextData>
              </S.ContentRow>
              <S.ContentRow>
                <S.TextStrong>Data de Nasc.</S.TextStrong>
                <S.TextData>
                  {dayjs(OrderingData?.birth_date).format('DD/MM/YYYY')}
                </S.TextData>
              </S.ContentRow>
              <S.ContentRow>
                <S.TextStrong>Telefone Atual</S.TextStrong>
                <S.TextData>{OrderingData?.phone}</S.TextData>
              </S.ContentRow>
              <S.ContentRow>
                <S.TextStrong>E-mail</S.TextStrong>
                <S.TextData>{OrderingData?.email}</S.TextData>
              </S.ContentRow>
            </div>
          </S.Card>
        </S.ContentColumn>

        <S.Card>
          <S.Text>
            <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
            Informações de endereço
          </S.Text>
          <div
            style={{
              display: 'flex',
              marginTop: '26.44px',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <S.ContentRow>
              <S.TextStrong>Rua</S.TextStrong>
              <S.TextData>{OrderingData?.address.street}</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>Número</S.TextStrong>
              <S.TextData>{OrderingData?.address.number}</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>Complemento</S.TextStrong>
              <S.TextData>{OrderingData?.address.complement}</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>Bairro</S.TextStrong>
              <S.TextData>{OrderingData?.address.neighborhood}</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>Cidade</S.TextStrong>
              <S.TextData>{OrderingData?.address.city}</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>UF</S.TextStrong>
              <S.TextData>{OrderingData?.address.state}</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>CEP</S.TextStrong>
              <S.TextData>{OrderingData?.address.zip_code}</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>País</S.TextStrong>
              <S.TextData>{OrderingData?.address.country}</S.TextData>
            </S.ContentRow>
          </div>
        </S.Card>
      </S.ContentCards>

      <div
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '420px',
          gap: '12px',
          margin: '16px auto 0 auto',
        }}
      >
        <Button variant="secondary" onClick={onPreviousStep}>
          Voltar
        </Button>
        <Button variant="primary" onClick={onNextStep}>
          Seguir
        </Button>
      </div>
    </S.Container>
  );
}
