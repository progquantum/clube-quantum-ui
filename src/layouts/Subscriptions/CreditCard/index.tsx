import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { SideBar } from 'components/SideBar'

import { FormCreditCard } from './FormCreditCard'

import * as S from './styles'

export function CreditCardPage () {
  return (
    <>
      <Header />
      <S.Main>
        <SideBar />
        <FormCreditCard />
      </S.Main>
      <Footer />
    </>
  )
}
