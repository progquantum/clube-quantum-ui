import { BsCreditCardFill } from 'react-icons/bs'
import { MdAssignmentInd } from 'react-icons/md'

import { theme } from 'styles/theme'

import * as S from './styles'
import { ModalConfirmProps } from './types'

export function ModalConfirm ({ onOpenSucessful, cvc, onCloseCVC, data }: ModalConfirmProps) {
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
            <S.CardDataText>Mensal</S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>Total</S.CardDataTitle>
            <S.CardDataText>R$ 19,90</S.CardDataText>
          </S.CardDataContainer>
        </S.Plan>

        <S.CardData>
          <S.Title>
            <BsCreditCardFill size={22} color={theme.colors.mediumslateBlue} />
            Seu cartão cadastrado
          </S.Title>
          <S.CardDataContainer>
            <S.CardDataTitle>Cartão</S.CardDataTitle>
            <S.CardDataText>**** **** **** {data?.credit_card.last_digits}</S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>CVC</S.CardDataTitle>
            <S.CardDataText>{cvc}</S.CardDataText>
          </S.CardDataContainer>
          <S.CardDataContainer>
            <S.CardDataTitle>Validade</S.CardDataTitle>
            <S.CardDataText>{data?.credit_card.expiration_date}</S.CardDataText>
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
