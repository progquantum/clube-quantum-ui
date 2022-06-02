import { FaAngleRight } from 'react-icons/fa'
import { useForm, Controller } from 'react-hook-form'

import { Input } from 'components/Input'

import { NextStepButton } from '../../../NextStepButton'

import { PhoneNumberProps } from './types'
import * as S from './styles'

export function PhoneNumberInput ({ onUpdateFormStep }: PhoneNumberProps) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      phoneNumber: ''
    }
  })

  function onSubmitCpf () {
    onUpdateFormStep()
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmitCpf)}>
        <Controller
          control={control}
          name='phoneNumber'
          render={({ field, fieldState }) => (
            <Input
              label='Telefone'
              {...field}
              errors={fieldState.error}
              isDirty={fieldState.isDirty}
              onFocus={e => (e.target.placeholder = '(00) 0 0000-0000')}
              onBlur={e => (e.target.placeholder = '')}
            />
          )}
        />

        <NextStepButton>
          <FaAngleRight />
        </NextStepButton>
      </S.Form>
    </S.Container>
  )
}
