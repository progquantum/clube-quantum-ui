import { useForm } from 'react-hook-form'
import { FaAngleRight } from 'react-icons/fa'

import { Input } from 'components/Input'

import { Container, Form, NextStepButton } from '../../../components'

import { AddressDataInputsProps } from './types'

export function AddressDataInputs ({ onUpdateFormStep }: AddressDataInputsProps) {
  const { handleSubmit, control } = useForm({
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
        <Input
          type='text'
          label='CEP'
          name='cep'
          control={control}
        />

        <Input
          type='text'
          label='Logradouro'
          name='street'
          control={control}
        />

        <Input
          type='text'
          label='Bairro'
          name='neighborhood'
          control={control}
        />

        <Input
          type='text'
          label='Número'
          name='number'
          control={control}
        />

        <Input
          type='text'
          label='Complemento'
          name='complement'
          control={control}
        />

        <Input
          type='text'
          label='Cidade'
          name='city'
          control={control}
        />

        <Input
          type='text'
          label='Estado'
          name='state'
          control={control}
        />

        <Input
          type='text'
          label='País'
          name='country'
          control={control}
        />

        <NextStepButton>
          <FaAngleRight />
        </NextStepButton>
      </Form>
    </Container>
  )
}
