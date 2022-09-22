import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAuthDispatch } from 'contexts/auth/AuthContext'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { legalPersonDataSchema } from 'schemas/signUp'

import { LegalPersonProps, FormData } from './types'
import * as S from './styles'

export function LegalPerson ({
  onUpdateFormStep,
  onPreviousFormStep
}: LegalPersonProps) {
  const {
    control,
    handleSubmit,
    formState
  } = useForm({
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
        <S.ButtonGroup>
          <Button
            type='submit'
            disabled={isButtonDisabled}
          >
            Continuar
          </Button>
          <Button
            variant='secondary'
            onClick={onPreviousFormStep}
          >
            voltar
          </Button>
        </S.ButtonGroup>
      </S.Form>
    </S.Container>
  )
}
