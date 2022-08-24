import { useForm, SubmitHandler } from 'react-hook-form'

import Link from 'next/link'

import { colors } from 'styles/theme/colors'

import CreditCardIcon from 'components/Illustrations/CreditCard'

import { BANK_ACCOUNT_PAGE, FINISHED_SUBSCRIPTION, SUBSCRIPTIONS_PAGE } from 'constants/routesPath'

import VISAIcon from 'components/Illustrations/Visa'

import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext'

import * as S from './styles'
import { FormCreditCardData } from './types'

export function FormCreditCard () {
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

  const { setCreditCard } = useSubscriptionsDispatch()

  const onSubmit: SubmitHandler<FormCreditCardData> = (data) => {
    setCreditCard(data)
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Line><CreditCardIcon color={colors.gray[100]} width='22' height='16' />Seu cartão cadastrado</S.Line>
      <S.Text>Para poder tirar o máximo de proveito dos benefícios da plataforma, você precisa adicionar um cartão</S.Text>
      <S.DivInput>
        <S.Label>Nome do Cartão</S.Label>
        <S.Input
          control={control}
          name='card_name'
          type='text'
          placeholder='Nome impresso no cartão'
        />
      </S.DivInput>
      <S.ContentCardNumber>
        <S.DivInput>
          <S.Label>Número do Cartão</S.Label>
          <S.Input
            control={control}
            name='card_number'
            type='text'
            placeholder='0000 0000 0000 0000'
          />

        </S.DivInput>
        <VISAIcon width='50' height='17.18' />
      </S.ContentCardNumber>
      <S.ContentCardExpirateCVC>
        <S.DivInput>
          <S.Label>Data de Vencimento</S.Label>
          <S.Input
            control={control}
            name='expiration_date'
            type='text'
            placeholder='00/0000'
          />
        </S.DivInput>
        <S.CVC>
          <S.Label>CVC</S.Label>
          <S.Input
            control={control}
            name='cvc'
            type='text'
            placeholder='000'
          />
        </S.CVC>
      </S.ContentCardExpirateCVC>

      <Link href={FINISHED_SUBSCRIPTION}>
        <S.ConfirmButton
          variant='secondary_degrade'
          type='submit'
          disabled={isButtonDisabled}
        >
          Confirmar
        </S.ConfirmButton>
      </Link>

      <Link href={BANK_ACCOUNT_PAGE}>
        <S.ReturnButton
          variant='secondary'
        >
          Voltar
        </S.ReturnButton>
      </Link>

      <Link href={SUBSCRIPTIONS_PAGE}>
        <S.Cancel>Cancelar</S.Cancel>
      </Link>

    </S.Form>

  )
}
