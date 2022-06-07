import { useForm, Controller } from 'react-hook-form'
import { FaAngleRight } from 'react-icons/fa'

import { Input } from 'components/Input'

import { Container, Form, NextStepButton } from '../../../components'

import { AddressDataInputsProps } from './types'

export function AddressDataInputs ({ onUpdateFormStep }: AddressDataInputsProps) {
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
    control
  } = useForm({
    defaultValues: {
      cep: '',
      street: '',
      neighborhood: '',
      number: '',
      complement: '',
      city: '',
      state: '',
      country: ''
    }
  })

  function onSubmit () {
    onUpdateFormStep()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name='cep'
          render={({ field, fieldState }) => (
            <Input
              label='CEP'
              {...field}
              onChange={e => field.onChange(e.target.value)}
              errors={fieldState.error}
              isDirty={fieldState.isDirty}
              onFocus={e => (e.target.placeholder = '00000-000')}
              onBlur={e => (e.target.placeholder = '')}
            />
          )}
        />
        <Input
          label='Logradouro'
          {...register('street')}
          isDirty={dirtyFields.street}
          errors={errors.street}
        />
        <Input
          label='Bairro'
          {...register('neighborhood')}
          isDirty={dirtyFields.neighborhood}
          errors={errors.neighborhood}
        />
        <Input
          label='Número'
          {...register('number')}
          isDirty={dirtyFields.number}
          errors={errors.number}
        />
        <Input
          label='Complemento'
          {...register('complement')}
          isDirty={dirtyFields.complement}
          errors={errors.complement}
        />
        <Input
          label='Cidade'
          {...register('city')}
          isDirty={dirtyFields.city}
          errors={errors.city}
        />
        <Input
          label='Estado'
          {...register('state')}
          isDirty={dirtyFields.state}
          errors={errors.state}
        />
        <Input
          label='País'
          {...register('country')}
          isDirty={dirtyFields.country}
          errors={errors.country}
        />
        <NextStepButton>
          <FaAngleRight />
        </NextStepButton>
      </Form>
    </Container>
  )
}
