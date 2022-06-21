import { api } from 'config/client'

import { SendCodeDto } from './SendCodeDto'

export async function sendCodeService ({ phoneNumber }: SendCodeDto) {
  const data = { phone: phoneNumber }

  await api.post('/phones/create-code', data)
}
