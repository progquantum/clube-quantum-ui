/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { BsCheck2 } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import Link from 'next/link';

import { useEffect, useState } from 'react';

import { useMe } from 'hooks/me/useMe';

import { SUBSCRIPTIONS_PAGE } from 'constants/routesPath';

import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase';

import { formatTruncateText } from 'utils/formatters/formatTruncateText';

import { useSidebarStore } from 'store/sidebar';

import * as S from './styles';

const quantumFreeAdvantages = [
  'Ganhará R$ 5,00 por toda indicação DIRETA que se ativar no QUANTUM CLUBE E BANCO UM, sem limites de indicação.',
  'Receberá CashBack 0,10% sobre as transações com o Cartão VISA de sua conta corrente INDIVIDUAL APENAS.',
  'Participar Programa de Fidelidade Quantum com Diversos CashBAck oferecidos pelos parceiros comerciais.',
];

const quantumStartAdvantages = [
  'Condições: Utilização do Cartão BANCO UM VISA, em compras com transações totalizando(soma das transações) no valor mínimo de R$ 500,00 no mês anterior.',
  'Ganhará R$ 5,00 por toda indicação DIRETA que se ativar no QUANTUM CLUBE E BANCO UM, sem limites de indicação.',
  'Receberá CashBack 0,20% sobre as transações com o Cartão VISA de sua conta corrente INDIVIDUAL APENAS.',
  'Participar Programa de Fidelidade Quantum com Diversos CashBAck oferecidos pelos parceiros comerciais.',
  'Ganhará dos seus indicados INDIRETOS, até 250 clientes abaixo de você, ATIVOS X R$ 1,20 recorrente, necessitando estarem ATIVO NO PLANO REMUNERADO.',
  'Receberá por suas indicações DIRETAS X R$ 1,00 recorrente mensal, por clientes ATIVO NO PLANO REMUNERADO, sem limite de indicação.',
  'Receberá comissões de R$ 1,00 por produto comprado no MarketPlace, por seu Indicado DIRETO sem limites da indicação.',
  'Receberá 1% de comissão sobre os ganhos na CARTEIRA DIGITAL QUANTUM de seus Indicados DIRETO, referente ao fechamento mensal de cada ciclo .',
  'Renovação ANUAL do Plano, no 13o. Mês, para se manter no Clube de Beneficios no valor de R$ 199,00, mais as mensalidades subsequentes.',
];

const quantumSelectAdvantages = [
  'Condições: Ter UM Produto QUANTUM Adquirido/Ativo do MarketPlace  do mês anterior.',
  'Condições: Utilização do Cartão BANCO UM VISA, em compras com transações totalizando(soma das transações) no valor mínimo de R$ 2.000,00 no mês anterior.',
  'Ganhará R$ 5,00 por toda indicação DIRETA que se ativar no QUANTUM CLUBE E BANCO UM, sem limites de indicação.',
  'Receberá CashBack 0,20% sobre as transações com o Cartão VISA de sua conta corrente INDIVIDUAL APENAS.',
  'Participar Programa de Fidelidade Quantum com Diversos CashBAck oferecidos pelos parceiros comerciais.',
  'Ganhará dos seus indicados INDIRETOS, até 500 clientes abaixo de você, ATIVOS X R$ 1,20 recorrente, necessitando estarem ATIVO NO PLANO REMUNERADO.',
  'Receberá por suas indicações DIRETAS X R$ 1,00 recorrente mensal, por clientes ATIVO NO PLANO REMUNERADO, sem limite de indicação.',
  'Receberá comissões de R$ 1,00 por produto comprado no MarketPlace, por seu Indicado DIRETO sem limites da indicação.',
  'Receberá 2% de comissão sobre os ganhos na CARTEIRA DIGITAL QUANTUM de seus Indicados DIRETO, referente ao fechamento mensal de cada ciclo.',
  'Receberá comissões de R$ 10,00 mensal por POS Credenciado e Ativo com mensalidade no Quantum ou Locação Simples, recorrente mensal, sem limites de vendas enquanto o EC estiver Ativo.',
  'Renovação ANUAL do Plano, no 13o. Mês, para se manter no Clube de Beneficios no valor de R$ 499,00, mais as mensalidades subsequentes.',
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

const conditions =
  'Utilização do Cartão BANCO UM VISA, em compras com transações totalizando(soma das transações) no valor mínimo de R$ 500,00 no mês anterior';

export function PlanSummary() {
  const {
    data: { subscription },
  } = useMe();

  const [selectedAdvantage, setSelectedAdvantage] = useState(null);
  const [seeMoreConditon, setSeeMoreConditon] = useState(false);
  const [maxLength, setMaxLength] = useState(29);
  const isExpanded = useSidebarStore(state => state.isExpanded);

  const advantage = document.querySelector('.advantage');

  function updateMaxLength() {
    if (!advantage) {
      return;
    }

    const maxWidth = advantage.getBoundingClientRect().width;

    if (isNaN(maxWidth)) {
      return;
    }

    const maxLength = Math.floor(maxWidth / 9);
    setMaxLength(Number(maxLength));
  }

  useEffect(() => {
    window.addEventListener('resize', updateMaxLength);

    return () => {
      window.removeEventListener('resize', updateMaxLength);
    };
  }, [maxLength]);

  useEffect(() => {
    updateMaxLength();
  }, [isExpanded]);

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
      {advantages[subscription.plan_name]?.map(
        (advantage: string, index: number) => (
          <S.AdvantageBox key={advantage}>
            <div
              style={{ cursor: 'pointer' }}
              className="advantage"
              onClick={
                selectedAdvantage === index
                  ? () => setSelectedAdvantage(null)
                  : () => setSelectedAdvantage(index)
              }
            >
              {selectedAdvantage === index
                ? advantage
                : formatTruncateText(advantage, maxLength)}
            </div>
            {}
            <S.PlanCheckMark>
              {subscription.is_active ? (
                <BsCheck2 size={20} />
              ) : (
                <AiOutlineClose size={20} />
              )}
            </S.PlanCheckMark>
          </S.AdvantageBox>
        ),
      )}
      <Link href={SUBSCRIPTIONS_PAGE}>
        <S.UpgradePlanButton>Upgrade de plano</S.UpgradePlanButton>
      </Link>
    </S.PlanContainer>
  );
}
