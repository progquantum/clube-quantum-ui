import { AiOutlineCheckCircle } from 'react-icons/ai';

import { formatDate } from 'utils/formatters/formatDate';

import { RequestProps, RequestStatusEnum } from './types';
import * as S from './styles';

export function Request({ request }: RequestProps) {
  return (
    <S.Container>
      <S.UserName>{request.name}</S.UserName>
      <S.ContractId>ID - {request.contractId}</S.ContractId>
      <S.RequestDateLabel>Data de pedido</S.RequestDateLabel>
      <S.RequestDate>{formatDate(request.requestDate)}</S.RequestDate>
      <S.ContractName>
        <S.Bold>Tipo:</S.Bold> {request.planName}
      </S.ContractName>
      <S.BirthDate>
        <S.Bold>Data de Nasc.: </S.Bold>
        {formatDate(request.birthDate)}
      </S.BirthDate>
      <S.Email>
        <S.Bold>Email: </S.Bold>
        {request.email}
      </S.Email>
      <S.RequestStatus status={request.requestStatus}>
        <AiOutlineCheckCircle size={24} />{' '}
        {RequestStatusEnum[request.requestStatus]}
      </S.RequestStatus>
    </S.Container>
  );
}
