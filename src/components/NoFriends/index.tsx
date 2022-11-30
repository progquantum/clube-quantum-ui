import { RiUserStarLine } from 'react-icons/ri';

import Image from 'next/image';

import { DashboardLayout } from 'layouts/DashboardLayout';

import * as S from './styles';

export function NoFriends() {
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
          <S.ButtonFriends>Convidar amigos</S.ButtonFriends>
        </S.Content>
      </S.Container>
    </DashboardLayout>
  );
}
