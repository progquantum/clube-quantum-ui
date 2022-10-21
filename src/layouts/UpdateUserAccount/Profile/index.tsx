import { useState } from 'react';

import { Edit } from 'components/Illustrations/Edit';
import { useUserProfile } from 'hooks/user/useUserProfile';

import { Modal } from './Modal';
import * as S from './styles';

export function Profile() {
  const [showModal, setShowModal] = useState(false);

  const { data } = useUserProfile();

  const formattedBirthDate = data?.birth_date
    ?.slice(0, 10)
    .split('-')
    .reverse()
    .join('/');

  const handleRequestModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <S.Container>
        <S.EditPersonalInformation onClick={handleRequestModal}>
          <h2>Informações Pessoais</h2>
          <Edit width="15" height="15" color="#fff" />
        </S.EditPersonalInformation>

        <h3>Nome</h3>
        <p>{data?.name}</p>

        <h3>Data de Nascimento</h3>
        <p>{formattedBirthDate}</p>

        <h3>Telefone</h3>
        <p>{data?.phone}</p>

        <h3>Endereço de E-mail</h3>
        <p>{data?.email}</p>
      </S.Container>

      {showModal && <Modal onRequestClose={handleRequestModal} />}
    </>
  );
}
