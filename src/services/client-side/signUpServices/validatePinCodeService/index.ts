import { api } from 'config/client'

import { ValidatePinCodeDto } from './ValidatePinCodeDto'

export async function validatePinCodeService ({
  phoneNumber,
  validationCode
}: ValidatePinCodeDto) {
  const data = {
    phone: phoneNumber,
    code: validationCode
  }

  await api.put('/phones/check-code', data)
}
