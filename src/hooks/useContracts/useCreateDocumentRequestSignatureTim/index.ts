import { AxiosError } from 'axios';

import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { RequestBodyTim, ResponseData } from './types';

export async function createDocumentRequestSignatureTim(
  requestBody: RequestBodyTim,
) {
  try {
    const { data } = await quantumClientQueue.post<ResponseData>(
      '/contracts/create-document-and-request-signature-pos',
      requestBody,
    );

    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
    return Promise.reject(error);
  }
}

export function useCreateDocumentRequestSignatureTim() {
  return useMutation(createDocumentRequestSignatureTim, { retry: 0 });
}
