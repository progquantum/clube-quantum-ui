import { PropsWithChildren } from 'react'

import * as S from './styles'

export function Button ({ children }: PropsWithChildren<unknown>) {
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}
