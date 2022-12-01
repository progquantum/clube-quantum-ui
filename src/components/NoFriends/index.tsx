import Image from 'next/image';
import Router from 'next/router';

import { RiUserStarLine } from 'react-icons/ri';

import { DashboardLayout } from 'layouts/DashboardLayout';

import { INVITE_FRIENDS_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function NoFriends() {
  const handleInviteFriends = () => {
    Router.push(INVITE_FRIENDS_PAGE);
  };
  return (
    <DashboardLayout>
      <S.Container>
        <S.CardTitle>
          <RiUserStarLine size={16} /> Amigos
        </S.CardTitle>
        <S.Content>
          <Image src="/images/no-friends.svg" width={190} height={166} />
          <p>
            Você ainda não possui amigos <br />
            no Clube Quantum.
          </p>
          <S.ButtonFriends onClick={handleInviteFriends}>
            Convidar amigos
          </S.ButtonFriends>
        </S.Content>
      </S.Container>
    </DashboardLayout>
  );
}
