import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiLogOut, FiUser, FiUsers, FiUserCheck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import {
  MdOutlineAssignmentInd,
  MdOutlineAssignmentTurnedIn,
} from 'react-icons/md';
import { HiOutlineDocument } from 'react-icons/hi';
import Link from 'next/link';
import { BiShoppingBag } from 'react-icons/bi';

import { useAuthDispatch, useAuthState } from 'contexts/auth/AuthContext';
import { DASHBOARD_PAGE, SUBSCRIPTIONS_PAGE } from 'constants/routesPath';

import { DROP_DOWN_ANIMATION } from './animations';
import * as S from './styles';

export function AccountDropdown() {
  const { signOut } = useAuthDispatch();
  const { user } = useAuthState();

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <S.Container onClick={handleDropdownVisibility}>
      <S.AccountDropdown
        src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=F5F6FA&color=0E5AE4&name=${user.name}`}
        alt={`Conta de ${user.name}`}
      />

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
                  <FiUser />
                  Perfil
                </S.NavButton>
              </Link>

              <S.NavButton>
                <FiUserCheck />
                Cadastro
              </S.NavButton>

              <S.NavButton>
                <BsCurrencyDollar />
                Extratos
              </S.NavButton>

              <S.NavButton>
                <FiUsers />
                Amigos
              </S.NavButton>

              <S.NavButton>
                <BiShoppingBag />
                Pedidos
              </S.NavButton>
              <Link href={SUBSCRIPTIONS_PAGE}>
                <S.NavButton>
                  <MdOutlineAssignmentInd />
                  Planos
                </S.NavButton>
              </Link>

              <S.NavButton>
                <MdOutlineAssignmentTurnedIn />
                Licenças
              </S.NavButton>

              <S.NavButton>
                <HiOutlineDocument />
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
