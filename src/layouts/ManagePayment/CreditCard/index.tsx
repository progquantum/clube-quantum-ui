import { useTheme } from 'styled-components'
import Image from 'next/image'

import { useState } from 'react'

import { CreditCardIcon } from 'components/Illustrations/CreditCard'

import { Skeleton } from '../Skeleton'
import { ModalCreditCard } from './ModalCreditCard'
import { CreditCardProps } from './types'
import * as S from './styles'

export function CreditCard ({ user, loading }: CreditCardProps) {
  const [isNewModalOpen, setIsNewModalOpen] = useState(false)

  const handleNewCreditCardModal = () => {
    setIsNewModalOpen(prevState => !prevState)
  }

  const { colors } = useTheme()

  const cardLastDigits = user?.credit_card.last_digits
  const cardExpirationDate = user?.credit_card.expiration_date
  const hasCreditCard = user?.credit_card.last_digits

  if (loading) return <Skeleton />

  return (
    <>
      <S.Content>
        {hasCreditCard
          ? (
            <>
              <S.YourAccount>
                <CreditCardIcon
                  color={colors.gray[100]}
                  width='20'
                  height='14'
                />
                <S.ContentTitle>Seu cartão cadastrado</S.ContentTitle>
              </S.YourAccount>

              <S.CardDetails>
                <S.CardNumber>
                  <p>xxxx xxxx xxxx
                    <S.LastDigits>{cardLastDigits}</S.LastDigits>
                  </p>
                  <p>{cardExpirationDate}</p>
                </S.CardNumber>

                <div>
                  <Image
                    src='/images/visa.svg'
                    width={80}
                    height={43}
                  />
                </div>
              </S.CardDetails>

              <S.ButtonPlan
                onClick={handleNewCreditCardModal}
              >
                Atualizar cartão
              </S.ButtonPlan>
            </>
            )
          : (
            <>
              <S.YourAccount>
                <CreditCardIcon
                  color={colors.gray[100]}
                  width='20'
                  height='14'
                />
                <S.ContentTitle>Seu cartão cadastrado</S.ContentTitle>
              </S.YourAccount>

              <S.TextContent>Para cadastrar um cartão de crédito e aproveitar os benefícios
                clube quantum é necessário realizar uma assinatura.
              </S.TextContent>
              <S.ButtonPlan>Prosseguir</S.ButtonPlan>
            </>
            )}

      </S.Content>

      <ModalCreditCard
        isOpen={isNewModalOpen}
        onRequestNewCreditCardModal={handleNewCreditCardModal}
      />
    </>
  )
}
