import Image from 'next/legacy/image';
import { AiOutlineCheck } from 'react-icons/ai';

import { useTimPlanStore } from 'store/tim';

import * as S from './styles';
import { TimPlanProps } from './types';

export function TimPlan({ planData }: TimPlanProps) {
  const currentPlan = useTimPlanStore(state => state.selectedPlan);
  const setPlan = useTimPlanStore(state => state.setPlan);

  const isCurrentPlan = currentPlan.name === planData.name;

  return (
    <S.PlanContainer selected={isCurrentPlan}>
      <S.PlanTitle>{planData.name}</S.PlanTitle>
      <S.PlanPrice>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(planData.price)}
      </S.PlanPrice>
      <S.PlanPriceSubtitle>
        Cobrança mensal no Cartão Banco UM
      </S.PlanPriceSubtitle>
      <S.ContractButton onClick={() => setPlan(planData)}>
        {isCurrentPlan ? 'Contrato escolhido' : 'Contratar agora'}
      </S.ContractButton>
      <S.FreeAppsContainer>
        <span>Apps gratuitos para usar</span>
        <div>
          <Image
            src="/images/facebook.svg"
            width={40}
            height={40}
            alt="facebook logo"
          />
          <Image
            src="/images/whatsapp.svg"
            width={40}
            height={40}
            alt="whatsapp logo"
          />
          <Image
            src="/images/waze.svg"
            width={40}
            height={40}
            alt="waze logo"
          />
        </div>
      </S.FreeAppsContainer>
      <S.PlanAdvantage>
        <AiOutlineCheck size={15} />
        <span>
          Redes sociais ilimitadas sem gastar da sua internet, para você ficar
          sempre conectado.
        </span>
      </S.PlanAdvantage>
      <S.PlanAdvantage>
        <AiOutlineCheck size={15} />
        <span>Ligações ilimitadas para todas as operadoras.</span>
      </S.PlanAdvantage>
    </S.PlanContainer>
  );
}
