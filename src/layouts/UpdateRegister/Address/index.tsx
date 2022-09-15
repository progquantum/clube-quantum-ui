import { Edit } from 'components/Illustrations/Edit'

import { AddressProps } from './types'
import * as S from './styles'

export function Address ({ user, loading } : AddressProps) {
  const street = user?.address.street
  const number = user?.address.number
  const neighborhood = user?.address.neighborhood
  const city = user?.address.city
  const state = user?.address.state
  const zip_code = user?.address.zip_code
  const country = user?.address.country

  return (
    <>
      <S.Container>
        <S.EditAddress>
          <h2>Endereço</h2>
          <Edit width='15' height='15' color='#fff' />
        </S.EditAddress>

        <h3>Rua</h3>
        <p>{street}</p>

        <h3>Número</h3>
        <p>{number}</p>

        <h3>Complemento</h3>
        <p>N/A</p>

        <h3>Bairro</h3>
        <p>{neighborhood}</p>

        <h3>Cidade</h3>
        <p>{city}</p>

        <h3>UF</h3>
        <p>{state}</p>

        <h3>CEP</h3>
        <p>{zip_code}</p>

        <h3>País</h3>
        <p>{country}</p>
      </S.Container>
    </>
  )
}
