import { Edit } from 'components/Illustrations/Edit'

import { PersonalInformationProps } from './types'

import * as S from './styles'

export function PersonalInformation ({ user } : PersonalInformationProps) {
  const name = user?.name
  const formattedBirthDate = user?.birth_date.slice(0, 10).split('-').reverse().join('/')
  const phone = user?.phone
  const email = user?.email

  return (
    <>
      <S.Container>
        <S.EditPersonalInformation>
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
    </>
  )
}
