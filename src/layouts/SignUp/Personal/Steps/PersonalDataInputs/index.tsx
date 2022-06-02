import { Controller, useForm } from 'react-hook-form'

import { FaAngleRight } from 'react-icons/fa'

import { Input } from 'components/Input'

import * as S from './styles'
import { PersonalDataInputsProps } from './types'

export function PersonalDataInputs ({
  onUpdateFormStep
}: PersonalDataInputsProps) {
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
    control
  } = useForm({
    defaultValues: {
      name: '',
      birthDate: '',
      email: '',
      email_confirmation: '',
      password: '',
      password_confirmation: ''
    }
  })

  async function onSubmit () {
    onUpdateFormStep()
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='Nome Completo'
          {...register('name')}
          isDirty={dirtyFields.name}
          errors={errors.name}
        />
        <Controller
          control={control}
          name='birthDate'
          render={({ field, fieldState }) => (
            <Input
              label='Data de nascimento'
              {...field}
              onChange={e => field.onChange(e.target.value)}
              errors={fieldState.error}
              isDirty={fieldState.isDirty}
              onFocus={e => (e.target.placeholder = '99/99/9999')}
              onBlur={e => (e.target.placeholder = '')}
            />
          )}
        />
        <Input
          label='Email'
          type='email'
          {...register('email')}
          isDirty={dirtyFields.email}
          errors={errors.email}
        />
        <Input
          label='Confirmar Email'
          type='email'
          {...register('email_confirmation')}
          isDirty={dirtyFields.email_confirmation}
          errors={errors.email_confirmation}
        />
        <Input
          label='Criar Senha'
          type='password'
          {...register('password')}
          isDirty={dirtyFields.password}
          errors={errors.password}
        />
        <Input
          label='Confirmar Senha'
          type='password'
          {...register('password_confirmation')}
          isDirty={dirtyFields.password_confirmation}
          errors={errors.password_confirmation}
        />
        <S.Button>
          <FaAngleRight />
        </S.Button>
      </S.Form>
    </S.Container>
  )
}
