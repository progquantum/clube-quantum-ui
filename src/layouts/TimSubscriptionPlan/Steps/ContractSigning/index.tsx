import { useGetContractStatus } from 'hooks/useContracts/useGetContractStatus';

import { useTimPlanStore } from 'store/tim';

import * as S from './styles';

export function ContractSigning({ loggedUser }) {
  const contract = useTimPlanStore(state => state.contract);
  const { data: contractStatus } = useGetContractStatus(contract.key);

  const status = contractStatus?.document?.status || 'Pendente';

  return (
    <S.ContractSigningContainer>
      <S.Title>Solicitação de assinatura de contrato</S.Title>
      <a href={contract.url} target="_blank" rel="noopener noreferrer">
        <S.ShowContractBtn>Visualizar para assinar</S.ShowContractBtn>
      </a>
      <S.ContractFile>{contract.file_name}</S.ContractFile>
      <S.ContractorName>
        {loggedUser.name}: <S.ContractStatus>{status}</S.ContractStatus>
      </S.ContractorName>
    </S.ContractSigningContainer>
  );
}
