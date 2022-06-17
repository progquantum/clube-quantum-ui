import { FaAngleRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'

import { Input } from 'components/Input'

import { Container, Form, NextStepButton } from '../../../components'

import { PhoneNumberProps } from './types'

export function PhoneNumberInput ({ onUpdateFormStep }: PhoneNumberProps) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      phoneNumber: ''
    }
  })

  function onSubmitCPF () {
    onUpdateFormStep()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitCPF)}>
        <Input
          type='text'
          label='Telefone'
          name='phoneNumber'
          control={control}
        />

        <NextStepButton>
          <FaAngleRight />
        </NextStepButton>
      </Form>
    </Container>
  )
}
