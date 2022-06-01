import { useState } from 'react'
import Image from 'next/image'

import { DataPlansProps } from './types'
import * as S from './styles'

type Plans = 'monthly' | 'semiannual' | 'yearly'

export function DataPlans ({ onUpdateFormStep }: DataPlansProps) {
  const [selectedPlan, setSelectedPlan] = useState<Plans>('semiannual')

  const handleChoosePlan = (plan: Plans) => {
    setSelectedPlan(plan)
  }

  return (
    <S.Container>
      <section>
        <Image width={450} height={350} src='/images/know-plans.png' alt='' />
        <S.Plans>
          <div>
            <h4
              className={
                selectedPlan === 'monthly' ? 'selected-plan' : ''
              }
              onClick={() => handleChoosePlan('monthly')}
            >
              Plano <br /> Mensal
            </h4>
            <h4
              className={
                selectedPlan === 'semiannual' ? 'selected-plan' : ''
              }
              onClick={() => handleChoosePlan('semiannual')}
            >
              Plano <br /> Semestral
            </h4>
            <h4
              className={
                selectedPlan === 'yearly' ? 'selected-plan' : ''
              }
              onClick={() => handleChoosePlan('yearly')}
            >
              Plano <br /> Anual
            </h4>
          </div>
          <p>Renovação feita de forma automática</p>
        </S.Plans>
      </section>

      <S.PlansContents>
        <div>
          <h3>Quantum Free</h3>
          <p>
            It is a long established fact that a reader will be distracted.
          </p>
          <h2>R$ 0,00</h2>
          <S.Button>Escolher este plano</S.Button>
          <ul>
            <li>
              <span>
                <S.CheckedCheckBox />
              </span>
              CashBack sobre asa transações com o cartão Banco Um
            </li>
            <li>
              <span>
                <S.CheckedCheckBox />
              </span>
              Ganho por indicação direta
            </li>
            <li>
              <span>
                <S.NotIncludedIcon />
              </span>
              Ganhos por indicados indiretos
            </li>
            <li>
              <span>
                <S.NotIncludedIcon />
              </span>
              Programa de Fidelidade Quantum
            </li>
            <li>
              <span>
                <S.NotIncludedIcon />
              </span>
              Ganhos por indicados diretos
            </li>
            <li>
              <span>
                <S.NotIncludedIcon />
              </span>
              Comissões
            </li>
          </ul>
        </div>

        <div>
          <h3>Quantum Start</h3>
          <p>
            It is a long established fact that a reader will be distracted.
          </p>
          <h2>R$ 109,90</h2>
          <S.Button>Escolher este plano</S.Button>
          <ul>
            <li>
              <span>
                <S.CheckedCheckBox />
              </span>
              CashBack sobre asa transações com o cartão Banco Um
            </li>
            <li>
              <span>
                <S.CheckedCheckBox />
              </span>
              Ganho por indicação direta
            </li>
            <li>
              <span>
                <S.CheckedCheckBox />
              </span>
              Ganhos por indicados indiretos
            </li>
            <li>
              <span>
                <S.CheckedCheckBox />
              </span>
              Programa de Fidelidade Quantum
            </li>
            <li>
              <span>
                <S.NotIncludedIcon />
              </span>
              Ganhos por indicados diretos
            </li>
            <li>
              <span>
                <S.NotIncludedIcon />
              </span>
              Comissões
            </li>
          </ul>
        </div>

        <div>
          <h3>Quantum Select</h3>
          <p>
            It is a long established fact that a reader will be distracted.
          </p>
          <h2>R$ 269,90</h2>
          <S.Button>Escolher este plano</S.Button>
          <ul>
            <li>
              <span>
                <S.CheckedCheckBox />
              </span>
              CashBack sobre asa transações com o cartão Banco Um
            </li>
            <li>
              <span>
                <S.CheckedCheckBox />
              </span>
              Ganho por indicação direta
            </li>
            <li>
              <span>
                <S.CheckedCheckBox />
              </span>
              Ganhos por indicados indiretos
            </li>
            <li>
              <span>
                <S.CheckedCheckBox />
              </span>
              Programa de Fidelidade Quantum
            </li>
            <li>
              <span>
                <S.CheckedCheckBox />
              </span>
              Ganhos por indicados diretos
            </li>
            <li>
              <span>
                <S.CheckedCheckBox />
              </span>
              Comissões
            </li>
          </ul>
        </div>
      </S.PlansContents>

      <section>
        <S.Button onClick={onUpdateFormStep}>Finalizar cadastro</S.Button>
      </section>
    </S.Container>
  )
}
