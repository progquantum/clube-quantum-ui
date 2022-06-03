import Image from 'next/image'

import { useForm } from 'react-hook-form'

import { Input } from 'components/Input'
import { Header } from 'components/Header'
import { Button } from 'components/Button'

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
        <S.Wrapper>
          <S.Form>
            <h4>Alteração de senha</h4>
            <h6>E-mail da conta cadastrada</h6>
            <Input
              type='email'
              label=''
              {...register('email')}
              isDirty={dirtyFields.email}
              errors={errors.email}
            />
            <Button>Avançar</Button>
          </S.Form>
          <Image width={385} height={382} src='/images/404-not-found.png' />
        </S.Wrapper>
      </S.Container>
    </>
  )
}
