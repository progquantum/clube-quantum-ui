import { Controller, useForm } from 'react-hook-form'
import NextLink from 'next/link'

import { Header } from 'components/Header'
import { Input } from 'components/Input'
import { Button } from 'components/Button'

import * as S from './styles'

export function LoginPage () {
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
            <NextLink href='/'>
              Esqueceu a sua senha?
            </NextLink>
          </S.LoginAbout>

          <S.LoginButton>
            Login
          </S.LoginButton>
        </S.Form>
      </S.LoginWrapper>

      <S.CreateAccountButtonWrapper>
        <div>
          <h2>Ainda não é um membro do Quantum Clube?</h2>
          <NextLink href='/register/personal'>
            <Button>
              Criar Conta
            </Button>
          </NextLink>
        </div>
      </S.CreateAccountButtonWrapper>
    </>
  )
}
