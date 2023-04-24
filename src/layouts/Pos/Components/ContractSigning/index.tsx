import { useGetLoggedUser } from 'hooks/me/useGetLoggedUser';
import { useGetContractStatus } from 'hooks/useContracts/useGetContractStatus';

import * as S from './styles';
import { ContractStatus, Props } from './types';

export function ContractSigning({ onNextStep, contract }: Props) {
  const { data: loggedUser } = useGetLoggedUser();
  const { data: contractStatus } = useGetContractStatus(contract.document.key);

  const status =
    (contractStatus && contractStatus?.document?.status) ?? 'Pendente';

  return (
    <S.Container>
      <S.ContentTitle>
        <S.LeftStyle />
        <S.Title>Confirmar dados do contrato</S.Title>
      </S.ContentTitle>

      <S.TextTitle>Solicitação de assinatura de contrato</S.TextTitle>

      <a href={contract.document.url} target="_blank" rel="noopener noreferrer">
        <S.StyledButton>Visualizar para assinar</S.StyledButton>
      </a>

      <S.Line />
      <S.ContratctText>{contract.document.file_name}</S.ContratctText>
      <S.Line />
      <div
        style={{
          display: 'flex',
          width: '100%',
          marginTop: '24px',
          gap: '12px',
        }}
      >
        <S.Name>{loggedUser?.name}:</S.Name>
        <S.Status status={status}>{ContractStatus[status]}</S.Status>
      </div>
    </S.Container>
  );
}
