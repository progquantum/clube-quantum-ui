import { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'

import { AuthProvider } from './auth/AuthProvider'
import { StyledProvider } from './styles'

export function AppProvider ({ children }: PropsWithChildren<unknown>) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      <DefaultSeo {...SEO} />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <StyledProvider>
            <ToastContainer
              position='top-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {children}
          </StyledProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}
