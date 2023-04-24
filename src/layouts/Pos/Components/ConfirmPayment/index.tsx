import { MdAssignmentInd } from 'react-icons/md';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

import { useTheme } from 'styled-components';

import { useRef } from 'react';

import { AxiosError } from 'axios';

import { Button } from 'components/Button';

import { Input } from 'components/Input';

import { formatCVV } from 'utils/formatters/formatCVV';

import { formatPrice } from 'utils/formatters/formatPrice';

import { usePostSubscriptionMarketplace } from 'hooks/subscriptions/useSubscriptionMarketplace';
import { useMeOrderingData } from 'hooks/me/useOrderingData';

import { useWallet } from 'hooks/me/useWallet';

import { information } from 'helpers/notify/information';

import { useCreateDocumentRequestSignaturePos } from 'hooks/useContracts/useCreateDocumentRequestSignaturePos';

import * as S from './styles';
import { Props } from './types';

export function ConfirmPayment({
  onNextStep,
  onPreviousStep,
  smart,
  handleGetContractData,
}: Props) {
  const { colors } = useTheme();
  const { mutate: subscribeMarketplace, isLoading: isMutatingSubscribe } =
    usePostSubscriptionMarketplace();
  const { mutate: postContract, isLoading: isMutatingContract } =
    useCreateDocumentRequestSignaturePos();

  const { data: orderingData } = useMeOrderingData();

  const formRef = useRef<FormHandles>(null);

  const handleSubmitCVV: SubmitHandler = async data => {
    subscribeMarketplace(
      {
        partner_product: {
          partner_product_id: smart.productList[0].id,
        },
        cvc: data.cvc,
      },
      {
        onSuccess: data => {
          const {
            birth_date: birthDate,
            address: { zip_code: cep, state: uf, ...restAddress },
            ...restUser
          } = orderingData;

          const requestBody = {
            birthDate,
            cep,
            uf,
            ...restAddress,
            ...restUser,
            marketPlaceSubscriptionId: data.marketplace_subscription_id,
          };

          postContract(requestBody, {
            onSuccess: data => {
              handleGetContractData(data);
              onNextStep();
            },
            onError: error => {
              console.log(error);
            },
          });
        },

        onError: (error: unknown) => {
          if (error instanceof AxiosError) {
            if (
              error.response.data.message ===
              'This user already has a subscription to this plan'
            ) {
              information('Você já tem um plano POS cadastrado');
              window.location.reload();
            }
          }
        },
      },
    );
  };
  const { data: billing } = useWallet();

  const isLoading = isMutatingSubscribe || isMutatingContract;
  console.log('carregando: ', isLoading);
  return (
    <S.Container as={Form} ref={formRef} onSubmit={handleSubmitCVV}>
      <S.ContentTitle>
        <S.LeftStyle />
        <S.Title>Confirmar dados de pagamento</S.Title>
      </S.ContentTitle>

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
            <S.PlanType>{smart?.productList[0].name.split(' ')[0]} </S.PlanType>
            <S.PlanTypeWeight>
              {' '}
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
              <S.TextData>{orderingData.name}</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>Cartão</S.TextStrong>
              <S.TextData>
                **** **** **** {billing?.credit_card.last_digits}
              </S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>Confirme o CVV</S.TextStrong>
              <div style={{ width: '100px' }}>
                <Input
                  type="text"
                  name="cvc"
                  placeholder="CVV"
                  onChange={e =>
                    formRef.current.setFieldValue(
                      'cvc',
                      formatCVV(e.target.value),
                    )
                  }
                  inputMode="numeric"
                />
              </div>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>Validade</S.TextStrong>
              <S.TextData>{billing?.credit_card.expiration_date}</S.TextData>
            </S.ContentRow>
          </div>
        </S.Card>
      </S.ContentColumn>

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
        <Button type="submit" variant="primary" loading={isLoading}>
          Seguir
        </Button>
      </div>
    </S.Container>
  );
}
