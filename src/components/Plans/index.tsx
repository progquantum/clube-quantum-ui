/* eslint-disable no-nested-ternary */
import { useEffect, useMemo, useState } from 'react';

import { FaCheck } from 'react-icons/fa';

import { AiOutlineSelect } from 'react-icons/ai';

import { PulseLoader } from 'react-spinners';

import { useTheme } from 'styled-components';

import { usePlans } from 'hooks/helpers/usePlans';
import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext';
import { formatPrice } from 'utils/formatters/formatPrice';

import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase';

import { useMe } from 'hooks/me/useMe';

import { Loading } from 'components/Loading';

import {
  Periods,
  PlanDurationProps,
  Plans,
  PlansData,
  PlansProps,
} from './types';
import * as S from './styles';

export function Plans({ children, button }: PlansProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<Periods>('semiannual');
  const [selectedPlan, setSelectedPlan] = useState<Plans>('start');
  const { data: plans, isLoading } = usePlans();
  const { data } = useMe();
  const { colors } = useTheme();
  const currentPlanName = data?.subscription?.plan_name;
  const planFree: PlansData = useMemo(() => (plans ? plans[0] : []), [plans]);
  const planStart: PlansData = useMemo(() => (plans ? plans[1] : []), [plans]);
  const planSelect: PlansData = useMemo(() => (plans ? plans[2] : []), [plans]);
  const [planDuration, setPlanDuration] = useState(6);
  const [planId, setPlanId] = useState(planStart.id);
  const [price, setPrice] = useState(planStart.semiannual_price);
  const [planName, setPlanName] = useState(planStart.name);
  const { registerPlan } = useSubscriptionsDispatch();

  useEffect(() => {
    setPlanId(planStart.id);
    setPrice(planStart.semiannual_price);
    setPlanName(planStart.name);
  }, [planStart]);

  const handleChoosePlan = (plan: Plans) => {
    setSelectedPlan(plan);
    if (plan === 'start') {
      setPlanId(planStart.id);
    } else if (plan === 'free') {
      setPlanId(planFree.id);
    } else {
      setPlanId(planSelect.id);
    }
  };

  const handleChoosePeriod = (period: Periods) => {
    setSelectedPeriod(period);
    if (period === 'semiannual') {
      setPlanDuration(6);
    } else if (period === 'monthly') {
      setPlanDuration(1);
    } else {
      setPlanDuration(12);
    }
  };

  const handleSetNameAndPrice = (
    plan_id: string,
    plan_duration: number,
    plan: PlansData,
  ) => {
    if (plan_id === plan.id) {
      setPlanName(plan.name);
      if (plan_duration === 1) {
        setPrice(plan.monthly_price);
      } else if (plan_duration === 6) {
        setPrice(plan.semiannual_price);
      } else {
        setPrice(plan.annual_price);
      }
    }
  };

  useEffect(() => {
    handleSetNameAndPrice(planId, planDuration, planFree);
    handleSetNameAndPrice(planId, planDuration, planStart);
    handleSetNameAndPrice(planId, planDuration, planSelect);
  }, [planId, planDuration]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    handleRegisterPlan();
  }, [price, selectedPeriod]);

  const handleRegisterPlan = () => {
    registerPlan({
      plan_id: planId,
      plan_duration: planDuration,
      price,
      plan_name: planName,
      plan_period: selectedPeriod,
    });
  };

  const planDurationOptions = [
    { period: 'monthly', title: 'Mensal' },
    { period: 'semiannual', title: 'Semestral' },
    { period: 'yearly', title: 'Anual' },
  ];

  return (
    <S.Container>
      {children}
      <S.Wrapper>
        <S.Title>Selecione o período de pagamento</S.Title>

        <S.PlansWrapper>
          {planDurationOptions.map((item: PlanDurationProps, index) => (
            <S.PlanType
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              isActive={selectedPeriod === item.period}
              onClick={() => {
                handleChoosePeriod(item.period);
              }}
            >
              {item.title}
            </S.PlanType>
          ))}
        </S.PlansWrapper>
        <S.Subtitle>Renovação feita de forma automática</S.Subtitle>
      </S.Wrapper>

      <S.PlansContents>
        <S.PlanContentsWrapper
          data-cy="planFree"
          isActive={selectedPlan === 'free'}
          onClick={() => {
            handleChoosePlan('free');
          }}
        >
          {currentPlanName === 'QUANTUM GRATUITO' ? (
            <S.CurrentPlan>
              <AiOutlineSelect size={16} fontWeight={600} /> Plano atual
            </S.CurrentPlan>
          ) : null}
          <S.TitlePlan>
            {formatFirstLetterToUppercase(planFree.name)}
          </S.TitlePlan>
          <S.Text>Benefícios Quantum e Cashback sem pagar nada.</S.Text>
          <S.Price>
            {isLoading ? (
              <Loading icon={PulseLoader} color={colors.gray[200]} size={10} />
            ) : (
              <span>R$ 0</span>
            )}
          </S.Price>
          <S.Button isActive={selectedPlan === 'free'}>
            {selectedPlan === 'free'
              ? 'Plano Escolhido'
              : 'Escolher este plano'}
          </S.Button>

          <S.PlanItemsList isActive={selectedPlan === 'free'}>
            <li>
              <S.PlanItem>
                <span>
                  <FaCheck />
                </span>
                CashBack sobre as transações com o cartão Banco Um
              </S.PlanItem>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <FaCheck />
                </span>
                Ganho por indicação direta
              </S.PlanItem>
            </li>
            <li>
              <S.PlanItemNotIncluded>
                <S.NotIncludedIcon />
                <p>Ganhos por indicados indiretos</p>
              </S.PlanItemNotIncluded>
            </li>
            <li>
              <S.PlanItemNotIncluded>
                <S.NotIncludedIcon />
                <p>Programa de Fidelidade Quantum</p>
              </S.PlanItemNotIncluded>
            </li>
            <li>
              <S.PlanItemNotIncluded>
                <S.NotIncludedIcon />
                <p>Ganhos por indicados diretos</p>
              </S.PlanItemNotIncluded>
            </li>
            <li>
              <S.PlanItemNotIncluded>
                <S.NotIncludedIcon />
                <p>Comissões</p>
              </S.PlanItemNotIncluded>
            </li>
          </S.PlanItemsList>
        </S.PlanContentsWrapper>

        <S.PlanContentsWrapper
          data-cy="planStart"
          isActive={selectedPlan === 'start'}
          onClick={() => {
            handleChoosePlan('start');
          }}
        >
          {currentPlanName === 'QUANTUM START' ? (
            <S.CurrentPlan>
              <AiOutlineSelect size={16} fontWeight={600} />
              Plano atual
            </S.CurrentPlan>
          ) : null}
          <S.TitlePlan>
            {formatFirstLetterToUppercase(planStart.name)}
          </S.TitlePlan>
          <S.Text>
            Plano com um custo acessível e que te dá mais benefícios.
          </S.Text>

          <S.Price>
            {isLoading ? (
              <Loading icon={PulseLoader} color={colors.gray[200]} size={10} />
            ) : selectedPeriod === 'semiannual' ? (
              formatPrice(planStart.semiannual_price)
            ) : selectedPeriod === 'monthly' ? (
              formatPrice(planStart.monthly_price)
            ) : (
              formatPrice(planStart.annual_price)
            )}
          </S.Price>

          <S.Button isActive={selectedPlan === 'start'}>
            {selectedPlan === 'start'
              ? 'Plano Escolhido'
              : 'Escolher este plano'}
          </S.Button>

          <S.PlanItemsList isActive={selectedPlan === 'start'}>
            <li>
              <S.PlanItem>
                <span>
                  <FaCheck />
                </span>
                CashBack sobre as transações com o cartão Banco Um
              </S.PlanItem>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <FaCheck />
                </span>
                Ganho por indicação direta
              </S.PlanItem>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <FaCheck />
                </span>
                Ganhos por indicados indiretos
              </S.PlanItem>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <FaCheck />
                </span>
                Programa de Fidelidade Quantum
              </S.PlanItem>
            </li>
            <li>
              <S.PlanItemNotIncluded>
                <S.NotIncludedIcon />
                <p>Ganhos por indicados diretos</p>
              </S.PlanItemNotIncluded>
            </li>
            <li>
              <S.PlanItemNotIncluded>
                <S.NotIncludedIcon />
                <p>Comissões</p>
              </S.PlanItemNotIncluded>
            </li>
          </S.PlanItemsList>
        </S.PlanContentsWrapper>

        <S.PlanContentsWrapper
          data-cy="planSelect"
          isActive={selectedPlan === 'select'}
          onClick={() => {
            handleChoosePlan('select');
          }}
        >
          {currentPlanName === 'QUANTUM SELECT' && (
            <S.CurrentPlan>
              <AiOutlineSelect size={16} fontWeight={600} />
              Plano atual
            </S.CurrentPlan>
          )}
          <S.TitlePlan>
            {formatFirstLetterToUppercase(planSelect.name)}
          </S.TitlePlan>
          <S.Text>Plano para que você aproveite o máximo do Quantum.</S.Text>
          <S.Price>
            {isLoading ? (
              <Loading icon={PulseLoader} color={colors.gray[200]} size={10} />
            ) : selectedPeriod === 'semiannual' ? (
              formatPrice(planSelect.semiannual_price)
            ) : selectedPeriod === 'monthly' ? (
              formatPrice(planSelect.monthly_price)
            ) : (
              formatPrice(planSelect.annual_price)
            )}
          </S.Price>

          <S.Button isActive={selectedPlan === 'select'}>
            {selectedPlan === 'select'
              ? 'Plano Escolhido'
              : 'Escolher este plano'}
          </S.Button>

          <S.PlanItemsList isActive={selectedPlan === 'select'}>
            <li>
              <S.PlanItem>
                <span>
                  <FaCheck />
                </span>
                CashBack sobre as transações com o cartão Banco Um
              </S.PlanItem>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <FaCheck />
                </span>
                Ganho por indicação direta
              </S.PlanItem>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <FaCheck />
                </span>
                Ganhos por indicados indiretos
              </S.PlanItem>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <FaCheck />
                </span>
                Programa de Fidelidade Quantum
              </S.PlanItem>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <FaCheck />
                </span>
                Ganhos por indicados diretos
              </S.PlanItem>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <FaCheck />
                </span>
                Comissões
              </S.PlanItem>
            </li>
          </S.PlanItemsList>
        </S.PlanContentsWrapper>
      </S.PlansContents>

      <section>{button}</section>
    </S.Container>
  );
}
