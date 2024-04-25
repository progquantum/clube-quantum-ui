/* eslint-disable prefer-destructuring */
import { useState } from 'react';
import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { Filter, GetSalesFilterProps, SalesProps } from './types';

export const QUERY_SALES_FILTER_KEY = 'QUERY_SALES_FILTER_KEY';

export async function getSalesFilter({
  page,
  itemsPerPage,
  endDate,
  startDate,
}: GetSalesFilterProps) {
  const { data } = await quantumClientQueue.get('/dashboard-pos/sales-filter', {
    params: {
      ...(page ? { page } : {}),
      ...(itemsPerPage ? { itemsPerPage } : { itemsPerPage: 5 }),
      ...(endDate ? { endDate } : {}),
      ...(startDate ? { startDate } : {}),
    },
  });

  return data as SalesProps;
}

export function useSalesFilter({ itemsPerPage, endDate, startDate }: Filter) {
  const [page, setPage] = useState(1);

  const { data } = useQuery(
    [QUERY_SALES_FILTER_KEY, page, endDate, startDate],
    () => getSalesFilter({ page, itemsPerPage, endDate, startDate }),
    { keepPreviousData: true },
  );
  const totalPages = data?.info?.totalPages || 0;
  const onPageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  return {
    data,
    totalPages,
    onPageChange,
  };
}
