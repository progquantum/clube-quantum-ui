import { FaAngleRight } from 'react-icons/fa'
import { useForm, Controller } from 'react-hook-form'

import { Input } from 'components/Input'

import { Container, Form, NextStepButton } from '../../../components'

import { PhoneNumberProps } from './types'

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
      <Form onSubmit={handleSubmit(onSubmitCpf)}>
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
      </Form>
    </Container>
  )
}
