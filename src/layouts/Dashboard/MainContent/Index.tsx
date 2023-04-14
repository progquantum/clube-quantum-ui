import Link from 'next/link';

import { FaShoppingBag } from 'react-icons/fa';

import { useBalances } from 'hooks/me/useBalances';
import { useUnsubscribe } from 'hooks/subscriptions/useUnsubscribe';

import { generateDeadline } from 'utils/generateDeadline';
import { formatCashback } from 'utils/formatters/formatCashback';

import { InviteFriends } from 'components/InviteFriends';

import { success } from 'helpers/notify/success';

import { AccountBalance } from '../AccountBalance';
import * as S from './styles';
import { PlanSummary } from '../PlanSummary';

export function MainContent() {
  const { mutateAsync: UnsubscribeRequest } = useUnsubscribe();
  const { data: balances } = useBalances();

  const handleCancelPlan = () => {
    UnsubscribeRequest(null, {
      onSuccess: () => {
        success('Plano cancelado com sucesso! Verifique seu e-mail.');
      },
    });
  };

  return (
    <S.Container>
      <S.AccountBalanceContainer>
        <AccountBalance
          title="Saldo em conta"
          description={`Será transferido em ${generateDeadline(15)}`}
          value={formatCashback(balances?.awaiting_deposit)}
        />

        <AccountBalance
          title="Aguardando liberação"
          description={`Será transferido em ${generateDeadline(1)}`}
          value={formatCashback(balances?.accumulated_month)}
        />
      </S.AccountBalanceContainer>

      <S.DivMarketplace>
        <S.AccessMarket>
          <S.HeaderAccessMarket>
            <FaShoppingBag />
            <S.MarketText>Marketplace Quantum</S.MarketText>
          </S.HeaderAccessMarket>
          <Link href="/marketplace">
            <S.ButtonMarketplace>Acessar o marketplace</S.ButtonMarketplace>
          </Link>
        </S.AccessMarket>
        <S.ImageWrap>
          <img src="/images/marketplace-banner.jpg" alt="Marketplace Banner" />
        </S.ImageWrap>
      </S.DivMarketplace>
      <S.Wrapper>
        <PlanSummary />
        <InviteFriends />
      </S.Wrapper>
    </S.Container>
  );
}
