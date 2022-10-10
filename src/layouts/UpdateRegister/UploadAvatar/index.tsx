import { useState } from 'react';

import { Edit } from 'components/Illustrations/Edit';

import { Avatar } from 'components/Avatar';

import * as S from './styles';
import { UploadAvatarModal } from './UploadAvatarModal';

export function UploadAvatar() {
  const [avatarModal, setAvatarModal] = useState(false);

  const handleRequestAvatarModal = () => {
    setAvatarModal(prevState => !prevState);
  };

  return (
    <S.Container>
      <S.EditAvatar onClick={handleRequestAvatarModal}>
        <h2>Foto do Perfil</h2>
        <Edit width="15" height="15" color="#fff" />
      </S.EditAvatar>

      <Avatar width="160" height="160" />
      <UploadAvatarModal
        isOpen={avatarModal}
        onRequestClose={handleRequestAvatarModal}
      />
    </S.Container>
  );
}
