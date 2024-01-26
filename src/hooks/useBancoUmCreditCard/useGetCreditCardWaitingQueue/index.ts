import { useQuery } from 'react-query';
import { useState } from 'react';

import { quantumClientQueue } from 'config/client';

import {
  GetCreditCardWaitingQueueParamValues,
  GetCreditCardWaitingQueueResponseData,
} from './types';

export const QUERY_KEY_GET_CREDIT_CARD_WAITING_QUEUE =
  'get-credit-card-waiting-queue';

export async function getCreditCardWaitingQueue(
  paramValues: GetCreditCardWaitingQueueParamValues,
) {
  try {
    const { data } =
      await quantumClientQueue.get<GetCreditCardWaitingQueueResponseData>(
        '/banco-um-credit-card/list',
        { params: paramValues },
      );
    return data;
  } catch (err: unknown) {
    return Promise.reject(err);
  }
}

export function useGetCreditCardWaitingQueue(
  paramValues: Omit<GetCreditCardWaitingQueueParamValues, 'page'>,
) {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery(
    [paramValues, QUERY_KEY_GET_CREDIT_CARD_WAITING_QUEUE, page],
    () =>
      getCreditCardWaitingQueue({
        ...paramValues,
        page: String(page),
        itemsPerPage: paramValues.itemsPerPage ?? '10',
      }),
  );

  const handlePageChange = (page: { selected: number }) => {
    setPage(Math.min(page.selected + 1, data.info.totalPages));
  };

  return { data, handlePageChange, isLoading };
}
