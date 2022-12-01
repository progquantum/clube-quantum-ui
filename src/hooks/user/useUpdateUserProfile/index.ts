import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { UpdateProfileData } from './types';

export async function putPersonalInformation(data: UpdateProfileData) {
  return await quantumClientQueue.put<unknown>(
    'users/individual-persons',
    data,
  );
}

export function useUpdateUserProfile() {
  return useMutation(putPersonalInformation);
}
