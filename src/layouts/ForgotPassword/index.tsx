import Image from 'next/image'

import { useForm } from 'react-hook-form'

import { Input } from 'components/Input'
import { Header } from 'components/Header'
import { Button } from 'components/Button'
import { Footer } from 'components/Footer'

import * as S from './styles'

export function ForgotPasswordPage () {
  const {
    formState: { errors, dirtyFields },
    register
  } = useForm({
    defaultValues: {
      email: ''
    }
  })

  return (
    <>
      <Header />

      <S.Container>
        <S.Box>
          <S.Form>
            <h1>Alteração de senha</h1>
            <Input
              type='email'
              label='E-mail da conta cadastrada'
              {...register('email')}
              isDirty={dirtyFields.email}
              errors={errors.email}
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
