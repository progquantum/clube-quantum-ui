import { useTimPlanStore } from 'store/tim';

import * as S from './styles';

export function ContractSigning() {
  const nextStep = useTimPlanStore(state => state.nextStep);

  return (
    <S.ContractSigningContainer>
      <S.Title>Solicitação de assinatura de contrato</S.Title>
      <S.ShowContractBtn onClick={nextStep}>
        Visualizar para assinar
      </S.ShowContractBtn>
      <S.ContractFile>Contrato_de_prestação_de_serviços.docx</S.ContractFile>
      <S.ContractorName>
        Rafael Gael Caio Teixeira: <S.YellowText>Pendente</S.YellowText>
      </S.ContractorName>
    </S.ContractSigningContainer>
  );
}
