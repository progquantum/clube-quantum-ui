import { FaAngleRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'

import { sendCodeService } from 'services/client-side/signUpServices/sendCodeService'

import { useSignUpDispatch } from 'contexts/signup/SignUpContext'

import { phoneNumberSchema } from 'schemas/signUp'
import { Input } from 'components/Input'

import { formatPhoneNumber } from 'utils/formatters/formatPhoneNumber'

import { Container, Form, NextStepButton } from '../../../components'
import { PhoneNumberProps, FormData } from './types'

export function PhoneNumberInput ({ onUpdateFormStep }: PhoneNumberProps) {
  const { saveData } = useSignUpDispatch()
  const { mutateAsync: sendCode } = useMutation(sendCodeService)

  const { handleSubmit, control, register, setValue } = useForm({
    defaultValues: {
      phone: ''
    },
    resolver: yupResolver(phoneNumberSchema)
  })

  async function onSubmitPhoneNumber (data: FormData) {
    await sendCode({ phoneNumber: `+55 ${data.phone}` })
    saveData(data)
    onUpdateFormStep()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitPhoneNumber)}>
        <Input
          type='text'
          label='Telefone'
          name='phone'
          control={control}
          {...register('phone', {
            onChange: (e) => {
              setValue('phone', formatPhoneNumber(e.target.value))
            }
          })}
        />

        <NextStepButton>
          <FaAngleRight />
        </NextStepButton>
      </Form>
    </Container>
  )
}
