import { useState, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FiLogOut, FiUser } from 'react-icons/fi'
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
      <img
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

              <S.NavButton onClick={signOut}>
                <FiLogOut />
                Sair da Conta
              </S.NavButton>
            </ul>
          </S.AnimatedDropdown>
        )}
      </AnimatePresence>
    </S.Container>
  )
}
