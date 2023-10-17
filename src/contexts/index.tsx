import { PropsWithChildren, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { QueryParamProvider } from 'use-query-params';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';
import { DefaultSeo } from 'next-seo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/pt-br';

import { useHasMounted } from 'hooks/useHasMounted';

import SEO from '../../next-seo.config';
import QueryParamsAdapter from './queryParams';
import { AuthProvider } from './auth/AuthProvider';
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
      <QueryParamProvider adapter={QueryParamsAdapter}>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </QueryParamProvider>
    </>
  );
}
