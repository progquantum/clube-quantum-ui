import { useState } from 'react';

import { RiPencilLine } from 'react-icons/ri';

import { useUserProfile } from 'hooks/user/useUserProfile';

import { Modal } from './Modal';
import * as S from './styles';

export function Address() {
  const [showModal, setShowModal] = useState(false);

  const { data } = useUserProfile();

  const handleRequestModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <S.Container>
        <S.EditAddress onClick={handleRequestModal}>
          <h2>Endereço</h2>
          <RiPencilLine />
        </S.EditAddress>

        <h3>Rua</h3>
        <p>{data?.address.street}</p>

        <h3>Número</h3>
        <p>{data?.address.number}</p>

        <h3>Complemento</h3>
        <p>{data?.address.complement ? `${data.address.complement}` : 'N/A'}</p>

        <h3>Bairro</h3>
        <p>{data?.address.neighborhood}</p>

        <h3>CEP</h3>
        <p>{data?.address.zip_code}</p>

        <h3>Cidade</h3>
        <p>{data?.address.city}</p>

        <h3>UF</h3>
        <p>{data?.address.state}</p>

        <h3>País</h3>
        <p>{data?.address.country}</p>
      </S.Container>

      {showModal && <Modal onRequestClose={handleRequestModal} />}
    </>
  );
}
