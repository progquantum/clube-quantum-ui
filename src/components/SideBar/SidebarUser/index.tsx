import Link from 'next/link';
import { AiFillFile } from 'react-icons/ai';
import {
  BsFillPersonFill,
  BsPeopleFill,
  BsCreditCard2BackFill,
} from 'react-icons/bs';
import { FaDollarSign, FaShoppingBag } from 'react-icons/fa';

import {
  DASHBOARD_PAGE,
  MY_STATEMENTS_PAGE,
  MY_FRIENDS_PAGE,
  MANAGE_PAYMENT_PAGE,
  MY_CONTRACTS_PAGE,
  DASHBOARD_POS_PAGE,
} from 'constants/routesPath';

import { SidebarUserProps } from './types';
import * as S from '../styles';

export function SidebarUser({
  isExpanded,
  hasEstablishment,
}: SidebarUserProps) {
  return (
    <>
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
      <S.EstablishmentContainer
        isExpanded={isExpanded}
        hasEstablishment={hasEstablishment}
      >
        <Link href={hasEstablishment ? DASHBOARD_POS_PAGE : {}}>
          <S.NavButton isExpanded={isExpanded}>
            <S.IconBox isExpanded={isExpanded}>
              <FaShoppingBag />
            </S.IconBox>
            <S.TitleBox>Minhas Vendas</S.TitleBox>
          </S.NavButton>
        </Link>
      </S.EstablishmentContainer>
    </>
  );
}
