import { useMeOrderingData } from 'hooks/user/useOrderingData';

import * as S from './styles';
import { Props } from './types';

export function ContractSigning({ onNextStep }: Props) {
  const { data: OrderingData } = useMeOrderingData();

  return (
    <S.Container>
      <S.ContentTitle>
        <S.LeftStyle />
        <S.Title>Confirmar dados do contrato</S.Title>
      </S.ContentTitle>

      <S.TextTitle>Solicitação de assinatura de contrato</S.TextTitle>

      <S.StyledButton onClick={onNextStep}>
        Visualizar para assinar
      </S.StyledButton>

      <S.Line />
      <S.ContratctText>Contrato_de_prestação_de_serviços.docx</S.ContratctText>
      <S.Line />
      <div
        style={{
          display: 'flex',
          width: '100%',
          marginTop: '24px',
          gap: '12px',
        }}
      >
        <S.Name>{OrderingData?.name}:</S.Name>
        <S.Status>Pendente</S.Status>
      </div>
    </S.Container>
  );
}
