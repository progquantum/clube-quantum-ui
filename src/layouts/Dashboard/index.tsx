import { SideBar } from 'components/SideBar'
import { ServicesBank } from 'components/ServicesBank'
import { Header } from 'components/Header'
import { useHasMounted } from 'hooks/useHasMounted'
import { useAuthState } from 'contexts/auth/AuthContext'

import { ManagePlans } from './ManagePlans'
import { MainContent } from './MainContent/Index'
import { Skeleton } from './Skeleton'
import * as S from './styles'

export function DashboardPage () {
  const { user } = useAuthState()
  const { hasMounted } = useHasMounted()
  const isLoading = !hasMounted

  return (
    <>
      <title>Dashboard - Clube Quantum</title>

      <Header />
      <S.Container>
        <SideBar
          loading={isLoading}
        />
        <S.RightWrapper>
          <ServicesBank
            loading={isLoading}
          />
          {isLoading
            ? (<Skeleton />)
            : (user?.subscription ? (<MainContent data={user} />) : (<ManagePlans />))}
        </S.RightWrapper>
      </S.Container>

    </>
  )
}
