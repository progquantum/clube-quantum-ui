import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { schema } from 'schemas/changePassword'

import { Input } from 'components/Input'

import { User } from 'components/Illustrations/User'
import { FORGOT_PASSWORD_PAGE } from 'constants/routesPath'

import { useChangePassword } from 'hooks/auth/useChangePassword'

import { success } from 'helpers/notify/success'
import { error } from 'helpers/notify/error'

import { ChangePasswordFormValues } from './types'

import * as S from './styles'

export function ChangePassword () {
  const { mutate: changePassword, isLoading } = useChangePassword()

  const {
    control,
    handleSubmit,
    formState,
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })

  const { isDirty, isSubmitting } = formState
  const isButtonDisabled = !isDirty || isSubmitting || isLoading

  const hanleChangePassword: SubmitHandler<ChangePasswordFormValues> = ({
    actual_password,
    new_password
  }) => {
    changePassword({
      actual_password,
      new_password
    }, {
      onSuccess: () => {
        success('Senha alterada com sucesso!')
        reset()
      },
      onError: () => {
        error('Opsss, algo deu errado!')
      }
    })
  }

  return (
    <>
      <title>Atualização de cadastro</title>
      <S.Container>
        <S.ResetPassword>
          <User width='18' height='20' color='#BBBBBB' />
          <p>Alterar senha</p>
        </S.ResetPassword>

        <form onSubmit={handleSubmit(hanleChangePassword)}>
          <Input
            type='password'
            label='Sua senha atual'
            name='actual_password'
            control={control}
          />

          <S.ForgotPassword href={FORGOT_PASSWORD_PAGE}>
            Esqueceu sua senha?
          </S.ForgotPassword>

          <Input
            type='password'
            label='Nova senha'
            name='new_password'
            control={control}
          />

          <Input
            type='password'
            label='Confirma nova senha'
            name='confirm_new_password'
            control={control}
          />

          <S.ChangePassword
            type='submit'
            disabled={isButtonDisabled}
            loading={isLoading}
          >
            Solicitar alteração de senha
          </S.ChangePassword>
        </form>
      </S.Container>
    </>
  )
}
