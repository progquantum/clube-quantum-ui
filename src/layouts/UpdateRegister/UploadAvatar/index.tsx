import { useState } from 'react'

import { Edit } from 'components/Illustrations/Edit'

import * as S from './styles'
import { UploadAvatarModal } from './UploadAvatarModal'
import { AvatarProps } from './types'

export function UploadAvatar ({ user } : AvatarProps) {
  const [avatarModal, setAvatarModal] = useState(false)

  const avatar = user?.url

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
        <S.Avatar src={avatar} alt='' />
        <UploadAvatarModal isOpen={avatarModal} onRequestClose={handleRequestAvatarModal} />
      </S.Container>
    </>
  )
}
