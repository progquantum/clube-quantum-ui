import { useForm } from 'react-hook-form'
import { FaAngleRight } from 'react-icons/fa'
import { yupResolver } from '@hookform/resolvers/yup'

import { toast } from 'react-toastify'

import { addressDataSchema } from 'schemas/signUp'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { formatCEP } from 'utils/formatters/formatCEP'
import { formatAddressNumber } from 'utils/formatters/formatAddressNumber'
import { useIndividualPersonSignUp } from 'hooks/auth/useIndividualPersonSignUp'
import { useAuthState } from 'contexts/auth/AuthContext'

import { Container, Form } from '../../../components'
import { AddressDataInputsProps, FormData } from './types'

export function AddressDataInputs ({ onUpdateFormStep }: AddressDataInputsProps) {
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

  const { registerUser } = useAuthState()

  const {
    mutate: singUpIndividualPersonMutation, isLoading
  } = useIndividualPersonSignUp()

  function onSubmit (data: FormData) {
    singUpIndividualPersonMutation({
      name: registerUser.name,
      phone: registerUser.phone,
      cpf: registerUser.cpf,
      email: registerUser.email,
      password: registerUser.password,
      invited_by: registerUser.invited_by,
      birth_date: registerUser.birth_date,
      address: {
        street: data.street,
        number: data.number,
        neighborhood: data.neighborhood,
        zip_code: data.zipCode,
        city: data.city,
        state: data.state,
        country: data.country
      }
    }, {
      onSuccess: () => {
        onUpdateFormStep()
      },
      onError: () => {
        toast.error('Encontramos um erro por aqui, tente novamente mais tarde!')
      }
    })
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

        <Button type='submit' variant='rounded' loading={isLoading} disabled={isLoading}>
          <FaAngleRight size={24} />
        </Button>
      </Form>
    </Container>
  )
}
