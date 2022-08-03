import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { faker } from '@faker-js/faker'

import { Footer } from 'components/Footer'
import { Menu } from 'components/Menu'
import { TopMenu } from 'components/TopMenu'

import { useDisclosure } from 'hooks/useDisclosure'

import { NoPlan } from './NoPlan'
import * as S from './styles'
import { INVITE_FRIENDS_PAGE } from '../../constants/routesPath'

const Header = dynamic(() => import('components/Header').then((mod) => mod.Header), { ssr: false })

export function DashboardPage () {
  const balance = faker.finance.amount()
  const balanceWaiting = faker.finance.amount()

  const {
    isShow: isShowBalance,
    toggle: toggleShowBalance
  } = useDisclosure()

  const {
    isShow: isShowBalanceWaiting,
    toggle: toggleShowBalanceWaiting
  } = useDisclosure()

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
                  <Image width={11.18} height={19.87} src='/images/icon-dollar.svg' alt='icone dollar' />
                  <S.Title>Saldo em conta</S.Title>
                </S.ContentHeader>
                {isShowBalance
                  ? (<S.ButtonShowBalance width={22} height={16} src='/images/icon-show-balance.svg' alt='icone mostrar saldo' onClick={toggleShowBalance} />)
                  : (<S.ButtonHiddenBalance width={22} height={16} src='/images/icon-hidden-eye.svg' alt='icone mostrar saldo' onClick={toggleShowBalance} />)}
              </S.Content>
              <S.TextValue>
                {isShowBalance
                  ? (`${balance}`)
                  : ('.....')}
              </S.TextValue>
              <S.Subtitle>Será transferido em 15/xx/xxxx</S.Subtitle>
            </S.DivBalance>

            <S.DivRelease>
              <S.Content>
                <S.ContentHeader>
                  <Image width={11.18} height={19.87} src='/images/icon-dollar.svg' alt='icone dollar' />
                  <S.Title>Aguardando liberação</S.Title>
                </S.ContentHeader>
                {isShowBalanceWaiting
                  ? (<S.ButtonShowBalance width={22} height={16} src='/images/icon-show-balance.svg' alt='icone mostrar saldo' onClick={toggleShowBalanceWaiting} />)
                  : (<S.ButtonHiddenBalance width={22} height={16} src='/images/icon-hidden-eye.svg' alt='icone mostrar saldo' onClick={toggleShowBalanceWaiting} />)}
              </S.Content>
              <S.TextValue>
                {isShowBalanceWaiting
                  ? (`${balanceWaiting}`)
                  : ('.....')}
              </S.TextValue>
              <S.Subtitle>Disponível em 01/xx/xxxx</S.Subtitle>
            </S.DivRelease>

            <S.DivMarketplace>
              <S.ComingSoon>
                Em breve
              </S.ComingSoon>
              <S.AccessMarket>
                <S.HeaderAccessMarket>
                  <Image width={15.03} height={17.18} src='/images/icon-marketplace.svg' alt='icone marketplace' />
                  <S.MarketText>Marketplace Quantum</S.MarketText>
                </S.HeaderAccessMarket>
                <S.ButtonDisabled>
                  Acessar o marketplace
                </S.ButtonDisabled>
              </S.AccessMarket>
              <S.ItemMarket>
                <Image width={40} height={40} src='/images/icon-partner-web.svg' alt='icon sites parceiros' />
                <S.MarketText>Sites parceiros</S.MarketText>
              </S.ItemMarket>
              <S.ItemMarket>
                <Image width={40} height={40} src='/images/icon-shopping-bag.svg' alt='icon sites parceiros' />
                <S.MarketText>Lojas próximas</S.MarketText>
              </S.ItemMarket>
              <S.ItemMarket>
                <Image width={40} height={40} src='/images/icon-click.svg' alt='icon sites parceiros' />
                <S.MarketText>Serviços</S.MarketText>
              </S.ItemMarket>
              <S.ItemMarket>
                <Image width={40} height={40} src='/images/icon-dollar-market.svg' alt='icon sites parceiros' />
                <S.MarketText>Ofertas</S.MarketText>
              </S.ItemMarket>
              <S.ItemMarket>
                <Image width={40} height={40} src='/images/icon-earphone.svg' alt='icon sites parceiros' />
                <S.MarketText>Eletrônicos</S.MarketText>
              </S.ItemMarket>
            </S.DivMarketplace>

            <S.DivSelectPlan>
              <S.HeaderSelectPlan>
                <Image width={17.89} height={19.87} src='/images/icon-plan.svg' alt='icone plano' />
                <S.TitlePlan>Seu plano</S.TitlePlan>
              </S.HeaderSelectPlan>
              <S.DivStatusPlan>
                <S.TitleStatusPlan>Select</S.TitleStatusPlan>
                <S.StatusPlan>Ativo</S.StatusPlan>
              </S.DivStatusPlan>
              <S.ManageButton>Gerenciar planos</S.ManageButton>
              <S.Deadline>
                <S.TextDeadline>Sua assinatura será renovada em 15/xx/xxxx</S.TextDeadline>
                <S.ButtonCancel>Cancelar</S.ButtonCancel>
              </S.Deadline>
            </S.DivSelectPlan>

            <S.DivInviteFriends>
              <S.HeaderInviteFriends>
                <Image width={17.89} height={19.87} src='/images/icon-invite-friends.svg' alt='Icone convidar amigos' />
                <S.TitleFriends>Convidar amigos</S.TitleFriends>
              </S.HeaderInviteFriends>
              <S.TitleInviteFriends>Não fique sozinho nessa!</S.TitleInviteFriends>
              <S.TextInviteFriends>Convide seus amigos e ganhe cashback junto com eles!!!</S.TextInviteFriends>
              <Link href={INVITE_FRIENDS_PAGE}>
                <S.ButtonInviteFriends>Convidar amigos</S.ButtonInviteFriends>
              </Link>
            </S.DivInviteFriends>

          </S.MenuGrid>
          {/* <NoPlan /> */}
        </S.RightWrapper>

      </S.Container>

      <Footer />
    </>
  )
}
