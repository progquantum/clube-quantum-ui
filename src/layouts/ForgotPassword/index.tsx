import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from 'components/Input'
import { Footer } from 'components/Footer'

import { schema } from 'schemas/recoveryPassword'
import { useRecoveryPassword } from 'hooks/auth/useRecoveryPassword'

import { RecoveryPasswordFormValues } from './types'
import * as S from './styles'

export function ForgotPasswordPage () {
  const {
    control,
    handleSubmit
  } = useForm({
    defaultValues: {
      email: ''
    },
    resolver: yupResolver(schema)
  })

  const { mutate: sendRecoveryPassword, isLoading } = useRecoveryPassword()

  const handleRecoveryPassword: SubmitHandler<RecoveryPasswordFormValues> = (
    data
  ) => {
    sendRecoveryPassword(data)
  }

  return (
    <>
      <title>Esqueceu sua Senha</title>

      <S.Container>
        <S.Form onSubmit={handleSubmit(handleRecoveryPassword)}>
          <h1>Esqueceu sua Senha</h1>

          <Input
            type='email'
            label='Email'
            name='email'
            control={control}
          />

          <S.FormBtn disabled={isLoading}>Avançar</S.FormBtn>
        </S.Form>

        <Image width={385} height={382} src='/images/main-forgot-password.svg' />
      </S.Container>

      <Footer />
    </>
  )
}
