import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { SideBar } from 'components/SideBar'
import { TopMenu } from 'components/TopMenu'

import { useFindBilling } from 'hooks/useFindBilling'

import { BankAccount } from './BankAccount'
import { CreditCard } from './CreditCard'

import * as S from './styles'

export function ManagePaymentPage () {
  const { data, isLoading } = useFindBilling()

  return (
    <>
      <title>Informações de pagamento - Clube Quantum</title>

      <Header />
      <S.Container>
        <SideBar />
        <S.RightWrapper>
          <TopMenu />
          <S.MenuGrid />
          <S.CardsContainer>
            <BankAccount user={data} isLoading={isLoading} />
            <CreditCard user={data} isLoading={isLoading} />
          </S.CardsContainer>
        </S.RightWrapper>
      </S.Container>
      <Footer />
    </>
  )
}
