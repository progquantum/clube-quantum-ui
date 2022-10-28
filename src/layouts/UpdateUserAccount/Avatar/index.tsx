import { useState } from 'react';

import { RiPencilLine } from 'react-icons/ri';

import { Avatar } from 'components/Avatar';

import { Modal } from './Modal';
import * as S from './styles';

export function UploadAvatar() {
  const [avatarModal, setAvatarModal] = useState(false);

  const handleRequestAvatarModal = () => {
    setAvatarModal(prevState => !prevState);
  };

  return (
    <S.Container>
      <S.EditAvatar onClick={handleRequestAvatarModal}>
        <h2>Foto do Perfil</h2>
        <RiPencilLine />
      </S.EditAvatar>
      <Avatar width="160" height="160" />
      <Modal isOpen={avatarModal} onRequestClose={handleRequestAvatarModal} />
    </S.Container>
  );
}
