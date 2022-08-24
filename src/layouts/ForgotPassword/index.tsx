import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import { Input } from 'components/Input'
import { Footer } from 'components/Footer'

import { schema } from 'schemas/recoveryPassword'
import { useRecoveryPassword } from 'hooks/auth/useRecoveryPassword'

import { SIGN_IN_PAGE } from 'constants/routesPath'

import { RecoveryPasswordFormValues } from './types'
import * as S from './styles'

export function ForgotPasswordPage () {
  const {
    control,
    handleSubmit,
    formState
  } = useForm({
    defaultValues: {
      email: ''
    },
    resolver: yupResolver(schema)
  })

  const router = useRouter()

  const {
    mutate: sendRecoveryPasswordRequest,
    isLoading
  } = useRecoveryPassword()

  const { isDirty, isSubmitting } = formState
  const isButtonDisabled = !isDirty || isSubmitting || isLoading

  const handleRecoveryPassword: SubmitHandler<RecoveryPasswordFormValues> = ({
    email
  }) => {
    sendRecoveryPasswordRequest({
      email
    }, {
      onSuccess: (_, variables) => {
        toast.success(`Enviado e-mail para ${variables.email}`)

        router.push(SIGN_IN_PAGE)
      }
    })
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
