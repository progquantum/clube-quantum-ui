import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { RequestBodyTim, ResponseData } from './types';

export async function createDocumentRequestSignatureTim(
  requestBody: RequestBodyTim,
) {
  try {
    const { data } = await quantumClientQueue.post<ResponseData>(
      '/contracts/create-document-and-request-signature-tim',
      requestBody,
    );

    return data;
  } catch (error: unknown) {
    return Promise.reject(error);
  }
}

export function useCreateDocumentRequestSignatureTim() {
  return useMutation(createDocumentRequestSignatureTim);
}
