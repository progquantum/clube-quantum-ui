import noop from 'lodash.noop'

import { api } from 'config/client'
import { InviteCodePayload } from 'shared/types/apiSchema'

export async function checkInviteCode (code: string | string[]) {
  return await api.get<InviteCodePayload>(`/validate-invite/${code}`)
    .then(response => response.data)
    .catch(noop)
}
