import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import Head from 'next/head'

import { Header } from 'components/Header'
import { Input } from 'components/Input'
import { Footer } from 'components/Footer'

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

      <Header />

      <S.LoginWrapper>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>

          <Controller
            control={control}
            name='login'
            render={({ field, fieldState }) => (
              <Input
                type='text'
                label='CPF/CNPJ'
                {...field}
                errors={fieldState.error}
                isDirty={fieldState.isDirty}
              />
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({ field, fieldState }) => (
              <Input
                type='password'
                label='Senha'
                {...field}
                errors={fieldState.error}
                isDirty={fieldState.isDirty}
              />
            )}
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

          <S.LoginButton type='submit' loading={loading} disabled={loading}>
            Login
          </S.LoginButton>
        </S.Form>
      </S.LoginWrapper>

      <S.CreateAccountButtonWrapper>
        <div>
          <h2>Ainda não é um membro do Quantum Clube?</h2>
          <Link href='/signup/personal'>
            Criar Conta
          </Link>
        </div>
      </S.CreateAccountButtonWrapper>

      <Footer />
    </>
  )
}
