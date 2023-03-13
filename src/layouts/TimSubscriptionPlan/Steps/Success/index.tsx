import { FcCheckmark } from 'react-icons/fc';

import { PlanSectionTitle } from 'layouts/TimSubscriptionPlan/Components/PlanSectionTitle';

import { useTimPlanStore } from 'store/tim';

import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber';

import * as S from './styles';

export function Success() {
  const phoneNumber = useTimPlanStore(state => state.phoneNumber);

  const cleanStateFromLocalStorage = () => {
    localStorage.removeItem('timPlan');
    window.location.reload();
  };

  return (
    <>
      <PlanSectionTitle>Sucesso!</PlanSectionTitle>
      <S.SuccessContainer>
        <FcCheckmark size={40} />
        <S.Title>Contrato do Plano TIM 10GB feito com sucesso!</S.Title>
        <S.Message>
          Uma mensagem com as informações do plano e contrato foi enviado ao
          e-mail cadastrado na sua conta Quantum.
        </S.Message>
        <S.PhoneNumber>
          <span>Número de telefone</span>
          <span>{formatPhoneNumber(phoneNumber.concat('55'))}</span>
        </S.PhoneNumber>
      </S.SuccessContainer>
      <S.FinishButton onClick={cleanStateFromLocalStorage}>
        Finalizar
      </S.FinishButton>
    </>
  );
}
