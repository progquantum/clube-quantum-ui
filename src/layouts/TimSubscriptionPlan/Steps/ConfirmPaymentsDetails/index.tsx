import { useState } from 'react';

import { AxiosError } from 'axios';

import { FlowButton } from 'layouts/TimSubscriptionPlan/Components/FlowButton';
import { PlanSectionTitle } from 'layouts/TimSubscriptionPlan/Components/PlanSectionTitle';
import { SelectedPlan } from 'layouts/TimSubscriptionPlan/Components/SelectedPlan';
import { useTimPlanStore } from 'store/tim';

import { usePostSubscriptionMarketplace } from 'hooks/subscriptions/useSubscriptionMarketplace';

import { useWallet } from 'hooks/me/useWallet';

import { information } from 'helpers/notify/information';

import { RegisteredCard } from './RegisteredCard';
import * as S from './styles';
import { ProcessingPayment } from '../ProcessingPayment';
import { PaymentFailed } from '../PaymentFailed';

export function ConfirmPaymentsDetails() {
  const previousStep = useTimPlanStore(state => state.previousStep);
  const nextStep = useTimPlanStore(state => state.nextStep);
  const selectedPlan = useTimPlanStore(state => state.selectedPlan);
  const [cvvValue, setCVVValue] = useState('');

  const {
    mutate: subscribeMarketplace,
    isLoading,
    isError,
    reset,
    error,
  } = usePostSubscriptionMarketplace();
  const { data: paymentInfo } = useWallet();
  const getCVVNumber = async (cvv: string) => {
    if (cvv === cvvValue) return;
    setCVVValue(cvv);
  };

  const handleSubscribeMarketplace = () => {
    const requestBody = {
      partner_product: {
        partner_product_id: selectedPlan.id,
      },
      cvc: cvvValue,
    };
    subscribeMarketplace(requestBody, {
      onSuccess: () => {
        nextStep();
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
        }
      },
    });
  };

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
