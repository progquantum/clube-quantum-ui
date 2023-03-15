import { FiLogOut } from 'react-icons/fi';
import {
  BsCreditCard2BackFill,
  BsFillPersonFill,
  BsPeopleFill,
} from 'react-icons/bs';

import { HiMenuAlt1 } from 'react-icons/hi';

import { FaDollarSign, FaShoppingBag } from 'react-icons/fa';

import { AiFillFile } from 'react-icons/ai';

import { useState } from 'react';

import Link from 'next/link';

import {
  DASHBOARD_PAGE,
  MANAGE_PAYMENT_PAGE,
  MY_CONTRACTS_PAGE,
  MY_FRIENDS_PAGE,
  MY_STATEMENTS_PAGE,
} from 'constants/routesPath';
import { useAuthDispatch } from 'contexts/auth/AuthContext';

import { Skeleton } from './Skeleton';
import { SideBarProps } from './types';
import * as S from './styles';

export function SideBar({ loading }: SideBarProps) {
  const { signOut } = useAuthDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  if (loading) return <Skeleton />;

  return (
    <S.Container isExpanded={isExpanded}>
      <S.ToggleButtonBox isExpanded={isExpanded}>
        <HiMenuAlt1 onClick={() => setIsExpanded(prevState => !prevState)} />
      </S.ToggleButtonBox>
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
        <S.NavButton isExpanded={isExpanded}>
          <S.IconBox isExpanded={isExpanded}>
            <AiFillFile />
          </S.IconBox>
          <S.TitleBox>Meus Contratos</S.TitleBox>
        </S.NavButton>
      </Link>
      <Link href="/">
        <S.NavButton isExpanded={isExpanded}>
          <S.IconBox isExpanded={isExpanded}>
            <FaShoppingBag />
          </S.IconBox>
          <S.TitleBox>Minhas Vendas</S.TitleBox>
        </S.NavButton>
      </Link>
      <S.SignOut onClick={signOut} isExpanded={isExpanded}>
        <S.IconBox isExpanded={isExpanded}>
          <FiLogOut />
        </S.IconBox>
        <S.TitleBox>Sair</S.TitleBox>
      </S.SignOut>
    </S.Container>
  );
}
