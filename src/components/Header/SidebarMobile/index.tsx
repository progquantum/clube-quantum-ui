import { HiMenu } from 'react-icons/hi';

import { useEffect, useRef, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import {
  BsCreditCard2BackFill,
  BsFillPersonFill,
  BsPeopleFill,
} from 'react-icons/bs';

import decode from 'jwt-decode';
import { FaDollarSign, FaShoppingBag, FaUpload } from 'react-icons/fa';

import { AiFillFile } from 'react-icons/ai';
import { MdPeopleAlt } from 'react-icons/md';
import { useTheme } from 'styled-components';

import { parseCookies } from 'nookies';

import {
  DASHBOARD_PAGE,
  DASHBOARD_POS_PAGE,
  MANAGE_PAYMENT_PAGE,
  MARKETPLACE_PAGE,
  MY_CONTRACTS_PAGE,
  MY_FRIENDS_PAGE,
  MY_STATEMENTS_PAGE,
  CANCELLATION_REQUEST_PAGE,
  DASHBOARD_ADM_PAGE,
  MANAGE_BANNER_PAGE,
  PARTNER_REGISTRATION_PAGE,
} from 'constants/routesPath';

import { useAuthDispatch } from 'contexts/auth/AuthContext';

import { TOKEN_STORAGE_KEY } from 'constants/storage';

import { TokenPayload } from 'shared/types/apiSchema';

import { roles } from 'constants/roles';

import * as S from './styles';
import { DROP_DOWN_ANIMATION } from '../animation';

const normalUserLinks = [
  {
    name: 'Minha Conta',
    icon: <BsFillPersonFill size={20} />,
    href: DASHBOARD_PAGE,
  },
  {
    name: 'Extratos',
    icon: <FaDollarSign size={20} />,
    href: MY_STATEMENTS_PAGE,
  },
  {
    name: 'Meus Amigos',
    icon: <MdPeopleAlt size={20} />,
    href: MY_FRIENDS_PAGE,
  },
  {
    name: 'Dados de pagamento',
    icon: <BsCreditCard2BackFill size={20} />,
    href: MANAGE_PAYMENT_PAGE,
  },
  {
    name: 'Meus contratos',
    icon: <AiFillFile size={20} />,
    href: MY_CONTRACTS_PAGE,
  },
  {
    name: 'Minhas vendas',
    icon: <FaShoppingBag size={20} />,
    href: DASHBOARD_POS_PAGE,
  },
];

const adminUserLinks = [
  {
    name: 'Minha Conta',
    icon: <BsFillPersonFill size={20} />,
    href: DASHBOARD_ADM_PAGE,
  },
  {
    name: 'Parceiros Quantum',
    icon: <BsPeopleFill size={20} />,
    href: PARTNER_REGISTRATION_PAGE,
  },
  {
    name: 'Usuários Quantum',
    icon: <MdPeopleAlt size={20} />,
    href: DASHBOARD_ADM_PAGE,
  },
  {
    name: 'Gerenciar Banner',
    icon: <FaUpload size={20} />,
    href: MANAGE_BANNER_PAGE,
  },
  {
    name: 'Solicitações de Cancelamento',
    icon: <AiFillFile size={20} />,
    href: CANCELLATION_REQUEST_PAGE,
  },
];

export function SideBarMobile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { colors } = useTheme();
  const animatedContainerRef = useRef<HTMLDivElement>(null);
  const { signOut } = useAuthDispatch();
  const handleSidebarState = () => setIsSidebarOpen(prevState => !prevState);
  const cookies = parseCookies();

  const token = cookies[TOKEN_STORAGE_KEY];

  const { user_role } = decode<TokenPayload>(token);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen]);

  const links = user_role === roles.admin.id ? adminUserLinks : normalUserLinks;

  return (
    <S.Container>
      <HiMenu size={40} onClick={handleSidebarState} color={colors.blue} />
      {isSidebarOpen && (
        <S.Backdrop>
          <S.AnimatedContainer
            variants={DROP_DOWN_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={animatedContainerRef}
          >
            <S.SideBarMobileContainer>
              <S.MarketplaceLink href={MARKETPLACE_PAGE}>
                <span>Acessar o Marketplace</span>
              </S.MarketplaceLink>
              {links.map(link => (
                <S.MenuItem href={link.href}>
                  {link.icon} <p>{link.name}</p>
                </S.MenuItem>
              ))}
              <S.SignOutButton onClick={signOut}>
                <p>Sair</p>
                <FiLogOut size={20} />
              </S.SignOutButton>
            </S.SideBarMobileContainer>
          </S.AnimatedContainer>
        </S.Backdrop>
      )}
    </S.Container>
  );
}
