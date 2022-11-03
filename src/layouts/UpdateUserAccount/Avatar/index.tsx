import { useState } from 'react';

import { RiPencilLine } from 'react-icons/ri';

import { Avatar } from 'components/Avatar';

import { Modal } from './Modal';
import * as S from './styles';

export function UploadAvatar() {
  const [showModal, setShowModal] = useState(false);

  const handleRequestModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <S.Container>
      <S.EditAvatar onClick={handleRequestModal}>
        <h2>Foto do Perfil</h2>
        <RiPencilLine />
      </S.EditAvatar>
      <Avatar width="200" height="200" />
      {showModal && <Modal onRequestClose={handleRequestModal} />}
    </S.Container>
  );
}
