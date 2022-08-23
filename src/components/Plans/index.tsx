import { useEffect, useState } from 'react'

import Link from 'next/link'

import { Button } from 'components/Button'
import { usePlans } from 'hooks/usePlans'
import { useSubscriptionsDispatch, useSubscriptionsState } from 'contexts/subscriptions/SubscriptionsContext'
import { formatPrice } from 'utils/formatters/formatPrice'

import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase'

import { DASHBOARD_PAGE } from 'constants/routesPath'

import { Periods, Plans, PlansData, PlansProps } from './types'
import * as S from './styles'
import { Skeleton } from './Skeleton'

export function Plans ({ children, onClick, redirectTo, titleButton = 'Finalizar cadastro' }: PlansProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<Periods>('semiannual')
  const [selectedPlan, setSelectedPlan] = useState<Plans>('start')

  const { data, isLoading } = usePlans()

  const planFree: PlansData = data ? data[0] : []
  const planStart: PlansData = data ? data[1] : []
  const planSelect: PlansData = data ? data[2] : []
  const [planDuration, setPlanDuration] = useState(6)
  const [planId, setPlanId] = useState(planStart.id)
  const [price, setPrice] = useState('')
  const [planName, setPlanName] = useState('')
  const { setPlan } = useSubscriptionsDispatch()

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

  useEffect(() => {
    if (planId === planFree.id) {
      setPlanName(planFree.name)
      if (planDuration === 1) {
        setPrice(`0,${planFree.monthly_price}`)
      } else if (planDuration === 6) {
        setPrice(`0,${planFree.semiannual_price}`)
      } else {
        setPrice(`0,${planFree.annual_price}`)
      }
    } else if (planId === planStart.id) {
      setPlanName(planStart.name)
      if (planDuration === 1) {
        setPrice(planStart.monthly_price)
      } else if (planDuration === 6) {
        setPrice(planStart.semiannual_price)
      } else {
        setPrice(planStart.annual_price)
      }
    } else {
      setPlanName(planSelect.name)
      if (planDuration === 1) {
        setPrice(planSelect.monthly_price)
      } else if (planDuration === 6) {
        setPrice(planSelect.semiannual_price)
      } else {
        setPrice(planSelect.annual_price)
      }
    }
  }, [planId, planDuration])

  const handleClick = () => {
    setPlan({
      plan_id: planId,
      plan_duration: planDuration,
      price: price,
      plan_name: planName
    })

    onClick()
  }

  if (isLoading) return (<Skeleton />)
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Selecione o período de pagamento</S.Title>

        <S.PlansWrapper>
          <S.PlanType
            className={selectedPeriod === 'monthly' ? 'selected-period ' : ''}
            onClick={() => handleChoosePeriod('monthly')}
          >
            Mensal
          </S.PlanType>
          <S.PlanType
            className={selectedPeriod === 'semiannual' ? 'selected-period ' : ''}
            onClick={() => handleChoosePeriod('semiannual')}
          >
            Semestral
          </S.PlanType>
          <S.PlanType
            className={selectedPeriod === 'yearly' ? 'selected-period ' : ''}
            onClick={() => handleChoosePeriod('yearly')}
          >
            Anual
          </S.PlanType>
        </S.PlansWrapper>
        <S.Subtitle>Renovação feita de forma automática</S.Subtitle>
      </S.Wrapper>
      {children}
      <S.PlansContents>
        <S.PlanContentsWrapper
          className={selectedPlan === 'free' ? 'selected-plan' : ''}
          onClick={() => handleChoosePlan('free')}
        >
          <S.TitlePlan>{formatFirstLetterToUppercase(planFree.name)}</S.TitlePlan>
          <S.Text>
            Plano com um custo acessível e que te dá mais benefícios.
          </S.Text>
          <h2>R$ 0,00</h2>
          <S.Button className={selectedPlan === 'free' ? 'selected-plan' : ''}>
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
          className={selectedPlan === 'start' ? 'selected-plan' : ''}
          onClick={() => handleChoosePlan('start')}
        >
          <S.TitlePlan>{formatFirstLetterToUppercase(planStart.name)}</S.TitlePlan>
          <S.Text>
            Plano com um custo acessível e que te dá mais benefícios.
          </S.Text>
          <h2>{selectedPeriod === 'semiannual' ? formatPrice(planStart.semiannual_price) : (selectedPeriod === 'monthly' ? formatPrice(planStart.monthly_price) : formatPrice(planStart.annual_price))}</h2>
          <S.Button className={selectedPlan === 'start' ? 'selected-plan' : ''}>
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
          className={selectedPlan === 'select' ? 'selected-plan' : ''}
          onClick={() => handleChoosePlan('select')}
        >
          <S.TitlePlan>{formatFirstLetterToUppercase(planSelect.name)}</S.TitlePlan>
          <S.Text>Plano para que você aproveite o máximo do Quantum.</S.Text>
          <h2>{selectedPeriod === 'semiannual' ? formatPrice(planSelect.semiannual_price) : (selectedPeriod === 'monthly' ? formatPrice(planSelect.monthly_price) : formatPrice(planSelect.annual_price))}</h2>
          <S.Button className={selectedPlan === 'select' ? 'selected-plan' : ''}>
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
        {redirectTo
          ? (
            <Link href={redirectTo}>
              <Button
                onClick={handleClick}
              >
                {titleButton}
              </Button>
            </Link>
            )
          : (
            <Button
              onClick={handleClick}
            >
              {titleButton}
            </Button>
            )}
      </section>
    </S.Container>
  )
}
