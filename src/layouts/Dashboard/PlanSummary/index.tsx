import { BsCheck2 } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import Link from 'next/link';

import { useMe } from 'hooks/user/useMe';

import { SUBSCRIPTIONS_PAGE } from 'constants/routesPath';

import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase';

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
  'QUANTUM GRATUITO': quantumFreeAdvantages,
  'QUANTUM START': quantumStartAdvantages,
  'QUANTUM SELECT': quantumSelectAdvantages,
};

const monthly_fee = {
  1: 'Mensal',
  6: 'Semestral',
  12: 'Anual',
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
          <h2>{formatFirstLetterToUppercase(subscription.plan_name)}</h2>
          <span>
            {monthly_fee[subscription.monthly_fee]}
            {' - '}
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
      {advantages[subscription.plan_name]?.map((advantage: string) => (
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
      <Link href={SUBSCRIPTIONS_PAGE}>
        <S.UpgradePlanButton>Upgrade de plano</S.UpgradePlanButton>
      </Link>
    </S.PlanContainer>
  );
}
