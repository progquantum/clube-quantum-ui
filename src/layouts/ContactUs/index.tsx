import { useForm } from 'react-hook-form'

import { Input } from 'components/Input'

import * as S from './styles'

export function ContactUsPage () {
  const {
    control
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  })

  return (
    <S.Container>
      <S.LeftWrapper>
        <S.Heading>
          Entre em contato conosco por meio dos canais abaixo ou deixe-nos uma mensagem
        </S.Heading>
      </S.LeftWrapper>
      <S.Form>
        <Input
          type='text'
          name='name'
          label='Nome'
          placeholder='Nome completo'
          control={control}
        />
        <Input
          type='email'
          name='email'
          label='Email'
          placeholder='email@email.com'
          control={control}
        />
        <Input
          type='text'
          name='phone'
          label='Telefone'
          placeholder='(00) 0 0000 - 0000'
          control={control}
        />
        <textarea />
      </S.Form>
    </S.Container>
  )
}
