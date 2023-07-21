import { IoIosArrowBack } from 'react-icons/io';

import Swal from 'sweetalert2';

import { useTheme } from 'styled-components';

import { Button } from 'components/Button';

import { Contract } from './types';
import * as S from './styles';

import { ClickableContainer } from '../styles';

export function QuantumSmartDetails({
  contract,
  onRequestClose,
}: {
  contract: Contract;
  onRequestClose: (contract: Contract | null) => void;
}) {
  const { colors } = useTheme();

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
    alert('Você tem certeza que deseja aceitar essa compra?').then(response =>
      console.log(response.isConfirmed),
    );

  const declineRequest = () =>
    alert('Você tem certeza que deseja recusar essa compra?').then(response =>
      console.log(response.isConfirmed),
    );

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
      <S.Name>{contract.name}</S.Name>
      <S.ContractId>ID - {contract.contractId}</S.ContractId>
      <S.Field>
        <span>Data de Nasc. </span>
        <span>
          {new Intl.DateTimeFormat('pt-BR').format(contract.birthDate)}
        </span>
      </S.Field>
      <S.Field>
        <span>E-mail</span>
        <span>{contract.email}</span>
      </S.Field>
      <S.Field>
        <span>Produto </span>
        <span>{contract.product.name}</span>
      </S.Field>
      <S.Field>
        <span>Número de telefone</span>
        <span>{contract.product.phoneNumber}</span>
      </S.Field>
      <S.Field>
        <span>DDD </span>
        <span>{contract.product.areaCode}</span>
      </S.Field>
      <S.Field>
        <span>Valor da mensalidade</span>
        <span>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(contract.product.value)}
        </span>
      </S.Field>
      <S.Field>
        <span>Data da aquisição</span>
        <span>
          {new Intl.DateTimeFormat('pt-BR').format(
            contract.product.acquisitionDate,
          )}
        </span>
      </S.Field>
      <Button variant="danger_outline" onClick={declineRequest}>
        Recusar compra
      </Button>
      <Button variant="primary" onClick={acceptRequest}>
        Aceitar compra
      </Button>
    </S.Container>
  );
}
