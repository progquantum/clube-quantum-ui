import { FaAngleRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'

import { Input } from 'components/Input'

import { Container, Form, NextStepButton } from '../../../components'

import { CpfInputProps } from './types'

export function CpfInput ({ onUpdateFormStep }: CpfInputProps) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      cpf: ''
    }
  })

  function onSubmitCpf () {
    onUpdateFormStep()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitCpf)}>
        <Input
          type='text'
          label='CPF'
          name='cpf'
          control={control}
        />

        <NextStepButton>
          <FaAngleRight />
        </NextStepButton>
      </Form>
    </Container>
  )
}
