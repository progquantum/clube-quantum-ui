import { useState } from 'react';

import { AxiosError } from 'axios';

import { useRouter } from 'next/router';

import { FlowButton } from 'layouts/TimSubscriptionPlan/Components/FlowButton';
import { PlanSectionTitle } from 'layouts/TimSubscriptionPlan/Components/PlanSectionTitle';
import { SelectedPlan } from 'layouts/TimSubscriptionPlan/Components/SelectedPlan';
import { useTimPlanStore } from 'store/tim';

import { usePostSubscriptionMarketplace } from 'hooks/subscriptions/useSubscriptionMarketplace';

import { useWallet } from 'hooks/me/useWallet';

import { information } from 'helpers/notify/information';

import { useCreateDocumentRequestSignatureTim } from 'hooks/useContracts/useCreateDocumentRequestSignatureTim';

import { useMeOrderingData } from 'hooks/me/useOrderingData';
import { ResponseData as SubscriptionResponseData } from 'hooks/subscriptions/useSubscriptionMarketplace/types';

import { RegisteredCard } from './RegisteredCard';
import * as S from './styles';
import { ProcessingPayment } from '../ProcessingPayment';
import { PaymentFailed } from '../PaymentFailed';

export function ConfirmPaymentsDetails() {
  const previousStep = useTimPlanStore(state => state.previousStep);
  const isPortability = useTimPlanStore(state => state.isPortability);
  const phoneNumber = useTimPlanStore(state => state.phoneNumber);
  const selectedDDD = useTimPlanStore(state => state.selectedDDD);
  const nextStep = useTimPlanStore(state => state.nextStep);
  const selectedPlan = useTimPlanStore(state => state.selectedPlan);
  const setContract = useTimPlanStore(state => state.setContract);

  const [cvvValue, setCVVValue] = useState('');

  const router = useRouter();

  const { data: orderingData } = useMeOrderingData();

  const {
    mutate: subscribeMarketplace,
    isLoading: isMutatingSubscription,
    isError,
    reset,
    error,
  } = usePostSubscriptionMarketplace();

  const { mutate: postContract, isLoading: isMutatingContract } =
    useCreateDocumentRequestSignatureTim();

  const { data: paymentInfo } = useWallet();

  const getCVVNumber = async (cvv: string) => {
    if (cvv === cvvValue) return;
    setCVVValue(cvv);
  };

  const handleSubscribeMarketplace = () => {
    const requestBodySubscription = {
      partner_product: {
        partner_product_id: selectedPlan.id,
      },
      cvc: cvvValue,
      tim_number: phoneNumber,
      area_code: selectedDDD,
      is_portability: isPortability,
    };

    subscribeMarketplace(requestBodySubscription, {
      onSuccess: (data: SubscriptionResponseData) => {
        const { plan_name: plan, price_paid } = data;

        const planValue = String(price_paid);

        const {
          birth_date: birthDate,
          address: { zip_code: cep, state: uf, ...restAddress },
          ...restUser
        } = orderingData;

        const requestBodyContract = {
          birthDate,
          cep,
          uf,
          isPortability,
          plan,
          planValue,
          marketPlaceSubscriptionId: data.marketplace_subscription_id,
          ...restAddress,
          ...restUser,
        };
        postContract(requestBodyContract, {
          onSuccess: data => {
            setContract(data.document);
            nextStep();
          },
          onError: error => {
            console.log('erro: ', error);
          },
        });
      },
      onError: (error: unknown) => {
        if (error instanceof AxiosError) {
          if (
            error.response.data.message ===
            'This user already has a subscription to this plan'
          ) {
            information('Você já tem um plano TIM cadastrado');
            window.location.reload();
          }

          if (
            error.response.data.message ===
            'This user does not have a subscription'
          ) {
            information('É necessário aderir à um plano Quantum');
            router.push('/subscriptions');
          }
        }
      },
    });
  };

  const isLoading = isMutatingSubscription || isMutatingContract;

  if (isLoading) return <ProcessingPayment />;

  if (isError) {
    if (error instanceof AxiosError) {
      if (error.response.status !== 400) return <PaymentFailed reset={reset} />;
    }
  }

  return (
    <>
      <PlanSectionTitle>Confirmar dados de pagamento</PlanSectionTitle>
      <S.PaymentsDetailsContainer>
        <SelectedPlan />
        <RegisteredCard
          cvvValue={cvvValue}
          getCVV={getCVVNumber}
          paymentInfo={paymentInfo}
        />
        <S.ButtonContainer>
          <FlowButton variant="primary_outline" onClick={previousStep}>
            Voltar
          </FlowButton>
          <FlowButton variant="primary" onClick={handleSubscribeMarketplace}>
            Seguir
          </FlowButton>
        </S.ButtonContainer>
      </S.PaymentsDetailsContainer>
    </>
  );
}
