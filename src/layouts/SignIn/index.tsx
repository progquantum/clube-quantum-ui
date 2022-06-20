import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import Head from 'next/head'

import { Input } from 'components/Input'
import { Footer } from 'components/Footer'
import { Button } from 'components/Button'

import { useAuthDispatch, useAuthState } from 'contexts/auth/AuthContext'

import { schema } from 'schemas/signIn'

import { SignInFormValues } from './types'
import * as S from './styles'

export function SignInPage () {
  const {
    control,
    handleSubmit
  } = useForm({
    defaultValues: {
      login: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const { signIn } = useAuthDispatch()

  const { loading } = useAuthState()

  const onSubmit: SubmitHandler<SignInFormValues> = (data) => {
    signIn(data)
  }

  return (
    <>
      <Head>
        <title>Acessar sua conta Clube Quantum</title>
      </Head>

      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>

          <Input
            type='text'
            label='CPF/CNPJ'
            name='login'
            control={control}
          />

          <Input
            type='password'
            label='Senha'
            name='password'
            control={control}
          />

          <S.LoginAbout>
            <span>
              <input type='checkbox' id='remember' />
              <label htmlFor='remember'>Lembre meu login</label>
            </span>

            <Link href='/forgot-password'>
              Esqueceu a sua senha?
            </Link>
          </S.LoginAbout>

          <Button type='submit' loading={loading} disabled={loading}>
            Login
          </Button>
        </S.Form>

        <S.CreateAccountButtonWrapper>
          <h1>Ainda não é um membro do Quantum Clube?</h1>

          <Link href='/signup/personal'>
            Criar Conta
          </Link>
        </S.CreateAccountButtonWrapper>
      </S.Wrapper>

      <Footer />
    </>
  )
}
