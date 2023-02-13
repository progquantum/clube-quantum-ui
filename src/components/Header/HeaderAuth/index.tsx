import Link from 'next/link';

import { INVITE_FRIENDS_PAGE } from 'constants/routesPath';

import { Header } from '..';
import { AccountDropdown } from '../AccountDropdown';
import * as S from './styles';

export function HeaderAuth() {
  return (
    <Header>
      <Link href={INVITE_FRIENDS_PAGE}>
        <S.InviteFriendsButton variant="secondary">
          Convidar Amigos
        </S.InviteFriendsButton>
      </Link>
      <AccountDropdown />
    </Header>
  );
}
