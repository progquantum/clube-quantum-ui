import { useMutation } from 'react-query';

import { quantumClientBase } from 'config/client';

import { PhoneCodeRequest } from './types';

export async function sendPhoneCodeRequest(phoneCode: PhoneCodeRequest) {
  await quantumClientBase.post<unknown>('/phones/create-code', phoneCode);
}

export function useSendPhoneCode() {
  return useMutation(sendPhoneCodeRequest);
}
