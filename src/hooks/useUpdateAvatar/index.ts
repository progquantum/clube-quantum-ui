import { useMutation } from 'react-query'

import { api } from 'config/client'

export async function putAvatar (requestBody: unknown) {
  try {
    const { data } = await api.put('/avatar', requestBody, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return data
  } catch (err) {
    if (err.response.status === 400) {
      throw new Error('Opss, algo deu errado!')
    }
  }
}

export function useUpdateAvatar () {
  return useMutation(putAvatar)
}
