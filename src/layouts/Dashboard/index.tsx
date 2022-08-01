import dynamic from 'next/dynamic'
import Image from 'next/image'

import { Footer } from 'components/Footer'

import { Menu } from 'components/Menu'

import { TopMenu } from 'components/TopMenu'

import * as S from './styles'

const Header = dynamic(() => import('components/Header').then((mod) => mod.Header), { ssr: false })

export function DashboardPage () {
  return (
    <>

      <title>Dashboard - Clube Quantum</title>

      <Header />

      <S.Container>
        <Menu />

        <S.RightWrapper>
          <TopMenu />
          <S.MenuGrid>

            <S.DivBalance>
              <S.Content>
                <S.ContentHeader>
                  <Image width={11.18} height={19.87} src='/images/icon-dollar.svg' alt='Icone dollar' />
                  <S.Title>Saldo em conta</S.Title>
                </S.ContentHeader>
                <Image width={22} height={16} src='/images/icon-show-balance.svg' alt='icon mostrar saldo' />
              </S.Content>
              <S.TextValue>R$ 1.200,00</S.TextValue>
              <S.Subtitle>Será transferido em 15/xx/xxxx</S.Subtitle>
            </S.DivBalance>

            <S.DivRelease>
              <S.Content>
                <S.ContentHeader>
                  <Image width={11.18} height={19.87} src='/images/icon-dollar.svg' alt='Icone dollar' />
                  <S.Title>Aguardando liberação</S.Title>
                </S.ContentHeader>
                <Image width={22} height={16} src='/images/icon-show-balance.svg' alt='icon mostrar saldo' />
              </S.Content>
              <S.TextValue>R$ 200,00</S.TextValue>
              <S.Subtitle>Disponível em 01/xx/xxxx</S.Subtitle>
            </S.DivRelease>

          </S.MenuGrid>
        </S.RightWrapper>

      </S.Container>

      <Footer />
    </>
  )
}
