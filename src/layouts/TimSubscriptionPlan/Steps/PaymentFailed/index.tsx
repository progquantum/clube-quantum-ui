import Image from 'next/image';

import { PlanSectionTitle } from 'layouts/TimSubscriptionPlan/Components/PlanSectionTitle';

import * as S from './styles';

export function PaymentFailed() {
  return (
    <>
      <PlanSectionTitle variant="error">
        Houve um problema no pagamento do plano!
      </PlanSectionTitle>
      <S.PaymentFailedContainer>
        <Image
          src="/images/red-x.svg"
          width="100px"
          height="100px"
          alt="Um Xis vermelho indicando falha"
        />
        <S.Title>
          Houve um problema no pagamento da sua assinatura TIM, verifique seus
          dados de pagamento e tente novamente.
        </S.Title>
      </S.PaymentFailedContainer>
    </>
  );
}
