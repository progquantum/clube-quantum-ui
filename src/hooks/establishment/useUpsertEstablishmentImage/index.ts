import { AxiosError } from 'axios';

import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { RequestBody } from './types';

export async function upsertEstablishmentImage(requestBody: RequestBody) {
  if (!requestBody) return;
  const formData = new FormData();
  formData.append('image', requestBody.image);
  formData.append('image_type', requestBody.image_type);
  formData.append('user_id', requestBody.user_id);
  try {
    await quantumClientQueue.put('establishment/upsert/images', formData);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
    return Promise.reject(error);
  }
}

export function useUpsertEstablishmentImage() {
  return useMutation(upsertEstablishmentImage);
}
