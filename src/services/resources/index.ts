import noop from 'lodash.noop'

import { api } from 'config/client'
import { InviteCodePayload } from 'shared/types/apiSchema'

export async function checkInviteCode (code: string | string[]) {
  try {
    const { data } = await api.get(`/validate-invite/${code}`)

    return data as InviteCodePayload
  } catch {
    return noop
  }
}
