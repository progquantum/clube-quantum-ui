import { FiAlertCircle } from 'react-icons/fi'

import { ErrorProps } from './types'

import * as S from './styles'

export function Error ({ error, icon: Icon = FiAlertCircle }: ErrorProps) {
  return (
    <S.Container>
      <S.MessageError>{error}</S.MessageError>

      <Icon size={24} />
    </S.Container>
  )
}
