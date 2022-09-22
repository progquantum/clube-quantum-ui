import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAuthDispatch } from 'contexts/auth/AuthContext'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { personalDataSchema } from 'schemas/signUp'
import { formatBirthDate } from 'utils/formatters/formatBirthDate'

import { IndividualPersonProps, FormData } from './types'
import * as S from './styles'

export function IndividualPerson ({
  onUpdateFormStep,
  onPreviousFormStep
}: IndividualPersonProps) {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState
  } = useForm({
    resolver: yupResolver(personalDataSchema)
  })

  const { signUp } = useAuthDispatch()

  const { isDirty, isSubmitting } = formState
  const isButtonDisabled = !isDirty || isSubmitting

  function handleFormatFormData (data: FormData) {
    const { birth_date } = data
    const formattedBirthDate = birth_date.split('/').reverse().join('-')

    const formData = {
      ...data,
      birth_date: formattedBirthDate
    }

    return formData
  }

  async function onSubmit (data: FormData) {
    const formData = handleFormatFormData(data)

    signUp(formData)
    onUpdateFormStep()
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
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
