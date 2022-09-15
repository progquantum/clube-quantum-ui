import { SideBar } from 'components/SideBar'
import { ServicesBank } from 'components/ServicesBank'
import { Header } from 'components/Header'
import { useAuthState } from 'contexts/auth/AuthContext'

import { ManagePlans } from './ManagePlans'
import { MainContent } from './MainContent/Index'
import * as S from './styles'

export function DashboardPage () {
  const { user } = useAuthState()

  return (
    <>
      <title>Dashboard - Clube Quantum</title>

      <Header />
      <S.Container>
        <SideBar />
        <S.RightWrapper>
          <ServicesBank />
          {user.subscription ? <MainContent /> : <ManagePlans />}
        </S.RightWrapper>
      </S.Container>
    </>
  )
}
