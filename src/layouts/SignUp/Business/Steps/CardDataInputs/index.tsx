import { useForm } from 'react-hook-form'
import { FaAngleRight } from 'react-icons/fa'
import Image from 'next/image'

import { Input } from 'components/Input'

import { Container, NextStepButton } from '../../../components'
import { CardDataInputsProps } from './types'
import * as S from './styles'

export function CardDataInputs ({ onUpdateFormStep }: CardDataInputsProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      account: '',
      card_name: '',
      card_number: '',
      card_validate: '',
      card_code: ''
    }
  })

  function onSubmit () {
    onUpdateFormStep()
  }

  return (
    <Container>
      <S.DataBank>
        <S.DataWrapper>
          <h4>Cod. Banco</h4>
          <h4>396 - Banco Um</h4>
        </S.DataWrapper>
        <S.DataWrapper>
          <h4>Agência</h4>
          <h4>0001</h4>
        </S.DataWrapper>
      </S.DataBank>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          label='Conta Corrente'
          name='account'
          control={control}
        />

        <Input
          type='text'
          label='Nome do cartão'
          name='card_name'
          control={control}
        />

        <Input
          type='text'
          label='Nome do cartão'
          name='card_name'
          control={control}
        />

        <S.Wrapper>
          <Input
            type='text'
            label='Número do cartão'
            name='card_number'
            control={control}
          />

          <Image width={110} height={76} src='/images/visa-card.png' alt='Mastercard' />
        </S.Wrapper>

        <Input
          type='text'
          label='Data de vencimento'
          name='card_validate'
          control={control}
        />

        <Input
          type='text'
          label='CVC'
          name='card_code'
          control={control}
        />

        <p>
          A conta a ser cadastrada deve ser a conta Banco Um na
          qual o CPF, informado anteriormente, está vinculado.
        </p>

        <S.ButtonGroup>
          <S.JumpStepButton onClick={onUpdateFormStep}>Pular esta etapa</S.JumpStepButton>
          <NextStepButton>
            <FaAngleRight />
          </NextStepButton>
        </S.ButtonGroup>
      </S.Form>
    </Container>
  )
}
