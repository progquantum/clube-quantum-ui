import { useForm } from 'react-hook-form'
import Image from 'next/image'

import { FaAngleRight } from 'react-icons/fa'

import { Input } from 'components/Input'

import { Container, NextStepButton } from '../../../components'

import { CardDataInputsProps } from './types'

import * as S from './styles'

export function CardDataInputs ({ onUpdateFormStep }: CardDataInputsProps) {
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit
  } = useForm({
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
          label='Conta Corrente'
          {...register('account')}
          isDirty={dirtyFields.account}
          errors={errors.account}
          onFocus={({ target }) => (target.placeholder = 'Sua conta corrente Banco Um')}
          onBlur={({ target }) => (target.placeholder = '')}
        />
        <Input
          label='Nome do cartão'
          {...register('card_name')}
          isDirty={dirtyFields.card_name}
          errors={errors.card_name}
          onFocus={({ target }) => (target.placeholder = 'Nome impresso no cartão')}
          onBlur={({ target }) => (target.placeholder = '')}
        />

        <S.Wrapper>
          <Input
            label='Número do cartão'
            {...register('card_number')}
            isDirty={dirtyFields.card_number}
            errors={errors.card_number}
            onFocus={({ target }) => (target.placeholder = '0000 0000 0000 0000')}
            onBlur={({ target }) => (target.placeholder = '')}
          />
          <Image width={110} height={76} src='/images/visa-card.png' alt='Mastercard' />
        </S.Wrapper>

        <Input
          label='Data de vencimento'
          {...register('card_validate')}
          isDirty={dirtyFields.card_validate}
          errors={errors.card_validate}
          onFocus={({ target }) => (target.placeholder = '00/00')}
          onBlur={({ target }) => (target.placeholder = '')}
        />
        <Input
          label='CVC'
          {...register('card_code')}
          isDirty={dirtyFields.card_code}
          errors={errors.card_code}
          onFocus={({ target }) => (target.placeholder = '000')}
          onBlur={({ target }) => (target.placeholder = '')}
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
