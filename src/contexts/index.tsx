import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { QueryParamProvider } from 'use-query-params';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';
import { DefaultSeo } from 'next-seo';

import { useHasMounted } from 'hooks/useHasMounted';

import SEO from '../../next-seo.config';
import QueryParamsAdapter from './queryParams';
import { AuthProvider } from './auth/AuthProvider';
import { StyledProvider } from './styles';
import { SubscriptionsProvider } from './subscriptions/SubscriptionsProvider';

export function AppProvider({ children }: PropsWithChildren<unknown>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  const { hasMounted } = useHasMounted();

  if (!hasMounted) return null;

  return (
    <>
      <DefaultSeo {...SEO} />
      <QueryParamProvider adapter={QueryParamsAdapter}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <StyledProvider>
            <AuthProvider>
              <SubscriptionsProvider>
                <Toaster />
                {children}
              </SubscriptionsProvider>
            </AuthProvider>
          </StyledProvider>
        </QueryClientProvider>
      </QueryParamProvider>
    </>
  );
}
