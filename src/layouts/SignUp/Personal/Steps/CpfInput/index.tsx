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
