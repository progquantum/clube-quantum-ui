import { api } from 'config/client'

import { PersonalAccountDto } from './PersonalAccountDto'

export async function createPersonalAccountService (dto: PersonalAccountDto) {
  const requestBody = {
    name: dto.name,
    phone: dto.phone,
    cpf: dto.cpf,
    email: dto.email,
    password: dto.password,
    invited_by: dto.invitedBy,
    birth_date: dto.birthDate,
    address: {
      street: dto.address.street,
      number: dto.address.number,
      neighborhood: dto.address.neighborhood,
      zip_code: dto.address.zipCode,
      city: dto.address.city,
      state: dto.address.state,
      country: dto.address.country
    }
  }

  const { data } = await api.post('/users/individual-persons', requestBody)

  return data
}
