import { FaAngleRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAuthDispatch } from 'contexts/auth/AuthContext'
import { Input } from 'components/Input'
import { cpfSchema } from 'schemas/signUp'
import { formatCPF } from 'utils/formatters/formatCPF'
import { Button } from 'components/Button'

import { Container, Form } from '../../../components'

import { CPFInputProps, FormData } from './types'

export function CPFInput ({ onUpdateFormStep }: CPFInputProps) {
  const { handleSubmit, control, register, setValue } = useForm({
    defaultValues: {
      cpf: ''
    },
    resolver: yupResolver(cpfSchema)
  })

  const { signUp } = useAuthDispatch()

  function onSubmit (data: FormData) {
    signUp(data)
    onUpdateFormStep()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
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

        <Button variant='rounded' type='submit'>
          <FaAngleRight size={24} />
        </Button>
      </Form>
    </Container>
  )
}
