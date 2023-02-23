import { Button } from 'components/Button';

import * as S from './styles';
import { Props } from './types';

export function CardBefore({ onNextStep, onPreviousStep }: Props) {
  return (
    <S.Container>
      <S.ContentTitle>
        <S.LeftStyle />
        <S.Title>Antes de começarmos...</S.Title>
      </S.ContentTitle>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <S.Card>
          <S.Text>
            Para começar com a aquisição da maquininha POS, precisamos confirmar
            alguns dados.
          </S.Text>
          <S.Title>Detalhes do plano</S.Title>
          <div style={{ display: 'flex', gap: '10px' }}>
            <S.PlanType>Quantum </S.PlanType>
            <S.PlanTypeWeight> Smart</S.PlanTypeWeight>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <S.PlanPrice>R$ 44,90 </S.PlanPrice>
            <S.TypeCharge>/Mês</S.TypeCharge>
          </div>
          <S.Info>Cobrança mensal no Cartão Banco UM</S.Info>
          <S.Text>
            Ao clicar em prosseguir, você confirma estar compartilhando seus
            dados cadastrados no Quantum para realizar a aquisição de sua
            maquininha POS.
          </S.Text>
        </S.Card>
      </div>

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
        <Button variant="primary" onClick={onNextStep}>
          Seguir
        </Button>
      </div>
    </S.Container>
  );
}
