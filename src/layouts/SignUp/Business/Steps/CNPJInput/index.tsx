import { FaAngleRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'

import { Input } from 'components/Input'

import { Container, Form, NextStepButton } from '../../../components'

import { CNPJInputProps } from './types'

export function CNPJInput ({ onUpdateFormStep }: CNPJInputProps) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      cnpj: ''
    }
  })

  function onSubmit () {
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
        />

        <NextStepButton>
          <FaAngleRight />
        </NextStepButton>
      </Form>
    </Container>
  )
}
