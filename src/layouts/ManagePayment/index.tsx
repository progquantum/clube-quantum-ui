import { useFindBilling } from 'hooks/useFindBilling'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { SideBar } from 'components/SideBar'
import { ServicesBank } from 'components/ServicesBank'

import { BankAccount } from './BankAccount'
import { CreditCard } from './CreditCard'

import * as S from './styles'

export function ManagePaymentPage () {
  const { data, isLoading } = useFindBilling({
    refetchOnWindowFocus: false
  })

  return (
    <>
      <title>Informações de pagamento - Clube Quantum</title>

      <Header />
      <S.Container>
        <SideBar />
        <S.RightWrapper>
          <ServicesBank />
          <S.MenuGrid />
          <S.CardsContainer>
            <BankAccount user={data} loading={isLoading} />
            <CreditCard user={data} loading={isLoading} />
          </S.CardsContainer>
        </S.RightWrapper>
      </S.Container>
      <Footer />
    </>
  )
}
