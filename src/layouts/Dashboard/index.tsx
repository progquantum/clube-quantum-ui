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

  const hasPlan = !data?.subscription

  const fullName = data?.name ? data.name : ''
  const myArray = fullName.split(' ')
  const fisrtNameUpper = myArray[0]
  const firstName = fisrtNameUpper.charAt(0).toLocaleUpperCase() + fisrtNameUpper.slice(1).toLocaleLowerCase()

  return (
    <>
      <title>Dashboard - Clube Quantum</title>

      <Header />
      <S.Container>
        <SideBar
          isDisabled={hasPlan}
          loading={isLoading}
        />
        <S.RightWrapper>
          <TopMenu
            name={firstName}
            loading={isLoading}
          />
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
