import Image from 'next/image'
import Link from 'next/link'
import { faker } from '@faker-js/faker'

import { INVITE_FRIENDS_PAGE } from 'constants/routesPath'

import { AccountBalance } from '../AccountBalance'

import * as S from './styles'
import { MenuGridProps } from './types'

export function MenuGrid ({ data }: MenuGridProps) {
  const balance = faker.finance.amount()
  const balanceInComing = faker.finance.amount()

  return (
    <S.MenuGrid>
      <AccountBalance
        title='Saldo em conta'
        description='Será transferido em 15/xx/xxxx'
        value={balance}
      />

      <AccountBalance
        title='Aguardando liberação'
        description='Disponível em 01/xx/xxxx'
        value={balanceInComing}
      />

      <S.DivMarketplace>
        <S.ComingSoon>
          Em breve
        </S.ComingSoon>
        <S.AccessMarket>
          <S.HeaderAccessMarket>
            <Image
              width={15.03}
              height={17.18}
              src='/images/icon-marketplace.svg'
              alt='icone marketplace'
            />
            <S.MarketText>Marketplace Quantum</S.MarketText>
          </S.HeaderAccessMarket>
          <S.ButtonDisabled>
            Acessar o marketplace
          </S.ButtonDisabled>
        </S.AccessMarket>
        <S.ItemMarket>
          <Image
            width={40}
            height={40}
            src='/images/icon-partner-web.svg'
            alt='icon sites parceiros'
          />
          <S.MarketText>Sites parceiros</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <Image
            width={40}
            height={40}
            src='/images/icon-shopping-bag.svg'
            alt='icon sites parceiros'
          />
          <S.MarketText>Lojas próximas</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <Image
            width={40}
            height={40}
            src='/images/icon-click.svg'
            alt='icon sites parceiros'
          />
          <S.MarketText>Serviços</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <Image
            width={40}
            height={40}
            src='/images/icon-dollar-market.svg'
            alt='icon sites parceiros'
          />
          <S.MarketText>Ofertas</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <Image
            width={40}
            height={40}
            src='/images/icon-earphone.svg'
            alt='icon sites parceiros'
          />
          <S.MarketText>Eletrônicos</S.MarketText>
        </S.ItemMarket>
      </S.DivMarketplace>

      <S.DivSelectPlan>
        <S.HeaderSelectPlan>
          <Image
            width={17.89}
            height={19.87}
            src='/images/icon-plan.svg'
            alt='icone plano'
          />
          <S.TitlePlan>{data.subscription?.plan_name}</S.TitlePlan>
        </S.HeaderSelectPlan>
        <S.DivStatusPlan>
          <S.TitleStatusPlan>{data.subscription?.plan_name}</S.TitleStatusPlan>
          <S.StatusPlan>{data.subscription?.is_active ? 'Ativo' : 'Inativo'}</S.StatusPlan>
        </S.DivStatusPlan>
        <S.ManageButton>Gerenciar planos</S.ManageButton>
        <S.Deadline>
          <S.TextDeadline>Sua assinatura será renovada em 15/xx/xxxx</S.TextDeadline>
          <S.ButtonCancel>Cancelar</S.ButtonCancel>
        </S.Deadline>
      </S.DivSelectPlan>

      <S.DivInviteFriends>
        <S.HeaderInviteFriends>
          <Image
            width={17.89}
            height={19.87}
            src='/images/icon-invite-friends.svg'
            alt='Icone convidar amigos'
          />
          <S.TitleFriends>Convidar amigos</S.TitleFriends>
        </S.HeaderInviteFriends>
        <S.TitleInviteFriends>Não fique sozinho nessa!</S.TitleInviteFriends>
        <S.TextInviteFriends>Convide seus amigos e ganhe cashback junto com eles!!!</S.TextInviteFriends>
        <Link href={INVITE_FRIENDS_PAGE}>
          <S.ButtonInviteFriends>Convidar amigos</S.ButtonInviteFriends>
        </Link>
      </S.DivInviteFriends>
    </S.MenuGrid>
  )
}
