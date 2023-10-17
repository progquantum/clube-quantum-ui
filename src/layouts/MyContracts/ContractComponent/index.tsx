import { AiFillInfoCircle } from 'react-icons/ai';

import { colors } from 'styles/theme/colors';
import { formatDate } from 'utils/formatters/formatDate';

import * as S from './styles';
import { Props, Status } from './types';

export function ContractComponent({
  onRequestModalContract,
  contract,
  getSelectedContract,
}: Props) {
  const handleClickOnContract = () => {
    getSelectedContract(contract);
    onRequestModalContract();
  };

  const cancellationStatusText = {
    APPROVED: 'Cancelamento efetuado',
    PENDING: 'Solicitação de cancelamento em andamento',
  };

  return (
    <S.Container data-cy="contract" onClick={handleClickOnContract}>
      <S.Column>
        <S.Title>Contrato {contract.plan_name}</S.Title>
        <S.Text>ID - {contract.document_key}</S.Text>
        <S.Text>Data de aquisição</S.Text>
        <S.DueDate>{formatDate(contract.date_of_acquisition)}</S.DueDate>
      </S.Column>
      <S.ContainerIcon>
        <AiFillInfoCircle size={20} color={colors.mediumslateBlue} />
      </S.ContainerIcon>
      {contract.request_cancellation[0]?.cancelled_status &&
        contract.request_cancellation[0]?.cancelled_status !== 'DENIED' && (
          <S.CancellationStatus
            status={
              contract.request_cancellation[0]?.cancelled_status as Status
            }
          >
            {
              cancellationStatusText[
                contract.request_cancellation[0]?.cancelled_status as Status
              ]
            }
          </S.CancellationStatus>
        )}
    </S.Container>
  );
}
