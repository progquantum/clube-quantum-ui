import { FaAngleRight } from 'react-icons/fa'
import { useForm, Controller } from 'react-hook-form'

import { Input } from 'components/Input'

import { CpfInputProps } from './types'
import * as S from './styles'

export function CnpjInput ({ onUpdateFormStep }: CpfInputProps) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      cnpj: ''
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
          name='cnpj'
          render={({ field, fieldState }) => (
            <Input
              label='CPNJ'
              {...field}
              errors={fieldState.error}
              isDirty={fieldState.isDirty}
              onFocus={e => (e.target.placeholder = '00.000.000/0000-00')}
              onBlur={e => (e.target.placeholder = '')}
            />
          )}
        />

        <S.Button>
          <FaAngleRight />
        </S.Button>
      </S.Form>
    </S.Container>
  )
}
