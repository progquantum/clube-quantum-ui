import Image from 'next/image'
import Link from 'next/link'
import { faker } from '@faker-js/faker'

import { INVITE_FRIENDS_PAGE, PLANS_PAGE } from 'constants/routesPath'

import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase'

import { AccountBalance } from '../AccountBalance'

import { MainContentProps } from './types'
import * as S from './styles'

export function MainContent ({ data }: MainContentProps) {
  const balance = faker.finance.amount()
  const balanceInComing = faker.finance.amount()

  return (
    <S.Container>
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
          <S.ButtonMarketplace disabled>
            Acessar o marketplace
          </S.ButtonMarketplace>
        </S.AccessMarket>
        <S.ItemMarket>
          <Image
            width={40}
            height={40}
            src='/images/icon-partner-web.svg'
            alt='Icone sites parceiros'
          />
          <S.MarketText>Sites parceiros</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <Image
            width={40}
            height={40}
            src='/images/icon-shopping-bag.svg'
            alt='Icone sites parceiros'
          />
          <S.MarketText>Lojas próximas</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <Image
            width={40}
            height={40}
            src='/images/icon-click.svg'
            alt='Icone sites parceiros'
          />
          <S.MarketText>Serviços</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <Image
            width={40}
            height={40}
            src='/images/icon-dollar-market.svg'
            alt='Icone sites parceiros'
          />
          <S.MarketText>Ofertas</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <Image
            width={40}
            height={40}
            src='/images/icon-earphone.svg'
            alt='Icone sites parceiros'
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
            alt='Icone plano'
          />
          <S.TitlePlan>Seu plano</S.TitlePlan>
        </S.HeaderSelectPlan>
        <S.DivStatusPlan>
          <S.TitleStatusPlan>{formatFirstLetterToUppercase(data.subscription?.plan_name)}</S.TitleStatusPlan>
          <S.StatusPlan>{data.subscription?.is_active ? 'Ativo' : 'Cancelado'}</S.StatusPlan>
        </S.DivStatusPlan>
        <Link href={PLANS_PAGE}>
          <S.ManageButton>Gerenciar planos</S.ManageButton>
        </Link>
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
    </S.Container>
  )
}
