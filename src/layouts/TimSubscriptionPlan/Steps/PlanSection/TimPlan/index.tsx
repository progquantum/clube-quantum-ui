import Image from 'next/legacy/image';
import { AiOutlineCheck } from 'react-icons/ai';

import { Plan } from 'hooks/usePartners/types';

import { useTimPlanStore } from 'store/tim';

import * as S from './styles';

export function TimPlan({ plan }: { plan: Plan }) {
  const currentPlan = useTimPlanStore(state => state.selectedPlan);
  const setPlan = useTimPlanStore(state => state.setPlan);

  const isCurrentPlan = currentPlan.name === plan.name;

  return (
    <S.PlanContainer selected={isCurrentPlan}>
      <S.PlanTitle>{plan.name}</S.PlanTitle>
      <S.PlanPrice>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(Number(plan.price))}
      </S.PlanPrice>
      <S.PlanPriceSubtitle>{plan.description}</S.PlanPriceSubtitle>
      <S.ContractButton onClick={() => setPlan(plan)}>
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
      {Object.keys(plan.details).map(key => (
        <S.PlanAdvantage key={key}>
          <AiOutlineCheck size={15} />
          <span>{plan.details[key]}</span>
        </S.PlanAdvantage>
      ))}
    </S.PlanContainer>
  );
}
