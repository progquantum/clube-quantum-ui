import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { Categories } from './types';

const QUERY_KEY_GET_POS_FILTER_CATEGORIES = 'get-pos-filter-categories';

export async function getFilterCategories() {
  try {
    const { data } = await quantumClientQueue.get<Categories>(
      '/establishment/categories/all',
    );
    return data;
  } catch (error: unknown) {
    return Promise.reject(error);
  }
}

export function useGetFilterCategories() {
  return useQuery([QUERY_KEY_GET_POS_FILTER_CATEGORIES], getFilterCategories);
}
