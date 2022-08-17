import { useState } from 'react'

import { Button } from 'components/Button'

import { usePlans } from 'hooks/usePlans'

import { Periods, Plans, PlansData, PlansProps } from './types'
import * as S from './styles'

export function Plans ({ children, onUpdateFormStep, titleButton = 'Finalizar cadastro' }: PlansProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<Periods>('semiannual')
  const [selectedPlan, setSelectedPlan] = useState<Plans>('start')

  const handleChoosePlan = (plan: Plans) => {
    setSelectedPlan(plan)
  }

  const handleChoosePeriod = (period: Periods) => {
    setSelectedPeriod(period)
  }

  const { data } = usePlans()
  const planFree:PlansData = data ? data[0] : []
  const planStart:PlansData = data ? data[1] : []
  const planSelect:PlansData = data ? data[2] : []

  const handlePrice = (price = '') => {
    return `R$ ${price.replace('.', ',')}0`
  }

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
          <S.TitlePlan>{planFree.name}</S.TitlePlan>
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
          <S.TitlePlan>{planStart.name}</S.TitlePlan>
          <S.Text>
            Plano com um custo acessível e que te dá mais benefícios.
          </S.Text>
          <h2>{selectedPeriod === 'semiannual' ? handlePrice(planStart.semiannual_price) : (selectedPeriod === 'monthly' ? handlePrice(planStart.monthly_price) : handlePrice(planStart.annual_price))}</h2>
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
          <S.TitlePlan>{planSelect.name}</S.TitlePlan>
          <S.Text>Plano para que você aproveite o máximo do Quantum.</S.Text>
          <h2>{selectedPeriod === 'semiannual' ? handlePrice(planSelect.semiannual_price) : (selectedPeriod === 'monthly' ? handlePrice(planSelect.monthly_price) : handlePrice(planSelect.annual_price))}</h2>
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
        <Button onClick={onUpdateFormStep}>{titleButton}</Button>
      </section>
    </S.Container>
  )
}
