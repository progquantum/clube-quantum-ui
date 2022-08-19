import { useState } from 'react'

import { Button } from 'components/Button'
import { usePlans } from 'hooks/usePlans'
import { usePlansDispatch } from 'contexts/plans/PlansContext'
import { formatPrice } from 'utils/formatters/formatPrice'

import { Periods, Plans, PlansData, PlansProps } from './types'
import * as S from './styles'
import { Skeleton } from './Skeleton'

export function Plans ({ children, onUpdateFormStep, titleButton = 'Finalizar cadastro' }: PlansProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<Periods>('semiannual')
  const [selectedPlan, setSelectedPlan] = useState<Plans>('start')

  const { data, isLoading } = usePlans()

  const planFree: PlansData = data ? data[0] : []
  const planStart: PlansData = data ? data[1] : []
  const planSelect: PlansData = data ? data[2] : []
  const [planDuration, setPlanDuration] = useState(6)
  const [planId, setPlanId] = useState(planStart.id)
  const { setPlan } = usePlansDispatch()

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

  const handleFormatTextUpperCase = (text: string) => {
    return text?.toLowerCase()
      .split(' ')
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1)
      }).join(' ')
  }

  const handleClick = () => {
    setPlan({
      plan_id: planId,
      plan_duration: planDuration
    })
    onUpdateFormStep()
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
          <S.TitlePlan>{handleFormatTextUpperCase(planFree.name)}</S.TitlePlan>
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
          <S.TitlePlan>{handleFormatTextUpperCase(planStart.name)}</S.TitlePlan>
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
          <S.TitlePlan>{handleFormatTextUpperCase(planSelect.name)}</S.TitlePlan>
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
        <Button
          onClick={handleClick}
        >
          {titleButton}
        </Button>
      </section>
    </S.Container>
  )
}
