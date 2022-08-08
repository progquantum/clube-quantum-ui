import Image from 'next/image'

import * as S from './styles'

export function BankAccount () {
  return (
    <>
      <S.Content>
        <S.YourAccount>
          <Image src='/images/umbanco.svg' width={10} height={15} />
          <S.ContentTitle>Sua conta Banco Um</S.ContentTitle>
        </S.YourAccount>

        <S.BankingData>
          <S.BankingAccount>
            <S.TitleContent>
              Cód. Banco
            </S.TitleContent>

            <S.TextContent>
              396 - Banco Um
            </S.TextContent>
          </S.BankingAccount>

          <S.BankingAccount>
            <S.TitleContent>Agência</S.TitleContent>
            <S.TextContent>0001</S.TextContent>
          </S.BankingAccount>

          <S.BankingAccount>
            <S.TitleContent>Banco</S.TitleContent>
            <S.TextContent>0000-1</S.TextContent>
          </S.BankingAccount>

        </S.BankingData>

        <S.BankingOwner>
          <S.TitleContent>Titular</S.TitleContent>
          <S.TextContent>Fulano da silva costa</S.TextContent>
        </S.BankingOwner>

      </S.Content>
    </>
  )
}
