import { FaAngleRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

import { useAuthDispatch } from 'contexts/auth/AuthContext'
import { phoneNumberSchema } from 'schemas/signUp'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber'
import { useSendPhoneCode } from 'hooks/useSendPhoneCode'

import { Container, Form } from '../../../components'
import { PhoneNumberProps, FormData } from './types'

export function PhoneNumberInput ({ onUpdateFormStep }: PhoneNumberProps) {
  const { handleSubmit, control, register, setValue } = useForm({
    defaultValues: {
      phone: ''
    },
    resolver: yupResolver(phoneNumberSchema)
  })

  const { signUp } = useAuthDispatch()
  const { mutate: sendPhoneCodeRequest, isLoading } = useSendPhoneCode()

  function onSubmitPhoneNumber (data: FormData) {
    const phone = `+55 ${data.phone}`

    sendPhoneCodeRequest({ phone }, {
      onSuccess: (_, variables) => {
        toast.success(`Codigo enviado para o numero ${variables.phone}`)
        signUp({ phone })
        onUpdateFormStep()
      },
      onError: () => {
        toast.error('Número de telefone inválido!')
      }
    })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitPhoneNumber)}>
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
          loading={isLoading}
          disabled={isLoading}
        >
          <FaAngleRight size={24} />
        </Button>
      </Form>
    </Container>
  )
}
