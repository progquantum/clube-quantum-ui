import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { Data } from './types';

export const QUERY_KEY_BANNERS_FIND_ALL = 'QUERY_KEY_BANNERS_FIND_ALL';

export async function getBanners() {
  try {
    const { data } = await quantumClientQueue.get('/banners/find-all');
    return data as Data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error);
    }
  }
}

export function useBannersFindAll() {
  return useQuery([QUERY_KEY_BANNERS_FIND_ALL], getBanners);
}
