import Link from 'next/link';
import { faker } from '@faker-js/faker';

import {
  RiCursorLine,
  RiGlobalLine,
  RiRefund2Line,
  RiShoppingBagLine,
  RiSmartphoneLine,
  RiStackLine,
  RiUserStarLine,
} from 'react-icons/ri';

import { INVITE_FRIENDS_PAGE, SUBSCRIPTIONS_PAGE } from 'constants/routesPath';

import { useMe } from 'hooks/user/useMe';

import { formatFirstLetterToUppercase } from 'utils/formatters/formatFirstLetterToUppercase';

import { AccountBalance } from '../AccountBalance';
import * as S from './styles';

export function MainContent() {
  const { data } = useMe();
  const balance = faker.finance.amount();
  const balanceInComing = faker.finance.amount();

  return (
    <S.Container>
      <AccountBalance
        title="Saldo em conta"
        description="Será transferido em 15/xx/xxxx"
        value={balance}
      />

      <AccountBalance
        title="Aguardando liberação"
        description="Disponível em 01/xx/xxxx"
        value={balanceInComing}
      />

      <S.DivMarketplace>
        <S.ComingSoon>Em breve</S.ComingSoon>
        <S.AccessMarket>
          <S.HeaderAccessMarket>
            <RiShoppingBagLine />
            <S.MarketText>Marketplace Quantum</S.MarketText>
          </S.HeaderAccessMarket>
          <S.ButtonMarketplace disabled>
            Acessar o marketplace
          </S.ButtonMarketplace>
        </S.AccessMarket>
        <S.ItemMarket>
          <RiGlobalLine />
          <S.MarketText>Sites parceiros</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <RiShoppingBagLine />
          <S.MarketText>Lojas próximas</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <RiCursorLine />
          <S.MarketText>Serviços</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <RiRefund2Line />
          <S.MarketText>Ofertas</S.MarketText>
        </S.ItemMarket>
        <S.ItemMarket>
          <RiSmartphoneLine />
          <S.MarketText>Eletrônicos</S.MarketText>
        </S.ItemMarket>
      </S.DivMarketplace>

      <S.DivSelectPlan>
        <S.HeaderSelectPlan>
          <RiStackLine />
          <S.TitlePlan>Seu Plano</S.TitlePlan>
        </S.HeaderSelectPlan>
        <S.DivStatusPlan>
          <S.TitleStatusPlan>
            {formatFirstLetterToUppercase(data?.subscription?.plan_name)}
          </S.TitleStatusPlan>
          <S.StatusPlan>
            {data?.subscription?.is_active ? 'Ativo' : 'Cancelado'}
          </S.StatusPlan>
        </S.DivStatusPlan>
        <Link href={SUBSCRIPTIONS_PAGE}>
          <S.ManageButton>Gerenciar planos</S.ManageButton>
        </Link>
        <S.Deadline>
          <S.TextDeadline>
            Sua assinatura será renovada em 15/xx/xxxx
          </S.TextDeadline>
          <S.ButtonCancel variant="danger_outline" disabled>
            Cancelar
          </S.ButtonCancel>
        </S.Deadline>
      </S.DivSelectPlan>

      <S.DivInviteFriends>
        <S.HeaderInviteFriends>
          <RiUserStarLine />
          <S.TitleFriends>Convidar amigos</S.TitleFriends>
        </S.HeaderInviteFriends>
        <S.TitleInviteFriends>Não fique sozinho nessa!</S.TitleInviteFriends>
        <S.TextInviteFriends>
          Convide seus amigos e ganhe cashback junto com eles!!!
        </S.TextInviteFriends>
        <Link href={INVITE_FRIENDS_PAGE}>
          <S.ButtonInviteFriends>Convidar amigos</S.ButtonInviteFriends>
        </Link>
      </S.DivInviteFriends>
    </S.Container>
  );
}
