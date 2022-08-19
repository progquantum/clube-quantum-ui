import { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

import { AuthProvider } from './auth/AuthProvider'
import { StyledProvider } from './styles'
import { PlansProvider } from './plans/PlansProvider'

export function AppProvider ({ children }: PropsWithChildren<unknown>) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      <DefaultSeo {...SEO} />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <PlansProvider>
            <StyledProvider>
              <ToastContainer />
              {children}
            </StyledProvider>
          </PlansProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}
