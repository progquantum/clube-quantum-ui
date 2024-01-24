import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/pt-br';
import { DefaultSeo } from 'next-seo';
import { PropsWithChildren, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryParamProvider } from 'use-query-params';

import { useHasMounted } from 'hooks/useHasMounted';

import SEO from '../../next-seo.config';
import { AuthProvider } from './auth/AuthProvider';
import QueryParamsAdapter from './queryParams';
import { StyledProvider } from './styles';
import { SubscriptionsProvider } from './subscriptions/SubscriptionsProvider';

export function AppProvider({
  children,
  dehydratedState,
}: PropsWithChildren<{ dehydratedState: any }>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 30000, // 30s
            cacheTime: 10 * (60 * 1000), // 10 mins
          },
        },
      }),
  );

  const { hasMounted } = useHasMounted();

  if (!hasMounted) return null;

  return (
    <>
      <DefaultSeo {...SEO} />
      <QueryClientProvider client={queryClient}>
        <QueryParamProvider adapter={QueryParamsAdapter}>
          <Hydrate state={dehydratedState}>
            <ReactQueryDevtools initialIsOpen={false} />
            <StyledProvider>
              <AuthProvider>
                <SubscriptionsProvider>
                  <Toaster />
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="pt-br"
                  >
                    {children}
                  </LocalizationProvider>
                </SubscriptionsProvider>
              </AuthProvider>
            </StyledProvider>
          </Hydrate>
        </QueryParamProvider>
      </QueryClientProvider>
    </>
  );
}
