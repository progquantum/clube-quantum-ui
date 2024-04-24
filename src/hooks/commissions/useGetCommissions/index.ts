import { useQuery } from 'react-query';

import { useRouter } from 'next/router';

import { useSearchParams } from 'next/navigation';

import { quantumClientQueue } from 'config/client';

import { CommissionsExtract, Filter, GetCommissionsProps } from './types';

export const QUERY_KEY_COMMISSIONS_EXTRACT = 'QUERY_KEY_COMMISSIONS_EXTRACT';

export async function getCommissions({
  page,
  itemsPerPage,
  endDate,
  startDate,
}: GetCommissionsProps) {
  try {
    const { data } = await quantumClientQueue.get('commissions/all-extracts', {
      params: {
        ...(page ? { page } : {}),
        ...(itemsPerPage ? { itemsPerPage } : { itemsPerPage: 4 }),
        ...(endDate ? { endDate } : {}),
        ...(startDate ? { startDate } : {}),
      },
    });

    return data as CommissionsExtract;
  } catch (err) {
    return Promise.reject(err);
  }
}

export function useGetCommissions({
  itemsPerPage,
  endDate,
  startDate,
}: Filter) {
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
    [
      QUERY_KEY_COMMISSIONS_EXTRACT,
      Number(page),
      itemsPerPage,
      endDate,
      startDate,
    ],
    () =>
      getCommissions({ page: Number(page), itemsPerPage, endDate, startDate }),
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
