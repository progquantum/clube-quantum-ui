import { useForm } from 'react-hook-form'

import { FaAngleRight } from 'react-icons/fa'

import { Input } from 'components/Input'

import { Container, Form, NextStepButton } from '../../../components'

import { PersonalDataInputsProps } from './types'

export function PersonalDataInputs ({
  onUpdateFormStep
}: PersonalDataInputsProps) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: '',
      birthDate: '',
      email: '',
      email_confirmation: '',
      password: '',
      password_confirmation: ''
    }
  })

  async function onSubmit () {
    onUpdateFormStep()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          label='Nome Completo'
          name='name'
          control={control}
        />

        <Input
          type='text'
          label='Data de nascimento'
          name='birthDate'
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
          label='Confimar e-mail'
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
