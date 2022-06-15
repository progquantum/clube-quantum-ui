import { FC } from 'react'
import { FiAlertCircle } from 'react-icons/fi'

import { ErrorProps } from './types'
import * as S from './styles'

export const Error: FC<ErrorProps> = ({ error, icon }) => {
  return (
    <S.Container>
      <>
        <S.MessageError>{error}</S.MessageError>
        {icon ?? <FiAlertCircle />}
      </>
    </S.Container>
  )
}
