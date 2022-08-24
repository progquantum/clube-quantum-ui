import { MdAssignmentInd } from 'react-icons/md'

import { useForm } from 'react-hook-form'

import Link from 'next/link'

import { BancoUm } from 'components/Illustrations/BancoUm'

import { theme } from 'styles/theme'
import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase'
import { formatPrice } from 'utils/formatters/formatPrice'

import CreditCardIcon from 'components/Illustrations/CreditCard'

import { CREDIT_CARD_PAGE } from 'constants/routesPath'

import { useSubscriptionsState } from 'contexts/subscriptions/SubscriptionsContext'
import { useRegisterSubscription } from 'hooks/useRegisterSubscription'

import * as S from './styles'
import { CardFinishedProps } from './types'

export function CardFinished ({ onError, onSucessful }:CardFinishedProps) {
  const {
    handleSubmit,
    formState
  } = useForm({
    defaultValues: {
      plan: {
        plan_id: '',
        plan_duration: ''
      },
      bank_account: {
        current_account: '',
        current_account_check_number: '',
        holder_name: ''
      },
      credit_card: {
        card_name: '',
        card_number: '',
        expiration_date: '',
        cvc: ''
      }

    }
  })
  const {
    mutate: creatSubscription,
    isLoading: isUpdating
  } = useRegisterSubscription()

  const { isSubmitting } = formState
  const isButtonDisabled = isSubmitting || isUpdating

  const { plan, bankAccount, creditCard } = useSubscriptionsState()

  function onSubmit () {
    creatSubscription({
      plan: {
        plan_id: plan.plan_id,
        plan_duration: plan.plan_duration
      },
      bank_account: {
        current_account: bankAccount.current_account,
        current_account_check_number: bankAccount.current_account_check_number,
        holder_name: bankAccount.holder_name
      },
      credit_card: {
        card_name: creditCard.card_name,
        card_number: creditCard.card_number,
        expiration_date: creditCard.expiration_date,
        cvc: creditCard.cvc
      }
    },
    {
      onSuccess: () => onSucessful(),
      onError: () => onError()
    })
  }
  return (

    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.TitleFinished>Resumo da conta</S.TitleFinished>
      <S.Plan>
        <S.Title>
          <MdAssignmentInd size={19.87} color={theme.colors.mediumslateBlue} />
          Seu plano escolhido
        </S.Title>
        <S.TitlePlan>{formatFirstLetterToUppercase(plan?.plan_name)}</S.TitlePlan>
        <S.CardDataContainer>
          <S.CardDataTitle>Período de Cobrança</S.CardDataTitle>
          <S.CardDataText>{plan?.plan_duration === 6 ? 'Semestral' : (plan?.plan_duration === 1 ? 'Mensal' : 'Anual')}</S.CardDataText>
        </S.CardDataContainer>
        <S.CardDataContainer>
          <S.CardDataTitle>Total</S.CardDataTitle>
          <S.CardDataText>{formatPrice(plan?.price)}</S.CardDataText>
        </S.CardDataContainer>
      </S.Plan>

      <S.Bank>
        <S.Title>
          <BancoUm width='10.32' height='15' color={theme.colors.mediumslateBlue} />
          Seu conta do Banco Um
        </S.Title>
        <S.CardDataContainer>
          <S.CardDataTitle>Cód. Banco</S.CardDataTitle>
          <S.CardDataText>396 - Banco Um</S.CardDataText>
        </S.CardDataContainer>
        <S.CardDataContainer>
          <S.CardDataTitle>Agência</S.CardDataTitle>
          <S.CardDataText>0001</S.CardDataText>
        </S.CardDataContainer>
        <S.CardDataContainer>
          <S.CardDataTitle>Conta</S.CardDataTitle>
          <S.CardDataText>{`${bankAccount?.current_account}-${bankAccount?.current_account_check_number}`}</S.CardDataText>
        </S.CardDataContainer>
        <S.CardDataContainer>
          <S.CardDataTitle>Titular</S.CardDataTitle>
          <S.CardDataText>{bankAccount?.holder_name}</S.CardDataText>
        </S.CardDataContainer>
      </S.Bank>

      <S.CreditCard>
        <S.Title>
          <CreditCardIcon width='22' height='16' color={theme.colors.mediumslateBlue} />
          Seu cartão cadastrado
        </S.Title>
        <S.CardDataContainer>
          <S.CardDataTitle>Nome</S.CardDataTitle>
          <S.CardDataText>{creditCard?.card_name}</S.CardDataText>
        </S.CardDataContainer>
        <S.CardDataContainer>
          <S.CardDataTitle>Cartão</S.CardDataTitle>
          <S.CardDataText>{creditCard?.card_number}</S.CardDataText>
        </S.CardDataContainer>
        <S.CardDataContainer>
          <S.CardDataTitle>CVC</S.CardDataTitle>
          <S.CardDataText>{creditCard?.cvc}</S.CardDataText>
        </S.CardDataContainer>
        <S.CardDataContainer>
          <S.CardDataTitle>Validade</S.CardDataTitle>
          <S.CardDataText>{creditCard?.expiration_date}</S.CardDataText>
        </S.CardDataContainer>
      </S.CreditCard>

      <S.ConfirmButton
        variant='primary'
        type='submit'
        loading={isUpdating}
        disabled={isButtonDisabled}
      >
        Finalizar
      </S.ConfirmButton>

      <Link href={CREDIT_CARD_PAGE}>
        <S.ReturnButton
          variant='secondary'
          type='button'
        >
          Voltar
        </S.ReturnButton>
      </Link>

    </S.Form>
  )
}
