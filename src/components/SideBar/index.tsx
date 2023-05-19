import Link from 'next/link';
import decode from 'jwt-decode';
import { parseCookies } from 'nookies';
import { FiLogOut } from 'react-icons/fi';
import {
  BsCreditCard2BackFill,
  BsFillPersonFill,
  BsPeopleFill,
} from 'react-icons/bs';

import { HiMenuAlt1 } from 'react-icons/hi';

import { FaDollarSign, FaShoppingBag, FaUpload } from 'react-icons/fa';

import { AiFillFile } from 'react-icons/ai';
import { MdPeopleAlt } from 'react-icons/md';

import {
  CANCELLATION_REQUEST_PAGE,
  DASHBOARD_ADM_PAGE,
  DASHBOARD_PAGE,
  DASHBOARD_POS_PAGE,
  MANAGE_BANNER_PAGE,
  MANAGE_PAYMENT_PAGE,
  MY_CONTRACTS_PAGE,
  MY_FRIENDS_PAGE,
  MY_STATEMENTS_PAGE,
  PARTNER_REGISTRATION_PAGE,
} from 'constants/routesPath';
import { useAuthDispatch } from 'contexts/auth/AuthContext';

import { useSidebarStore } from 'store/sidebar';

import { TOKEN_STORAGE_KEY } from 'constants/storage';

import { TokenPayload } from 'shared/types/apiSchema';

import { roles } from 'constants/roles';

import { Skeleton } from './Skeleton';
import { SideBarProps } from './types';
import * as S from './styles';

export function SideBar({ loading }: SideBarProps) {
  const { signOut } = useAuthDispatch();
  const isExpanded = useSidebarStore(state => state.isExpanded);
  const setIsExpanded = useSidebarStore(state => state.setIsExpanded);

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
        <>
          {/* SIDEBAR USER */}
          <Link href={DASHBOARD_PAGE}>
            <S.NavButton isExpanded={isExpanded}>
              <S.IconBox isExpanded={isExpanded}>
                <BsFillPersonFill />
              </S.IconBox>
              <S.TitleBox>Minha Conta</S.TitleBox>
            </S.NavButton>
          </Link>
          <Link href={MY_STATEMENTS_PAGE}>
            <S.NavButton isExpanded={isExpanded}>
              <S.IconBox isExpanded={isExpanded}>
                <FaDollarSign />
              </S.IconBox>
              <S.TitleBox>Extratos</S.TitleBox>
            </S.NavButton>
          </Link>
          <Link href={MY_FRIENDS_PAGE}>
            <S.NavButton isExpanded={isExpanded}>
              <S.IconBox isExpanded={isExpanded}>
                <BsPeopleFill />
              </S.IconBox>
              <S.TitleBox>Meus Amigos</S.TitleBox>
            </S.NavButton>
          </Link>

          <Link href={MANAGE_PAYMENT_PAGE}>
            <S.NavButton isExpanded={isExpanded}>
              <S.IconBox isExpanded={isExpanded}>
                <BsCreditCard2BackFill />
              </S.IconBox>
              <S.TitleBox>Dados de Pagamento</S.TitleBox>
            </S.NavButton>
          </Link>

          <Link href={MY_CONTRACTS_PAGE}>
            <S.NavButton isExpanded={isExpanded} data-cy="sidebar_my-contracts">
              <S.IconBox isExpanded={isExpanded}>
                <AiFillFile />
              </S.IconBox>
              <S.TitleBox>Meus Contratos</S.TitleBox>
            </S.NavButton>
          </Link>
          <Link href={DASHBOARD_POS_PAGE}>
            <S.NavButton isExpanded={isExpanded}>
              <S.IconBox isExpanded={isExpanded}>
                <FaShoppingBag />
              </S.IconBox>
              <S.TitleBox>Minhas Vendas</S.TitleBox>
            </S.NavButton>
          </Link>
        </>
      ) : (
        <>
          {/* SIDEBAR ADM */}
          <Link href={DASHBOARD_ADM_PAGE}>
            <S.NavButton isExpanded={isExpanded}>
              <S.IconBox isExpanded={isExpanded}>
                <BsFillPersonFill />
              </S.IconBox>
              <S.TitleBox>Minha Conta</S.TitleBox>
            </S.NavButton>
          </Link>
          <Link href={DASHBOARD_ADM_PAGE}>
            <S.NavButton isExpanded={isExpanded}>
              <S.IconBox isExpanded={isExpanded}>
                <FaDollarSign />
              </S.IconBox>
              <S.TitleBox>Setor Financeiro</S.TitleBox>
            </S.NavButton>
          </Link>
          <Link href={PARTNER_REGISTRATION_PAGE}>
            <S.NavButton isExpanded={isExpanded}>
              <S.IconBox isExpanded={isExpanded}>
                <BsPeopleFill />
              </S.IconBox>
              <S.TitleBox>Parceiros Quantum</S.TitleBox>
            </S.NavButton>
          </Link>
          <Link href={DASHBOARD_ADM_PAGE}>
            <S.NavButton isExpanded={isExpanded}>
              <S.IconBox isExpanded={isExpanded}>
                <MdPeopleAlt />
              </S.IconBox>
              <S.TitleBox>Usuários Quantum</S.TitleBox>
            </S.NavButton>
          </Link>
          <Link href={MANAGE_BANNER_PAGE}>
            <S.NavButton isExpanded={isExpanded}>
              <S.IconBox isExpanded={isExpanded}>
                <FaUpload />
              </S.IconBox>
              <S.TitleBox>Gerenciar Banner</S.TitleBox>
            </S.NavButton>
          </Link>
          <Link href={CANCELLATION_REQUEST_PAGE}>
            <S.NavButton isExpanded={isExpanded}>
              <S.IconBox isExpanded={isExpanded}>
                <AiFillFile />
              </S.IconBox>
              <S.TitleBox>Solicitações de Cancelamento</S.TitleBox>
            </S.NavButton>
          </Link>
        </>
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
