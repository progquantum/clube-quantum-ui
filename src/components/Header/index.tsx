import Image from 'next/image';
import Link from 'next/link';

import { INVITE_FRIENDS_PAGE } from 'constants/routesPath';

import { AccountDropdown } from './AccountDropdown';
import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LeftNav>
          <Image src="/images/quantum-logo.svg" width={60} height={60} />
        </S.LeftNav>

        <S.RightNav>
          <Link href={INVITE_FRIENDS_PAGE}>
            <S.InviteFriendsButton variant="secondary">
              Convidar Amigos
            </S.InviteFriendsButton>
          </Link>
          <AccountDropdown />
        </S.RightNav>
      </S.Wrapper>
    </S.Container>
  );
}
