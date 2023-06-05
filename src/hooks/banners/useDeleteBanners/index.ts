import { useMutation } from 'react-query';
import { AxiosError } from 'axios';

import { quantumClientQueue } from 'config/client';
import { error } from 'helpers/notify/error';

export const bannerDeleteRequest = async (id: string) => {
  try {
    await quantumClientQueue.delete(`/banners/${id}`);
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      if (err.response.status === 404) {
        error('Id da imagem não encontrado');
      }
    }
    return Promise.reject(err);
  }
};

export function useDeleteBanners(id: string) {
  return useMutation(() => bannerDeleteRequest(id));
}
