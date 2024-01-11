import Image from 'next/legacy/image';

import { PlanSectionTitle } from 'components/PlanSectionTitle';

import * as S from './styles';

export function ProcessingPayment() {
  return (
    <>
      <PlanSectionTitle>Aguarde! Processando pagamento</PlanSectionTitle>
      <S.LoadingContainer>
        <Image
          src="/images/Loading-v2.svg"
          width={100}
          height={100}
          alt="Animação de carregamento"
        />
        <S.Title>Aguarde enquanto processamos o seu pagamento</S.Title>
        <S.Subtitle>
          Não saia ou atualize a página enquanto esta requisição estiver em
          andamento!
        </S.Subtitle>
      </S.LoadingContainer>
    </>
  );
}
