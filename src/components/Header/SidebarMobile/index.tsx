import { HiMenu } from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import { FaDollarSign } from 'react-icons/fa';

import { useAuthDispatch } from 'contexts/auth/AuthContext';
import { DROP_DOWN_ANIMATION } from 'components/Header/animation';
import { MARKETPLACE_PAGE, SIGN_IN_PAGE } from 'constants/routesPath';
import { useMe } from 'hooks/me/useMe';

import { AccordionLink } from 'components/AccordionLink';

import * as S from './styles';
import { AuthLink, GuestLink, SidebarMobileProps } from './types';

export function SideBarMobile({ isAuthed, links }: SidebarMobileProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { colors } = useTheme();
  const animatedContainerRef = useRef<HTMLDivElement>(null);
  const { signOut } = useAuthDispatch();
  const handleSidebarState = () => setIsSidebarOpen(prevState => !prevState);
  const { data } = useMe();

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
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
                  {links.map((link: AuthLink) => {
                    if (link.title === 'Minhas vendas') {
                      return (
                        <S.EstablishmentContainer
                          hasEstablishment={data?.has_establishment}
                          key={`container${link.title}-${link.href}`}
                        >
                          <S.MenuItem
                            href={data?.has_establishment ? link.href : {}}
                            key={`item-${link.title}-${link.href}-2`}
                          >
                            {link.icon} <p>{link.title}</p>
                          </S.MenuItem>
                        </S.EstablishmentContainer>
                      );
                    }

                    if (link.title === 'Relatórios') {
                      return (
                        <AccordionLink title="Relatórios" isMobile>
                          <S.MenuItem
                            href={link.href}
                            key={`item-${link.title}-${link.href}`}
                          >
                            <span
                              style={{
                                textAlign: 'right',
                                width: '100%',
                                marginRight: '10px',
                                fontSize: '12px',
                              }}
                            >
                              Lista de Espera Cartão de Crédito
                            </span>
                          </S.MenuItem>
                        </AccordionLink>
                      );
                    }

                    if (link.title === 'Financeiro') {
                      return (
                        <AccordionLink
                          title="Financeiro"
                          icon={FaDollarSign}
                          isMobile
                        >
                          <S.MenuItem
                            href={link.href}
                            key={`item-${link.title}-${link.href}`}
                          >
                            <span
                              style={{
                                textAlign: 'right',
                                width: '100%',
                                marginRight: '10px',
                                fontSize: '12px',
                              }}
                            >
                              Pagamentos Afiliados
                            </span>
                          </S.MenuItem>
                        </AccordionLink>
                      );
                    }

                    return (
                      <S.MenuItem
                        href={link.href}
                        key={`item-${link.title}-${link.href}`}
                      >
                        {link.icon} <p>{link.title}</p>
                      </S.MenuItem>
                    );
                  })}
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
                    <S.MenuItem
                      href={link.href}
                      key={`item-${link.title}-${link.href}`}
                    >
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
