import { api } from 'config/client'
import { User } from 'shared/types/apiSchema'

export async function getMe () {
  const { data } = await api.get('/me')

  return data as User
}
