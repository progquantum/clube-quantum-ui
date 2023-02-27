import { GenericCard } from 'layouts/TimSubscriptionPlan/Steps/ConfirmRegistrationDetails/GenericCard';
import { useTimPlanStore } from 'store/tim';
import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber';

import * as S from './styles';

export function SelectedPlan() {
  const selectedPlan = useTimPlanStore(state => state.selectedPlan);
  const phoneNumber = useTimPlanStore(state => state.phoneNumber);
  return (
    <GenericCard title="Seu plano escolhido">
      <h2>{selectedPlan.name}</h2>
      <S.PlanPrice>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(selectedPlan.price)}
      </S.PlanPrice>
      <S.PlanPriceSubtitle>
        Cobrança mensal no Cartão Banco UM
      </S.PlanPriceSubtitle>
      <S.PhoneNumber>
        <span>Número de telefone</span>
        <span>{formatPhoneNumber(phoneNumber)}</span>
      </S.PhoneNumber>
    </GenericCard>
  );
}
