import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';
import { error } from 'helpers/notify/error';

export async function putAvatar(requestBody: FormData) {
  try {
    return await quantumClientQueue.put<unknown>('/avatar', requestBody, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (err) {
    if (err.response.status === 400) {
      error('Arquivo não suportado');
    }
  }
}

export function useUpdateUserAvatar() {
  return useMutation(putAvatar);
}
