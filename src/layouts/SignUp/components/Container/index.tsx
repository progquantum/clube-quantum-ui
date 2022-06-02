import { PropsWithChildren } from 'react'

import { Wrapper } from './styles'

export function Container ({ children }: PropsWithChildren<unknown>) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}
