import { useMutation } from 'react-query';

import { AxiosError } from 'axios';

import { quantumClientQueue } from 'config/client';
import { error } from 'helpers/notify/error';

import { RequestBody } from './types';

export async function uploadBanners(requestBody: RequestBody) {
  try {
    return await quantumClientQueue.post('/banners/upload', requestBody, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      if (err.response.status === 415) {
        error('Arquivo não suportado');
      }
      if (err.response.status === 400) {
        error('Imagem obrigatórtia!');
      }
    }
  }
}

export function useBannersUpload() {
  return useMutation(uploadBanners);
}
