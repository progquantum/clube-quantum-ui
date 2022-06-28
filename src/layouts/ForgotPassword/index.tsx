import Image from 'next/image'
import { useForm } from 'react-hook-form'

import { Input } from 'components/Input'
import { Footer } from 'components/Footer'

import * as S from './styles'

export function ForgotPasswordPage () {
  const {
    control,
    handleSubmit
  } = useForm({
    defaultValues: {
      login: '',
      password: ''
    }
  })

  const handleRecoveryPassword = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <>
      <S.Container>
        <S.Box>
          <S.Form onSubmit={handleSubmit(handleRecoveryPassword)}>
            <h1>Alteração de senha</h1>
            <Input
              type='email'
              label='Email'
              name='email'
              control={control}
            />
            <S.FormBtn>Avançar</S.FormBtn>
          </S.Form>
          <Image width={385} height={382} src='/images/main-forgot-password.svg' />
        </S.Box>
      </S.Container>

      <Footer />
    </>
  )
}
