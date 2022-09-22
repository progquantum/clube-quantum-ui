import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Link from 'next/link'

import { useAuthDispatch } from 'contexts/auth/AuthContext'
import { Input } from 'components/Input'
import { cpfSchema } from 'schemas/signUp'
import { formatCPF } from 'utils/formatters/formatCPF'
import { Button } from 'components/Button'

import { SIGN_UP_PAGE } from 'constants/routesPath'

import { CPFProps, FormData } from './types'
import * as S from './styles'

export function CPF ({ onUpdateFormStep }: CPFProps) {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState
  } = useForm({
    resolver: yupResolver(cpfSchema)
  })

  const { signUp } = useAuthDispatch()

  function onSubmit (data: FormData) {
    signUp(data)
    onUpdateFormStep()
  }

  const { isDirty, isSubmitting } = formState
  const isButtonDisabled = !isDirty || isSubmitting

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          label='CPF'
          control={control}
          {...register('cpf', {
            onChange: (e) => {
              setValue('cpf', formatCPF(e.target.value))
            }
          })}
        />

        <S.ButtonGroup>
          <Button
            type='submit'
            disabled={isButtonDisabled}
          >
            Continuar
          </Button>
          <Link href={SIGN_UP_PAGE}>
            <Button
              variant='secondary'
            >
              voltar
            </Button>
          </Link>
        </S.ButtonGroup>
      </S.Form>
    </S.Container>
  )
}
