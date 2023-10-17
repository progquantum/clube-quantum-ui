import Link from 'next/link';

import { Avatar } from 'components/Avatar';
import { useUserProfile } from 'hooks/me/useUserProfile';

import * as S from './styles';

export function AccountCard() {
  const { data: user } = useUserProfile();
  return (
    <S.Container>
      <Avatar width="48" height="48" />
      <S.MobileLayout>
        <S.TextContainer>
          <S.Text>Olá {user?.name}</S.Text>
          <Link href="/dashboard">
            <S.HighlightedText>Acessar meu perfil</S.HighlightedText>
          </Link>
        </S.TextContainer>
      </S.MobileLayout>
    </S.Container>
  );
}
