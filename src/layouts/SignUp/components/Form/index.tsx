import { PropsWithChildren } from 'react'

import { Container } from './styles'
import { FormProps } from './types'

export function Form ({ children, ...rest }: PropsWithChildren<FormProps>) {
  return (
    <Container {...rest}>{children}</Container>
  )
}
