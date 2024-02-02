import { FlowButton } from 'layouts/TimSubscriptionPlan/Components/FlowButton';
import { PlanSectionTitle } from 'components/PlanSectionTitle';
import { SelectedPlan } from 'layouts/TimSubscriptionPlan/Components/SelectedPlan';
import { useTimPlanStore } from 'store/tim';

import { AddressInfo } from './AddressInfo';
import { PersonalInfo } from './PersonalInfo';
import * as S from './styles';

export function ConfirmRegistrationDetails({ loggedUser }) {
  const previousStep = useTimPlanStore(state => state.previousStep);
  const nextStep = useTimPlanStore(state => state.nextStep);

  return (
    <>
      <PlanSectionTitle>Confirmar dados de cadastro</PlanSectionTitle>
      <S.DetailsContainer>
        <div style={{ maxWidth: '25.26rem', width: '100%' }}>
          <SelectedPlan />
          <PersonalInfo loggedUser={loggedUser} />
        </div>
        <AddressInfo loggedUser={loggedUser} />
        <S.ButtonContainer>
          <FlowButton variant="primary_outline" onClick={previousStep}>
            Voltar
          </FlowButton>
          <FlowButton variant="primary" onClick={nextStep}>
            Seguir
          </FlowButton>
        </S.ButtonContainer>
      </S.DetailsContainer>
    </>
  );
}
