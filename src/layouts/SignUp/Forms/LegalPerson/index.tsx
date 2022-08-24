import { useForm } from 'react-hook-form'
import { FaAngleRight } from 'react-icons/fa'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAuthDispatch } from 'contexts/auth/AuthContext'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { legalPersonDataSchema } from 'schemas/signUp'

import { LegalPersonProps, FormData } from './types'
import * as S from './styles'

export function LegalPerson ({
  onUpdateFormStep
}: LegalPersonProps) {
  const {
    control,
    handleSubmit,
    formState
  } = useForm({
    defaultValues: {
      company_name: '',
      email: '',
      email_confirmation: '',
      password: '',
      password_confirmation: ''
    },
    resolver: yupResolver(legalPersonDataSchema)
  })

  const { signUp } = useAuthDispatch()

  const { isDirty, isSubmitting } = formState
  const isButtonDisabled = !isDirty || isSubmitting

  function onSubmit (data: FormData) {
    signUp(data)
    onUpdateFormStep()
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          label='Razão Social'
          name='company_name'
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

        <Button
          type='submit'
          variant='rounded'
          disabled={isButtonDisabled}
        >
          <FaAngleRight size={24} />
        </Button>
      </S.Form>
    </S.Container>
  )
}
