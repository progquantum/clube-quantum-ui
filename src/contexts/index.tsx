import { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

import { AuthProvider } from './auth/AuthProvider'
import { SignUpProvider } from './signup/SignUpProvider'
import { StyledProvider } from './styles'

export function AppProvider ({ children }: PropsWithChildren<unknown>) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      <DefaultSeo {...SEO} />
      <QueryClientProvider client={queryClient}>
        <SignUpProvider>
          <AuthProvider>
            <StyledProvider>{children}</StyledProvider>
          </AuthProvider>
        </SignUpProvider>
      </QueryClientProvider>
    </>
  )
}
