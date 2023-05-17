import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';

import { WORK_WITH_US_PAGE, SIGN_IN_PAGE } from 'constants/routesPath';

import * as S from './styles';

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <S.BoxContainer>
      <S.Container>
        <S.LogoContainer as="a" href="/">
          <Image
            width={50}
            height={67}
            src="/images/quantum-logo.svg"
            alt="Club Quantum logo"
          />
        </S.LogoContainer>

        {!menuIsOpen ? (
          <S.Nav>
            <Link href="/">Saiba mais</Link>
            <Link href="/">Seja um parceiro</Link>
            <Link href={WORK_WITH_US_PAGE}>Trabalhe Conosco</Link>

            <Link href={SIGN_IN_PAGE}>
              <S.LoginButton data-cy="signin-button">Fazer Login</S.LoginButton>
            </Link>
          </S.Nav>
        ) : (
          <>
            <S.MenuMobile>
              <Link href="/">Saiba mais</Link>
              <S.Line />
              <Link href="/">Seja um parceiro</Link>
              <S.Line />
              <Link href={WORK_WITH_US_PAGE}>Trabalhe Conosco</Link>
              <S.Line />

              <Link href={SIGN_IN_PAGE}>
                <S.LoginButtonMobile data-cy="signin">
                  Fazer Login
                </S.LoginButtonMobile>
              </Link>
            </S.MenuMobile>
            <S.Overlay onClick={handleMenuOpen} />
          </>
        )}

        <S.MenuIconContainer>
          <Image
            width={28}
            height={20}
            src={
              !menuIsOpen ? '/images/open-menu.svg' : '/images/close-menu.svg'
            }
            alt=""
            onClick={handleMenuOpen}
          />
        </S.MenuIconContainer>
      </S.Container>
    </S.BoxContainer>
  );
}
