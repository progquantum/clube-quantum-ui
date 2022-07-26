import { ChangeEvent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import Head from 'next/head'

import { Input } from 'components/Input'
import { Footer } from 'components/Footer'

import { useAuthDispatch, useAuthState } from 'contexts/auth/AuthContext'

import { schema } from 'schemas/signIn'

import { formatCPF } from 'utils/formatters/formatCPF'

import { RESET_PASSWORD_PAGE, SIGN_UP_PAGE } from 'constants/routesPath'

import { SignInFormValues } from './types'
import * as S from './styles'

export function SignInPage () {
  const {
    control,
    handleSubmit,
    register,
    setValue
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valueFormatted = formatCPF(e.target.value)

    setValue('login', valueFormatted)
  }

  return (
    <>
      <Head>
        <title>Acesse sua conta - Clube Quantum</title>
      </Head>

      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>

          <Input
            type='text'
            label='CPF/CNPJ'
            name='login'
            control={control}
            {...register('login', {
              onChange: (e) => handleInputChange(e)
            })}
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

            <Link href={RESET_PASSWORD_PAGE}>
              Esqueceu a sua senha?
            </Link>
          </S.LoginAbout>

          <S.SignInButton type='submit' loading={loading} disabled={loading}>
            Login
          </S.SignInButton>
        </S.Form>

        <S.CreateAccountButtonWrapper>
          <h1>Ainda não é um membro do Quantum Clube?</h1>

          <Link href={SIGN_UP_PAGE}>
            Criar Conta
          </Link>
        </S.CreateAccountButtonWrapper>
      </S.Wrapper>

      <Footer />
    </>
  )
}
