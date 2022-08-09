import Image from 'next/image'

import { Button } from 'components/Button'
import { useFindBilling } from 'hooks/useFindBilling'

import * as S from './styles'

export function CreditCard () {
  const { data } = useFindBilling()

  const cardLastDigits = data?.credit_card.last_digits
  const cardExpirationDate = data?.credit_card.expiration_date

  const hasCreditCard = data?.credit_card.last_digits

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
              <S.TextContent>Para poder tirar o máximo de proveito dos benefícios da plataforma, você precisa adicionar um cartão.</S.TextContent>
              <Button>Cadastrar cartão</Button>
            </>
            )}
      </S.Content>
    </>
  )
}
