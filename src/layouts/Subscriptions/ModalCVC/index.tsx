import { BsCreditCardFill } from 'react-icons/bs'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTheme } from 'styled-components'
import { useState } from 'react'

import { cvcSchema } from 'schemas/createSubscription'
import { useBilling } from 'hooks/useBilling'
import { useSubscriptionsDispatch } from 'contexts/subscriptions/SubscriptionsContext'

import { Input } from 'components/Input'

import * as S from './styles'
import { CVCFormValues, ModalCVCProps } from './types'
import { ModalConfirm } from './ModalConfirm'

export function ModalCVC ({ onSucessful, onError, onClose }: ModalCVCProps) {
  const [modalConfirmIsOpen, setModalConfirmIsOpen] = useState(false)

  function openModal () {
    setModalConfirmIsOpen(true)
  }

  function closeModal () {
    setModalConfirmIsOpen(false)
  }

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
    openModal()
  }

  const expirationDate = data?.credit_card.expiration_date
  const lastDigits = data?.credit_card.last_digits

  return (
    <>
      {!modalConfirmIsOpen
        ? (
          <S.CVCform onSubmit={handleSubmit(onSubmit)}>
            <S.Title>
              <BsCreditCardFill size={22} color={colors.mediumslateBlue} />
              Confirmar CVV
            </S.Title>
            <S.Text>
              Para poder alterar seu plano, você precisa
              <strong> confirmar o código de segurança do cartão.</strong>
            </S.Text>
            <S.CardDataContainer>
              <S.CardDataTitle> Cartão</S.CardDataTitle>
              <S.CardData>
                **** **** **** {lastDigits}
              </S.CardData>
            </S.CardDataContainer>
            <S.CardDataContainer>
              <S.CardDataTitle>Confirmar CVV</S.CardDataTitle>
              <S.DivInput>
                <Input
                  name='cvc'
                  type='text'
                  control={control}
                  placeholder='000'
                />
              </S.DivInput>
            </S.CardDataContainer>
            <S.CardDataContainer>
              <S.CardDataTitle>Validade</S.CardDataTitle>
              <S.CardData>{expirationDate}</S.CardData>
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
              onClick={onClose}
            >
              Cancelar
            </S.ButtonCVC>
          </S.CVCform>
          )
        : (<ModalConfirm
            onError={onError}
            onSucessful={onSucessful}
            onClose={onClose}
           />)}

    </>
  )
}
