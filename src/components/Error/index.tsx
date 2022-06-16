import { FiAlertCircle } from 'react-icons/fi'

import { ErrorProps } from './types'
import * as S from './styles'

export function Error ({ error, icon }: ErrorProps) {
  return (
    <S.Container>
      <>
        <S.MessageError>{error}</S.MessageError>
        {icon ?? <FiAlertCircle />}
      </>
    </S.Container>
  )
}
