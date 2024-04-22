import { useMutation } from 'react-query';

import { quantumClientQueue } from '../../../config/client';

export const QUERY_KEY_UPLOAD_FILE_CSV = 'QUERY_KEY_UPLOAD_FILE_CSV';

async function uploadFileCsv(file: File) {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await quantumClientQueue.post(
      '/finances-adm/flag-payments',
      formData,
    );
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error);
    }
  }
}

export function useUploadFileCsv() {
  return useMutation(uploadFileCsv);
}
