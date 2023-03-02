import { BsCheck2 } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import { useMe } from 'hooks/user/useMe';

import * as S from './styles';

const quantumFreeAdvantages = [
  ' CashBack sobre as transações com o cartão Banco Um',
  'Ganho por indicação direta',
];

const quantumStartAdvantages = [
  ...quantumFreeAdvantages,
  'Ganhos por indicados indiretos',
  'Programa de Fidelidade Quantum',
];

const quantumSelectAdvantages = [
  ...quantumStartAdvantages,
  'Ganhos por indicados diretos',
  'Comissões',
];

const advantages = {
  'QUANTUM FREE': quantumFreeAdvantages,
  'QUANTUM START': quantumStartAdvantages,
  'QUANTUM SELECT': quantumSelectAdvantages,
};

export function PlanSummary() {
  const {
    data: { subscription },
  } = useMe();

  return (
    <S.PlanContainer isActive={subscription.is_active}>
      <S.PlanHeaderOutline>
        Não perca seus BÔNUS, mantenha-se ativo!
      </S.PlanHeaderOutline>
      <S.PlanHeaderBox>
        <div>
          <h2>{subscription.plan_name}</h2>
          <span>
            Mensal -{' '}
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(subscription.price_paid)}
          </span>
        </div>
        <S.PlanCheckMark>
          {subscription.is_active ? (
            <BsCheck2 size={20} />
          ) : (
            <AiOutlineClose size={20} />
          )}
          <span>
            {subscription.is_active ? 'Plano Ativo' : 'Plano inativo'}
          </span>
        </S.PlanCheckMark>
      </S.PlanHeaderBox>
      {advantages[subscription.plan_name].map((advantage: string) => (
        <S.AdvantageBox>
          <div>{advantage}</div>
          {}
          <S.PlanCheckMark>
            {subscription.is_active ? (
              <BsCheck2 size={20} />
            ) : (
              <AiOutlineClose size={20} />
            )}
          </S.PlanCheckMark>
        </S.AdvantageBox>
      ))}

      <S.UpgradePlanButton>Upgrade de plano</S.UpgradePlanButton>
    </S.PlanContainer>
  );
}
