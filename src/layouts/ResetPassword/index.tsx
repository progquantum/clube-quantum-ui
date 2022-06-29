import Image from 'next/image'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { schema } from 'schemas/resetPassword'

import { Input } from 'components/Input'
import { Footer } from 'components/Footer'

import { useResetPassword } from 'hooks/auth/useResetPassword'

import { ResetPasswordFormValues } from './types'
import * as S from './styles'

export function ResetPasswordPage () {
  const {
    control,
    handleSubmit
  } = useForm({
    defaultValues: {
      password: '',
      confirm_password: ''
    },
    resolver: yupResolver(schema)
  })

  const { mutate: resetPassword, isLoading } = useResetPassword()

  const router = useRouter()

  const code = router.query

  const handleResetPassword: SubmitHandler<ResetPasswordFormValues> = (
    data
  ) => {
    resetPassword({
      code: code,
      password: data.password
    })
  }

  return (
    <>
      <title>Reset sua senha!</title>

      <S.Container>
        <S.Form onSubmit={handleSubmit(handleResetPassword)}>
          <h1>Reset sua senha!</h1>

          <Input
            type='password'
            label='Nova senha'
            name='password'
            control={control}
          />

          <Input
            type='confirm_password'
            label='Confirma nova senha'
            name='confirm_password'
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
