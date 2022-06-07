import { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AuthProvider } from './auth/AuthProvider'
import { StyledProvider } from './styles'

export function AppProvider ({ children }: PropsWithChildren<unknown>) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <StyledProvider>{children}</StyledProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
