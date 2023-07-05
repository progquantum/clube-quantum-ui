import { AiOutlineCheckCircle } from 'react-icons/ai';

import dayjs from 'dayjs';

import { formatDate } from 'utils/formatters/formatDate';

import { RequestProps, RequestStatusEnum } from './types';
import * as S from './styles';

export function Request({ request }: RequestProps) {
  return (
    <S.Container>
      <S.UserName>{request.contract.user.individual_person.name}</S.UserName>
      <S.ContractId>ID - {request.contract.document_key}</S.ContractId>
      <S.RequestDateLabel>Data de pedido</S.RequestDateLabel>
      <S.RequestDate>
        {formatDate(request.contract.date_of_acquisition)}
      </S.RequestDate>
      <S.ContractName>
        <S.Bold>Produto:</S.Bold> {request.contract.plan_name}
      </S.ContractName>
      <S.BirthDate>
        <S.Bold>Data de Nasc.: </S.Bold>
        {dayjs(request.contract.user.individual_person.birth_date)
          .add(1, 'day')
          .format('DD/MM/YYYY')}
      </S.BirthDate>
      <S.Email>
        <S.Bold>Email: </S.Bold>
        {request.contract.user.email}
      </S.Email>
      <S.RequestStatus status={request.cancelled_status}>
        <AiOutlineCheckCircle size={24} />{' '}
        {RequestStatusEnum[request.cancelled_status]}
      </S.RequestStatus>
    </S.Container>
  );
}
