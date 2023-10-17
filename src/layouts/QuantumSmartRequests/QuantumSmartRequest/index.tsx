import { MarketplaceSubscription } from 'hooks/subscriptions/useSubscriptionQuantumSmartRequest/types';

import * as S from './styles';
import { StatusEnum } from './types';

export function QuantumSmartRequest({
  request,
}: {
  request: MarketplaceSubscription;
}) {
  const IndividualPersonName =
    request.user.individual_person && request.user.individual_person.name;
  const LegalPersonName =
    request.user.legal_person && request.user.legal_person.company_name;

  const IndividualPersonBirthDate =
    request.user.individual_person && request.user.individual_person.birth_date;

  return (
    <S.Container>
      <S.Name>{IndividualPersonName ?? LegalPersonName}</S.Name>
      <S.Id>ID - {request.id}</S.Id>
      <S.RequestDate>
        <span>Data de pedido</span>
        <span>
          {new Intl.DateTimeFormat('pt-BR').format(
            new Date(request.subscribed_at),
          )}
        </span>
      </S.RequestDate>
      <S.Field>
        <span>Produto: </span>
        {request.partner_product.name}
      </S.Field>
      <S.Field>
        <span>Data de Nasc: </span>
        {IndividualPersonBirthDate ?? 'N/A'}
      </S.Field>
      <S.Field>
        <span>E-mail: </span>
        {request.user.email}
      </S.Field>
      <S.RequestStatus requestStatus={request.status}>
        {StatusEnum[request.status]}
      </S.RequestStatus>
    </S.Container>
  );
}
