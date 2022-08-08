import dynamic from 'next/dynamic'

import { Footer } from 'components/Footer'
import { SideBar } from 'components/SideBar'
import { TopMenu } from 'components/TopMenu'

import { useFindMe } from 'hooks/useFindMe'

import * as S from './styles'
import { ManagePlans } from './ManagePlans'
import { MenuGrid } from './MenuGrid/Index'
import { Skeleton } from './Skeleton'

const Header = dynamic(() => import('components/Header').then((mod) => mod.Header), { ssr: false })

export function DashboardPage () {
  const { data, isLoading } = useFindMe()

  return (
    <>
      <title>Dashboard - Clube Quantum</title>

      <Header />
      <S.Container>
        <SideBar loading={isLoading} />
        <S.RightWrapper>
          <TopMenu loading={isLoading} />
          {isLoading
            ? (<Skeleton />)
            : (data?.subscription
                ? (
                  <MenuGrid data={data} />
                  )
                : (
                  <ManagePlans />
                  ))}

        </S.RightWrapper>
      </S.Container>
      <Footer />
    </>
  )
}
