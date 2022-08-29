import { MdAssignmentInd } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { AxiosError } from 'axios'

import { useSubscriptionsState } from 'contexts/subscriptions/SubscriptionsContext'
import { theme } from 'styles/theme'
import { formatPrice } from 'utils/formatters/formatPrice'
import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase'
import { usePlanUpdate } from 'hooks/usePlanUpdate'
import { error } from 'helpers/notify/error'
import { ErrorResponse } from 'hooks/usePlanUpdate/types'

import { ModalConfirmProps } from './types'
import * as S from './styles'

export function ModalConfirm ({ onError, onSucessful, onCloseCVC }: ModalConfirmProps) {
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
    mutateAsync: updatePlan,
    isLoading: isUpdating
  } = usePlanUpdate()

  const { isSubmitting } = formState
  const isButtonDisabled = isSubmitting || isUpdating

  const { plan, creditCard } = useSubscriptionsState()

  function onSubmit () {
    updatePlan({
      plan: {
        plan_id: plan.plan_id,
        plan_duration: plan.plan_duration
      },
      cvc: creditCard.cvc
    },
    {
      onSuccess: () => onSucessful(),
      onError: (err: AxiosError<ErrorResponse>) => {
        if (err.response?.data.statusCode === 500) {
          onError()
        }
        if (err.response?.data.statusCode === 409 &&
          err.response?.data.message === 'This user has already subscribed on this plan'
        ) {
          error('Este usuário já está inscrito neste plano')
        }
      }
    })
  }

  return (

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
  )
}
