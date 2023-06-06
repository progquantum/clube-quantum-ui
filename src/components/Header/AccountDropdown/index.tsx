import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaUserEdit } from 'react-icons/fa';

import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { DASHBOARD_PAGE, UPDATE_USER_ACCOUNT_PAGE } from 'constants/routesPath';

import { Avatar } from 'components/Avatar';

import * as S from './styles';
import { DROP_DOWN_ANIMATION } from '../animation';

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
            <Link href={DASHBOARD_PAGE}>
              <S.NavButton>
                <BsFillPersonFill size={24} />
                <span>Minha Conta</span>
              </S.NavButton>
            </Link>
            <Link href={UPDATE_USER_ACCOUNT_PAGE}>
              <S.NavButton>
                <FaUserEdit size={24} />
                <span>Atualizar Cadastro</span>
              </S.NavButton>
            </Link>
            <S.SignOutButton onClick={signOut}>
              <FiLogOut />
              <span>Sair</span>
            </S.SignOutButton>
          </S.AnimatedDropdown>
        )}
      </AnimatePresence>
    </S.Container>
  );
}
