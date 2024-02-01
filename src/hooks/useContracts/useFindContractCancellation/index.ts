/* eslint-disable prefer-destructuring */
import { useState } from 'react';
import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import {
  ContractCancellationProps,
  ContractsCancellation,
  Filter,
} from './types';

export const QUERY_KEY_FIND_CONTRACT_CANCELLATION =
  'QUERY_KEY_FIND_CONTRACT_CANCELLATION';

export async function findContractCancellation({
  page,
  itemsPerPage,
  searchName,
}: ContractCancellationProps) {
  try {
    const { data } = await quantumClientQueue.get(
      '/contracts/find-request-cancellation',
      {
        params: {
          ...(page ? { page } : {}),
          ...(itemsPerPage ? { itemsPerPage } : { itemsPerPage: 3 }),
          ...(searchName ? { searchName } : {}),
        },
      },
    );

    return data as ContractsCancellation;
  } catch (error: unknown) {
    return Promise.reject(error);
  }
}

export function useFindContractCancellation({
  itemsPerPage,
  searchName,
}: Filter) {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery(
    [QUERY_KEY_FIND_CONTRACT_CANCELLATION, page, searchName],
    () => findContractCancellation({ page, itemsPerPage, searchName }),
    { keepPreviousData: true },
  );
  const totalPages = data?.info?.totalPages;
  const onPageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  return {
    data,
    totalPages,
    onPageChange,
    isLoading,
  };
}
