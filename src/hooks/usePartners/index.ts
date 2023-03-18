import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { ResponsePayload } from './types';

const QUERY_KEY_GET_PRODUCT_OF_PARTNER_BY_ID = 'get-product-of-partner-by-id';
export async function getProductOfPartnerById({ queryKey }) {
  const [_, id] = queryKey;
  try {
    const { data } = await quantumClientQueue.get(
      `/partners/get-partner-product-list/${id}`,
    );
    return data as ResponsePayload;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);
      return Promise.reject(err);
    }
  }
}

export function useGetProductsOfPartnerById(id: string) {
  return useQuery(
    [QUERY_KEY_GET_PRODUCT_OF_PARTNER_BY_ID, id],
    getProductOfPartnerById,
  );
}
