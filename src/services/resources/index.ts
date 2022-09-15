import { api } from 'config/client'
import { User, InviteCodePayload } from 'shared/types/apiSchema'

export async function getMe () {
  const { data } = await api.get('/me')

  return data as User
}

export async function checkInviteCode (code: string | string[]) {
  const { data } = await api.get(`/validate-invite/${code}`)

  return data as InviteCodePayload
}
