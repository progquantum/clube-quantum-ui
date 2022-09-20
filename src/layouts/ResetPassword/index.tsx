import Image from 'next/image'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AxiosError } from 'axios'

import { schema } from 'schemas/resetPassword'
import { Input } from 'components/Input'
import { Footer } from 'components/Footer'
import { useResetPassword } from 'hooks/auth/useResetPassword'
import { success } from 'helpers/notify/success'
import { SIGN_IN_PAGE } from 'constants/routesPath'
import { ErrorResponse } from 'shared/errors/apiSchema'
import { error } from 'helpers/notify/error'

import { ResetPasswordFormValues } from './types'
import * as S from './styles'

export function ResetPasswordPage () {
  const {
    control,
    handleSubmit,
    formState
  } = useForm({
    defaultValues: {
      password: '',
      confirm_password: ''
    },
    resolver: yupResolver(schema)
  })

  const { mutate: resetPassword, isLoading } = useResetPassword()

  const { isDirty, isSubmitting } = formState
  const isButtonDisabled = !isDirty || isSubmitting || isLoading

  const router = useRouter()

  const inviteCode = router.query.code

  const handleResetPassword: SubmitHandler<ResetPasswordFormValues> = ({
    password
  }) => {
    resetPassword({
      code: inviteCode,
      password
    }, {
      onSuccess: () => {
        success('Senha alterada com sucesso')
        router.push(SIGN_IN_PAGE)
      },
      onError: (err : AxiosError<ErrorResponse>) => {
        const isPasswordRecoveryCodeNotFound = err.response.status === 404 &&
         err.response.data.message === 'Password recovery code not found'

        const isPasswordRecoveryCodeInvalid = err.response.status === 400 &&
         err.response.data.message === 'invalid code'

        if (isPasswordRecoveryCodeNotFound) {
          error('Não foi possivel alterar a sua senha, código de recuperação não encontrado')
        }

        if (isPasswordRecoveryCodeInvalid) {
          error('Não foi possível alterar a sua senha, código de recuperação inválido')
        }
      }
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
            type='password'
            label='Confirma nova senha'
            name='confirm_password'
            control={control}
          />

          <S.FormBtn
            type='submit'
            disabled={isButtonDisabled}
            loading={isLoading}
          >
            Avançar
          </S.FormBtn>
        </S.Form>

        <Image width={385} height={382} src='/images/main-forgot-password.svg' />
      </S.Container>

      <Footer />
    </>
  )
}
