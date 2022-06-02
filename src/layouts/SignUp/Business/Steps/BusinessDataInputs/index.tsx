import { useForm } from 'react-hook-form'

import { FaAngleRight } from 'react-icons/fa'

import { Input } from 'components/Input'

import { Container, Form, NextStepButton } from '../../../components'

import { BusinessDataInputsProps } from './types'

export function BusinessDataInputs ({
  onUpdateFormStep
}: BusinessDataInputsProps) {
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit
  } = useForm({
    defaultValues: {
      corporateName: '',
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
          label='Razão Social'
          {...register('corporateName')}
          isDirty={dirtyFields.corporateName}
          errors={errors.corporateName}
        />
        <Input
          label='Email'
          type='email'
          {...register('email')}
          isDirty={dirtyFields.email}
          errors={errors.email}
        />
        <Input
          label='Confirmar Email'
          type='email'
          {...register('email_confirmation')}
          isDirty={dirtyFields.email_confirmation}
          errors={errors.email_confirmation}
        />
        <Input
          label='Criar Senha'
          type='password'
          {...register('password')}
          isDirty={dirtyFields.password}
          errors={errors.password}
        />
        <Input
          label='Confirmar Senha'
          type='password'
          {...register('password_confirmation')}
          isDirty={dirtyFields.password_confirmation}
          errors={errors.password_confirmation}
        />
        <NextStepButton>
          <FaAngleRight />
        </NextStepButton>
      </Form>
    </Container>
  )
}
