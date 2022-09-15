import { useEffect, useMemo, useState } from 'react'

import { usePlans } from 'hooks/usePlans'
import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext'
import { formatPrice } from 'utils/formatters/formatPrice'

import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase'

import { Periods, PlanDurationProps, Plans, PlansData, PlansProps } from './types'
import * as S from './styles'

export function Plans ({ children, button }:PlansProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<Periods>('semiannual')
  const [selectedPlan, setSelectedPlan] = useState<Plans>('start')

  const { data: plans } = usePlans()

  const planFree: PlansData = useMemo(() => plans ? plans[0] : [], [plans])
  const planStart: PlansData = useMemo(() => plans ? plans[1] : [], [plans])
  const planSelect: PlansData = useMemo(() => plans ? plans[2] : [], [plans])
  const [planDuration, setPlanDuration] = useState(6)
  const [planId, setPlanId] = useState(planStart.id)
  const [price, setPrice] = useState(planStart.semiannual_price)
  const [planName, setPlanName] = useState(planStart.name)
  const { registerPlan } = useSubscriptionsDispatch()

  useEffect(() => {
    setPlanId(planStart.id)
    setPrice(planStart.semiannual_price)
    setPlanName(planStart.name)
  }, [planStart])

  const handleChoosePlan = (plan: Plans) => {
    setSelectedPlan(plan)
    if (plan === 'start') {
      setPlanId(planStart.id)
    } else if (plan === 'free') {
      setPlanId(planFree.id)
    } else {
      setPlanId(planSelect.id)
    }
  }

  const handleChoosePeriod = (period: Periods) => {
    setSelectedPeriod(period)
    if (period === 'semiannual') {
      setPlanDuration(6)
    } else if (period === 'monthly') {
      setPlanDuration(1)
    } else {
      setPlanDuration(12)
    }
  }

  const handleSetNameAndPrice = (plan_id: string, plan_duration: number, plan:PlansData) => {
    if (plan_id === plan.id) {
      setPlanName(plan.name)
      if (plan_duration === 1) {
        setPrice(plan.monthly_price)
      } else if (plan_duration === 6) {
        setPrice(plan.semiannual_price)
      } else {
        setPrice(plan.annual_price)
      }
    }
  }

  useEffect(() => {
    handleSetNameAndPrice(planId, planDuration, planFree)
    handleSetNameAndPrice(planId, planDuration, planStart)
    handleSetNameAndPrice(planId, planDuration, planSelect)
  }, [planId, planDuration])

  useEffect(() => {
    handleRegisterPlan()
  }, [price])

  const handleRegisterPlan = () => {
    registerPlan({
      plan_id: planId,
      plan_duration: planDuration,
      price: price,
      plan_name: planName
    })
  }

  const planDurationOptions = [
    { period: 'monthly', title: 'Mensal' },
    { period: 'semiannual', title: 'Semestral' },
    { period: 'yearly', title: 'Anual' }
  ]

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Selecione o período de pagamento</S.Title>

        <S.PlansWrapper>
          {planDurationOptions.map((item: PlanDurationProps, index) => {
            return (
              <S.PlanType
                key={index}
                isActive={selectedPeriod === item.period}
                onClick={() => {
                  handleChoosePeriod(item.period)
                }}
              >
                {item.title}
              </S.PlanType>
            )
          })}
        </S.PlansWrapper>
        <S.Subtitle>Renovação feita de forma automática</S.Subtitle>
      </S.Wrapper>
      {children}
      <S.PlansContents>
        <S.PlanContentsWrapper
          isActive={selectedPlan === 'free'}
          onClick={() => {
            handleChoosePlan('free')
          }}
        >
          <S.TitlePlan>{formatFirstLetterToUppercase(planFree.name)}</S.TitlePlan>
          <S.Text>
            Plano com um custo acessível e que te dá mais benefícios.
          </S.Text>
          <h2>R$ 0,00</h2>
          <S.Button isActive={selectedPlan === 'free'}>
            {selectedPlan === 'free' ? 'Plano Escolhido' : 'Escolher este plano'}
          </S.Button>
          <S.PlanItemsList>
            <li>
              <S.PlanItem>
                <span>
                  <S.CheckedCheckBox />
                </span>
                CashBack sobre as transações com o cartão Banco Um
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.CheckedCheckBox />
                </span>
                Ganho por indicação direta
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.NotIncludedIcon />
                </span>
                Ganhos por indicados indiretos
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.NotIncludedIcon />
                </span>
                Programa de Fidelidade Quantum
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.NotIncludedIcon />
                </span>
                Ganhos por indicados diretos
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.NotIncludedIcon />
                </span>
                Comissões
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
          </S.PlanItemsList>
        </S.PlanContentsWrapper>

        <S.PlanContentsWrapper
          isActive={selectedPlan === 'start'}
          onClick={() => {
            handleChoosePlan('start')
          }}
        >
          <S.TitlePlan>{formatFirstLetterToUppercase(planStart.name)}</S.TitlePlan>
          <S.Text>
            Plano com um custo acessível e que te dá mais benefícios.
          </S.Text>
          <h2>
            {selectedPeriod === 'semiannual'
              ? formatPrice(planStart.semiannual_price)
              : (selectedPeriod === 'monthly'
                  ? formatPrice(planStart.monthly_price)
                  : formatPrice(planStart.annual_price))}
          </h2>
          <S.Button
            isActive={selectedPlan === 'start'}
          >
            {selectedPlan === 'start' ? 'Plano Escolhido' : 'Escolher este plano'}
          </S.Button>
          <S.PlanItemsList>
            <li>
              <S.PlanItem>
                <span>
                  <S.CheckedCheckBox />
                </span>
                CashBack sobre as transações com o cartão Banco Um
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.CheckedCheckBox />
                </span>
                Ganho por indicação direta
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.CheckedCheckBox />
                </span>
                Ganhos por indicados indiretos
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.CheckedCheckBox />
                </span>
                Programa de Fidelidade Quantum
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.NotIncludedIcon />
                </span>
                Ganhos por indicados diretos
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.NotIncludedIcon />
                </span>
                Comissões
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
          </S.PlanItemsList>
        </S.PlanContentsWrapper>

        <S.PlanContentsWrapper
          isActive={selectedPlan === 'select'}
          onClick={() => {
            handleChoosePlan('select')
          }}
        >
          <S.TitlePlan>{formatFirstLetterToUppercase(planSelect.name)}</S.TitlePlan>
          <S.Text>Plano para que você aproveite o máximo do Quantum.</S.Text>
          <h2>
            {selectedPeriod === 'semiannual'
              ? formatPrice(planSelect.semiannual_price)
              : (selectedPeriod === 'monthly'
                  ? formatPrice(planSelect.monthly_price)
                  : formatPrice(planSelect.annual_price))}
          </h2>
          <S.Button isActive={selectedPlan === 'select'}>
            {selectedPlan === 'select' ? 'Plano Escolhido' : 'Escolher este plano'}
          </S.Button>
          <S.PlanItemsList>
            <li>
              <S.PlanItem>
                <span>
                  <S.CheckedCheckBox />
                </span>
                CashBack sobre as transações com o cartão Banco Um
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.CheckedCheckBox />
                </span>
                Ganho por indicação direta
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.CheckedCheckBox />
                </span>
                Ganhos por indicados indiretos
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.CheckedCheckBox />
                </span>
                Programa de Fidelidade Quantum
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.CheckedCheckBox />
                </span>
                Ganhos por indicados diretos
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
            <li>
              <S.PlanItem>
                <span>
                  <S.CheckedCheckBox />
                </span>
                Comissões
              </S.PlanItem>
              <span>
                <S.InfoIcon />
              </span>
            </li>
          </S.PlanItemsList>
        </S.PlanContentsWrapper>
      </S.PlansContents>

      <section>

        {button}

      </section>
    </S.Container>
  )
}
