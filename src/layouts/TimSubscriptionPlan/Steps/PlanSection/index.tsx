import { PlanSectionTitle } from 'layouts/TimSubscriptionPlan/Components/PlanSectionTitle';
import { useTimPlanStore } from 'store/tim';

import * as S from './styles';
import { TimPlan } from './TimPlan';

const plan3gb = {
  name: 'Plano 3GB',
  price: 24.9,
};

const plan10gb = {
  name: 'Plano 10GB',
  price: 44.9,
};

const plan5gb = {
  name: 'Plano 5GB',
  price: 34.9,
};

export function PlanSection() {
  const selectedPlan = useTimPlanStore(state => state.selectedPlan);
  const isPlanEmpty = Object.keys(selectedPlan).length === 0;
  const nextStep = useTimPlanStore(state => state.nextStep);

  return (
    <S.PlanSectionContainer>
      <PlanSectionTitle>Planos exclusivos para você!</PlanSectionTitle>
      <div>
        <TimPlan planData={plan3gb} />
        <TimPlan planData={plan10gb} />
        <TimPlan planData={plan5gb} />
      </div>
      <S.ButtonContinue disabled={isPlanEmpty} onClick={nextStep}>
        Continuar
      </S.ButtonContinue>
    </S.PlanSectionContainer>
  );
}
