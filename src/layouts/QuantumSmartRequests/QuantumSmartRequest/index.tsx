import { Request } from '../types';
import * as S from './styles';
import { StatusEnum } from './types';

export function QuantumSmartRequest({ request }: { request: Request }) {
  return (
    <S.Container>
      <S.Name>{request.name}</S.Name>
      <S.Id>ID - {request.requestId}</S.Id>
      <S.RequestDate>
        <span>Data de pedido</span>
        <span>
          {new Intl.DateTimeFormat('pt-BR').format(request.requestDate)}
        </span>
      </S.RequestDate>
      <S.Field>
        <span>Produto: </span>
        {request.productName}
      </S.Field>
      <S.Field>
        <span>Data de Nasc: </span>
        {request.productName}
      </S.Field>
      <S.Field>
        <span>E-mail: </span>
        {request.email}
      </S.Field>
      <S.RequestStatus requestStatus={request.requestStatus}>
        {StatusEnum[request.requestStatus]}
      </S.RequestStatus>
    </S.Container>
  );
}
