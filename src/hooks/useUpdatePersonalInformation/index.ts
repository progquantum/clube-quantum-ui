import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { UpdatePersonalInformationProps } from './types';

export async function putPersonalInformation(
  data: UpdatePersonalInformationProps,
) {
  return await quantumClientQueue.put<unknown>(
    'users/individual-persons',
    data,
  );
}

export function useUpdatePersonalInformation() {
  return useMutation(putPersonalInformation);
}
