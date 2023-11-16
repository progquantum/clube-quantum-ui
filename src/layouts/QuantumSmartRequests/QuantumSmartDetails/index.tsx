import { useQueryClient } from 'react-query';
import { IoIosArrowBack } from 'react-icons/io';
import Swal from 'sweetalert2';

import { Button } from 'components/Button';
import { MarketplaceSubscription } from 'hooks/subscriptions/useSubscriptionQuantumSmartRequest/types';

import { usePutReplyPosPurchaseRequest } from 'hooks/subscriptions/useSubscriptionsReplyPostPurchaseRequest';
import { success } from 'helpers/notify/success';
import { QUERY_KEY_GET_QUANTUM_SMART_REQUESTS } from 'hooks/subscriptions/useSubscriptionQuantumSmartRequest';
import { error } from 'helpers/notify/error';

import * as S from './styles';
import { ClickableContainer } from '../styles';

export function QuantumSmartDetails({
  request,
  onRequestClose,
}: {
  request: MarketplaceSubscription;
  onRequestClose: (request: MarketplaceSubscription | null) => void;
}) {
  const { mutate: ResolveRequest, isLoading } = usePutReplyPosPurchaseRequest();
  const queryClient = useQueryClient();
  const alert = (title: string) =>
    Swal.fire({
      title,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, desejo',
      cancelButtonText: 'Não',
      buttonsStyling: false,
      customClass: {
        title: 'sweetTitle',
        confirmButton: 'sweetConfirmButton',
        cancelButton: 'sweetCancelButton',
        container: 'sweetContainer',
      },
    });

  const acceptRequest = () =>
    alert('Você tem certeza que deseja aceitar essa compra?').then(response => {
      if (response.isConfirmed) {
        ResolveRequest(
          { id: request.id, status: 'APPROVED' },
          {
            onSuccess: () => {
              success(`Solicitação aprovada com sucesso`);
              onRequestClose(null);
              queryClient.invalidateQueries(
                QUERY_KEY_GET_QUANTUM_SMART_REQUESTS,
              );
            },
            onError: () => error('Algo deu errado'),
          },
        );
      }
    });

  const declineRequest = () =>
    alert('Você tem certeza que deseja recusar essa compra?').then(response => {
      if (response.isConfirmed) {
        ResolveRequest(
          { id: request.id, status: 'REJECTED' },
          {
            onSuccess: () => {
              success(`Solicitação recusada com sucesso`);
              onRequestClose(null);
              queryClient.invalidateQueries(
                QUERY_KEY_GET_QUANTUM_SMART_REQUESTS,
              );
            },
            onError: () => error('Algo deu errado'),
          },
        );
      }
    });

  const IndividualPersonName =
    request.user.individual_person && request.user.individual_person.name;
  const LegalPersonName =
    request.user.legal_person && request.user.legal_person.company_name;
  const IndividualPersonBirthDate =
    request.user.individual_person && request.user.individual_person.birth_date;

  return (
    <S.Container>
      <ClickableContainer
        onClick={() => onRequestClose(null)}
        data-testid="clickable-title"
      >
        <S.TitleContainer>
          <IoIosArrowBack size={36} />
          <S.Title>Solicitações Smart</S.Title>
        </S.TitleContainer>
      </ClickableContainer>
      <S.Name>{IndividualPersonName ?? LegalPersonName}</S.Name>
      <S.ContractId>ID - {request.id}</S.ContractId>
      <S.Field>
        <span>Data de Nasc. </span>
        <span>{IndividualPersonBirthDate ?? 'N/A'}</span>
      </S.Field>
      <S.Field>
        <span>E-mail</span>
        <span>{request.user.email}</span>
      </S.Field>
      <S.Field>
        <span>Produto </span>
        <span>{request.partner_product.name}</span>
      </S.Field>
      <S.Field>
        <span>Número de telefone</span>
        <span>{request.user.phone}</span>
      </S.Field>
      <S.Field>
        <span>DDD </span>
        <span>
          {request.user.phone[5]}
          {request.user.phone[6]}
        </span>
      </S.Field>
      <S.Field>
        <span>Valor da mensalidade</span>
        <span>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(Number(request.price_paid))}
        </span>
      </S.Field>
      <S.Field>
        <span>Data da aquisição</span>
        <span>
          {new Intl.DateTimeFormat('pt-BR').format(
            new Date(request.subscribed_at),
          )}
        </span>
      </S.Field>
      <Button
        variant={request.status !== 'PENDING' ? 'disabled' : 'primary'}
        loading={isLoading}
        onClick={declineRequest}
        disabled={request.status !== 'PENDING'}
      >
        Recusar compra
      </Button>
      <Button
        variant={request.status !== 'PENDING' ? 'disabled' : 'primary'}
        loading={isLoading}
        onClick={acceptRequest}
        disabled={request.status !== 'PENDING'}
      >
        Aceitar compra
      </Button>
    </S.Container>
  );
}
