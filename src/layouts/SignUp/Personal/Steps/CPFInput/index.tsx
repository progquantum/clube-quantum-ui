import { FaAngleRight } from 'react-icons/fa'
import { useForm, Controller } from 'react-hook-form'

import { Input } from 'components/Input'

import { Container, Form, NextStepButton } from '../../../components'

import { CPFInputProps } from './types'

export function CpfInput ({ onUpdateFormStep }: CPFInputProps) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      cpf: ''
    }
  })

  function onSubmitCPF () {
    onUpdateFormStep()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitCPF)}>
        <Controller
          control={control}
          name='cpf'
          render={({ field, fieldState }) => (
            <Input
              label='CPF'
              {...field}
              errors={fieldState.error}
              isDirty={fieldState.isDirty}
              onFocus={e => (e.target.placeholder = '000.000.000-00')}
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
