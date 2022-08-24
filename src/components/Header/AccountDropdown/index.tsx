import { useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FiLogOut, FiUser, FiUsers, FiUserCheck } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { FaShoppingBag } from 'react-icons/fa'
import { MdAssignmentInd, MdAssignmentTurnedIn } from 'react-icons/md'
import { IoMdDocument } from 'react-icons/io'
import Link from 'next/link'

import { useAuthDispatch, useAuthState } from 'contexts/auth/AuthContext'
import { DASHBOARD_PAGE } from 'constants/routesPath'

import { DROP_DOWN_ANIMATION } from './animations'
import * as S from './styles'

export function AccountDropdown () {
  const { signOut } = useAuthDispatch()
  const { user } = useAuthState()

  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

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
            initial='hidden'
            animate='visible'
            exit='hidden'
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
                <FaShoppingBag />
                Pedidos
              </S.NavButton>

              <S.NavButton>
                <MdAssignmentInd />
                Planos
              </S.NavButton>

              <S.NavButton>
                <MdAssignmentTurnedIn />
                Licenças
              </S.NavButton>

              <S.NavButton>
                <IoMdDocument />
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
  )
}
