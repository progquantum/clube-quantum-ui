import { BsCreditCardFill } from 'react-icons/bs'
import { MdAssignmentInd } from 'react-icons/md'

import { useEffect, useState } from 'react'

import { usePlansState } from 'contexts/plans/PlansContext'
import { theme } from 'styles/theme'
import { usePlans } from 'hooks/usePlans'
import { formatPrice } from 'utils/formatters/formatPrice'

import { ModalConfirmProps, PlansData } from './types'
import * as S from './styles'

export function ModalConfirm ({ onOpenSucessful, cvc, onCloseCVC, dataBilling }: ModalConfirmProps) {
  const { plan } = usePlansState()
  const { data } = usePlans()
  const [price, setPrice] = useState('')

  const planFree: PlansData = data ? data[0] : []
  const planStart: PlansData = data ? data[1] : []
  const planSelect: PlansData = data ? data[2] : []

  useEffect(() => {
    if (plan.plan_id === planFree.id) {
      if (plan.plan_duration === 1) {
        setPrice(planFree.monthly_price)
      } else if (plan.plan_duration === 6) {
        setPrice(planFree.semiannual_price)
      } else {
        setPrice(planFree.annual_price)
      }
    } else if (plan.plan_id === planStart.id) {
      if (plan.plan_duration === 1) {
        setPrice(planStart.monthly_price)
      } else if (plan.plan_duration === 6) {
        setPrice(planStart.semiannual_price)
      } else {
        setPrice(planStart.annual_price)
      }
    } else {
      if (plan.plan_duration === 1) {
        setPrice(planSelect.monthly_price)
      } else if (plan.plan_duration === 6) {
        setPrice(planSelect.semiannual_price)
      } else {
        setPrice(planSelect.annual_price)
      }
    }
  }, [price])

  return (
    <>
      <S.Form>

        <S.Plan>
          <S.Title>
            <MdAssignmentInd size={19.87} color={theme.colors.mediumslateBlue} />
            Seu plano escolhido
          </S.Title>
          <S.TitlePlan>Quantum Start</S.TitlePlan>
          <S.CardDataContainer>
            <S.CardDataTitle>Período de Cobrança</S.CardDataTitle>
            <S.CardDataText>{plan.plan_duration === 6 ? 'Semestral' : (plan.plan_duration === 1 ? 'Mensal' : 'Anual')}</S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>Total</S.CardDataTitle>
            <S.CardDataText>{formatPrice(price)}</S.CardDataText>
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
          onClick={onOpenSucessful}

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
