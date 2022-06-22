import { useForm } from 'react-hook-form'
import { FaAngleRight } from 'react-icons/fa'
import { yupResolver } from '@hookform/resolvers/yup'

import { useSignUpDispatch } from 'contexts/signup/SignUpContext'

import { addressDataSchema } from 'schemas/signUp'
import { Input } from 'components/Input'

import { formatCEP } from 'utils/formatters/formatCEP'
import { formatAddressNumber } from 'utils/formatters/formatAddressNumber'

import { Container, Form, NextStepButton } from '../../../components'
import { AddressDataInputsProps, FormData } from './types'

export function AddressDataInputs ({ onUpdateFormStep }: AddressDataInputsProps) {
  const { saveData } = useSignUpDispatch()

  const { handleSubmit, control, register, setValue } = useForm({
    defaultValues: {
      cep: '',
      street: '',
      neighborhood: '',
      number: '',
      complement: '',
      city: '',
      state: '',
      country: ''
    },
    resolver: yupResolver(addressDataSchema)
  })

  function onSubmit (data: FormData) {
    saveData(data)
    onUpdateFormStep()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          label='CEP'
          control={control}
          {...register('cep', {
            onChange: (e) => {
              setValue('cep', formatCEP(e.target.value))
            }
          })}
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
          control={control}
          {...register('number', {
            onChange: (e) => {
              setValue('number', formatAddressNumber(e.target.value))
            }
          })}
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
