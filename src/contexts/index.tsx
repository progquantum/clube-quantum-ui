import { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify'
import { DefaultSeo } from 'next-seo'
import Modal from 'react-modal'

import { useHasMounted } from 'hooks/useHasMounted'

import SEO from '../../next-seo.config'
import { AuthProvider } from './auth/AuthProvider'
import { StyledProvider } from './styles'
import { SubscriptionsProvider } from './subscriptions/SubscriptionsProvider'

Modal.setAppElement('#__next')

export function AppProvider ({ children }: PropsWithChildren<unknown>) {
  const [queryClient] = useState(() => new QueryClient())
  const { hasMounted } = useHasMounted()

  if (!hasMounted) return null

  return (
    <>
      <DefaultSeo {...SEO} />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <StyledProvider>
          <AuthProvider>
            <SubscriptionsProvider>
              <ToastContainer />
              {children}
            </SubscriptionsProvider>
          </AuthProvider>
        </StyledProvider>
      </QueryClientProvider>
    </>
  )
}
