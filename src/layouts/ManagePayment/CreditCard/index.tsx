import Image from 'next/image'

import { Button } from 'components/Button'

import { CreditCardProps } from './types'
import * as S from './styles'
import { Skeleton } from './Skeleton'

export function CreditCard ({ user, loading }: CreditCardProps) {
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
                <Image src='/images/credit-card.svg' width={22} height={16} />
                <S.ContentTitle>Seu cartão cadastrado</S.ContentTitle>
              </S.YourAccount>
              <S.CardDetails>
                <S.CardNumber>
                  <p>xxxx xxxx xxxx <S.LastDigits>{cardLastDigits}</S.LastDigits></p>
                  <p>{cardExpirationDate}</p>
                </S.CardNumber>
                <div>
                  <Image src='/images/visa.svg' width={80} height={43} />
                </div>
              </S.CardDetails>
              <Button>Atualizar cartão</Button>
            </>
            )
          : (
            <>
              <S.YourAccount>
                <Image src='/images/credit-card.svg' width={22} height={16} />
                <S.ContentTitle>Seu cartão cadastrado</S.ContentTitle>
              </S.YourAccount>
              <S.TextContent>Para cadastrar um cartão de crédito e aproveitar os benefícios clube quantum é necessário realizar uma assinatura.</S.TextContent>
              <Button>Continuar</Button>
            </>
            )}
      </S.Content>
    </>
  )
}
