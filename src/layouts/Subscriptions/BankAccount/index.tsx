import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { SideBar } from 'components/SideBar'

import { FormBankAccount } from './FormBankAccount'
import * as S from './styles'

export function BankAccountPage () {
  return (
    <>
      <Header />
      <S.Main>
        <SideBar />
        <FormBankAccount />
      </S.Main>
      <Footer />
    </>
  )
}
