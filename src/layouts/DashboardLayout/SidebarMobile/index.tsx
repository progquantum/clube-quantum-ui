import { FiLogOut } from 'react-icons/fi';
import {
  BsCreditCard2BackFill,
  BsFillPersonFill,
  BsPeopleFill,
} from 'react-icons/bs';
import { FaDollarSign, FaShoppingBag, FaUpload } from 'react-icons/fa';
import { AiFillFile, AiFillCloseCircle } from 'react-icons/ai';

import Link from 'next/link';

import { parseCookies } from 'nookies';

import decode from 'jwt-decode';

import { MdPeopleAlt } from 'react-icons/md';

import { useAuthDispatch } from 'contexts/auth/AuthContext';

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

import { TOKEN_STORAGE_KEY } from 'constants/storage';
import { TokenPayload } from 'shared/types/apiSchema';
import { roles } from 'constants/roles';

import * as S from './styles';

export function SideBarMobile({ closeMenu }: { closeMenu: () => void }) {
  const { signOut } = useAuthDispatch();
  const cookies = parseCookies();

  const token = cookies[TOKEN_STORAGE_KEY];

  const { user_role } = decode<TokenPayload>(token);

  return (
    <S.SideBarMobileContainer>
      <S.CloseButton onClick={closeMenu}>
        <AiFillCloseCircle size={40} />
      </S.CloseButton>
      {user_role === roles.user.id ? (
        <>
          <Link href={DASHBOARD_PAGE}>
            <S.ItemMenu>
              <BsFillPersonFill size={30} />
              <span>Minha Conta</span>
            </S.ItemMenu>
          </Link>
          <Link href={MY_STATEMENTS_PAGE}>
            <S.ItemMenu>
              <FaDollarSign size={30} />
              <span>Extratos</span>
            </S.ItemMenu>
          </Link>
          <Link href={MY_FRIENDS_PAGE}>
            <S.ItemMenu>
              <BsPeopleFill size={30} />
              <span>Meus Amigos</span>
            </S.ItemMenu>
          </Link>
          <Link href={MANAGE_PAYMENT_PAGE}>
            <S.ItemMenu>
              <BsCreditCard2BackFill size={30} />
              <span>Dados de Pagamento</span>
            </S.ItemMenu>
          </Link>
          <Link href={MY_CONTRACTS_PAGE}>
            <S.ItemMenu>
              <AiFillFile size={30} />
              <span>Meus Contratos</span>
            </S.ItemMenu>
          </Link>
          <Link href={DASHBOARD_POS_PAGE}>
            <S.ItemMenu>
              <FaShoppingBag size={30} />
              <span>Minhas vendas</span>
            </S.ItemMenu>
          </Link>
        </>
      ) : (
        <>
          <Link href={DASHBOARD_ADM_PAGE}>
            <S.ItemMenu>
              <BsFillPersonFill size={30} />
              <span>Minha Conta</span>
            </S.ItemMenu>
          </Link>
          <Link href={PARTNER_REGISTRATION_PAGE}>
            <S.ItemMenu>
              <BsPeopleFill size={30} />
              <span>Parceiros Quantum</span>
            </S.ItemMenu>
          </Link>
          <Link href={DASHBOARD_ADM_PAGE}>
            <S.ItemMenu>
              <MdPeopleAlt size={30} />
              <span>Usuários Quantum</span>
            </S.ItemMenu>
          </Link>
          <Link href={MANAGE_BANNER_PAGE}>
            <S.ItemMenu>
              <FaUpload size={30} />
              <span>Gerenciar Banner</span>
            </S.ItemMenu>
          </Link>
          <Link href={CANCELLATION_REQUEST_PAGE}>
            <S.ItemMenu>
              <AiFillFile size={30} />
              <span>Solicitações de Cancelamento</span>
            </S.ItemMenu>
          </Link>
        </>
      )}
      <S.LogOutButton onClick={signOut}>
        <span>Sair</span>
        <FiLogOut size={30} />
      </S.LogOutButton>
    </S.SideBarMobileContainer>
  );
}
