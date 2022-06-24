import { useForm } from 'react-hook-form'
import { FaAngleRight } from 'react-icons/fa'
import { yupResolver } from '@hookform/resolvers/yup'

import { useSignUpDispatch } from 'contexts/signup/SignUpContext'

import { Input } from 'components/Input'
import { personalDataSchema } from 'schemas/signUp'

import { formatBirthDate } from 'utils/formatters/formatBirthDate'

import { Container, Form, NextStepButton } from '../../../components'

import { PersonalDataInputsProps, FormData } from './types'

export function PersonalDataInputs ({
  onUpdateFormStep
}: PersonalDataInputsProps) {
  const { saveData } = useSignUpDispatch()

  const { handleSubmit, control, register, setValue } = useForm({
    defaultValues: {
      name: '',
      birth_date: '',
      email: '',
      email_confirmation: '',
      password: '',
      password_confirmation: ''
    },
    resolver: yupResolver(personalDataSchema)
  })

  function formatFormData (data: FormData) {
    const { birth_date } = data
    const formattedBirthDate = birth_date.split('/').reverse().join('-')

    const formData = {
      ...data,
      birth_date: formattedBirthDate
    }

    return formData
  }

  async function onSubmit (data: FormData) {
    const formData = formatFormData(data)

    saveData(formData)
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
          control={control}
          {...register('birth_date', {
            onChange: (e) => {
              setValue('birth_date', formatBirthDate(e.target.value))
            }
          })}
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
