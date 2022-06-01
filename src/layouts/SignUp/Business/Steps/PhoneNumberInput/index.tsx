import { FaAngleRight } from 'react-icons/fa'
import { useForm, Controller } from 'react-hook-form'

import { Input } from 'components/Input'

import { PhoneNumberProps } from './types'
import { Container } from './styles'

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
    <Container>
      <form onSubmit={handleSubmit(onSubmitCpf)}>
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

        <button>
          <FaAngleRight />
        </button>
      </form>
    </Container>
  )
}
