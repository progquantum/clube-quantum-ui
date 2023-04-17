import { AxiosError } from 'axios';

import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { SalesProgression } from './types';

const QUERY_KEY_GET_POS_SALES_PROGRESION = 'QUERY_KEY_GET_POS_SALES_PROGRESION';

export async function getSalesProgression() {
  try {
    const { data } = await quantumClientQueue.get(
      '/dashboard-pos/sales-progression',
    );
    return data as SalesProgression;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
    return Promise.reject(error);
  }
}

export function useGetSalesProgression() {
  return useQuery([QUERY_KEY_GET_POS_SALES_PROGRESION], getSalesProgression);
}
