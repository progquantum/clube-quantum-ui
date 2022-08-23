import dynamic from 'next/dynamic'

import Link from 'next/link'

import { Footer } from 'components/Footer'
import { SideBar } from 'components/SideBar'
import { ServicesBank } from 'components/ServicesBank'

import { useFindMe } from 'hooks/useFindMe'

import { ManagePlans } from 'components/ManagePlans'

import { SUBSCRIPTIONS_PAGE } from 'constants/routesPath'

import { MainContent } from './MainContent/Index'
import { Skeleton } from './Skeleton'
import * as S from './styles'

const Header = dynamic(() => import('components/Header').then((mod) => mod.Header), { ssr: false })

export function DashboardPage () {
  const { data, isLoading } = useFindMe()

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
            : (data?.subscription
                ? (<MainContent data={data} />)
                : (
                  <ManagePlans>
                    <Link href={SUBSCRIPTIONS_PAGE}>
                      <S.ButtonManagePlans>Gerenciar planos</S.ButtonManagePlans>
                    </Link>
                  </ManagePlans>))}
        </S.RightWrapper>
      </S.Container>
      <Footer />
    </>
  )
}
