import { BsCreditCardFill } from 'react-icons/bs'
import { MdAssignmentInd } from 'react-icons/md'

import { useForm } from 'react-hook-form'

import { useSubscriptionsState } from 'contexts/subscriptions/SubscriptionsContext'
import { theme } from 'styles/theme'
import { formatPrice } from 'utils/formatters/formatPrice'

import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase'

import { usePlanUpdate } from 'hooks/usePlanUpdate'

import { ModalConfirmProps } from './types'
import * as S from './styles'

export function ModalConfirm ({ onOpenError, onOpenSucessful, cvc, onCloseCVC, dataBilling }: ModalConfirmProps) {
  const {
    handleSubmit,
    formState
  } = useForm({
    defaultValues: {
      plan: {
        plan_id: '',
        plan_duration: ''
      },
      cvc: ''
    }
  })
  const {
    mutate: updatePlan,
    isLoading: isUpdating
  } = usePlanUpdate()

  const { isSubmitting } = formState
  const isButtonDisabled = isSubmitting || isUpdating

  const { plan } = useSubscriptionsState()

  function onSubmit () {
    updatePlan({
      plan: {
        plan_id: plan.plan_id,
        plan_duration: plan.plan_duration
      },
      cvc: cvc
    },
    {
      onSuccess: () => onOpenSucessful(),
      onError: () => onOpenError()
    })
  }

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>

        <S.Plan>
          <S.Title>
            <MdAssignmentInd size={19.87} color={theme.colors.mediumslateBlue} />
            Seu plano escolhido
          </S.Title>
          <S.TitlePlan>{formatFirstLetterToUppercase(plan?.plan_name)}</S.TitlePlan>
          <S.CardDataContainer>
            <S.CardDataTitle>Período de Cobrança</S.CardDataTitle>
            <S.CardDataText>{plan.plan_duration === 6 ? 'Semestral' : (plan.plan_duration === 1 ? 'Mensal' : 'Anual')}</S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>Total</S.CardDataTitle>
            <S.CardDataText>{formatPrice(plan.price)}</S.CardDataText>
          </S.CardDataContainer>
        </S.Plan>

        <S.CardData>
          <S.Title>
            <BsCreditCardFill size={22} color={theme.colors.mediumslateBlue} />
            Seu cartão cadastrado
          </S.Title>
          <S.CardDataContainer>
            <S.CardDataTitle>Cartão</S.CardDataTitle>
            <S.CardDataText>**** **** **** {dataBilling?.credit_card.last_digits}</S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>CVC</S.CardDataTitle>
            <S.CardDataText>{cvc}</S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>Validade</S.CardDataTitle>
            <S.CardDataText>{dataBilling?.credit_card.expiration_date}</S.CardDataText>
          </S.CardDataContainer>

        </S.CardData>
        <S.ButtonConfirm
          variant='primary'
          type='submit'
          loading={isUpdating}
          disabled={isButtonDisabled}

        >
          Finalizar
        </S.ButtonConfirm>
        <S.ButtonConfirm
          variant='danger_outline'
          type='button'
          onClick={onCloseCVC}
        >
          Cancelar
        </S.ButtonConfirm>
      </S.Form>
    </>
  )
}
