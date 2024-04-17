import { useQuery } from 'react-query';

import { quantumClientQueue } from '../../config/client';
import { Data } from './types';

export const QUERY_KEY_AFFILIATE_PAYMENTS = 'QUERY_KEY_AFFILIATE_PAYMENTS';

export async function getAffiliatePayments() {
  try {
    const { data } = await quantumClientQueue.get(
      '/finances-adm/balances-to-pay',
    );
    return data as Data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error);
    }
  }
}

export function useAffiliatePayments(enabled: boolean) {
  return useQuery([QUERY_KEY_AFFILIATE_PAYMENTS], getAffiliatePayments, {
    enabled,
  });
}
