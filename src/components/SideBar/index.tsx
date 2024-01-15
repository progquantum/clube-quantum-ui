import decode from 'jwt-decode';
import { parseCookies } from 'nookies';
import { FiLogOut } from 'react-icons/fi';
import { HiMenuAlt1 } from 'react-icons/hi';

import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { useSidebarStore } from 'store/sidebar';
import { TOKEN_STORAGE_KEY } from 'constants/storage';
import { TokenPayload } from 'shared/types/apiSchema';
import { roles } from 'constants/roles';
import { useMe } from 'hooks/me/useMe';

import { Skeleton } from './Skeleton';
import { SideBarProps } from './types';
import * as S from './styles';
import { SidebarUser } from './SidebarUser';
import { SidebarAdmin } from './SidebarAdmin';

export function SideBar({ loading }: SideBarProps) {
  const { signOut } = useAuthDispatch();
  const isExpanded = useSidebarStore(state => state.isExpanded);
  const setIsExpanded = useSidebarStore(state => state.setIsExpanded);
  const { data } = useMe();
  if (loading) return <Skeleton />;

  const cookies = parseCookies();

  const token = cookies[TOKEN_STORAGE_KEY];

  const { user_role } = decode<TokenPayload>(token);

  return (
    <S.Container isExpanded={isExpanded}>
      <S.ToggleButtonBox isExpanded={isExpanded}>
        <HiMenuAlt1 onClick={setIsExpanded} />
      </S.ToggleButtonBox>
      {user_role === roles.user.id ? (
        <SidebarUser
          hasEstablishment={data?.has_establishment}
          isExpanded={isExpanded}
        />
      ) : (
        <SidebarAdmin isExpanded={isExpanded} />
      )}
      <S.SignOut onClick={signOut} isExpanded={isExpanded}>
        <S.IconBox isExpanded={isExpanded}>
          <FiLogOut />
        </S.IconBox>
        <S.TitleBox>Sair</S.TitleBox>
      </S.SignOut>
    </S.Container>
  );
}
