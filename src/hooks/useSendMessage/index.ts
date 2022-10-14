import { useMutation } from 'react-query';

import { quantumClientBase } from 'config/client';
import { error } from 'helpers/notify/error';

import { SendMessageRequest } from './types';

export async function sendMessageRequest(messageData: SendMessageRequest) {
  try {
    await quantumClientBase.post<unknown>(
      '/support/institutional-contact',
      messageData,
    );
  } catch (err) {
    if (err.response?.data.message[0] === 'phone must be a phone number') {
      error('Telefone inválido');
    }
    if (err.response?.data.message[0] === 'email must be an email') {
      error('E-mail inválido');
    }

    return Promise.reject(err);
  }
}

export function useSendMessage() {
  return useMutation(sendMessageRequest);
}
