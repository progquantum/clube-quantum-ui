import { useState } from 'react';

import { Edit } from 'components/Illustrations/Edit';

import { AddressInformationModal } from './AddressModal';

import { AddressProps } from './types';
import * as S from './styles';

export function Address({ address }: AddressProps) {
  const [requestModal, setRequestModal] = useState(false);

  const street = address?.street;
  const number = address?.number;
  const neighborhood = address?.neighborhood;
  const complement = address?.complement;
  const zipCode = address?.zip_code;
  const city = address?.city;
  const state = address?.state;
  const country = address?.country;

  const hasComplement = address?.complement;

  const handleRequestModal = () => {
    setRequestModal(prevState => !prevState);
  };

  return (
    <>
      <S.Container>
        <S.EditAddress onClick={handleRequestModal}>
          <h2>Endereço</h2>
          <Edit width="15" height="15" color="#fff" />
        </S.EditAddress>

        <h3>Rua</h3>
        <p>{street}</p>

        <h3>Número</h3>
        <p>{number}</p>

        <h3>Complemento</h3>
        <p>{hasComplement ? `${complement}` : 'N/A'}</p>

        <h3>Bairro</h3>
        <p>{neighborhood}</p>

        <h3>CEP</h3>
        <p>{zipCode}</p>

        <h3>Cidade</h3>
        <p>{city}</p>

        <h3>UF</h3>
        <p>{state}</p>

        <h3>País</h3>
        <p>{country}</p>
      </S.Container>
      <AddressInformationModal
        isOpen={requestModal}
        onRequestClose={handleRequestModal}
      />
    </>
  );
}
