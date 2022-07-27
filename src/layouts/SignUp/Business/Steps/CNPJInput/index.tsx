import { FaAngleRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAuthDispatch } from 'contexts/auth/AuthContext'
import { Input } from 'components/Input'
import { cnpjSchema } from 'schemas/signUp'
import { formatCNPJ } from 'utils/formatters/formatCNPJ'
import { Button } from 'components/Button'

import { Container, Form } from '../../../components'

import { CNPJInputProps, FormData } from './types'

export function CNPJInput ({ onUpdateFormStep }: CNPJInputProps) {
  const { handleSubmit, control, register, setValue } = useForm({
    defaultValues: {
      cnpj: ''
    },
    resolver: yupResolver(cnpjSchema)
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
          label='CPNJ'
          name='cnpj'
          control={control}
          {...register('cnpj', {
            onChange: (e) => {
              setValue('cnpj', formatCNPJ(e.target.value))
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
