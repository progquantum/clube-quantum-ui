import Image from 'next/legacy/image';
import { useEffect } from 'react';

import { PlanSectionTitle } from 'layouts/TimSubscriptionPlan/Components/PlanSectionTitle';

import { useTimPlanStore } from 'store/tim';

import * as S from './styles';

export function ProcessingPayment() {
  const nextStep = useTimPlanStore(state => state.nextStep);

  useEffect(() => {
    setTimeout(nextStep, 3000);
  }, []);

  return (
    <>
      <PlanSectionTitle>Aguarde! Processando pagamento</PlanSectionTitle>
      <S.LoadingContainer>
        <Image
          src="/images/Loading-v2.svg"
          width={100}
          height={100}
          alt="Animação de carregamento"
        />
        <S.Title>Aguarde enquanto processamos o seu pagamento</S.Title>
        <S.Subtitle>
          Não saia ou atualize a página enquanto esta requisição estiver em
          andamento!
        </S.Subtitle>
      </S.LoadingContainer>
    </>
  );
}
