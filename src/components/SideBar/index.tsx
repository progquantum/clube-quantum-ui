import Link from 'next/link';
import { useState } from 'react';
import { BiUserPin } from 'react-icons/bi';
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiDraftLine,
  RiHome6Line,
  RiLock2Line,
  // RiShoppingBasket2Line,
  RiUserStarLine,
} from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';

import { useRouter } from 'next/router';

import {
  DASHBOARD_PAGE,
  UPDATE_USER_ACCOUNT_PAGE,
  INVITE_FRIENDS_PAGE,
  SUBSCRIPTIONS_PAGE,
  MANAGE_PAYMENT_PAGE,
  MY_FRIENDS_PAGE,
} from 'constants/routesPath';
import { useAuthDispatch } from 'contexts/auth/AuthContext';

import { Avatar } from 'components/Avatar';

import { useUserProfile } from 'hooks/user/useUserProfile';

import { Skeleton } from './Skeleton';
import { SideBarProps } from './types';
import * as S from './styles';

export function SideBar({ loading }: SideBarProps) {
  const { signOut } = useAuthDispatch();
  const { data: user } = useUserProfile();
  const { pathname } = useRouter();
  const myAccountRoutes = [
    UPDATE_USER_ACCOUNT_PAGE,
    MANAGE_PAYMENT_PAGE,
    MY_FRIENDS_PAGE,
  ];

  const [showMyAccount, setShowMyAccount] = useState<boolean>(false);
  // const [showMarketplace, setShowMarketplace] = useState<boolean>(false);

  if (loading) return <Skeleton />;

  return (
    <S.Container>
      <Link href={DASHBOARD_PAGE}>
        <S.NavButton activePath={pathname === DASHBOARD_PAGE}>
          <div>
            <RiHome6Line />
            Dashboard
          </div>
        </S.NavButton>
      </Link>

      <S.NavButton
        activePath={!!myAccountRoutes.includes(pathname)}
        onClick={() => {
          setShowMyAccount(prevState => !prevState);
        }}
      >
        <div>
          <BiUserPin />
          Minha Conta
        </div>
        {showMyAccount ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      </S.NavButton>
      {showMyAccount && (
        <S.SubMenu>
          <Link href={UPDATE_USER_ACCOUNT_PAGE}>
            <S.SubMenuLink activePath={pathname === UPDATE_USER_ACCOUNT_PAGE}>
              Atualizar Cadastro
            </S.SubMenuLink>
          </Link>
          <Link href={SUBSCRIPTIONS_PAGE}>
            <S.SubMenuLink activePath={pathname === SUBSCRIPTIONS_PAGE}>
              Planos
            </S.SubMenuLink>
          </Link>
          <Link href={MANAGE_PAYMENT_PAGE}>
            <S.SubMenuLink activePath={pathname === MANAGE_PAYMENT_PAGE}>
              Dados de Pagamento
            </S.SubMenuLink>
          </Link>
          <Link href={MY_FRIENDS_PAGE}>
            <S.SubMenuLink activePath={pathname === MY_FRIENDS_PAGE}>
              Meus Amigos
            </S.SubMenuLink>
          </Link>
          <S.SubMenuLink>Extratos</S.SubMenuLink>
        </S.SubMenu>
      )}

      {/* <S.NavButton */}
      {/*   onClick={() => { */}
      {/*     setShowMarketplace(prevState => !prevState); */}
      {/*   }} */}
      {/* > */}
      {/*   <div> */}
      {/*     <RiShoppingBasket2Line /> */}
      {/*     Marketplace */}
      {/*   </div> */}
      {/*   {showMarketplace ? <RiArrowUpSLine /> : <RiArrowDownSLine />} */}
      {/* </S.NavButton> */}
      {/* {showMarketplace && ( */}
      {/*   <S.SubMenu> */}
      {/*     <S.SubMenuLink>Meus Pedidos</S.SubMenuLink> */}
      {/*     <S.SubMenuLink>Marketplace</S.SubMenuLink> */}
      {/*   </S.SubMenu> */}
      {/* )} */}
      <Link href={INVITE_FRIENDS_PAGE}>
        <S.NavButton>
          <div>
            <RiUserStarLine />
            Convidar Amigos
          </div>
        </S.NavButton>
      </Link>

      <S.NavButton>
        <div>
          <RiDraftLine />
          Licenças
        </div>
      </S.NavButton>

      <S.NavButton>
        <div>
          <RiLock2Line /> Privacidade
        </div>
      </S.NavButton>

      <S.User>
        <Avatar width="35" height="35" />
        <div>
          <strong>{user?.name}</strong>
          <p>{user?.email}</p>
        </div>
      </S.User>

      <S.SignOut onClick={signOut}>
        Sair
        <FiLogOut />
      </S.SignOut>
    </S.Container>
  );
}
