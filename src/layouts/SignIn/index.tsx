import { Controller, useForm } from 'react-hook-form'
import Link from 'next/link'
import Head from 'next/head'

import { Header } from 'components/Header'
import { Input } from 'components/Input'
import { Footer } from 'components/Footer'

import * as S from './styles'

export function SignInPage () {
  const {
    control,
    formState: { errors, dirtyFields },
    register
  } = useForm({
    defaultValues: {
      login: '',
      password: ''
    }
  })

  return (
    <>
      <Head>
        <title>Acessar sua conta Clube Quantum</title>
      </Head>

      <Header />

      <S.LoginWrapper>
        <S.Form>
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

          <S.LoginButton>
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
