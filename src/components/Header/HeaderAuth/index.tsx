import { MARKETPLACE_PAGE } from 'constants/routesPath';

import { Header } from '..';
import { AccountDropdown } from '../AccountDropdown';
import * as S from './styles';

export function HeaderAuth() {
  return (
    <Header>
      <S.MarketplaceLink href={MARKETPLACE_PAGE}>
        <span>Acessar o Marketplace</span>
      </S.MarketplaceLink>
      <AccountDropdown />
    </Header>
  );
}
