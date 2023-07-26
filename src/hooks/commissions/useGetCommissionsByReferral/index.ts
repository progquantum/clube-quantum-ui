import { AxiosError } from 'axios';

import { useState } from 'react';

import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';
import { ErrorResponse } from 'services/httpServices';
import { error } from 'helpers/notify/error';

import { Filter, Params, ResponseData } from './types';

const QUERY_KEY_GET_EXTRACT_BY_REFERRAL = 'get-extract-by-referral';

export async function getExtractByReferral(filter: Params) {
  const queryParams = new URLSearchParams(filter);
  try {
    const { data } = await quantumClientQueue.get<ResponseData>(
      '/commissions/extract-by-referral',
      {
        params: queryParams,
      },
    );
    return data;
  } catch (err: unknown) {
    if (err instanceof AxiosError<ErrorResponse>) {
      if (err.response.data.message === 'cashback not found')
        error('Bônus por indicação não encontrado');
      else Promise.reject(err);
    }
  }
}

export function useGetExtractByReferral(filter: Filter) {
  const [page, setPage] = useState(1);

  const params = {
    page: String(page),
    itemsPerPage: '4',
    ...filter,
  };

  const {
    data,
    isError,
    isLoading: loading,
  } = useQuery(
    [QUERY_KEY_GET_EXTRACT_BY_REFERRAL, params],
    () => getExtractByReferral(params),
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
