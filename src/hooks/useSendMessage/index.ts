import { useMutation } from 'react-query'

import { quantumClientBase } from 'config/client'

import { SendMessageRequest } from './types'

export async function sendMessageRequest (messageData: SendMessageRequest) {
  return await quantumClientBase.post<unknown>('/support/institutional-contact', messageData)
}

export function useSendMessage () {
  return useMutation(sendMessageRequest)
}
