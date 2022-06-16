import { FaAngleRight } from 'react-icons/fa'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useSignUpDispatch } from 'contexts/signup/SignUpContext'
import { Input } from 'components/Input'
import { cpfSchema } from 'schemas/signUp'

import { Container, Form, NextStepButton } from '../../../components'

import { CpfInputProps, FormData } from './types'

export function CpfInput ({ onUpdateFormStep }: CpfInputProps) {
  const { saveData } = useSignUpDispatch()

  const { handleSubmit, control } = useForm({
    defaultValues: {
      cpf: ''
    },
    resolver: yupResolver(cpfSchema)
  })

  function onSubmitCpf (data: FormData) {
    saveData(data)
    onUpdateFormStep()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitCpf)}>
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
