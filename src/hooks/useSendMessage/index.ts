import { useMutation } from 'react-query'

import { api } from 'config/client'

import { SendMessageRequest } from './types'

export async function sendMessageRequest (messageData: SendMessageRequest) {
  await api.post('/support/institutional-contact', messageData)
}

export function useSendMessage () {
  return useMutation(sendMessageRequest)
}
