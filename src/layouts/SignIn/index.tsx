import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import { Header } from 'components/Header'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Footer } from 'components/Footer'

import { useAuthDispatch, useAuthState } from 'contexts/auth/AuthContext'

import { schema } from 'schemas/signIn'

import { SignInFormValues } from './types'

import * as S from './styles'

export function SignInPage () {
  const {
    control,
    formState: { errors, dirtyFields },
    register,
    handleSubmit
  } = useForm({
    defaultValues: {
      login: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const router = useRouter()

  const { signIn } = useAuthDispatch()

  const { loading } = useAuthState()

  const onSubmit: SubmitHandler<SignInFormValues> = (data) => {
    signIn(data)

    router.push('/dashboard')
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

          <Input
            type='password'
            label='Senha'
            {...register('password')}
            isDirty={dirtyFields.password}
            errors={errors.password}
          />

          <S.LoginAbout>
            <span>
              <input type='checkbox' id='remember' />
              <label htmlFor='remember'>Lembre meu login</label>
            </span>

            <Link href='/'>
              Esqueceu a sua senha?
            </Link>
          </S.LoginAbout>

          <S.LoginButton disabled={loading}>
            Login
          </S.LoginButton>
        </S.Form>
      </S.LoginWrapper>

      <S.CreateAccountButtonWrapper>
        <div>
          <h2>Ainda não é um membro do Quantum Clube?</h2>
          <Link href='/register/personal'>
            <Button>
              Criar Conta
            </Button>
          </Link>
        </div>
      </S.CreateAccountButtonWrapper>

      <Footer />
    </>
  )
}
