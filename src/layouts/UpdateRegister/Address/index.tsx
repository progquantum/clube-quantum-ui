import { useState } from 'react'

import { Edit } from 'components/Illustrations/Edit'

import { AddressProps } from './types'
import * as S from './styles'
import { AddressInformationModal } from './AddressModal'

export function Address ({ user } : AddressProps) {
  const street = user?.address.street
  const number = user?.address.number
  const neighborhood = user?.address.neighborhood
  const complement = user?.address.complement
  const zip_code = user?.address.zip_code
  const city = user?.address.city
  const state = user?.address.state
  const country = user?.address.country

  const [requestModal, setRequestModal] = useState(false)

  const handleRequestModal = () => {
    setRequestModal(prevState => !prevState)
  }

  const hasComplement = user?.address.complement

  return (
    <>
      <S.Container>
        <S.EditAddress onClick={handleRequestModal}>
          <h2>Endereço</h2>
          <Edit width='15' height='15' color='#fff' />
        </S.EditAddress>

        <h3>Rua</h3>
        <p>{street}</p>

        <h3>Número</h3>
        <p>{number}</p>

        <h3>Complemento</h3>
        <p>{hasComplement ? `${complement}` : 'N/A'}
        </p>

        <h3>Bairro</h3>
        <p>{neighborhood}</p>

        <h3>CEP</h3>
        <p>{zip_code}</p>

        <h3>Cidade</h3>
        <p>{city}</p>

        <h3>UF</h3>
        <p>{state}</p>

        <h3>País</h3>
        <p>{country}</p>
      </S.Container>
      <AddressInformationModal
        isOpen={requestModal}
        onRequestClose={handleRequestModal}
      />
    </>
  )
}
