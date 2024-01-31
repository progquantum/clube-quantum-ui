import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { RequestBodyPos, ResponseData } from './types';

export async function createDocumentRequestSignaturePos(
  requestBody: RequestBodyPos,
) {
  try {
    const { data } = await quantumClientQueue.post<ResponseData>(
      '/contracts/create-document-and-request-signature-pos',
      requestBody,
    );

    return data;
  } catch (error: unknown) {
    return Promise.reject(error);
  }
}

export function useCreateDocumentRequestSignaturePos() {
  return useMutation(createDocumentRequestSignaturePos);
}
