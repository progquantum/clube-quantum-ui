import { useForm } from 'react-hook-form'
import { FaAngleRight } from 'react-icons/fa'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'

import { useSignUpDispatch, useSignUpState } from 'contexts/signup/SignUpContext'
import {
  createPersonalAccountService
} from 'services/client-side/signUpServices/createPersonalAccountService'

import { addressDataSchema } from 'schemas/signUp'
import { Input } from 'components/Input'

import { formatCEP } from 'utils/formatters/formatCEP'
import { formatAddressNumber } from 'utils/formatters/formatAddressNumber'

import { Container, Form, NextStepButton } from '../../../components'
import { AddressDataInputsProps, FormData } from './types'

export function AddressDataInputs ({ onUpdateFormStep }: AddressDataInputsProps) {
  const { saveData } = useSignUpDispatch()
  const { data } = useSignUpState()
  const {
    mutateAsync: createPersonalAccount
  } = useMutation(createPersonalAccountService, {
    onSuccess: ({ token }) => saveData({ token }),
    // eslint-disable-next-line no-console
    onError: (error) => console.log(error)
  })

  const { handleSubmit, control, register, setValue } = useForm({
    defaultValues: {
      zipCode: '',
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

  async function onSubmit (info: FormData) {
    const { zipCode, city, country, neighborhood, number, state, street } = info

    await createPersonalAccount({
      name: data.name as string,
      email: data.email as string,
      phone: data.phone as string,
      cpf: data.cpf as string,
      password: data.password as string,
      invitedBy: null,
      birthDate: data.birth_date as string,
      address: {
        city,
        country,
        neighborhood,
        number,
        state,
        street,
        zipCode
      }
    })

    onUpdateFormStep()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          label='CEP'
          control={control}
          {...register('zipCode', {
            onChange: (e) => {
              setValue('zipCode', formatCEP(e.target.value))
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
