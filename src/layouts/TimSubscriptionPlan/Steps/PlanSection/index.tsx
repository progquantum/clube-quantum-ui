import { useGetProductsOfPartnerById } from 'hooks/partners/usePartners';
import { Plan } from 'hooks/partners/usePartners/types';
import { PlanSectionTitle } from 'layouts/TimSubscriptionPlan/Components/PlanSectionTitle';
import { useTimPlanStore } from 'store/tim';

import * as S from './styles';
import { TimPlan } from './TimPlan';

export function PlanSection() {
  const selectedPlan = useTimPlanStore(state => state.selectedPlan);
  const isPlanEmpty = Object.keys(selectedPlan).length === 0;
  const nextStep = useTimPlanStore(state => state.nextStep);
  const { data: plan } = useGetProductsOfPartnerById(
    '4d6bc5bb-3635-4376-8929-25ce45164352',
  );

  return (
    <S.PlanSectionContainer>
      <PlanSectionTitle>Planos exclusivos para você!</PlanSectionTitle>
      <div>
        {plan &&
          plan.productList.map((plan: Plan) => (
            <TimPlan plan={plan} key={plan.id} />
          ))}
      </div>
      <S.ButtonContinue disabled={isPlanEmpty} onClick={nextStep}>
        Continuar
      </S.ButtonContinue>
    </S.PlanSectionContainer>
  );
}
