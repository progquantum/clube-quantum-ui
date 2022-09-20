import { useForm } from 'react-hook-form'
import Image from 'next/image'

import { Input } from 'components/Input'
import { Button } from 'components/Button'

import { BankCardProps } from './types'
import * as S from './styles'

export function BankCard ({
  onUpdateFormStep,
  onNavigateToSuccessfulSignUp,
  onPreviousFormStep
}: BankCardProps) {
  const {
    control,
    handleSubmit,
    formState
  } = useForm({
    defaultValues: {
      card_name: '',
      card_number: '',
      expiration_date: '',
      cvc: ''
    }
  })

  const { isDirty, isSubmitting } = formState
  const isButtonDisabled = !isDirty || isSubmitting

  function onSubmit () {
    onUpdateFormStep()
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
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

        <Image
          width={110}
          height={76}
          src='/images/visa-card.png'
          alt='Mastercard'
        />
      </S.Wrapper>

      <Input
        type='text'
        label='Data de vencimento'
        name='expiration_date'
        control={control}
      />

      <Input
        type='text'
        label='CVC'
        name='cvc'
        control={control}
      />

      <S.ButtonGroup>

        <Button
          type='submit'
          disabled={isButtonDisabled}
        >
          Continuar
        </Button>
        <Button
          variant='secondary'
          onClick={onPreviousFormStep}
        >
          voltar
        </Button>
      </S.ButtonGroup>
      <S.JumpStepButton onClick={onNavigateToSuccessfulSignUp}>
        Pular esta etapa
      </S.JumpStepButton>
    </S.Form>
  )
}
