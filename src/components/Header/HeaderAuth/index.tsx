import { useWindowSize } from 'react-use';

import { MARKETPLACE_PAGE } from 'constants/routesPath';

import * as S from './styles';
import { Header } from '..';
import { SideBarMobileAuth } from './SidebarMobileAuth';
import { AccountDropdown } from './AccountDropdown';

export function HeaderAuth() {
  const { width } = useWindowSize();

  return (
    <Header>
      {width <= 781 ? (
        <SideBarMobileAuth key="sidebarMobileAuth" />
      ) : (
        <S.MarketplaceLink href={MARKETPLACE_PAGE} key="marketplaceLink">
          <span>Acessar o Marketplace</span>
        </S.MarketplaceLink>
      )}
      <AccountDropdown key="accountDropdown" />
    </Header>
  );
}
