import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { IndirectGainsPayload } from './types';

const QUERY_KEY_INDIRECT_GAINS = 'indirect-gains';

export async function getIndirectGains() {
  const { data } = await quantumClientQueue.get('/me/indirect-gains');

  return data as IndirectGainsPayload;
}

export function useIndirectGains() {
  return useQuery(QUERY_KEY_INDIRECT_GAINS, getIndirectGains);
}
