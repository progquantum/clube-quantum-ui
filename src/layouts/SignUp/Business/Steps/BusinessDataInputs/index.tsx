import { useForm } from 'react-hook-form'

import { FaAngleRight } from 'react-icons/fa'

import { Input } from 'components/Input'

import { Container, Form, NextStepButton } from '../../../components'

import { BusinessDataInputsProps } from './types'

export function BusinessDataInputs ({
  onUpdateFormStep
}: BusinessDataInputsProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      corporateName: '',
      email: '',
      email_confirmation: '',
      password: '',
      password_confirmation: ''
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
          label='Razão Social'
          name='corporateName'
          control={control}
        />

        <Input
          type='email'
          label='E-mail'
          name='email'
          control={control}
        />

        <Input
          type='email'
          label='Confirmar e-mail'
          name='email_confirmation'
          control={control}
        />

        <Input
          type='password'
          label='Criar senha'
          name='password'
          control={control}
        />

        <Input
          type='password'
          label='Confirmar Senha'
          name='password_confirmation'
          control={control}
        />

        <NextStepButton>
          <FaAngleRight />
        </NextStepButton>
      </Form>
    </Container>
  )
}
