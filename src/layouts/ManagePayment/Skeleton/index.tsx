import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { SideBar } from 'components/SideBar'
import { TopMenu } from 'components/TopMenu'

import * as S from './styles'

export function Skeleton () {
  return (
    <>
      <title> Informações de pagamento - Clube Quantum</title>
      <Header />
      <S.Container>
        <SideBar />
        <S.RightWrapper>
          <TopMenu />
          <S.MenuGrid />
          <S.CardsContainer>
            <S.BankAccountSkeleton />
            <S.CreditCardSkeleton />
          </S.CardsContainer>
        </S.RightWrapper>
      </S.Container>
      <Footer />
    </>
  )
}
