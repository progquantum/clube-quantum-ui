import { useMutation } from 'react-query';

import { quantumClientBase } from 'config/client';
import { error } from 'helpers/notify/error';

import { PhoneCodeRequest } from './types';

export async function sendPhoneCodeRequest(phoneCode: PhoneCodeRequest) {
  try {
    await quantumClientBase.post<unknown>('/phones/create-code', phoneCode);
  } catch (err) {
    if (err.response.data.message === 'Phone already in use') {
      error('Este telefone já está em uso');
    }

    if (err.response.data.message[0] === 'phone must be a phone number') {
      error('Número de telefone inválido!');
    }

    return Promise.reject(err);
  }
}

export function useSendPhoneCode() {
  return useMutation(sendPhoneCodeRequest);
}
