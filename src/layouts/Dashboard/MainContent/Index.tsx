import Link from 'next/link';

import { FaShoppingBag } from 'react-icons/fa';

import { User } from 'shared/types/apiSchema';
import { useBalances } from 'hooks/me/useBalances';

import { generateDeadline } from 'utils/generateDeadline';
import { formatCashback } from 'utils/formatters/formatCashback';

import { InviteFriends } from 'components/InviteFriends';

import { ManagePlans } from 'components/ManagePlans';

import { AccountBalance } from '../AccountBalance';
import * as S from './styles';
import { PlanSummary } from '../PlanSummary';

export function MainContent({ data }: { data: User }) {
  const { data: balances } = useBalances();

  if (!data.subscription) return <ManagePlans />;
  return (
    <S.Container>
      <S.AccountBalanceContainer>
        <AccountBalance
          title="Saldo em conta"
          description={`Será transferido em ${generateDeadline(10)}`}
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
