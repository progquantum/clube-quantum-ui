import { useState } from 'react';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import { quantumClientQueue } from 'config/client';
import { error } from 'helpers/notify/error';

import {
  GetSubscriptionsQuantumSmartQueryParams,
  SubscriptionsQuantumSmartResponse,
} from './types';

export const QUERY_KEY_GET_QUANTUM_SMART_REQUESTS =
  'get-quantum-smart-requests';

export async function getSubscriptionsQuantumSmart(
  params: GetSubscriptionsQuantumSmartQueryParams,
) {
  const queryParams = new URLSearchParams(params);
  try {
    const { data } =
      await quantumClientQueue.get<SubscriptionsQuantumSmartResponse>(
        '/subscriptions/paginate-quantum-smart-request',
        {
          params: queryParams,
        },
      );
    return data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      if (err) {
        error(err.response.data.message);
      }
    }
  }
}

export function useGetSubscriptionsQuantumSmart(searchName: string) {
  const [page, setPage] = useState(1);

  const { data, isLoading: loading } = useQuery(
    [QUERY_KEY_GET_QUANTUM_SMART_REQUESTS, page, searchName],
    () =>
      getSubscriptionsQuantumSmart({
        page: String(page),
        searchName,
        itemsPerPage: '3',
      }),
  );
  const onPageChange = ({ selected }) => {
    setPage(selected + 1);
  };

  return {
    data,
    loading,
    onPageChange,
  };
}
