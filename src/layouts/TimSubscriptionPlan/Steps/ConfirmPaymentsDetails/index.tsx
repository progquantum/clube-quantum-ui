import { FlowButton } from 'layouts/TimSubscriptionPlan/Components/FlowButton';
import { PlanSectionTitle } from 'layouts/TimSubscriptionPlan/Components/PlanSectionTitle';
import { SelectedPlan } from 'layouts/TimSubscriptionPlan/Components/SelectedPlan';
import { useTimPlanStore } from 'store/tim';

import { RegisteredCard } from './RegisteredCard';
import * as S from './styles';

export function ConfirmPaymentsDetails() {
  const previousStep = useTimPlanStore(state => state.previousStep);
  const nextStep = useTimPlanStore(state => state.nextStep);

  return (
    <>
      <PlanSectionTitle>Confirmar dados de pagamento</PlanSectionTitle>
      <S.PaymentsDetailsContainer>
        <SelectedPlan />
        <RegisteredCard />
        <S.ButtonContainer>
          <FlowButton variant="primary_outline" onClick={previousStep}>
            Voltar
          </FlowButton>
          <FlowButton variant="primary" onClick={nextStep}>
            Seguir
          </FlowButton>
        </S.ButtonContainer>
      </S.PaymentsDetailsContainer>
    </>
  );
}
