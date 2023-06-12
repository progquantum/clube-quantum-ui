import { HiMenu } from 'react-icons/hi';

import { useEffect, useRef, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';

import { useTheme } from 'styled-components';

import { useAuthDispatch } from 'contexts/auth/AuthContext';

import { DROP_DOWN_ANIMATION } from 'components/Header/animation';

import { MARKETPLACE_PAGE, SIGN_IN_PAGE } from 'constants/routesPath';

import * as S from './styles';
import { AuthLink, GuestLink, SidebarMobileProps } from './types';

export function SideBarMobile({ isAuthed, links }: SidebarMobileProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { colors } = useTheme();
  const animatedContainerRef = useRef<HTMLDivElement>(null);
  const { signOut } = useAuthDispatch();
  const handleSidebarState = () => setIsSidebarOpen(prevState => !prevState);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen]);

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
              {isAuthed && (
                <>
                  <S.StyledButton href={MARKETPLACE_PAGE}>
                    <span>Acessar o Marketplace</span>
                  </S.StyledButton>
                  {links.map((link: AuthLink) => (
                    <S.MenuItem href={link.href} key={link.href}>
                      {link.icon} <p>{link.title}</p>
                    </S.MenuItem>
                  ))}
                  <S.SignOutButton onClick={signOut}>
                    <p>Sair</p>
                    <FiLogOut size={20} />
                  </S.SignOutButton>
                </>
              )}
              {!isAuthed && (
                <>
                  <S.StyledButton href={SIGN_IN_PAGE}>
                    <span>Fazer Login</span>
                  </S.StyledButton>
                  {links.map((link: GuestLink) => (
                    <S.MenuItem href={link.href} key={link.href}>
                      <p>{link.title}</p>
                    </S.MenuItem>
                  ))}
                </>
              )}
            </S.SideBarMobileContainer>
          </S.AnimatedContainer>
        </S.Backdrop>
      )}
    </S.Container>
  );
}
