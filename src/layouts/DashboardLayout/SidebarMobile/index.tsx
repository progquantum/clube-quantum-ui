import { sign } from 'crypto';

import { FiLogOut } from 'react-icons/fi';
import {
  BsCreditCard2BackFill,
  BsFillPersonFill,
  BsPeopleFill,
} from 'react-icons/bs';
import { FaDollarSign, FaShoppingBag } from 'react-icons/fa';
import { AiFillFile, AiFillCloseCircle } from 'react-icons/ai';

import Link from 'next/link';

import { useAuthDispatch } from 'contexts/auth/AuthContext';

import {
  MANAGE_PAYMENT_PAGE,
  MY_FRIENDS_PAGE,
  UPDATE_USER_ACCOUNT_PAGE,
} from 'constants/routesPath';

import * as S from './styles';

export function SideBarMobile({ closeMenu }: { closeMenu: () => void }) {
  const { signOut } = useAuthDispatch();

  return (
    <S.SideBarMobileContainer>
      <S.CloseButton onClick={closeMenu}>
        <AiFillCloseCircle size={40} />
      </S.CloseButton>
      <Link href={UPDATE_USER_ACCOUNT_PAGE}>
        <S.ItemMenu>
          <BsFillPersonFill size={30} />
          <span>Minha Conta</span>
        </S.ItemMenu>
      </Link>
      <Link href="/">
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
      <Link href="/">
        <S.ItemMenu>
          <AiFillFile size={30} />
          <span>Meus Contratos</span>
        </S.ItemMenu>
      </Link>
      <Link href="/">
        <S.ItemMenu>
          <FaShoppingBag size={30} />
          <span>Minhas vendas</span>
        </S.ItemMenu>
      </Link>
      <S.LogOutButton onClick={signOut}>
        <span>Sair</span>
        <FiLogOut size={30} />
      </S.LogOutButton>
    </S.SideBarMobileContainer>
  );
}
