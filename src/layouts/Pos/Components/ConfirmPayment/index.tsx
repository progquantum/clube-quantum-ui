import { MdAssignmentInd } from 'react-icons/md';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

import { useTheme } from 'styled-components';

import { useRef } from 'react';

import { FiLock } from 'react-icons/fi';

import { Button } from 'components/Button';

import { Input } from 'components/Input';

import { formatCVV } from 'utils/formatters/formatCVV';

import * as S from './styles';
import { Props } from './types';

export function ConfirmPayment({ onNextStep, onPreviousStep }: Props) {
  const { colors } = useTheme();

  const formRef = useRef<FormHandles>(null);

  const handleSubmitCVV: SubmitHandler = async data => {
    onNextStep();
    console.log(data);
  };

  return (
    <S.Container as={Form} ref={formRef} onSubmit={handleSubmitCVV}>
      <S.ContentTitle>
        <S.LeftStyle />
        <S.Title>Confirmar dados de pagamento</S.Title>
      </S.ContentTitle>

      <S.ContentColumn>
        <S.Card>
          <S.Text>
            <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
            Seu plano escolhido
          </S.Text>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              margin: '24px 0',
              justifyContent: 'center',
            }}
          >
            <S.PlanType>Quantum </S.PlanType>
            <S.PlanTypeWeight> Smart</S.PlanTypeWeight>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
              justifyContent: 'center',
            }}
          >
            <S.PlanPrice>R$ 44,90 </S.PlanPrice>
            <S.TypeCharge>/Mês</S.TypeCharge>
          </div>
          <S.Info>Cobrança mensal no Cartão Banco UM</S.Info>
        </S.Card>
        <S.Card>
          <S.Text>
            <MdAssignmentInd size={19.87} color={colors.mediumslateBlue} />
            Informações pessoais
          </S.Text>
          <div
            style={{
              display: 'flex',
              marginTop: '26.44px',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <S.ContentRow>
              <S.TextStrong>Nome</S.TextStrong>
              <S.TextData>Rafael Gael Caio Teixeira</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>Cartão</S.TextStrong>
              <S.TextData>**** **** **** 0768</S.TextData>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>Confirme o CVV</S.TextStrong>
              <div style={{ width: '100px' }}>
                <Input
                  type="text"
                  name="cvc"
                  placeholder="CVV"
                  onChange={e =>
                    formRef.current.setFieldValue(
                      'cvc',
                      formatCVV(e.target.value),
                    )
                  }
                  inputMode="numeric"
                />
              </div>
            </S.ContentRow>
            <S.ContentRow>
              <S.TextStrong>Validade</S.TextStrong>
              <S.TextData>03/29</S.TextData>
            </S.ContentRow>
          </div>
        </S.Card>
      </S.ContentColumn>

      <div
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '420px',
          gap: '12px',
          margin: '16px auto 0 auto',
        }}
      >
        <Button variant="secondary" onClick={onPreviousStep}>
          Voltar
        </Button>
        <Button type="submit" variant="primary">
          Seguir
        </Button>
      </div>
    </S.Container>
  );
}
