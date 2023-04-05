import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { Categories } from './types';

export const QUERY_KEY_ALL_CATEGORIES = 'QUERY_KEY_ALL_CATEGORIES';

export async function getCategoriesAll() {
  try {
    const { data } = await quantumClientQueue.get(
      '/establishment/categories/all',
    );
    return data as Categories;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error);
    }
  }
}

export function useEstablishmentAllCategories() {
  return useQuery([QUERY_KEY_ALL_CATEGORIES], getCategoriesAll);
}
