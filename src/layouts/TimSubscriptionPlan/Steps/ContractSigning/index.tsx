import { PulseLoader } from 'react-spinners';

import { useTheme } from 'styled-components';

import { useEffect } from 'react';

import { useGetContractStatus } from 'hooks/useContracts/useGetContractStatus';

import { useTimPlanStore } from 'store/tim';

import { Loading } from 'components/Loading';

import * as S from './styles';
import { ContractStatus } from './types';

export function ContractSigning({ loggedUser }) {
  const contract = useTimPlanStore(state => state.contract);
  const nextStep = useTimPlanStore(state => state.nextStep);
  const { colors } = useTheme();
  const { data: contractStatus, isLoading } = useGetContractStatus(
    contract.key,
  );

  useEffect(() => {
    if (contractStatus === 'closed' && !isLoading) {
      nextStep();
    }
  }, [contractStatus]);

  return (
    <S.ContractSigningContainer>
      <S.Title>Solicitação de assinatura de contrato</S.Title>
      <a href={contract.url} target="_blank" rel="noopener noreferrer">
        <S.ShowContractBtn>Visualizar para assinar</S.ShowContractBtn>
      </a>
      <S.ContractFile>{contract.file_name}</S.ContractFile>
      <S.ContractorName>
        {loggedUser.name}:{' '}
        <S.ContractStatus status={contractStatus}>
          {isLoading ? (
            <Loading
              icon={PulseLoader}
              color={colors.mediumslateBlue}
              size={10}
            />
          ) : (
            ContractStatus[contractStatus]
          )}
        </S.ContractStatus>
      </S.ContractorName>
    </S.ContractSigningContainer>
  );
}
