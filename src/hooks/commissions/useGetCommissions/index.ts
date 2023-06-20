import { useState } from 'react';

import { useQuery } from 'react-query';

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
    const { data } = await quantumClientQueue.get('commissions/extract', {
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
  const [page, setPage] = useState(1);

  const {
    data,
    isError,
    isLoading: loading,
  } = useQuery(
    [QUERY_KEY_COMMISSIONS_EXTRACT, page, itemsPerPage, endDate, startDate],
    () => getCommissions({ page, itemsPerPage, endDate, startDate }),
    {
      keepPreviousData: true,
    },
  );

  const onPageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  return {
    data,
    onPageChange,
    isError,
    loading,
    setPage,
  };
}
