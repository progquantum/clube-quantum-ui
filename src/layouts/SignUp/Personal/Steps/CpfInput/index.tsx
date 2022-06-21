import { FaAngleRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useSignUpDispatch } from 'contexts/signup/SignUpContext'
import { Input } from 'components/Input'
import { cpfSchema } from 'schemas/signUp'

import { formatCPF } from 'utils/formatters/formatCPF'

import { Container, Form, NextStepButton } from '../../../components'

import { CpfInputProps, FormData } from './types'

export function CpfInput ({ onUpdateFormStep }: CpfInputProps) {
  const { saveData } = useSignUpDispatch()

  const { handleSubmit, control, register, setValue } = useForm({
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
          control={control}
          {...register('cpf', {
            onChange: (e) => {
              setValue('cpf', formatCPF(e.target.value))
            }
          })}
        />

        <NextStepButton>
          <FaAngleRight />
        </NextStepButton>
      </Form>
    </Container>
  )
}
