import { Avatar } from 'components/Illustrations/Avatar'
import { Edit } from 'components/Illustrations/Edit'

import * as S from './styles'

export function UploadAvatar () {
  return (
    <>
      <S.Container>
        <S.EditAvatar>
          <h2>Foto do Perfil</h2>
          <Edit width='15' height='15' color='#fff' />
        </S.EditAvatar>
        <Avatar />
      </S.Container>
    </>
  )
}
