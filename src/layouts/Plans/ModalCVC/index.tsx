import { BsCreditCardFill } from 'react-icons/bs'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useState } from 'react'

import { theme } from 'styles/theme'

import { cvcSchema } from 'schemas/updatePlan'

import { useModal } from 'hooks/useModal'

import { useBilling } from 'hooks/useBilling'

import * as S from './styles'
import { CVCFormValues, ModalCVCProps } from './types'
import { ModalConfirm } from './ModalConfirm'

export function ModalCVC ({ onCloseCVC, onOpenSucessful, onOpenError }: ModalCVCProps) {
  const [cvc, setCvc] = useState('')
  const { data } = useBilling()
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

  const onSubmit: SubmitHandler<CVCFormValues> = (data) => {
    setCvc(data.cvc)
    onOpenModalConfirm()
  }

  return (
    <>
      {!modalConfirm
        ? (
          <S.CVCform onSubmit={handleSubmit(onSubmit)}>
            <S.Title>
              <BsCreditCardFill size={22} color={theme.colors.mediumslateBlue} />
              Confirmar CVC
            </S.Title>
            <S.Text>Para poder alterar seu plano, você precisa <strong>confirmar o código de segurança do cartão.</strong></S.Text>
            <S.CardDataContainer>
              <S.CardDataTitle> Cartão</S.CardDataTitle>
              <S.CardData>**** **** **** {data?.credit_card.last_digits}</S.CardData>
            </S.CardDataContainer>

            <S.CardDataContainer>
              <S.CardDataTitle>Confirmar CVC</S.CardDataTitle>
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
            onOpenError={onOpenError}
            onOpenSucessful={onOpenSucessful}
            cvc={cvc}
            onCloseCVC={onCloseCVC}
            dataBilling={data}
           />)}

    </>
  )
}
