import { FaAngleRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAuthDispatch } from 'contexts/auth/AuthContext'
import { Input } from 'components/Input'
import { cnpjSchema } from 'schemas/signUp'
import { formatCNPJ } from 'utils/formatters/formatCNPJ'
import { Button } from 'components/Button'

import { CNPJProps, FormData } from './types'
import * as S from './styles'

export function CNPJ ({ onUpdateFormStep }: CNPJProps) {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState
  } = useForm({
    defaultValues: {
      cnpj: ''
    },
    resolver: yupResolver(cnpjSchema)
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
          label='CPNJ'
          name='cnpj'
          control={control}
          {...register('cnpj', {
            onChange: (e) => {
              setValue('cnpj', formatCNPJ(e.target.value))
            }
          })}
        />

        <Button
          variant='rounded'
          type='submit'
          disabled={isButtonDisabled}
        >
          <FaAngleRight size={24} />
        </Button>
      </S.Form>
    </S.Container>
  )
}
