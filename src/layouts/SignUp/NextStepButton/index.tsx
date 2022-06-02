import { PropsWithChildren } from 'react'

import { Container } from './styles'

export function NextStepButton ({ children }: PropsWithChildren<unknown>) {
  return (
    <Container>{children}</Container>
  )
}
