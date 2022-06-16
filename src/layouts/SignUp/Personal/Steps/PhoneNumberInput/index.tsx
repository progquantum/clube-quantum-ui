import { FaAngleRight } from 'react-icons/fa'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useSignUpDispatch } from 'contexts/signup/SignUpContext'

import { phoneNumberSchema } from 'schemas/signUp'
import { Input } from 'components/Input'

import { Container, Form, NextStepButton } from '../../../components'
import { PhoneNumberProps, FormData } from './types'

export function PhoneNumberInput ({ onUpdateFormStep }: PhoneNumberProps) {
  const { saveData } = useSignUpDispatch()

  const { handleSubmit, control } = useForm({
    defaultValues: {
      phone: ''
    },
    resolver: yupResolver(phoneNumberSchema)
  })

  function onSubmitPhoneNumber (data: FormData) {
    saveData(data)
    onUpdateFormStep()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitPhoneNumber)}>
        <Controller
          control={control}
          name='phone'
          render={({ field, fieldState }) => (
            <Input
              label='Telefone'
              {...field}
              errors={fieldState.error}
              isDirty={fieldState.isDirty}
              onFocus={e => (e.target.placeholder = '(00) 0 0000-0000')}
              onBlur={e => (e.target.placeholder = '')}
            />
          )}
        />

        <NextStepButton>
          <FaAngleRight />
        </NextStepButton>
      </Form>
    </Container>
  )
}
