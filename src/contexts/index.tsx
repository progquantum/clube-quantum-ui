import { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify'
import { DefaultSeo } from 'next-seo'
import Modal from 'react-modal'

import SEO from '../../next-seo.config'

import { AuthProvider } from './auth/AuthProvider'
import { StyledProvider } from './styles'

Modal.setAppElement('#__next')

export function AppProvider ({ children }: PropsWithChildren<unknown>) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      <DefaultSeo {...SEO} />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <StyledProvider>
            <ToastContainer />
            {children}
          </StyledProvider>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}
