import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiLogOut } from 'react-icons/fi';
import Link from 'next/link';

import {
  RiDraftLine,
  RiEditBoxLine,
  RiInboxArchiveLine,
  RiLock2Line,
  RiStackLine,
  RiUser3Line,
  RiUserStarLine,
  RiBarChartBoxLine,
} from 'react-icons/ri';

import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { DASHBOARD_PAGE, SUBSCRIPTIONS_PAGE } from 'constants/routesPath';

import { Avatar } from 'components/Avatar';

import { DROP_DOWN_ANIMATION } from './animations';
import * as S from './styles';

export function AccountDropdown() {
  const { signOut } = useAuthDispatch();

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <S.Container onClick={handleDropdownVisibility}>
      <Avatar width="48" height="48" />
      <AnimatePresence>
        {isDropdownVisible && (
          <S.AnimatedDropdown
            variants={DROP_DOWN_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={dropdownRef}
          >
            <ul>
              <Link href={DASHBOARD_PAGE}>
                <S.NavButton>
                  <RiUser3Line />
                  Perfil
                </S.NavButton>
              </Link>

              <S.NavButton>
                <RiEditBoxLine />
                Cadastro
              </S.NavButton>

              <S.NavButton>
                <RiBarChartBoxLine />
                Extratos
              </S.NavButton>

              <S.NavButton>
                <RiUserStarLine />
                Amigos
              </S.NavButton>

              <S.NavButton>
                <RiInboxArchiveLine />
                Pedidos
              </S.NavButton>
              <Link href={SUBSCRIPTIONS_PAGE}>
                <S.NavButton>
                  <RiStackLine />
                  Planos
                </S.NavButton>
              </Link>

              <S.NavButton>
                <RiDraftLine />
                Licenças
              </S.NavButton>

              <S.NavButton>
                <RiLock2Line />
                Privacidade
              </S.NavButton>

              <S.NavButton onClick={signOut}>
                <FiLogOut />
                Sair
              </S.NavButton>
            </ul>
          </S.AnimatedDropdown>
        )}
      </AnimatePresence>
    </S.Container>
  );
}
