import { BsCreditCardFill } from 'react-icons/bs'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useTheme } from 'styled-components'

import { cvcSchema } from 'schemas/createSubscription'

import { useModal } from 'hooks/useModal'

import { useBilling } from 'hooks/useBilling'

import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext'

import * as S from './styles'
import { CVCFormValues, ModalCVCProps } from './types'
import { ModalConfirm } from './ModalConfirm'

export function ModalCVC ({ onCloseCVC, onSucessful, onError }: ModalCVCProps) {
  const {
    modalOpen: modalConfirm,
    open: onOpenModalConfirm
  } = useModal()

  const {
    control,
    handleSubmit,
    formState
  } = useForm({
    defaultValues: {
      cvc: ''
    },
    resolver: yupResolver(cvcSchema)
  })
  const { isDirty, isSubmitting } = formState
  const isButtonDisabled = !isDirty || isSubmitting
  const { data } = useBilling()
  const { colors } = useTheme()

  const { registerCreditCard } = useSubscriptionsDispatch()

  const onSubmit: SubmitHandler<CVCFormValues> = (data) => {
    registerCreditCard({ cvc: data.cvc })
    onOpenModalConfirm()
  }

  return (
    <>
      {!modalConfirm
        ? (
          <S.CVCform onSubmit={handleSubmit(onSubmit)}>
            <S.Title>
              <BsCreditCardFill size={22} color={colors.mediumslateBlue} />
              Confirmar CVV
            </S.Title>
            <S.Text>
              Para poder alterar seu plano, você precisa
              <strong>confirmar o código de segurança do cartão.</strong>
            </S.Text>
            <S.CardDataContainer>
              <S.CardDataTitle> Cartão</S.CardDataTitle>
              <S.CardData>
                **** **** **** {data?.credit_card.last_digits}
              </S.CardData>
            </S.CardDataContainer>
            <S.CardDataContainer>
              <S.CardDataTitle>Confirmar CVV</S.CardDataTitle>
              <S.DivInput>
                <S.InputCVC
                  name='cvc'
                  type='text'
                  control={control}
                  placeholder='000'
                />
              </S.DivInput>
            </S.CardDataContainer>
            <S.CardDataContainer>
              <S.CardDataTitle>Validade</S.CardDataTitle>
              <S.CardData>{data?.credit_card.expiration_date}</S.CardData>
            </S.CardDataContainer>
            <S.ButtonCVC
              variant='primary'
              type='submit'
              disabled={isButtonDisabled}
              loading={isSubmitting}
            >
              Continuar
            </S.ButtonCVC>
            <S.ButtonCVC
              variant='danger_outline'
              type='button'
              onClick={onCloseCVC}
            >
              Cancelar
            </S.ButtonCVC>
          </S.CVCform>
          )
        : (<ModalConfirm
            onError={onError}
            onSucessful={onSucessful}
            onCloseCVC={onCloseCVC}
           />)}

    </>
  )
}
