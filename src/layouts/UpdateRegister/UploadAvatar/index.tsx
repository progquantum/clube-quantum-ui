import { useState } from 'react'

import { Avatar } from 'components/Illustrations/Avatar'
import { Edit } from 'components/Illustrations/Edit'

import * as S from './styles'
import { UploadAvatarModal } from './UploadAvatarModal'

export function UploadAvatar () {
  const [avatarModal, setAvatarModal] = useState(false)

  const handleRequestAvatarModal = () => {
    setAvatarModal(prevState => !prevState)
  }
  return (
    <>
      <S.Container>
        <S.EditAvatar onClick={handleRequestAvatarModal}>
          <h2>Foto do Perfil</h2>
          <Edit width='15' height='15' color='#fff' />
        </S.EditAvatar>
        <Avatar />
        <UploadAvatarModal isOpen={avatarModal} onRequestClose={handleRequestAvatarModal} />
      </S.Container>
    </>
  )
}
