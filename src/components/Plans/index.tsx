import { useEffect, useState } from 'react'

import { usePlans } from 'hooks/usePlans'
import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext'
import { formatPrice } from 'utils/formatters/formatPrice'

import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase'

import { Periods, Plans, PlansData, PlansProps } from './types'
import * as S from './styles'
import { Skeleton } from './Skeleton'

export function Plans ({ children, button }:PlansProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<Periods>('semiannual')
  const [selectedPlan, setSelectedPlan] = useState<Plans>('start')

  const { data: plans, isLoading } = usePlans()

  const planFree: PlansData = plans ? plans[0] : []
  const planStart: PlansData = plans ? plans[1] : []
  const planSelect: PlansData = plans ? plans[2] : []
  const [planDuration, setPlanDuration] = useState(6)
  const [planId, setPlanId] = useState(planStart.id)
  const [price, setPrice] = useState(planStart.semiannual_price)
  const [planName, setPlanName] = useState(planStart.name)
  const [isActive, setIsActive] = useState(false)
  const { registerPlan } = useSubscriptionsDispatch()

  const handleActive = () => setIsActive(true)

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

  useEffect(() => handleActive())

  const handleRegisterPlan = () => {
    registerPlan({
      plan_id: planId,
      plan_duration: planDuration,
      price: price,
      plan_name: planName
    })
  }

  if (isLoading) return (<Skeleton />)
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Selecione o período de pagamento</S.Title>

        <S.PlansWrapper>
          <S.PlanType
            isActive={selectedPeriod === 'monthly' && isActive}
            onClick={() => {
              handleChoosePeriod('monthly')
              handleActive()
            }}
          >
            Mensal
          </S.PlanType>
          <S.PlanType
            isActive={selectedPeriod === 'semiannual' && isActive}
            onClick={() => {
              handleChoosePeriod('semiannual')
              handleActive()
            }}
          >
            Semestral
          </S.PlanType>
          <S.PlanType
            isActive={selectedPeriod === 'yearly' && isActive}
            onClick={() => {
              handleChoosePeriod('yearly')
              handleActive()
            }}
          >
            Anual
          </S.PlanType>
        </S.PlansWrapper>
        <S.Subtitle>Renovação feita de forma automática</S.Subtitle>
      </S.Wrapper>
      {children}
      <S.PlansContents>
        <S.PlanContentsWrapper
          isActive={selectedPlan === 'free' && isActive}
          onClick={() => {
            handleChoosePlan('free')
            handleActive()
          }}
        >
          <S.TitlePlan>{formatFirstLetterToUppercase(planFree.name)}</S.TitlePlan>
          <S.Text>
            Plano com um custo acessível e que te dá mais benefícios.
          </S.Text>
          <h2>R$ 0,00</h2>
          <S.Button isActive={selectedPlan === 'free' && isActive}>
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
          isActive={selectedPlan === 'start' && isActive}
          onClick={() => {
            handleChoosePlan('start')
            handleActive()
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
            isActive={selectedPlan === 'start' && isActive}
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
          isActive={selectedPlan === 'select' && isActive}
          onClick={() => {
            handleChoosePlan('select')
            handleActive()
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
          <S.Button isActive={selectedPlan === 'select' && isActive}>
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
