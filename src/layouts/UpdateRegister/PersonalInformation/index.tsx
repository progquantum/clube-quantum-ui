import { useState } from 'react'

import { Edit } from 'components/Illustrations/Edit'

import { PersonalInformationProps } from './types'

import { PersonalInformationModal } from './PersonalInformatioModal'
import * as S from './styles'

export function PersonalInformation ({ user } : PersonalInformationProps) {
  const [requestModal, setRequestModal] = useState(false)

  const name = user?.name
  const formattedBirthDate = user?.birth_date?.slice(0, 10).split('-').reverse().join('/')
  const phone = user?.phone
  const email = user?.email

  const handleRequestModal = () => {
    setRequestModal(prevState => !prevState)
  }

  return (
    <>
      <S.Container>
        <S.EditPersonalInformation onClick={handleRequestModal}>
          <h2>Informações Pessoais</h2>
          <Edit width='15' height='15' color='#fff' />
        </S.EditPersonalInformation>

        <h3>Nome</h3>
        <p>{name}</p>

        <h3>Data de Nascimento</h3>
        <p>{formattedBirthDate}</p>

        <h3>Telefone</h3>
        <p>{phone}</p>

        <h3>Endereço de E-mail</h3>
        <p>{email}</p>
      </S.Container>
      <PersonalInformationModal
        isOpen={requestModal}
        onRequestClose={handleRequestModal}
      />
    </>
  )
}
