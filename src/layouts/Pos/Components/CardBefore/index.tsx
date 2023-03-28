import { Button } from 'components/Button';
import { useGetProductsOfPartnerById } from 'hooks/usePartners';

import { formatPrice } from 'utils/formatters/formatPrice';

import { Props } from './types';
import * as S from './styles';

export function CardBefore({ onNextStep, onPreviousStep }: Props) {
  const { data: smart } = useGetProductsOfPartnerById(
    'da1cee85-714a-4842-a1ec-c3506fbf8e2f',
  );
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
            <S.PlanType>{smart?.productList[0].name.split(' ')[0]}</S.PlanType>
            <S.PlanTypeWeight>
              {smart?.productList[0].name.split(' ')[1]}
            </S.PlanTypeWeight>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <S.PlanPrice>
              {formatPrice(smart?.productList[0].price)}
            </S.PlanPrice>
            <S.TypeCharge>/Mês</S.TypeCharge>
          </div>
          <S.Info>{smart?.productList[0].description}</S.Info>
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
