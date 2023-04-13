import { useEffect, useState } from 'react';

import Link from 'next/link';

import { useCreateDocumentRequestSignatureTim } from 'hooks/useContracts/useCreateDocumentRequestSignatureTim';
import { useTimPlanStore } from 'store/tim';

import { ResponseData } from 'hooks/useContracts/useCreateDocumentRequestSignatureTim/types';

import * as S from './styles';

export function ContractSigning({ loggedUser }) {
  const nextStep = useTimPlanStore(state => state.nextStep);
  const isPortability = useTimPlanStore(state => state.isPortability);
  const selectedPlan = useTimPlanStore(state => state.selectedPlan);
  const [contractData, setContractData] = useState({} as ResponseData);

  const { mutate: postContract } = useCreateDocumentRequestSignatureTim();

  const { address, birth_date: birthDate, ...user } = loggedUser;
  const { zip_code: cep, state: uf, ...restAddress } = address;

  const requestBody = {
    ...restAddress,
    ...user,
    uf,
    birthDate,
    cep,
    isPortability,
    plan: selectedPlan.name,
    planValue: selectedPlan.price,
  };

  // useEffect(() => {
  //   if (requestBody) {
  //     postContract(requestBody, {
  //       onSuccess: (data: ResponseData) => {
  //         setContractData(data);
  //       },
  //       onError: () => {
  //         console.log('deu ruim');
  //       },
  //     });
  //   }
  // }, []);

  return (
    <S.ContractSigningContainer>
      <S.Title>Solicitação de assinatura de contrato</S.Title>
      <Link href={contractData.document.url}>
        <S.ShowContractBtn onClick={nextStep}>
          Visualizar para assinar
        </S.ShowContractBtn>
      </Link>
      <S.ContractFile>Contrato_de_prestação_de_serviços.docx</S.ContractFile>
      <S.ContractorName>
        {loggedUser.name}: <S.YellowText>Pendente</S.YellowText>
      </S.ContractorName>
    </S.ContractSigningContainer>
  );
}
