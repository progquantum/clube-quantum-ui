import { PropsWithChildren } from 'react'

import { StyledProvider } from './styles'

export function AppProvider ({ children }: PropsWithChildren<unknown>) {
  return (
    <StyledProvider>{children}</StyledProvider>
  )
}
