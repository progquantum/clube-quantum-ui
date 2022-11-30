import Link from 'next/link';

import { RiUserStarLine } from 'react-icons/ri';

import { INVITE_FRIENDS_PAGE } from 'constants/routesPath';

import * as S from './styles';
import { InviteFriendsProps } from './types';

export function InviteFriends({ variant }: InviteFriendsProps) {
  return (
    <S.DivInviteFriends variant={variant}>
      <S.HeaderInviteFriends variant={variant}>
        <RiUserStarLine />
        <S.TitleFriends variant={variant}>Convidar amigos</S.TitleFriends>
      </S.HeaderInviteFriends>
      <S.TitleInviteFriends variant={variant}>
        Não fique sozinho nessa!
      </S.TitleInviteFriends>
      <S.TextInviteFriends variant={variant}>
        Convide seus amigos e ganhe cashback junto com eles!!!
      </S.TextInviteFriends>
      <Link href={INVITE_FRIENDS_PAGE}>
        <S.ButtonInviteFriends variant={variant}>
          Convidar amigos
        </S.ButtonInviteFriends>
      </Link>
    </S.DivInviteFriends>
  );
}
