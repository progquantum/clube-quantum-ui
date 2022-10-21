import { useState } from 'react';

import { Edit } from 'components/Illustrations/Edit';
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
        <Edit width="15" height="15" color="#fff" />
      </S.EditAvatar>
      <Avatar width="160" height="160" />
      {showModal && <Modal onRequestClose={handleRequestModal} />}
    </S.Container>
  );
}
