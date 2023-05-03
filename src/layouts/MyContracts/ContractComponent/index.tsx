import { AiFillInfoCircle } from 'react-icons/ai';

import { colors } from 'styles/theme/colors';
import { formatDate } from 'utils/formatters/formatDate';

import * as S from './styles';
import { Props } from './types';

export function ContractComponent({
  onRequestModalContract,
  contract,
  getSelectedContract,
}: Props) {
  const handleClickOnContract = () => {
    getSelectedContract(contract);
    onRequestModalContract();
  };

  return (
    <S.Container onClick={handleClickOnContract}>
      <S.Column>
        <S.Title>Contrato {contract.plan_name}</S.Title>
        <S.Text>ID - {contract.document_key}</S.Text>
        <S.Text>Data de aquisição</S.Text>
        <S.DueDate>{formatDate(contract.date_of_acquisition)}</S.DueDate>
      </S.Column>
      <S.ContainerIcon>
        <AiFillInfoCircle size={20} color={colors.mediumslateBlue} />
      </S.ContainerIcon>
    </S.Container>
  );
}
