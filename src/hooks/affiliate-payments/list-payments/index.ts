import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

import { useQuery } from 'react-query';

import { quantumClientQueue } from '../../../config/client';
import { AffiliatePayments, Filter, GetAffiliatePaymentsProps } from './types';

export const QUERY_KEY_LIST_PAYMENTS = 'QUERY_KEY_LIST_PAYMENTS';

async function listPayments({ page, itemsPerPage }: GetAffiliatePaymentsProps) {
  try {
    const { data } = await quantumClientQueue.get(
      '/finances-adm/list-payments',
      {
        params: {
          ...(page ? { page } : { page: 1 }),
          ...(itemsPerPage ? { itemsPerPage } : { itemsPerPage: 8 }),
        },
      },
    );

    return data as AffiliatePayments;
  } catch (error) {
    return Promise.reject(error);
  }
}

export function useListPayments({ itemsPerPage }: Filter) {
  const router = useRouter();
  const { pathname } = router;
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const setPageQuery = (page: number) => {
    router.push(`${pathname}?page=${page}`, undefined, { scroll: false });
  };

  const {
    data,
    isError,
    isLoading: loading,
    isFetching,
  } = useQuery(
    [QUERY_KEY_LIST_PAYMENTS, Number(page), itemsPerPage],
    () => listPayments({ page: Number(page), itemsPerPage }),
    {
      keepPreviousData: true,
    },
  );

  const onPageChange = (selectedItem: { selected: number }) => {
    setPageQuery(selectedItem.selected + 1);
  };

  return {
    data,
    onPageChange,
    isError,
    loading,
    isFetching,
  };
}
