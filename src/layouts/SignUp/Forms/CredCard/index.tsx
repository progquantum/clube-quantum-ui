import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from 'components/Input'
import { Button } from 'components/Button'

import { creditCardSchema } from 'schemas/signUp'
import { formatCreditCardAddSpace } from 'utils/formatters/formatCreditCard'
import { formatCreditCardExpiration } from 'utils/formatters/formatCreditCardExpiration'

import { VISAIcon } from 'components/Illustrations/Visa'

import { BankCardProps } from './types'
import * as S from './styles'

export function CredCard ({
  onUpdateFormStep,
  onNavigateToSuccessfulSignUp,
  onPreviousFormStep
}: BankCardProps) {
  const {
    control,
    handleSubmit,
    formState,
    register,
    setValue
  } = useForm({
    defaultValues: {
      card_name: '',
      card_number: '',
      expiration_date: '',
      cvc: ''
    },
    resolver: yupResolver(creditCardSchema)
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
          {...register('card_number', {
            onChange: (e) => {
              setValue('card_number', formatCreditCardAddSpace(e.target.value))
            }
          })}
        />

        <VISAIcon width='100' height='34.35' />
      </S.Wrapper>

      <Input
        type='text'
        label='Data de vencimento'
        name='expiration_date'
        control={control}
        {...register('expiration_date', {
          onChange: (e) => {
            setValue('expiration_date', formatCreditCardExpiration(e.target.value))
          }
        })}
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
