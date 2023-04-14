import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

export async function UnsubscribeRequest() {
  await quantumClientQueue.delete('/subscriptions/');
}

export function useUnsubscribe() {
  return useMutation(UnsubscribeRequest);
}
