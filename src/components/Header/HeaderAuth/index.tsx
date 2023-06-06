import { useWindowSize } from 'react-use';

import { MARKETPLACE_PAGE } from 'constants/routesPath';

import * as S from './styles';
import { Header } from '..';
import { AccountDropdown } from '../AccountDropdown';
import { SideBarMobile } from '../SidebarMobile';

export function HeaderAuth() {
  const { width } = useWindowSize();

  return (
    <Header>
      {width <= 600 ? (
        <SideBarMobile key="sidebarMobile" />
      ) : (
        <S.MarketplaceLink href={MARKETPLACE_PAGE} key="marketplaceLink">
          <span>Acessar o Marketplace</span>
        </S.MarketplaceLink>
      )}
      <AccountDropdown key="accountDropdown" />
    </Header>
  );
}
