import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AxiosError } from 'axios'

import { addressDataSchema } from 'schemas/signUp'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { formatCEP } from 'utils/formatters/formatCEP'
import { formatAddressNumber } from 'utils/formatters/formatAddressNumber'
import { formatValueToUppercase } from 'utils/formatters/formatValueToUppercase'
import { useIndividualPersonSignUp } from 'hooks/auth/useIndividualPersonSignUp'
import { useAuthState } from 'contexts/auth/AuthContext'
import { error } from 'helpers/notify/error'

import { ErrorResponse } from 'shared/errors/apiSchema'

import { PersonalAddressProps, FormData } from './types'
import * as S from './styles'

export function PersonalAddress ({ onUpdateFormStep, onPreviousFormStep }: PersonalAddressProps) {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState
  } = useForm({
    defaultValues: {
      zipCode: '',
      street: '',
      neighborhood: '',
      number: '',
      complement: '',
      city: '',
      state: '',
      country: '',
      terms: ''
    },
    resolver: yupResolver(addressDataSchema)
  })

  const { registerUser } = useAuthState()

  const {
    mutate: signUp,
    isLoading: isSinguping
  } = useIndividualPersonSignUp()

  function onSubmit (data: FormData) {
    signUp({
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
      onSuccess: () => onUpdateFormStep(),
      onError: (err: AxiosError<ErrorResponse>) => {
        const isEmailInvalid = err.response.status === 400 &&
        err.response?.data.message[0] === 'email must be an email'

        const isEmailInUse = err.response.status === 409 && err.response.data.message === 'Email already in use'

        const isCPFInUse = err.response.status === 409 && err.response.data.message === 'CPF already in use'

        const isContryDoesntContaintOnlyLetters = err.response.status === 400 &&
         err.response.data.message[0] === 'address.country can only contain letters'

        if (isEmailInvalid) {
          error('Insira um email válido')
        }

        if (isEmailInUse) {
          error('Este email já está em uso, insira um outro email')
        }

        if (isCPFInUse) {
          error('Este CPF já está em uso')
        }

        if (isContryDoesntContaintOnlyLetters) {
          error('O país deve conter somente letras')
        }
      }
    })
  }
  const [isChecked, setIsChecked] = useState(false)

  const { isDirty, isSubmitting } = formState
  const isButtonDisabled = isSinguping || !isDirty || isSubmitting || !isChecked

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
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
          maxLength={2}
          {...register('state', {
            onChange: (e) => {
              setValue('state', formatValueToUppercase(e.target.value))
            }
          })}
        />

        <Input
          type='text'
          label='País'
          name='country'
          control={control}
        />
        <S.Terms>
          <S.CheckBox
            type='checkbox'
            name='terms'
            checked={isChecked}
            onChange={() => setIsChecked(current => !current)}

          />
          <S.TextTerm>
            Para continuar você precisa ler e concordar com
            nossos <span>termos e condições</span> e
            <span> política de privacidade.</span>
            (obrigatório)
          </S.TextTerm>

        </S.Terms>
        <S.ButtonGroup>
          <Button
            type='submit'
            loading={isSinguping}
            disabled={isButtonDisabled}
          >
            Continuar
          </Button>
          <Button
            variant='secondary'
            onClick={onPreviousFormStep}
          >
            voltar
          </Button>
        </S.ButtonGroup>
      </S.Form>
    </S.Container>
  )
}
