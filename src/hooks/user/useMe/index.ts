import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { User } from 'shared/types/apiSchema';

export const QUERY_KEY_FIND_ME = 'me';

export async function getMe() {
  try {
    console.log('eu fui chamado');
    const { data } = await quantumClientQueue.get('/me');
    return data as User;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useMe() {
  const query = useQuery(QUERY_KEY_FIND_ME, getMe);
  console.log('data:', query.data);
  console.log('error:', query.error);
  console.log('isLoading:', query.isLoading);
  return query;
}
