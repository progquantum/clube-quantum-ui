
import Image from 'next/image'
import Link from 'next/link'

import { Footer } from 'components/Footer'
import { SideBar } from 'components/SideBar'
import { TopMenu } from 'components/TopMenu'

import { BankAccount } from './BankAccount'

import * as S from './styles'

export function ManagePaymentPage () {
  return (
    <>
      <title>Dashboard - Clube Quantum</title>

      <S.Container>
        <SideBar />
        <S.RightWrapper>
          <TopMenu />
          <S.MenuGrid />
          <BankAccount />
        </S.RightWrapper>
      </S.Container>
      <Footer />
    </>
  )
}
