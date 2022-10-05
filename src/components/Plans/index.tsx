import { useState } from 'react';
import Image from 'next/image';

import { Plans, PlansProps } from './types';
import * as S from './styles';

export function Plans({ onUpdateFormStep }: PlansProps) {
  const [selectedPlan, setSelectedPlan] = useState<Plans>('semiannual');

  const handleChoosePlan = (plan: Plans) => {
    setSelectedPlan(plan);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Image width={450} height={350} src="/images/know-plans.png" alt="" />
        <S.Plans>
          <S.PlansWrapper>
            <S.PlanType
              className={selectedPlan === 'monthly' ? 'selected-plan' : ''}
              onClick={() => handleChoosePlan('monthly')}
            >
              Plano <br /> Mensal
            </S.PlanType>
            <S.PlanType
              className={selectedPlan === 'semiannual' ? 'selected-plan' : ''}
              onClick={() => handleChoosePlan('semiannual')}
            >
              Plano <br /> Semestral
            </S.PlanType>
            <S.PlanType
              className={selectedPlan === 'yearly' ? 'selected-plan' : ''}
              onClick={() => handleChoosePlan('yearly')}
            >
              Plano <br /> Anual
            </S.PlanType>
          </S.PlansWrapper>
          <p>Renovação feita de forma automática</p>
        </S.Plans>
      </S.Wrapper>

      <S.PlansContents>
        <S.PlanContentsWrapper>
          <h3>Quantum Free</h3>
          <p>It is a long established fact that a reader will be distracted.</p>
          <h2>R$ 0,00</h2>
          <S.Button>Escolher este plano</S.Button>
          <S.PlanItemsList>
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
          </S.PlanItemsList>
        </S.PlanContentsWrapper>

        <S.PlanContentsWrapper>
          <h3>Quantum Start</h3>
          <p>It is a long established fact that a reader will be distracted.</p>
          <h2>R$ 109,90</h2>
          <S.Button>Escolher este plano</S.Button>
          <S.PlanItemsList>
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
          </S.PlanItemsList>
        </S.PlanContentsWrapper>

        <S.PlanContentsWrapper>
          <h3>Quantum Select</h3>
          <p>It is a long established fact that a reader will be distracted.</p>
          <h2>R$ 269,90</h2>
          <S.Button>Escolher este plano</S.Button>
          <S.PlanItemsList>
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
          </S.PlanItemsList>
        </S.PlanContentsWrapper>
      </S.PlansContents>

      <section>
        <S.ButtonConfirm onClick={onUpdateFormStep}>
          Finalizar cadastro
        </S.ButtonConfirm>
      </section>
    </S.Container>
  );
}
