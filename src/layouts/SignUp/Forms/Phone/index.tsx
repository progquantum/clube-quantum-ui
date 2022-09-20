import { FaAngleRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AxiosError } from 'axios'

import { useAuthDispatch } from 'contexts/auth/AuthContext'
import { phoneNumberSchema } from 'schemas/signUp'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber'
import { useSendPhoneCode } from 'hooks/useSendPhoneCode'
import { error } from 'helpers/notify/error'
import { success } from 'helpers/notify/success'
import { ErrorResponse } from 'shared/errors/apiSchema'

import { PhoneProps, FormData } from './types'
import * as S from './styles'

export function Phone ({ onUpdateFormStep }: PhoneProps) {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState
  } = useForm({
    defaultValues: {
      phone: ''
    },
    resolver: yupResolver(phoneNumberSchema)
  })

  const { signUp } = useAuthDispatch()
  const {
    mutate: sendPhoneCodeRequest,
    isLoading: isSendingPhoneCode
  } = useSendPhoneCode()

  const { isDirty, isSubmitting } = formState
  const isButtonDisabled = isSendingPhoneCode || !isDirty || isSubmitting

  function onSubmitPhoneNumber (data: FormData) {
    const phone = data.phone.includes('+55') ? data.phone : `+55 ${data.phone}`

    sendPhoneCodeRequest({ phone }, {
      onSuccess: (_, variables) => {
        success(`Codigo enviado para o numero ${variables.phone}`)
        signUp({ phone })
        onUpdateFormStep()
      },
      onError: (err: AxiosError<ErrorResponse>) => {
        const isPhoneInUse = err.response.status === 409 && err.response.data.message === 'Phone already in use'
        const isPhoneInvalid = err.response.status === 400 && err.response.data.message[0] === 'phone must be a phone number'

        if (isPhoneInUse) {
          error('Este telefone já está em uso, insira um outro telefone')
        }

        if (isPhoneInvalid) {
          error('Número de telefone inválido!')
        }
      }
    })
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmitPhoneNumber)}>
        <Input
          type='text'
          label='Telefone'
          control={control}
          {...register('phone', {
            onChange: (e) => {
              setValue('phone', formatPhoneNumber(e.target.value))
            }
          })}
        />

        <Button
          type='submit'
          variant='rounded'
          loading={isSendingPhoneCode}
          disabled={isButtonDisabled}
        >
          <FaAngleRight size={24} />
        </Button>
      </S.Form>
    </S.Container>
  )
}
